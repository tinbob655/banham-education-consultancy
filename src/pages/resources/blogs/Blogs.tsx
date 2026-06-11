import React, {useMemo} from 'react';
import {orderBy, type QueryConstraint} from 'firebase/firestore';
import useFirestore from '../../../hooks/useFirestore.ts';
import type {Blog} from './blog';
import SingleBlog from "./SingleBlog.tsx";

//set of blogs
export default function Blogs(): React.ReactElement {

    const constraints: QueryConstraint[] = useMemo(() => [
        orderBy('creationDate', 'desc'),
    ], []);

    const { data, loading, error } = useFirestore<Blog>('blogs', constraints);

    if (loading) return <p className="blogStatus">Loading blogs…</p>;
    if (error) return <p className="blogStatus">Could not load blogs: {error}</p>;
    if (!data.length) return <p className="blogStatus">No blog posts yet.</p>;

    return (
        <div className="resourceList">
            {data.map((blog: Blog):React.ReactElement => (
                <SingleBlog key={blog.title} blog={blog} />
            ))}
        </div>
    );
}