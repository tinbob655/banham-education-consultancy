import React from 'react';
import './pageHeader.scss';

interface params {
    title: string;
    subtitle: string;
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
    imageLink?: string;
}

export default function PageHeader({title, subtitle, image, imageAlt, imageCaption, imageLink}: params): React.ReactElement {
    return (
        <div className={"pageHeader"}>
            <div className={"pageHeaderInner"}>

                <div className={"pageHeaderText"}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>

                {/*optional image in the header*/}
                {image && (
                    <figure className={"pageHeaderImage"}>

                        {/*optional link*/}
                        {imageLink ? (
                            <a href={imageLink} target={"_blank"} rel={"noreferrer"}>
                                <img src={image} alt={imageAlt ?? ''} />
                            </a>
                        ) : (
                            <img src={image} alt={imageAlt ?? ''} />
                        )}
                        {imageCaption && (
                            <figcaption>
                                <span className={"tag"}>{imageCaption}</span>
                            </figcaption>
                        )}
                    </figure>
                )}

            </div>
            <div className={"sectionDivider"} />
        </div>
    )
}