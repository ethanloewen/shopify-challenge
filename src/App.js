import './App.scss';
import React, {useState} from 'react';
import Form from './components/Form';
import ResponseList from './components/ResponseList';

function App() {
  const [latestInput, setLatestInput] = useState([]);
  const [latestOutput, setLatestOutput] = useState([]);

  return (
    <div className="App">
      <Form setLatestOutput={setLatestOutput} setLatestInput={setLatestInput} />
      <ResponseList latestInput={latestInput} latestOutput={latestOutput} />
    </div>
  );
}

export default App;

