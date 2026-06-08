import React, {type RefObject, useEffect, useRef} from 'react';

interface params {
    heading: string;
    children: React.ReactNode;
}

export default function GenericMarkupSection({heading, children}:params):React.ReactElement {

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
        <section className={"alignLeft"} ref={ref}>
            <h2 className={"sectionTitle"}>
                {heading}
            </h2>

            {children}

            <div className={"sectionDivider"} />
        </section>
    )
}