
import '../App.css';
import '../index.css';
// Components
import { BoxOfField } from './BoxOfField';

export function Field() {
  let arr=[];
    for(let i = 0; i < 9;i++) {
      arr.push(<BoxOfField key={i} id={i} />);
    }
  return(
    <div className="Field">
      {console.log("Field worked")}
      {arr}
    </div>
  );
}
