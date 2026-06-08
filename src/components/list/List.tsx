import React from 'react';

interface params {
    numbered?:boolean;
    items: string[] | React.ReactElement[];
}

export default function List({numbered, items}:params):React.ReactElement {

    //create markup from our list of items
    const elementsHTML:React.ReactElement[] = items.map((item:string | React.ReactElement):React.ReactElement => {
        return (
            <li>
                {typeof item === 'string' ? (
                    <p>
                        {item}
                    </p>
                ) : (
                    <React.Fragment>
                        {item}
                    </React.Fragment>
                )}
            </li>
        )
    })

    if (numbered) return (
        <ol>
            {elementsHTML}
        </ol>
    )

    else return (
        <ul>
            {elementsHTML}
        </ul>
    )
}