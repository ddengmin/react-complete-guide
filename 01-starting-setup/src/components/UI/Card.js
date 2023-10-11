import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
  //children은 예약어입니다.
}

export default Card;