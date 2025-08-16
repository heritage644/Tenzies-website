export default function Die (props) {
const backgroundheld = {backgroundColor : "rgb(1, 106, 20)"}
const newChange = props.isHeld ? backgroundheld : null;

    return (
<>

    <button onClick={()=> props.hold(props.id)}
     style={newChange } 
     className="first"
     aria-pressed={props.isHeld}
     >


        {props.Value}
        </button>
    
     </>
    )
}