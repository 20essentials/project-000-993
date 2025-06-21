import '@/styles/StackCard.css';

interface Props {
  title: string;
  paragraph: string;
}

export function StackCard(props: Props) {
  const { paragraph, title } = props;
  return (
    <article className='stack-card'>
      <div className='card1'></div>
      <div className='card2'></div>
      <div className='card3'>
        <h3 className='am-h3'>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </article>
  );
}
