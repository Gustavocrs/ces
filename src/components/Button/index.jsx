import "./button.css";
export default function Button(props) {
  return (
    <button className="button" onClick={props.onClick} id={props.id}>
      {props.text}
    </button>
  );
}
