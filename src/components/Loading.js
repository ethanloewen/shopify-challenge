import './Loading.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props) {

  return (
    <div className='loading-container'>
      <div id='loading-box'>
        <FontAwesomeIcon id='loading-icon' icon={faSpinner} />
      </div>
    </div>
  );
}