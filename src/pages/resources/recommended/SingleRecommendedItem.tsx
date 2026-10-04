import React from 'react';
import type {RecommendedItem} from "./recommendedItem";
import ParsedResourceText from "../ParsedResourceText.tsx";
import useStorage from "../../../hooks/useStorage.ts";
import TextWrappedImage from "../../../components/textWrappedImage/TextWrappedImage.tsx";

interface Params {
    item: RecommendedItem;
}

export default function SingleRecommendedItem({item}:Params):React.ReactElement {

    //fetch the image
    const {fileURL, loading, error} = useStorage(`recommendedResources/${item.imagePath}`);

    return (
        <article className={"resourceCard"}>
            <div className={"resourceCard__body"}>

                {/*title*/}
                <a href={item.link} target={"_blank"} rel={"sponsored"} className={"resourceCard__title__wrapper"}>
                    <h3 className={"resourceCard__title alignLeft"}>{item.name}</h3>
                </a>

                <div className={"resource__content"}>

                    {/*content & image*/}
                    {loading ?
                        (<p>Loading image...</p>) : (
                            <React.Fragment>
                                {!error && (
                                    <TextWrappedImage
                                        imageSrc={fileURL}
                                        alt={item.name}
                                        imageClassName={"resourceCard__image"}
                                        imageRight
                                        imageLinkInfo={{
                                            style: {cursor: "pointer"},
                                            className: "resourceCard__imageLink",
                                            destination: item.link,
                                        }}
                                    >
                                        <></>
                                    </TextWrappedImage>
                                )}

                                {/*blog description and expand button*/}
                                <p className={"resourceCard__description unclamped"}>
                                    <ParsedResourceText text={item.description} />
                                </p>
                            </React.Fragment>
                    )}
                </div>

            </div>
        </article>
    )
}