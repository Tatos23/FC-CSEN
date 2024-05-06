import Header from '../donor/Header';
import './DocUpload.css';
import React from 'react';

function DocUpload( { role, type }) {
    const handleFileChange = (e) => {
        if (e.target.files[0] && e.target.files[0].type !== 'application/pdf') {
            alert('Only PDF files are allowed');
            e.target.value = ''; // Clear the selected file
        }
    };

    return (
        <div className="DocUpload">
            <Header loggedIn={false}/>
            {(type === "Doctor" || type === "Teacher") && role === "Donor"?
            (
            <div className='DocUpload-Container'>
                <h1 className="DocUpload-Title">Upload your documents</h1>
                <input type="file" name="file"  className='DocUpload-document-input' onChange={handleFileChange}/>
                <br />
                <label className='DocUpload-message'>Please upload the documents that can help in the verification process</label>
                <button type="submit" className='DocUpload-Upload'>Upload</button>
            </div>)
            :
            (<div className='DocUpload-Container'>
            <h1 className="DocUpload-Title">Upload your documents</h1>
            <input type="file" name=""  className='DocUpload-document-input' accept=".pdf" onChange={handleFileChange}/>
            <br />
            <label className='DocUpload-message'>Please upload the documents that can help in your organization verification process</label>
            <button type="submit" className='DocUpload-Upload'>Upload</button>
        </div>)
            }
            
        </div>
    );
}

export default DocUpload;