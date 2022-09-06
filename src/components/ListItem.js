import { faTrash, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card"

function DoneImgs(props) {
  if (props.done) {
    return (
      <FontAwesomeIcon icon={faCircleXmark} className="icon" />
    )
  } else {
    return (
      <FontAwesomeIcon icon={faCircleCheck} />
    )
  }
}

function ListItem(props) {

  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"} >
        {props.item.text}
        <div>
          <button onClick={() => { props.onDone(props.item) }} className="btn"><DoneImgs done={props.item.done} /></button>
          <button onClick={() => { props.deleteItem(props.item.id) }} className="btn"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </Card>
    </li>
  );

}


export default ListItem;