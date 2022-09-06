import { faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Apresent(props) {

  
    return (
      <div className="card item exc">
        {props.text ? props.text : "Digite algo..."}
        <div>
          <button className="btn"><FontAwesomeIcon icon={faCircleCheck} /></button>
          <button className="btn"><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    )
  

}

export default Apresent;