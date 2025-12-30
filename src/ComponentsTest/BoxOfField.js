
import '../App.css';
import '../index.css';
// Controlled Box: receives `value` and `onClick` from parent Field
export function BoxOfField({ id, value, onClick }) {
  return (
    <div className="containerOfBoxField" id={"blockId-" + id} onClick={value ? undefined : onClick}>
      <p className="textOfBox">{value}</p>
    </div>
  );
}