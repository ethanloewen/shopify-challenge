import './Form.scss';
import $ from 'jquery';

export default function Form(props) {

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
    //  "https://api.openai.com/v1/engines/text-curie-001/completions"

    fetch("https://api.openai.com/v1/engines/text-babbage-001/completions", {
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
      props.setLoading(false);
      console.log('data', data.choices[0].text);
      props.setLatestInput(prev => [...prev, userText]);
      props.setLatestOutput(prev => [...prev, data.choices[0].text]);
    });
  };

  return (
      <form id='user-form' action='./#'>
        <div className='wrapper'>
          <label htmlFor='ftext'>Say something to OpenAI:</label>
          <textarea id='user-text' rows = "5" cols = "60" name = "description"></textarea>
          <button onClick={(e) => submitText(e)}>submit</button>
        </div>
      </form>
  );
}