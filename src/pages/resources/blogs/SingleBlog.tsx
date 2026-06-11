import React, {useState} from 'react';
import type {Blog} from "./blog";
import FancyButton from "../../../components/fancyButton/FancyButton.tsx";
import useStorage from "../../../hooks/useStorage.ts";

export default function SingleBlog({ blog }: { blog: Blog }): React.ReactElement {

    const {fileURL, loading} = useStorage(blog.imagePath || null);
    const [clamped, setClamped] = useState<boolean>(true);

    return (
        <article className="blogCard">

            {/*main blog content*/}
            <div className="blogCard__body">

                {/*blog date*/}
                <p className="blogCard__date">
                    {blog.creationDate?.toDate
                        ? blog.creationDate.toDate().toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'long', year: 'numeric'
                        })
                        : String(blog.creationDate)}
                </p>

                {/*blog title*/}
                <h3 className="blogCard__title alignLeft">{blog.title}</h3>

                {/*main content*/}
                <div className={"blog__content"}>

                    {/*there may be a blog image*/}
                    {blog.imagePath && (
                        loading ? <p>Loading image...</p> :
                        <a
                            href={blog.linkPath}
                            style={{cursor: blog.linkPath ? 'pointer' : 'default'}}
                           className="blogCard__imageLink"
                           target="_blank"
                           rel="noreferrer">
                            <img src={fileURL}
                                 alt={blog.title}
                                 className="blogCard__image" />
                        </a>
                    )}

                    {/*blog description and expand button*/}
                    <p className={`blogCard__description ${!clamped && "unclamped"}`}>
                        {parseBlog(blog.description)}
                    </p>
                    <div className={"blogCard__showMore"}>
                        <FancyButton text={`show ${clamped ? 'more' : 'less'}...`} action={() => setClamped(!clamped)} />
                    </div>
                </div>

                {blog.linkPath && (
                    <div className="blogCard__footer">
                        <FancyButton text={blog.linkText ?? 'Read more'}
                                     path={blog.linkPath} />
                    </div>
                )}
            </div>
        </article>
    );
}

function parseBlog(text: string): React.ReactNode[] {
    const result: React.ReactNode[] = [];

    text.split('\n').forEach((line, lineIndex) => {

        //add a line break between lines (not before the first)
        if (lineIndex > 0) {
            result.push(<br key={`br-${lineIndex}`} />);
        }

        //Match:
        //#text# -> link
        //_text_ -> italics
        //+text+ -> bold
        const regex = /(#([^#]+)#)|(_([^_]+)_)|(\+([^+]+)\+)/g;

        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(line)) !== null) {

            // Add plain text before the match
            if (match.index > lastIndex) {
                result.push(line.slice(lastIndex, match.index));
            }

            if (match[2]) {
                //#text# -> link
                result.push(
                    <a
                        key={`link-${lineIndex}-${match.index}`}
                        href={match[2]}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {match[2]}
                    </a>
                );
            }
            else if (match[4]) {
                //_text_ -> italics
                result.push(
                    <em key={`italic-${lineIndex}-${match.index}`}>
                        {match[4]}
                    </em>
                );
            }
            else if (match[6]) {
                //+text+ -> bold
                result.push(
                    <strong key={`bold-${lineIndex}-${match.index}`}>
                        {match[6]}
                    </strong>
                );
            }

            lastIndex = regex.lastIndex;
        }

        //add remaining plain text
        if (lastIndex < line.length) {
            result.push(line.slice(lastIndex));
        }
    });

    return result;
}