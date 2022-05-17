import './App.scss';
import React, {useState} from 'react';
import Form from './components/Form';
import Response from './components/Response';

function App() {
  const [latestInput, setLatestInput] = useState('');
  const [latestOutput, setLatestOutput] = useState('');

  return (
    <div className="App">
      <Form setLatestOutput={setLatestOutput} setLatestInput={setLatestInput} />
      <Response input={latestInput} output={latestOutput} />
    </div>
  );
}

export default App;

