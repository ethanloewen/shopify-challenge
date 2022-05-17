import './Form.scss';
import $ from 'jquery';

export default function Form(props) {

  // submit the text area value
  const submitText = (e) => {
    e.preventDefault();
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

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        // Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('data', data.choices[0].text);
      props.setLatestInput(userText);
      props.setLatestOutput(data.choices[0].text);
    });
  };

  return (
      <form id='user-form' action='./#'>
        <div className='wrapper'>
          <label htmlFor='ftext'>Say something:</label>
          <textarea id='user-text' rows = "5" cols = "60" name = "description"></textarea>
          <button onClick={(e) => submitText(e)}>submit</button>
        </div>
      </form>
  );
}