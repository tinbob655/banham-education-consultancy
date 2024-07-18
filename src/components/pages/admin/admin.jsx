import React, {useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, updateDoc, doc, addDoc, collection } from 'firebase/firestore';

export default function Admin() {

    const [loggedIn, setLoggedIn] = useState('');
    const [blogSuccessfullyAddedMessage, setBlogSuccessfullyAddedMessage] = useState('');
    const [formSuccessfullyAddedMessage, setFormSuccessfullyAddedMessage] = useState('');

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

        const auth = getAuth();
        if (blogText.length < 10) {
            throw('Blog is too short')
        }
        else {

            //get the date today
            const date = new Date();
            const firestore = getFirestore();
            await updateDoc(doc(firestore, 'blog', 'blog'), {
                content: blogText,
                dateEdited: date,
            })
            setBlogSuccessfullyAddedMessage('Blog successfully added');
        };
    };

    async function resourcesFormSubmitted(event) {
        event.preventDefault();

        if (!event.currentTarget.name.value || !event.currentTarget.href.value || !event.currentTarget.description.value){
            setFormSuccessfullyAddedMessage('All fields are required');
        }

        const firestore = getFirestore();
        await addDoc(collection(firestore, 'links'), {
            name: event.currentTarget.name.value,
            href: event.currentTarget.href.value,
            description: event.currentTarget.description.value,
        });

        setFormSuccessfullyAddedMessage('Resource successfully added');
    };

    return (
        <React.Fragment>
            {loggedIn ? (
                <React.Fragment>

                    {/*add blog/resource page*/}
                    <h1 className="alignLeft">
                        Add blog
                    </h1>
                    <p className="alignLeft">
                        Use the below form to add a blog, the new blog will replace the old blog immediately. (Blog must be at least 10 characters long.)
                    </p>

                    <p className="alignLeft">
                        {blogSuccessfullyAddedMessage}
                    </p>

                    <form id="blogForm" onSubmit={(event) => {blogFormSubmitted(event)}}>
                        <textarea name="blog" placeholder='Enter new blog here...' style={{width: '80%'}} rows={5} />
                        <input type="submit" name="submit" value="submit" style={{display: 'block', marginTop: '5vh'}} />
                    </form>



                    <div className="dividerLine"></div>



                    <h1 className="alignLeft">
                        Add resource
                    </h1>
                    <p className="alignLeft">
                        Use the below form to add a resource, this new resource will be added to the existing list of resources on the resources and blogs page
                    </p>
                    <p className="alignLeft">
                        {formSuccessfullyAddedMessage}
                    </p>
                    <form id="resourcesForm" onSubmit={(event) => {resourcesFormSubmitted(event)}}>
                        <p className="alignLeft">
                            Resource name/title:
                        </p>
                        <input type="text" name="name" placeholder='Enter resource name/title...' style={{width: '50%'}} required />

                        <p className="alignLeft">
                            Resource description:
                        </p>
                        <textarea name="description" placeholder="Enter resource description..." style={{width: '80%'}} rows={5} required/>

                        <p className="alignLeft">
                            Link to resource (starting http:// or https://):
                        </p>
                        <input type="url" name="href" placeholder='Enter link to resource here...' style={{width: '40%'}} required />

                        <input type="submit" name="submit" value="submit" className="submit" style={{display: 'block', marginTop: '5vh'}} />
                    </form>
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {/*admin login page*/}
                    <h1 className="alignLeft">
                        Admin page
                    </h1>

                    <h2 className="alignLeft">
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