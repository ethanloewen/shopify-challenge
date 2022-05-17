import './ResponseList.scss';
import Response from './Response';

export default function ResponseList(props) {

  const prompts = props.latestInput || ['empty prompt'];
  const responses = props.latestOutput || ['empty response'];

  const formattedResponse = responses.map((res, index) => {
    return <Response key={index} input={prompts[index]} output={res} />
  });

  return (
    <section id='response-list'>
      {/* <Response input={props.latestInput} output={props.latestOutput} /> */}
      {formattedResponse.reverse()}
    </section>
  );
}