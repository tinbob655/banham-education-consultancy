import React, {useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

export default function Admin() {

    const [loggedIn, setLoggedIn] = useState('');
    const [blogSuccessfullyAddedMessage, setBlogSuccessfullyAddedMessage] = useState('');

    function logInFormSubmitted(event) {
        event.preventDefault();
        
        const emailAndPassword = [event.currentTarget.email.value, event.currentTarget.password.value];
        console.log(emailAndPassword)
        
        if (!emailAndPassword[0] || !emailAndPassword[1]) {
            throw('No email or password');
        }
        else {
            
            //attempt to login with the email and password
            const auth = getAuth();
            signInWithEmailAndPassword(auth, 'BANHAM_ADMIN246810@gmail.com', 'aDm1n*F0R*bAnHaM*3dUcAt10N').then(() => {
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

    return (
        <React.Fragment>
            {loggedIn ? (
                <React.Fragment>

                    {/*add blog page*/}
                    <h1 className="alignLeft">
                        Add blog page
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