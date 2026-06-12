import React from 'react';
import {useNavigate} from 'react-router';
import './fancyButton.scss';


interface Params {
    text: string;
    path?: string;
    action?: () => void;
    isSubmit?: boolean;
}

export default function FancyButton({ text, path, action, isSubmit }: Params): React.ReactElement {

    const navigate = useNavigate();


    if (!path && !action && !isSubmit) {
        throw new Error("A fancy button needs functionality (path, action, or isSubmit)");
    }
    if (path && (action || isSubmit)) {
        throw new Error("A fancy button cannot have a path alongside an action or isSubmit");
    }
    if (action && isSubmit) {
        throw new Error("A submit button should not have a custom click action; handle it via the form's onSubmit instead.");
    }

    //inner button content
    const inner: React.ReactElement = (
        <React.Fragment>
            <span className="fancyButtonText">{text}</span>
            <span className="fancyButtonArrow">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14M13 7l5 5-5 5" />
                </svg>
            </span>
        </React.Fragment>
    );

    //action / path handling
    function handleClick(): void {
        if (path) {
            navigate(path);
        }
        else if (action) {
            action();
        }
    }

    //link
    if (path) {
        return (
            <a href={path} className="fancyButton" onClick={(e) => { e.preventDefault(); navigate(path); }}>
                {inner}
            </a>
        );
    }

    //submit
    if (isSubmit) {
        return (
            <button type="submit" className="fancyButton">
                {inner}
            </button>
        );
    }

    //action
    return (
        <button type="button" className="fancyButton" onClick={handleClick}>
            {inner}
        </button>
    );
}