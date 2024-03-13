import { useState } from 'react'
import '/public/style/Card.css'
function Card(props) {
    //const [clicked, setClicked] = useState(false);

//console.log(props.isClicked);
    return (
        <div className="card">
            <img onClick={props.clickUpdate} name={props.name} data-value={props.isClicked} className="img" src={props.src} alt="" />
            <h3>{props.name}</h3>
        </div>
    )
}

export default Card;