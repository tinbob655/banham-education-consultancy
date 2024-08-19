import React, {useEffect, useState} from 'react';
import {getDocs, query, collection, orderBy, getFirestore} from 'firebase/firestore';

export default function Blog() {

    const [blogHTML, setBlogHTML] = useState(<></>);

    useEffect(() => {
        const firestore = getFirestore();
        let tempBlog = [];
        getDocs(query(collection(firestore, 'blogs'), orderBy('dateEdited', 'desc'))).then((docs) => {
            docs.forEach((doc) => {

                console.log(doc, doc.data().content)

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
            tempBlog.forEach((blog) => {
                if (tempBlog.indexOf(blog) % 2 === 0) {
                    tempBlogHTML.push(
                        <React.Fragment>
                            <p className="alignLeft">
                                {blog.content}
                            </p>
                            <p className="alignRight">
                                -Edited on {blog.dateEdited}
                            </p>
                        </React.Fragment>
                    )  ;              
                }
                else {
                    tempBlogHTML.push(
                        <React.Fragment>
                            <p className="alignRight">
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

            //return the html
            setBlogHTML(tempBlogHTML);
        });
    }, []);

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                Our blog
            </h1>
            <p className="noVerticalSpacing">
                Keep up to date
            </p>

            <div className="dividerLine"></div>

            {/*blog section*/}
            <div style={{maxWidth: '75%'}}>
                <h2>
                    Read all about it
                </h2>
                {blogHTML}
            </div>
        </React.Fragment>
    );
};