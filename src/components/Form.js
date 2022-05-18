import './Form.scss';
import $ from 'jquery';
import { useState } from 'react';
import Dropdown from './Dropdown';


export default function Form(props) {
  const [engineName, setEngineName] = useState('Curie');
  const [engineId, setEngineId] = useState('text-curie-001');

  console.log('API', process.env.OPENAI_SECRET);

  // submit the text area value
  const submitText = (e) => {
    e.preventDefault();
    // run loading animation
    props.setLoading(true);
    const userText = $('#user-text').val();
    console.log(userText);

    const data = {
      prompt: userText,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    
    const URL = `https://api.openai.com/v1/engines/${engineId}/completions`;
    console.log(URL);

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      props.setLoading(false);
      console.log('data', data.choices[0].text);
      props.setLatestInput(prev => [...prev, userText]);
      props.setLatestOutput(prev => [...prev, data.choices[0].text]);
    });
  };

  return (
      <form id='user-form' action='./#'>
        <div className='wrapper'>
          <div id='header-wrap'>
            <label htmlFor='ftext'>Say something to OpenAI:</label>
            <Dropdown id='drop' engineName={engineName} setEngineName={setEngineName} engineId={engineId} setEngineId={setEngineId} />
          </div>
          <textarea id='user-text' rows = "5" cols = "60" name = "description"></textarea>
          <button onClick={(e) => submitText(e)}>submit</button>
        </div>
      </form>
  );
}