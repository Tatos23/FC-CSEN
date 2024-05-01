import styles from './DocUpload.css';
import React from 'react';

function DocUpload(role, type) {
    return (
        <div className="DocUpload" style={styles}>
            <h2 className="DocUpload-title">Upload your documents</h2>
            <form>
                <input type="file" name="file" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default DocUpload;