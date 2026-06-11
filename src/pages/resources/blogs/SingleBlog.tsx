import React, {useState} from 'react';
import type {Blog} from "./blog";
import FancyButton from "../../../components/fancyButton/FancyButton.tsx";
import useStorage from "../../../hooks/useStorage.ts";
import TextWrappedImage from "../../../components/TextWrappedImage.tsx";
import Typewriter from "../../../components/typewriter/Typewriter.tsx";

export default function SingleBlog({ blog }: { blog: Blog }): React.ReactElement {

    const {fileURL, loading} = useStorage(blog.imagePath || null);
    const [clamped, setClamped] = useState<boolean>(true);

    return (
        <article className="resourceCard">

            {/*main blog content*/}
            <div className="resourceCard__body">

                {/*blog date*/}
                <p className="resourceCard__date">
                    {blog.creationDate?.toDate
                        ? blog.creationDate.toDate().toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })
                        : String(blog.creationDate)}
                </p>

                {/*blog title*/}
                <h3 className="resourceCard__title alignLeft">{blog.title}</h3>

                {/*main content*/}
                <div className={"resource__content"}>

                    {blog.imagePath ? (
                        loading ? <p>Loading image...</p> :
                        <TextWrappedImage
                            imageSrc={fileURL}
                            alt={blog.title}
                            imageClassName={"resourceCard__image"}
                            imageLinkInfo={{
                                style: {cursor: blog.linkPath ? 'pointer' : 'default'},
                                className: "resourceCard__imageLink",
                                destination: blog.linkPath ?? '',
                            }}
                        >

                            {/*blog description and expand button*/}
                            <Typewriter
                                text={blog.description}
                                parsed
                                className={`resourceCard__description ${!clamped && 'unclamped'}`}
                                speed={5}
                            />
                            <div className={"resourceCard__showMore"}>
                                <FancyButton text={`show ${clamped ? 'more' : 'less'}...`} action={() => setClamped(!clamped)} />
                            </div>
                        </TextWrappedImage>
                    ) : (
                        <React.Fragment>

                            {/*blog description and expand button*/}
                            <Typewriter
                                text={blog.description}
                                parsed
                                className={`resourceCard__description ${!clamped && 'unclamped'}`}
                                speed={5}
                            />
                            <div className={"resourceCard__showMore"}>
                                <FancyButton text={`show ${clamped ? 'more' : 'less'}...`} action={() => setClamped(!clamped)} />
                            </div>
                        </React.Fragment>
                    )}
                </div>

                {blog.linkPath && (
                    <div className="resourceCard__footer">
                        <FancyButton text={blog.linkText ?? 'Read more'}
                                     path={blog.linkPath} />
                    </div>
                )}
            </div>
        </article>
    );
}

