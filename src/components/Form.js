import './Form.scss';
import $ from 'jquery';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Help from './Help';

export default function Form(props) {
  const [engineName, setEngineName] = useState('Curie');
  const [engineId, setEngineId] = useState('text-curie-001');

  // set random prompt for user
  const setPrompt = () => {
    const prompts = ['How far away is the moon?', 'Write me a song about a tree', 'How old is the earth?', 'Pick a number between 1 and 100', 'What time is it in Japan?'];
  
    const rand = Math.floor(Math.random() * (prompts.length));
    $('#user-text').val(prompts[rand]);
    console.log(prompts[rand]);
  };

  // submit the text area value
  const submitText = (e) => {
    e.preventDefault();
    // run loading animation
    props.setLoading(true);
    const userText = $('#user-text').val();
    console.log(userText);

    // config for openAI
    const data = {
      prompt: userText,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    
    const URL = `https://api.openai.com/v1/engines/${engineId}/completions`;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // for heroku
        // Authorization: `Bearer ${process.env.REACT_APP_SECRET}`,

        // for localhost
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      props.setLoading(false);
      // console.log('data', data.choices[0].text);
      $('#user-text').val('');
      props.setLatestInput(prev => [...prev, userText]);
      props.setLatestOutput(prev => [...prev, data.choices[0].text]);
    });
  };

  return (
    <>
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
      <Help setPrompt={setPrompt} />
    </>
  );
}