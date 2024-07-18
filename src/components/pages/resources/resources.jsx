import React, {useState, useEffect} from 'react';
import Blog from './blog/blog.jsx';
import {getFirestore, getDocs, collection} from 'firebase/firestore';
import SmartImage from '../../multiPage/smartImage.jsx';

export default function Resources() {

    const [links, setLinks] = useState(null);
    const [linksHTML, setLinksHTML] = useState(<></>);

    useEffect(() => {
        const firestore = getFirestore();
        let tempLinks = [];
        getDocs(collection(firestore, 'links')).then((docs) => {
            docs.forEach((doc) => {
                tempLinks.push(doc.data());
            });

            setLinks(tempLinks);
        });
    }, []);
    

    useEffect(() => {

        //only fire if there are supplied links
        if (links && links.length > 0) {
            let tempLinksHTML = [];
            links.forEach((link) => {
                tempLinksHTML.push(
                    <React.Fragment>
                        <a href={link.href} target="_blank">
                            <h3 style={{transform: 'unset'}} className={links.indexOf(link) % 2 === 0 ? 'alignLeft' : 'alignRight'}>
                                -{link.name}
                            </h3>
                            <p className={links.indexOf(link) % 2 === 0 ? 'alignLeft' : 'alignRight'}>
                                {link.description}
                            </p>
                        </a>

                        {/*if this is not the last link, add a divider line*/}
                        {links.indexOf(link) < links.length -1 ? <div className="dividerLine" style={{border: '2px solid #e4d7a6'}}></div> : <></>}
                    </React.Fragment>
                );
            });

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
    }, [links]);


    return(
        <React.Fragment>
            <Blog/>

            <div className="dividerLine"></div>

            {/*links section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Resources we recommend
                                </h2>
                                <p>
                                    There are many resources which we at Banham Education Consultancy would recommend to all students in order to enrich their studies. These are:
                                    <br/>
                                    {linksHTML}
                                </p>
                            </td>
                            <td>
                                <SmartImage imageURL='RESOURCES_IMAGE' imageClasses="mainImage" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};