import './Loading.scss';

// fontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props) {

  return (
    <div className='loading-container'>
      <div id='loading-box'>
        {props.loading ? <FontAwesomeIcon id='loading-icon' icon={faSpinner} /> : <></>}
      </div>
    </div>
  );
}