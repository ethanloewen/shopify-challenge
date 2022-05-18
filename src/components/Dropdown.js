import { useState } from 'react';
import './Dropdown.scss';

export default function Loading(props) {
  const [engine, setEngine] = useState('currie');

  return (
    <div className='dropdown-container'>
      <h1>{engine}</h1>
      <div className='dropdown-content'></div>
    </div>
  );
}