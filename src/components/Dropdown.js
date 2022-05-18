import { useState } from 'react';
import './Dropdown.scss';

// fontAwsome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props) {
  // const [engineName, setEngineName] = useState('Curie');
  // const [engineId, setEngineId] = useState(1);

  const updateEngine = (name, id) => {
    props.setEngineId(id);
    props.setEngineName(name);
  }

  return (
    <div className='dropdown-container'>
      <h1>{props.engineName}</h1>
      <FontAwesomeIcon id='down-arrow' icon={faCaretDown} />
      <div className='dropdown-content'>
        <p onClick={() => updateEngine('Davinci', 'text-davinci-002')}>Davinci</p>
        <p onClick={() => updateEngine('Curie', 'text-curie-001')}>Curie</p>
        <p onClick={() => updateEngine('Babbage', 'text-babbage-001')}>Babbage</p>
        <p onClick={() => updateEngine('Ada', 'text-ada-001')}>Ada</p>
      </div>
    </div>
  );
}