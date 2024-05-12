import Header from '../donor/Header';
import './DocUpload.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DocUpload( { role }) {
    const [isClicked, setIsClicked] = React.useState(false);
    const [file, setFile] = React.useState(null);
    const [message, setMessage] = React.useState('');
    const nav = useNavigate();

    const handleFileChange = (e) => {
        if (e.target.files[0] && e.target.files[0].type !== 'application/pdf') {
            setMessage('Only PDF files are allowed');
            e.target.value = '';
        } else {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            setMessage('Please select a file before uploading');
            return;
        }
        setIsClicked(true);
        setMessage('Your documents have been uploaded successfully, please wait for the verification from the admin.');
        setTimeout(() => {
            if(role == "Organization Representative")
                nav(`/representative-login`);
            else if (role == "Donor")
                nav(`/donor-login`);
            else if (role == "Admin"){
                nav(`/admin-login`);
                console.log("Admin doesnot have an account registration :/");
            }
        }, 3000);
    }

    return (
        <div className="DocUpload">
            <Header loggedIn={false}/>
            {role === "Donor"?
            (
            <div className='DocUpload-Container'>
                <h1 className="DocUpload-Title">Upload your documents</h1>
                <input type="file" name="file"  className='DocUpload-document-input' onChange={handleFileChange}/>
                <br />
                <label className='DocUpload-message'>Please upload the documents that can help in the verification process</label>
                <button type="submit" className='DocUpload-Upload' onClick={handleUploadClick}>Upload</button>
                <label className='DocUpload-verification'>{message}</label>
            </div>)
            :
            (<div className='DocUpload-Container'>
                <h1 className="DocUpload-Title">Upload your documents</h1>
                <input type="file" name=""  className='DocUpload-document-input' accept=".pdf" onChange={handleFileChange}/>
                <br />
                <label className='DocUpload-message'>Please upload the documents that can help in your organization verification process</label>
                <button type="submit" className='DocUpload-Upload' onClick={handleUploadClick}>Upload</button>
                <label className='DocUpload-verification'>{isClicked ? 'Your documents have been uploaded successfully, please wait for the verification from the admin.' : message}</label>
            </div>)}
        </div>
    );
}

export default DocUpload;