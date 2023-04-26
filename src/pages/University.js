import React, { useEffect } from 'react';
const University = () => {
    useEffect(() => {
        document.title = 'University Login';
    });
    return (
        <div>
            <p>University Details</p>
        </div>
    );
};
export default University;