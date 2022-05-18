import { useState } from 'react';
import './Dropdown.scss';

// fontAwsome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props) {
  const [engine, setEngine] = useState('Curie');

  return (
    <div className='dropdown-container'>
      <h1>{engine}</h1>
      <FontAwesomeIcon id='down-arrow' icon={faCaretDown} />
      <div className='dropdown-content'>
        <p onClick={() => console.log('test')}>Davinci</p>
        <p>Curie</p>
        <p>Babbage</p>
        <p>Ada</p>
      </div>
    </div>
  );
}