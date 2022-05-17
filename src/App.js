import './App.scss';
import React, {useState} from 'react';
import Form from './components/Form';
import Response from './components/Response';

function App() {
  const [latestOutput, setLatestOutput] = useState('');

  return (
    <div className="App">
      <Form />
      <Response input={'Prompt here...'} output={'Response here...'}/>
    </div>
  );
}

export default App;

