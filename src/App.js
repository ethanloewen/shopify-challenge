import './App.scss';
import React, {useState} from 'react';
import Form from './components/Form';
import ResponseList from './components/ResponseList';

function App() {
  const [latestInput, setLatestInput] = useState([]);
  const [latestOutput, setLatestOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Form setLatestOutput={setLatestOutput} setLatestInput={setLatestInput} setLoading={setLoading} />
      <ResponseList latestInput={latestInput} latestOutput={latestOutput} loading={loading} />
    </div>
  );
}

export default App;

