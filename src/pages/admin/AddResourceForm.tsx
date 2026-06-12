import React, {useState} from 'react';
import {addDoc, collection, Timestamp} from 'firebase/firestore';
import {ref, uploadBytes} from 'firebase/storage';
import {db, storage} from '../../firebase.ts';

interface FormState {
    name: string;
    description: string;
    link: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AddResourceForm(): React.ReactElement {

    const [form, setForm] = useState<FormState>({
        name: '',
        description: '',
        link: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        if (!form.name.trim() || !form.description.trim() || !form.link.trim()) {
            setErrorMsg('Name, description, and link are all required.');
            setStatus('error');
            return;
        }
        if (!imageFile) {
            setErrorMsg('An image is required for recommended resources.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {

            //upload the image
            const filename = `${Date.now()}_${imageFile.name}`;
            const storageRef = ref(storage, `recommendedResources/${filename}`);
            await uploadBytes(storageRef, imageFile);

            //create the resource in firestore
            await addDoc(collection(db, 'resources'), {
                name: form.name.trim(),
                description: form.description.trim(),
                link: form.link.trim(),
                imagePath: filename,
                creationDate: Timestamp.now(),
            });

            setForm({name: '', description: '', link: ''});
            setImageFile(null);
            setStatus('success');
        }

        //failed to create resource
        catch (err) {
            console.error(err);
            setErrorMsg('Something went wrong — check the console for details.');
            setStatus('error');
        }
    }

    return (
        <form className="standard-form" onSubmit={handleSubmit}>

            {/*name*/}
            <div className="form-field">
                <label htmlFor="res-name">
                    Name <span className="required">*</span>
                </label>
                <input
                    id="res-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. The Learning Scientists"
                    autoComplete="off"
                />
            </div>

            {/*description*/}
            <div className="form-field">
                <label htmlFor="res-description">
                    Description <span className="required">*</span>
                </label>
                <p className="hint">
                    Supports inline formatting: <code>_italic_</code>, <code>+bold+</code>,{' '}
                    <code>#https://url.com#</code> (becomes a link).
                </p>
                <textarea
                    id="res-description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe what this resource offers..."
                    rows={6}
                />
            </div>

            {/*link*/}
            <div className="form-field">
                <label htmlFor="res-link">
                    Link <span className="required">*</span>
                </label>
                <p className="hint">
                    The URL the resource's image links to.
                </p>
                <input
                    id="res-link"
                    name="link"
                    value={form.link}
                    onChange={handleChange}
                    placeholder="https://..."
                />
            </div>

            {/*image*/}
            <div className="form-field">
                <label htmlFor="res-image">
                    Image <span className="required">*</span>
                </label>
                <p className="hint">
                    Shown as the resource's cover/thumbnail.
                </p>
                <input
                    key={status === 'success' ? 'reset' : 'active'}
                    id="res-image"
                    type="file"
                    accept="image/*"
                    onChange={e => setImageFile(e.target.files?.[0] ?? null)}
                />
                {imageFile && (
                    <span className="file-name">{imageFile.name}</span>
                )}
            </div>

            {/*feedback*/}
            {status === 'success' && (
                <p className="status-message success">Resource added successfully!</p>
            )}
            {status === 'error' && (
                <p className="status-message error">{errorMsg}</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Saving…' : 'Add resource'}
            </button>

        </form>
    );
}