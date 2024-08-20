import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import './adminStyles.scss';

export default function Admin() {

    const [loggedIn, setLoggedIn] = useState('');
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    function logInFormSubmitted(event) {
        event.preventDefault();
        
        const emailAndPassword = [event.currentTarget.email.value, event.currentTarget.password.value];
        
        if (!emailAndPassword[0] || !emailAndPassword[1]) {
            throw('No email or password');
        }
        else {
            
            //attempt to login with the email and password
            const auth = getAuth();
            signInWithEmailAndPassword(auth, emailAndPassword[0], emailAndPassword[1]).then(() => {
                setLoggedIn('Login successful');
            });
        };
    };

    async function blogFormSubmitted(event) {
        event.preventDefault();

        const blogText = event.currentTarget.blog.value;

        if (blogText.length < 10) {
            throw('Blog is too short')
        }
        else {

            //get the date today
            const date = new Date();
            const firestore = getFirestore();
            await addDoc(collection(firestore, 'blogs'), {
                content: blogText,
                dateEdited: date,
            })
        };

        //after done, wait, then navigate to resources page
        setTimeout(() => {
            navigate('/resources');
        }, 500);
    };

    async function resourcesFormSubmitted(event) {
        event.preventDefault();

        if (!event.currentTarget.name.value || !event.currentTarget.href.value || !event.currentTarget.description.value){
            throw('All fields are required');
        }

        const name = event.currentTarget.name.value;
        const href = event.currentTarget.href.value;
        const description = event.currentTarget.description.value;
        const date = new Date();

        const firestore = getFirestore();
        const storage = getStorage();

        //first, upload the image to storage
        const filename = file.name;
        const imageRef = ref(storage, `resourceImages/${filename}`);
        await uploadBytes(imageRef, file);

        //after uploading, get the url of the image
        const downloadURL = await getDownloadURL(ref(storage, `resourceImages/${filename}`));

        //write resource data to firestore
        await addDoc(collection(firestore, 'links'), {
            name: name,
            href: href,
            description: description,
            imageURL: downloadURL,
            dateAdded: date,
        });

        //after done, wait, then navigate to resources page
        setTimeout(() => {
            navigate('/resources');
        }, 500);
    };

    return (
        <React.Fragment>
            {loggedIn ? (
                <React.Fragment>

                    {/*add blog/resource page*/}
                    <h1>
                        Add blog
                    </h1>
                    <p>
                        Use the below form to add a blog, the new blog will replace the old blog immediately. (Blog must be at least 10 characters long.)
                    </p>

                    <form id="blogForm" onSubmit={(event) => {blogFormSubmitted(event)}}>
                        <textarea required name="blog" placeholder='Enter new blog here...' style={{width: '80%'}} rows={5} />
                        <input type="submit" name="submit" value="submit" style={{display: 'block', marginTop: '5vh'}} />
                    </form>



                    <div className="dividerLine"></div>



                    <h1>
                        Add resource
                    </h1>
                    <p>
                        Use the below form to add a resource, this new resource will be added to the existing list of resources on the resources and blogs page
                    </p>
                    <form id="resourcesForm" onSubmit={(event) => {resourcesFormSubmitted(event)}}>
                        <p>
                            Resource name/title:
                        </p>
                        <input type="text" name="name" placeholder='Enter resource name/title...' style={{width: '50%'}} required />

                        <p>
                            Resource description:
                        </p>
                        <textarea name="description" placeholder="Enter resource description..." style={{width: '80%'}} rows={5} required/>

                        <p>
                            Link to resource (starting http:// or https://):
                        </p>
                        <input type="url" name="href" placeholder='Enter link to resource here...' style={{width: '40%'}} required />

                        <p>
                            Image to display for resource:
                        </p>
                        <label htmlFor="imageUpload" id="imageUploadLabel">
                            <h3>
                                Click here to select an image
                            </h3>
                        </label>
                        <input required type="file" id="imageUpload" accept="image/*" name="imageUpload" style={{display: 'none'}} onChange={(event) => {
                            document.getElementById('imageUploadLabel').classList.add('hidden');
                            setFile(event.target.files[0]);
                        }}/>

                        <input type="submit" name="submit" value="submit" className="submit" style={{display: 'block', marginTop: '5vh'}} />
                    </form>
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {/*admin login page*/}
                    <h1>
                        Admin page
                    </h1>

                    <h2>
                        Admin log in form:
                    </h2>
                    <form id="adminLogInForm" onSubmit={(event) => {logInFormSubmitted(event)}} style={{width: '100%'}}>
                        <input type="email" name="email" placeholder="Enter admin email here..." style={{width: '75%'}}/>
                        <input type="password" name="password" placeholder="Enter admin password here..." style={{width: '75%', marginTop: '5vh'}} />

                        <input type="submit" name="submit" value="submit" style={{display: 'block', marginTop: '5vh'}} />
                    </form>
                </React.Fragment>
            )}
        </React.Fragment>
    )
};