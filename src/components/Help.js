import './Help.scss';
// import { setPrompt } from '../helpers/pickPrompt.js';

export default function Help(props) {

  return (
    <div className='help-container'>
      <button onClick={() => props.setPrompt()}>type for me</button>
    </div>
  );
}