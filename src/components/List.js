import ListItem from "./ListItem"

function List(props) {

  return (
    <ul>
      {props.items.map(item =>
        <ListItem key={item.id} item={item} onDone={props.onDone} deleteItem={props.deleteItem} />
      )
      }
    </ul>
  );

}

export default List;