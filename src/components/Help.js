import './Help.scss';
import { pickPrompt } from '../helpers/pickPrompt.js';

export default function Help(props) {

  return (
    <div className='help-container'>
      <button onClick={() => pickPrompt()}>type for me</button>
    </div>
  );
}