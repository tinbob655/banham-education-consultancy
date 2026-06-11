import {useEffect, useMemo, useState} from 'react';
import {storage} from "../firebase.ts";
import {getDownloadURL, ref, type StorageReference} from 'firebase/storage';

interface Exports {
    fileURL: string;
    loading: boolean;
    error: string|null;
}

const CACHE_TTL = 5 * 60 * 1000;

interface CacheEntry {
    url: string;
    cachedAt: number;
}
const cache = new Map<string, CacheEntry>();

export default function useStorage(storagePath: string|null|undefined):Exports {

    const [state, setState] = useState<Exports>(() => {
        const entry = storagePath ? cache.get(storagePath) : undefined;
        const valid = !!entry && Date.now() - entry.cachedAt < CACHE_TTL;
        return {
            fileURL: valid ? entry!.url : '',
            loading: !!storagePath && !valid,
            error: null,
        };
    });
    
    //fetch the image
    useEffect(() => {
        let isMounted:boolean = true;
        
        const fetcher = async () => {

            //make sure we have something to fetch
            if (!storagePath) {
                setState({fileURL: '', loading: false, error: null});
                return;
            }

            //we might already know the file
            const entry = cache.get(storagePath);
            if (entry && Date.now() - entry.cachedAt < CACHE_TTL) return;

            setState({fileURL: '', loading: true, error: null});
            
            try {
                const fileRef:StorageReference = ref(storage, storagePath);
                const url:string = await getDownloadURL(fileRef);
                cache.set(storagePath, { url, cachedAt: Date.now() });
                
                if (isMounted) {
                    setState({fileURL: url, loading: false, error: null});
                }
            }
            catch (error) {
                if (isMounted) {
                    console.error(error);
                    setState({fileURL: '', loading: false, error: "An error occurred while getting a firebase storage file."});
                }
            }
        }
        
        void fetcher();
        
        return(() => {
            isMounted = false;
        })
    }, [storagePath]);
    
    return useMemo(():Exports => (state), [state]);
}