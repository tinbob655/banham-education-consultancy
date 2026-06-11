import {useEffect, useMemo, useState} from 'react';
import {storage} from "../firebase.ts";
import {getDownloadURL, ref, type StorageReference} from 'firebase/storage';

interface Exports {
    fileURL: string;
    loading: boolean;
    error: string|null;
}

export default function useStorage(storagePath: string|null|undefined):Exports {
    
    const [state, setState] = useState<Exports> ({
        fileURL: '',
        loading: true,
        error: null,
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

            setState({fileURL: '', loading: true, error: null});
            
            try {
                const fileRef:StorageReference = ref(storage, storagePath);
                const url:string = await getDownloadURL(fileRef);
                
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