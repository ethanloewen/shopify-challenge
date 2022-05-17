import './Form.scss';
import $ from 'jquery';

export default function Form() {

  const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };

  // submit the text area value
  const submitText = (e) => {
    e.preventDefault();
    const text = $('#user-text').val();
    console.log(text);

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
    .then(data => console.log('data', data.choices[0].text));

  //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
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