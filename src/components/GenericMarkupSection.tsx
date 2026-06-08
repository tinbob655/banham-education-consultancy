import React, {type RefObject, useEffect, useRef} from 'react';

interface params {
    heading: string;
    left?:boolean;
    children: React.ReactNode;
}

export default function GenericMarkupSection({heading, left, children}:params):React.ReactElement {

    const alignment:string = left ? "alignLeft" : "alignRight";
    const ref:RefObject<HTMLElement|null> = useRef<HTMLElement>(null);

    useEffect(() => {

        //make sure we have our element
        const el:HTMLElement|null = ref?.current;
        if (!el) return;

        //show elements when they appear in view
        const observer = new IntersectionObserver(
            ([entry]:IntersectionObserverEntry[]):void => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.disconnect(); //only trigger one time
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={alignment} ref={ref}>
            <h2 className={"sectionTitle"}>
                {heading}
            </h2>

            {children}

            <div className={"sectionDivider"} />
        </section>
    )
}