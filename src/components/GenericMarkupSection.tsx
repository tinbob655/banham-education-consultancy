import React, {type RefObject, useEffect, useRef} from 'react';
import TextWrappedImage from './textWrappedImage/TextWrappedImage.tsx';

interface params {
    heading: string;
    children: React.ReactNode;

    //optionally take an image input
    imageSrc?: string;
    imageAlt?: string;
    imageRight?: boolean;
    imageClassName?: string;
    imageCaption?: string;
}

export default function GenericMarkupSection({heading, children, imageSrc, imageAlt, imageRight, imageClassName, imageCaption}:params):React.ReactElement {

    const ref:RefObject<HTMLElement|null> = useRef<HTMLElement>(null);

    //animate the section in when the user can see 15% of it
    useEffect(() => {
        const el:HTMLElement|null = ref?.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]:IntersectionObserverEntry[]):void => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const content:React.ReactNode = imageSrc ? (
        <TextWrappedImage
            imageSrc={imageSrc}
            alt={imageAlt ?? ''}
            imageRight={imageRight}
            imageClassName={imageClassName}
            caption={imageCaption}
        >
            {children}
        </TextWrappedImage>
    ) : children;

    return (
        <section className={"alignLeft"} ref={ref}>
            <h2 className={"sectionTitle"}>
                {heading}
            </h2>

            {content}

            <div className={"sectionDivider"} />
        </section>
    )
}