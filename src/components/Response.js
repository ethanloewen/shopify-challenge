import './Response.scss';

export default function Response(props) {

  return (
    <div className='response-container'>
      <div className='response'>
        <div className='response-data'>
          <h1>{props.input}</h1>
          <p>{props.output}</p>
        </div>
      </div>
    </div>
  );
}