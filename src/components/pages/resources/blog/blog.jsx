import React, {useEffect, useState} from 'react';
import {getDocs, query, collection, orderBy, getFirestore} from 'firebase/firestore';
import { useIsMobile } from '../../../../context/mobileContext';

export default function Blog() {

    const isMobile = useIsMobile();

    function getInnerBlogContent(separatedBlogContent) {
        let innerHTML = [];
        separatedBlogContent.forEach((section) => {
            if (section.includes('www.') || section.includes('https://') || section.includes('http://')) {

                //this is a link section
                innerHTML.push(
                    <a href={section} target='_blank' style={{textDecoration: 'underline'}}>{section}</a>
                )
            }
            else {

                //this is a paragraph section
                innerHTML.push(section)
            };
        });

        return innerHTML;
    };

    const [blogHTML, setBlogHTML] = useState(<></>);

    useEffect(() => {
        const firestore = getFirestore();
        let tempBlog = [];
        getDocs(query(collection(firestore, 'blogs'), orderBy('dateEdited', 'desc'))).then((docs) => {
            docs.forEach((doc) => {

                //get a formatted version of the date of editing
                const day = new Date(doc.data().dateEdited.seconds * 1000);
                let datePrefix = '';
                const dayNumber = day.getDate();
                if (dayNumber === 1) {
                    datePrefix = 'st';
                }
                else  if (dayNumber === 2) {
                    datePrefix = 'nd';
                }
                else  if (dayNumber === 3) {
                    datePrefix = 'rd';
                }
                else {
                    datePrefix = 'th';
                };
    
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const formattedDate = `${day.getDate()}${datePrefix} of ${months[day.getMonth()]} ${day.getFullYear()}`;
    
                //save the blog to state
                tempBlog.push({
                    content: doc.data().content,
                    dateEdited: formattedDate,
                });
            });

            //after getting the data, format it into repeatable markup
            let tempBlogHTML = [];

            //desktop blog section
            if (!isMobile) {
                tempBlog.forEach((blog) => {
                    
                    //separate the blog into sections of paragraphs and links
                    const separatedBlog = blog.content.split('#');
                    
                    if (tempBlog.indexOf(blog) % 2 === 0) {
    
                        tempBlogHTML.push(
                            <p style={{whiteSpace: 'pre-wrap', fontSize: '20px'}} className="alignLeft">
                                {getInnerBlogContent(separatedBlog)}
                            </p>
                        )
    
                        tempBlogHTML.push(
                            <React.Fragment>
                                <p className="alignRight">
                                    -Edited on {blog.dateEdited}
                                </p>
                            </React.Fragment>
                        )  ;              
                    }
                    else {
                        tempBlogHTML.push(
                            <React.Fragment>
                                <p className="alignRight" style={{whiteSpace: 'pre-warp'}}>
                                    {blog.content}
                                </p>
                                <p className="alignLeft">
                                    -Edited on {blog.dateEdited}
                                </p>
                            </React.Fragment>
                        );
                    };
    
                    //if this is not the last blog, add a soft divider line between blogs
                    if (tempBlog.indexOf(blog)!== tempBlog.length - 1) {
                        tempBlogHTML.push(
                            <React.Fragment>
                                <div className="dividerLine weakDivider"></div>
                            </React.Fragment>
                        );
                    };
                });
            }

            //mobile blog section
            else {
                tempBlog.forEach((blog) => {

                    //separate the blog into sections of paragraphs and links
                    const separatedBlog = blog.content.split('#');

                    tempBlogHTML.push(
                        <React.Fragment>
                            <p style={{whiteSpace: 'pre-wrap', fontSize: '15px'}} className="alignLeft">
                                {getInnerBlogContent(separatedBlog)}
                            </p>
                            <p className="alignRight" style={{marginTop:'5px'}}>
                                -Edited on {blog.dateEdited}
                            </p>
                        </React.Fragment>
                    );

                    //if this is not the last blog, add a soft divider line below
                    if (tempBlog.indexOf(blog) !== tempBlog.length -1) {
                        tempBlogHTML.push(
                            <div className="dividerLine weakDivider"></div>
                        );
                    };
                });
            };

            //return the html
            setBlogHTML(tempBlogHTML);
        });
    }, [isMobile]);

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                Our blog
            </h1>
            <p className="noVerticalSpacing">
                Ideas, tips and resources
            </p>

            <div className="dividerLine"></div>

            {/*blog section*/}
            <div style={isMobile ? {width: '100%'} : {maxWidth: '60%'}}>
                <h2>
                    Read all about it
                </h2>
                {blogHTML}
            </div>
        </React.Fragment>
    );
};