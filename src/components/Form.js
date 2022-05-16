import './Form.scss';

export default function Form() {
  return (
      <form id='user-form' action='./#'>
        <div className='wrapper'>
          <label htmlFor='ftext'>Say something:</label>
          <textarea rows = "5" cols = "60" name = "description"></textarea>
          <button onClick={() => console.log('tester')}>submit</button>
        </div>
      </form>
  );
}