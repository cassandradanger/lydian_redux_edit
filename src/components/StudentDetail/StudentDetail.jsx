import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  function handleEditClick(){
    console.log("in handle click, student: ", props.student);
    dispatch({ type: 'SET_EDIT_STUDENT', payload: props.student});
    history.push('/edit');
  }

  return (
    <tr>
      <td>{props.student.github_name}</td>
      <td>
        <button onClick={handleEditClick}>EDIT!</button>
      </td>
    </tr>
  );
}

export default StudentDetail;
