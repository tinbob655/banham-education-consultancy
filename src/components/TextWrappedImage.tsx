import React from 'react';

interface Params {
    imageRight?: boolean;
    imageSrc: string;
    imageStyles?: React.CSSProperties;
    imageClassName?: string;
    imageLinkInfo?: ImageLinkInfo
    alt: string;

    children: React.ReactNode;
}

interface ImageLinkInfo {
    destination: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TextWrappedImage({imageRight, imageSrc, imageStyles, imageClassName, imageLinkInfo, alt, children}:Params):React.ReactElement {

    const imageHTML:React.ReactElement = <img
        src={imageSrc}
        style={{float: imageRight ? 'right' : 'left', ...imageStyles}}
        alt={alt}
        className={imageClassName}
    />

    return (
        <React.Fragment>

            {/*image*/}
            {imageLinkInfo ? (
                <a
                    href={imageLinkInfo.destination}
                    className={imageLinkInfo.className}
                    style={imageLinkInfo.style}
                    target={"_blank"}>
                    {imageHTML}
                </a>
            ) : (<>{imageHTML}</>)}

            {/*text*/}
            {children}
        </React.Fragment>
    )
}