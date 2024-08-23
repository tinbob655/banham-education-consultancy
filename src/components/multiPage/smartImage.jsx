import React, {useState, useEffect, memo} from 'react';
import {getStorage, getDownloadURL, ref} from 'firebase/storage';

export default memo(function SmartImage({imageStyles, imageClasses, imageId, imageURL, imagePath}) {

    const [fetchedImageURL, setFetchedImageURL] = useState(null);

    useEffect(() => {

        //make sure an image src will exist
        if (!imageURL && !imagePath) {
            throw('No image url or path provided');
        };

        //if an image path was provided, get the image url from firebase storage
        if (imagePath && !imageURL) {
            const storage = getStorage();
            getDownloadURL(ref(storage, imagePath)).then((url) => {
                setFetchedImageURL(url);
            });
        };
    }, []);

    return(
        <React.Fragment>
            <img style={imageStyles ? imageStyles : {}} className={imageClasses ? imageClasses : ''} id={imageId ? imageId : ''} src={imageURL ? imageURL : fetchedImageURL} />
        </React.Fragment>
    );
});