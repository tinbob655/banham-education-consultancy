import React, {useMemo} from 'react';
import {orderBy, type QueryConstraint} from "firebase/firestore";
import useFirestore from "../../../hooks/useFirestore.ts";
import type {RecommendedItem} from "./recommendedItem";
import SingleRecommendedItem from "./SingleRecommendedItem.tsx";

export default function RecommendedItems():React.ReactElement {

    //fetch all recommended resources
    const constraints:QueryConstraint[] = useMemo(() => ([
        orderBy("creationDate", 'desc'),
    ]), []);
    const {data, loading, error} = useFirestore<RecommendedItem>("resources", constraints);

    if (loading) return <p className="blogStatus">Loading blogs…</p>;
    if (error) return <p className="blogStatus">Could not load blogs: {error}</p>;
    if (!data.length) return <p className="blogStatus">No blog posts yet.</p>;

    //normal operation
    return (
        <div className={"resourceList"}>
            {data.map((item: RecommendedItem):React.ReactElement => (
                <SingleRecommendedItem item={item} key={item.name} />
            ))}
        </div>
    )
}