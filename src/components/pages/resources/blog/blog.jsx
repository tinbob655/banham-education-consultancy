import React, {useEffect, useState} from 'react';
import SmartImage from '../../../multiPage/smartImage.jsx';
import {getDoc, doc, getFirestore} from 'firebase/firestore';

export default function Blog() {

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const firestore = getFirestore();
        getDoc(doc(firestore, 'blog', 'blog')).then((doc) => {

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
            setBlog({
                content: doc.data().content,
                dateEdited: formattedDate,
            });
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imageURL="BLOG_IMAGE" imageClasses="mainImage" />
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Read all about it
                                </h2>
                                <p className="alignLeft" style={{marginLeft: '15px'}}>
                                    {blog ? blog.content : 'No blog available'}
                                </p>
                                <p className="alignRight noVerticalSpacing">
                                    {blog ? `-${blog.dateEdited}` : ''}
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};