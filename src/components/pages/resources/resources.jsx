import React, {useState, useEffect} from 'react';
import Blog from './blog/blog.jsx';
import {getFirestore, getDocs, collection, orderBy, query} from 'firebase/firestore';
import SmartImage from '../../multiPage/smartImage.jsx';
import {useIsMobile} from '../../../context/mobileContext.jsx';

export default function Resources() {

    const [links, setLinks] = useState(null);
    const [linksHTML, setLinksHTML] = useState(<></>);

    const isMobile = useIsMobile();

    //fetches the resources form firestore
    useEffect(() => {
        const firestore = getFirestore();
        let tempLinks = [];
        getDocs(query(collection(firestore, 'links'), orderBy('dateAdded', 'asc'))).then((docs) => {
            docs.forEach((doc) => {
                tempLinks.push(doc.data());
            });

            setLinks(tempLinks);
        });
    }, []);
    
    //after the resources are fetched from firestore, generates markup
    useEffect(() => {

        //only fire if there are supplied links
        if (links && links.length > 0) {
            let tempLinksHTML = [];

            //desktop links
            if (!isMobile) {
                links.forEach((link) => {
                    if (links.indexOf(link) % 2 === 0) {
                        
                        //text on left, image on right
                        tempLinksHTML.push(
                            <React.Fragment>
                                <a href={link.href} target="_blank">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td style={{width: '60%'}}>
                                                    <h2 className='alignLeft' style={{fontSize: '35px'}}>
                                                        -{link.name}
                                                    </h2>
                                                    <p className='alignLeft' style={{whiteSpace: 'pre-wrap'}}>
                                                        {link.description}
                                                    </p>
                                                </td>
                                                <td>
                                                    <SmartImage imageClasses="mainImage" imageURL={link.imageURL} />
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </a>
                            </React.Fragment>
                        );
                    }
                    else {
    
                        //image on left, text on right
                        tempLinksHTML.push(
                            <React.Fragment>
                                <a href={link.href} target='_blank'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <SmartImage imageClasses="mainImage" imageURL={link.imageURL} />
                                                </td>
                                                <td style={{width: '60%'}}>
                                                    <h2 className="alignRight" style={{fontSize: '35px'}}>
                                                        -{link.name}
                                                    </h2>
                                                    <p className="alignRight">
                                                        {link.description}
                                                    </p>
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </a>
                            </React.Fragment>
                        );
                    };
    
                    //if this is not the last link, add a weak divider line
                    if (links.indexOf(link) < links.length -1) {
                        tempLinksHTML.push(
                            <React.Fragment>
                                <div className="dividerLine weakDivider"></div>
                            </React.Fragment>
                        );
                    };
                });
            }

            //mobile links
            else {
                links.forEach((link) => {
                    tempLinksHTML.push(
                        <React.Fragment>
                            <div className="dividerLine weakDivider"></div>

                            <h2>
                                {link.name}
                            </h2>
                            <p style={{whiteSpace: 'pre-wrap', fontSize: '15px', marginBottom: '10px'}} className="alignLeft">
                                {link.description}
                            </p>

                            <a href={link.href} target='_blank'>
                                <SmartImage imageClasses="mainImage" imageStyles={{border: 'none', maxHeight: '50vh', width: 'auto', maxWidth: '90%'}} imageURL={link.imageURL} />
                            </a>
                        </React.Fragment>
                    );
                });
            };

            setLinksHTML(tempLinksHTML);
        }
        else {
            setLinksHTML(
                <React.Fragment>
                    <p>
                        No resources available, please check your internet connection and try again
                    </p>
                </React.Fragment>
            )
        }
    }, [links, isMobile]);


    //desktop resources section
    if (!isMobile) {
        return(
            <React.Fragment>
                <Blog/>
    
                <div className="dividerLine"></div>
    
                {/*links section*/}
                <div>
                    <h2 style={{marginBottom: 0}}>
                        Recommended resources
                    </h2>
                    <p>
                        There are many resources which we at Banham Education Consultancy would recommend to all students in order to enrich their studies. These are:
                    </p>
    
                    <div style={{maxWidth: '80%'}}>
                        {linksHTML}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    //mobile resources section
    else {
        return (
            <React.Fragment>
                <Blog/>

                <div className="dividerLine"></div>

                {/*links section*/}
                <div>
                    <h1 style={{marginBottom: 0}}>
                        Recommended resources
                    </h1>
                    <p>
                        There are many resources which we at Banham Education Consultancy would recommend to all students in order to enrich their studies. These are:
                    </p>

                    <div>
                        {linksHTML}
                    </div>
                </div>
            </React.Fragment>
        )
    }
};