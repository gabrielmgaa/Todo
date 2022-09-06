import Card from "./Card.js";

function Modal(props) {

  function hideModal(e){
    let target = e.target.id;
    if (target == "modal") {
      props.onHideModal();
    }
  }

  return (
    <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
      <Card className="card-modal">
        {props.children}
      </Card>
    </div>
  )
}

export default Modal;