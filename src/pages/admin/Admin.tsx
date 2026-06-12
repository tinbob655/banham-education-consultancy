import React, {useContext, useState} from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import AddBlogForm from "./AddBlogForm.tsx";
import AddResourceForm from "./AddResourceForm.tsx";
import './admin.scss';
import {AuthContext} from "../../context/AuthContext.tsx";
import FancyButton from "../../components/fancyButton/FancyButton.tsx";

export default function Admin(): React.ReactElement {

    const {user, login, logout} = useContext(AuthContext);
    const [loginErrorMsg, setLoginErrorMsg] = useState<string|null>(null);

    async function loginFormSubmitted(event:React.SubmitEvent):Promise<void> {
        event.preventDefault();

        //attempt to log in
        if (!event.target.username.value || !event.target.password.value) throw new Error("Need a username and a password to log in");
        const success:boolean = await login(event.target.username.value, event.target.password.value);

        if (success) {
            setLoginErrorMsg(null);
        }
        else {
            setLoginErrorMsg("Failed to log in. Please check email and password then try again.");
        }
    }

    //user is logged in (so is allowed page)
    if (user) return (
        <React.Fragment>
            <PageHeader title={"Admin"} subtitle={"Add blogs & resources"} />

            {/*add blog section*/}
            <GenericMarkupSection heading={"Add a blog"}>
                <p>
                    Use the form below to publish a new blog post. The blog will appear immediately
                    on the resources page, ordered by date.
                </p>
                <AddBlogForm />
            </GenericMarkupSection>

            {/*add resource section*/}
            <GenericMarkupSection heading={"Add a resource"}>
                <p>
                    Use the form below to add a new recommended resource. An image is required
                    and will be displayed as the resource's thumbnail.
                </p>
                <AddResourceForm />
            </GenericMarkupSection>

            {/*allow the user to log out*/}
            <FancyButton text={"Click here to log out of the admin account"} action={logout} />
        </React.Fragment>
    );

    //use is not logged in
    else return (
        <React.Fragment>
            <PageHeader title={"Access denied"} subtitle={"Sorry but you can't be here!"} />

            <GenericMarkupSection heading={"Log in"}>
                <p>
                    If you know your username and password, you can try to log in here:
                </p>
                <form className={"standard-form"} onSubmit={(event) => loginFormSubmitted(event)} >

                    <div className={"form-row"}>

                        {/*username*/}
                        <div className={"form-field"}>
                            <label htmlFor={"username"}>
                                Username: <span className={"required"}>*</span>
                            </label>
                            <input type={"text"} id={"username"} name={"username"} placeholder={"Username..."} required />
                        </div>

                        {/*password*/}
                        <div className={"form-field"}>
                            <label htmlFor={"password"} className={"required"}>
                                Password: <span className={"required"}>*</span>
                            </label>
                            <input type={"password"} id={"password"} name={"password"} placeholder={"Password..."} required />
                        </div>
                    </div>

                    <div className={"caravan"}>
                        <FancyButton text={"Log in"} isSubmit />

                        {loginErrorMsg && <p className={"error status-message"}>{loginErrorMsg}</p>}
                    </div>
                </form>
            </GenericMarkupSection>
        </React.Fragment>
    )
}