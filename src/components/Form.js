import './Form.scss';
import $ from 'jquery';

export default function Form() {

  const submitText = (e) => {
    e.preventDefault();
    const text = $('#user-text').val();
    console.log(text);
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