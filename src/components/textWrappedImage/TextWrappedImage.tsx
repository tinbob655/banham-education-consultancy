import React from 'react';
import './textWrappedImage.scss';

interface Params {
    imageRight?: boolean;
    imageSrc: string;
    imageStyles?: React.CSSProperties;
    imageClassName?: string;
    imageLinkInfo?: ImageLinkInfo
    alt: string;
    caption?: string;

    children: React.ReactNode;
}

interface ImageLinkInfo {
    destination: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TextWrappedImage({imageRight, imageSrc, imageStyles, imageClassName, imageLinkInfo, alt, caption, children}:Params):React.ReactElement {

    const imageHTML:React.ReactElement =(
        <div style={{float: imageRight ? 'right' : 'left'}} className={"wrappedImageWrapper"}>

            {/*the image itself*/}
             <img
                src={imageSrc}
                style={imageLinkInfo && imageStyles}
                alt={alt}
                className={imageClassName}
            />

            {/*optional caption to the image*/}
            {caption && <div className={"tag"}>{caption}</div>}
        </div>
    )

    return (
        <React.Fragment>

            {/*image*/}
            {imageLinkInfo ? (
                <a
                    href={imageLinkInfo.destination}
                    className={imageLinkInfo.className}
                    style={{float: imageRight ? 'right' : 'left', ...imageLinkInfo.style}}
                    target={"_blank"}>
                    {imageHTML}
                </a>
            ) : (<>{imageHTML}</>)}

            {/*text*/}
            {children}
        </React.Fragment>
    )
}