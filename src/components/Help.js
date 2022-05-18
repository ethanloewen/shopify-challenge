import './Help.scss';

export default function Help(props) {

  return (
    <div className='help-container'>
      <button onClick={() => props.setPrompt()}>type for me</button>
    </div>
  );
}