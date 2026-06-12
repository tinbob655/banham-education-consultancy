import React, {useState} from 'react';
import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {ref, uploadBytes} from 'firebase/storage';
import {db, storage} from '../../firebase.ts';

interface FormState {
    title: string;
    description: string;
    linkPath: string;
    linkText: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AddBlogForm(): React.ReactElement {

    const [form, setForm] = useState<FormState>({
        title: '',
        description: '',
        linkPath: '',
        linkText: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    //will fire when any input in the form changes
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (!form.title.trim() || !form.description.trim()) {
            setErrorMsg('Title and description are required.');
            setStatus('error');
            return;
        }

        //we need a link path if we have link text
        if (form.linkText.trim() && !form.linkPath.trim()) {
            setErrorMsg('A link path is required when link text is provided.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {
            let imagePath: string | undefined;

            //upload the image
            if (imageFile) {
                const storageRef = ref(storage, `blogImages/${Date.now()}_${imageFile.name}`);
                await uploadBytes(storageRef, imageFile);

                //will need the path later
                imagePath = storageRef.fullPath;
            }

            //upload to firestore
            const docData: Record<string, unknown> = {
                title: form.title.trim(),
                description: form.description.trim(),
                creationDate: Timestamp.now(),
            };
            if (imagePath) docData.imagePath = imagePath;
            if (form.linkPath.trim()) docData.linkPath  = form.linkPath.trim();
            if (form.linkText.trim()) docData.linkText  = form.linkText.trim();

            await addDoc(collection(db, 'blogs'), docData);

            //reset all on success
            setForm({title: '', description: '', linkPath: '', linkText: ''});
            setImageFile(null);
            setStatus('success');
        }

        //failed to upload
        catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong — check the console for details.');
            setStatus('error');
        }
    }

    return (
        <form className="standard-form" onSubmit={handleSubmit}>

            {/*title*/}
            <div className="form-field">
                <label htmlFor="blog-title">
                    Title <span className="required">*</span>
                </label>
                <input
                    id="blog-title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. 5 revision techniques that actually work"
                    autoComplete="off"
                />
            </div>

            {/*description (supports normal text formating)*/}
            <div className="form-field">
                <label htmlFor="blog-description">
                    Description <span className="required">*</span>
                </label>
                <p className="hint">
                    Supports inline formatting: <code>_italic_</code>, <code>+bold+</code>,{' '}
                    <code>#https://url.com#</code> (becomes a link). Use a new line for a new paragraph.
                </p>
                <textarea
                    id="blog-description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Write the blog content here..."
                    rows={10}
                />
            </div>

            {/*link path + link text on wider screens*/}
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="blog-linkPath">
                        Link path <span className="optional">(optional)</span>
                    </label>
                    <p className="hint">
                        The URL the "Read more" button points to. Can be internal (e.g.{' '}
                        <code>/resources</code>) or external.
                    </p>
                    <input
                        id="blog-linkPath"
                        name="linkPath"
                        value={form.linkPath}
                        onChange={handleChange}
                        placeholder="https://..."
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="blog-linkText">
                        Link button text <span className="optional">(optional)</span>
                    </label>
                    <p className="hint">
                        The text the user sees on the link. Defaults to "Read more" if left blank.
                    </p>
                    <input
                        id="blog-linkText"
                        name="linkText"
                        value={form.linkText}
                        onChange={handleChange}
                        placeholder="Read more"
                    />
                </div>
            </div>

            {/*image upload*/}
            <div className="form-field">
                <label htmlFor="blog-image">
                    Cover image <span className="optional">(optional)</span>
                </label>
                <p className="hint">
                    Displayed alongside the blog description. Leave blank for a text-only card.
                </p>
                <input
                    key={status === 'success' ? 'reset' : 'active'}
                    id="blog-image"
                    type="file"
                    accept="image/*"
                    onChange={e => setImageFile(e.target.files?.[0] ?? null)}
                />
                {imageFile && (
                    <span className="file-name">{imageFile.name}</span>
                )}
            </div>

            {/*upload feedback*/}
            {status === 'success' && (
                <p className="status-message success">Blog published successfully!</p>
            )}
            {status === 'error' && (
                <p className="status-message error">{errorMsg}</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Publishing…' : 'Publish blog'}
            </button>

        </form>
    );
}