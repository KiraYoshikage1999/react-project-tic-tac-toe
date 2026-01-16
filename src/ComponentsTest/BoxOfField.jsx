
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

// DevelCom: Сотру позже. Этот компонент является состовляющией большего компонента Field,
//  в него передается идентификатор, значение и callback функция.
// возвращает он контейнер , с айди который мы передали и 
// функцией на нажатие в которой условием мы выясняем есть ли
// ,что-то в value и вызываем callback функцию
// В контейнере мы записывает обычный текст с значением который мы передаем в этот компонент.

