import './Help.scss';

// fontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Help(props) {

  return (
    <div className='help-container'>
      <button onClick={() => console.log('test button')}>Type for me</button>
    </div>
  );
}