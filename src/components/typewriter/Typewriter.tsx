import React, {useEffect, useRef, useState} from 'react';
import ParsedResourceText from "../../pages/resources/ParsedResourceText.tsx";
import './typewriter.scss';

interface Params {
    text: string;
    speed?: number;
    delay?: number;
    tag?: 'p' | 'span' | 'h3';
    className?: string;
    parsed?: boolean;   // set true to pipe output through ParsedResourceText
}

export default function Typewriter({ text, speed = 22, delay = 0, tag = 'p', className, parsed = false }: Params): React.ReactElement {

    const [charCount, setCharCount] = useState<number>(0);
    const [started, setStarted]     = useState<boolean>(false);
    const [done, setDone]           = useState<boolean>(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setStarted(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            index++;
            setCharCount(index);
            if (index >= text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    const visibleText = text.slice(0, charCount);

    const content = (
        <React.Fragment>
            {charCount === 0
                ? '\u00A0'
                : parsed
                    ? <ParsedResourceText text={visibleText} />
                    : visibleText
            }
            {!done && <span className="typewriterCursor" aria-hidden="true">▌</span>}
        </React.Fragment>
    );

    const Tag = tag;

    return (
        // @ts-expect-error – ref typing across tag union
        <Tag ref={ref} className={className}>
            {content}
        </Tag>
    );
}