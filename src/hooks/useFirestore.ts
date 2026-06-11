import {useEffect, useMemo, useState} from 'react';
import {collection, getDocs, query, type QueryConstraint} from "firebase/firestore";
import {db} from '../firebase.ts';

interface Exports<T> {
    data: T[];
    loading: boolean;
    error: string|null;
}

const CACHE_TTL:number = 5 * 60 * 1000;

interface CacheEntry<T> {
    data: T[];
    cachedAt: number;
}
const cache = new Map<string, CacheEntry<unknown>>();

export default function useFirestore<T>(collectionPath:string, queryConstraints:QueryConstraint[] = []):Exports<T> {

    const [data, setData] = useState<T[]>(() => {
        const entry = cache.get(collectionPath);
        if (!entry || Date.now() - entry.cachedAt >= CACHE_TTL) return [];
        return entry.data as T[];
    });

    const [loading, setLoading] = useState<boolean>(() => {
        const entry = cache.get(collectionPath);
        return !entry || Date.now() - entry.cachedAt >= CACHE_TTL;
    });
    const [error, setError] = useState<string|null>(null);

    //fetch from firestore
    useEffect(() => {
        let isMounted:boolean = true;

        const fetchData = async () => {

            //we might already know the data
            const entry = cache.get(collectionPath);
            if (entry && Date.now() - entry.cachedAt < CACHE_TTL) return;

            setLoading(true);
            setError(null);

            try {
                const colRef = collection(db, collectionPath);
                const q = query(colRef, ...queryConstraints);
                const snapshot = await getDocs(q);

                //make sure we are still mounted after fetching
                if (isMounted) {
                    const docsData:T[] = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as T[];
                    setData(docsData);
                    cache.set(collectionPath, { data: docsData, cachedAt: Date.now() });
                    setLoading(false);
                }
            }
            catch (err) {
                if (isMounted) {
                    console.error(`Firestore fetch error: ${err}`);
                    setError("An error occurred while fetching data.");
                    setLoading(false);
                }
            }
        }

        void fetchData();

        //mark the component as unmounted when we unmount
        return () => {
            isMounted = false;
        }
    }, [collectionPath, queryConstraints]);


    //exports
    return useMemo(() => ({data, loading, error}), [data, loading, error]);
}