import React, { useEffect,useState } from 'react';
import Button from '../components/Button';
const Student = () => {
    const [clicked, setClicked] = useState('null')
    useEffect(() => {
        document.title = 'Student Login';
    });
    return (
        <div>
            <Button onClick={()=> setClicked('Clicked')}>student details</Button>
            <p>${clicked}</p>
        </div>
    );
};
export default Student;