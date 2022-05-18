import { useState } from 'react';
import './Dropdown.scss';

// fontAwsome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props) {
  const [engineName, setEngineName] = useState('Curie');
  const [engineId, setEngineId] = useState(1);

  const updateEngine = (name, id) => {
    setEngineId(id);
    setEngineName(name);
  }

  return (
    <div className='dropdown-container'>
      <h1>{engineName}</h1>
      <FontAwesomeIcon id='down-arrow' icon={faCaretDown} />
      <div className='dropdown-content'>
        <p onClick={() => updateEngine('Davinci', 0)}>Davinci</p>
        <p onClick={() => updateEngine('Curie', 1)}>Curie</p>
        <p onClick={() => updateEngine('Babbage', 2)}>Babbage</p>
        <p onClick={() => updateEngine('Ada', 3)}>Ada</p>
      </div>
    </div>
  );
}