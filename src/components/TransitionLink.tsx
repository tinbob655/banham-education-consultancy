import React, {useEffect, useTransition} from 'react';
import {useNavigate} from 'react-router';

interface params {
    to: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}


export default function TransitionLink({ to, className, onClick, children }: params): React.ReactElement {
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();

    //if we are loading then apply some scss
    useEffect(() => {
        document.documentElement.classList.toggle('nav-loading', isPending);
    }, [isPending]);

    function handleClick(e: React.MouseEvent): void {
        e.preventDefault();
        onClick?.();
        startTransition(() => {
            navigate(to);
        });
    }

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}