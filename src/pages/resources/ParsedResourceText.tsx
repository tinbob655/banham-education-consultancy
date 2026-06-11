import React from "react";

interface Params {
    text: string;
}

export default function ParsedResourceText({text}:Params): React.ReactNode[] {
    const result: React.ReactNode[] = [];

    text.split('\n').forEach((line, lineIndex) => {

        //add a line break between lines (not before the first)
        if (lineIndex > 0) {
            result.push(<br key={`br-${lineIndex}`}/>);
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
            } else if (match[4]) {
                //_text_ -> italics
                result.push(
                    <em key={`italic-${lineIndex}-${match.index}`}>
                        {match[4]}
                    </em>
                );
            } else if (match[6]) {
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