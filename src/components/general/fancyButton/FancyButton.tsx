import React from 'react';
import { useNavigate } from 'react-router';
import './fancyButton.scss';

interface params {
    text: string;
    path?: string;
    action?: () => void;
}

export default function FancyButton({ text, path, action }: params): React.ReactElement {

    const navigate = useNavigate();

    if (!path && !action) throw new Error("A fancy button needs functionality");
    if (path && action) throw new Error("A fancy button cannot have a path and a function");

    //markup to go in the button
    const inner:React.ReactElement = (
        <React.Fragment>
            <span className="fancyButtonText">{text}</span>
            <span className="fancyButtonArrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14M13 7l5 5-5 5" />
                </svg>
            </span>
        </React.Fragment>
    )

    //fire when the user clicks the button
    function handleClick():void {
        if (path) {
            navigate(path);
        }
        else if (action) {
            action();
        }
    }

    if (path) {
        return (
            <a href={path} className="fancyButton" onClick={(e) => { e.preventDefault(); navigate(path); }}>
                {inner}
            </a>
        );
    }

    else return (
        <button className="fancyButton" onClick={handleClick}>
            {inner}
        </button>
    );
}