import './ResponseList.scss';
import Response from './Response';
import Loading from './Loading';

export default function ResponseList(props) {

  const prompts = props.latestInput || [];
  const responses = props.latestOutput || [];

  const formattedResponse = responses.map((res, index) => {
    return <Response key={index} input={prompts[index]} output={res} />
  });

  return (
    <section id='response-list'>
      <Loading loading={props.loading} />
      {/* <Response input={props.latestInput} output={props.latestOutput} /> */}
      {formattedResponse.reverse()}
    </section>
  );
}