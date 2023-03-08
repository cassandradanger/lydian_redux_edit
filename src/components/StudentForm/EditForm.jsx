// EditForm.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditForm(props) {
    const history = useHistory();

    function handleSubmit(){
        console.log('handle submit');
        history.push('/');
    }

    function handleChange(event) {
        event.preventDefault();
        console.log('handle change', event.target.value);
    }
    return (
        <>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                onChange={(event) => handleChange(event)}
                placeholder='GitHub username'
                />

                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditForm;