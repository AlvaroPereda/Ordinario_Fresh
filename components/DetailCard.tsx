import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character_API } from "../utils/types.ts";
import Star from "../islands/Star.tsx";

type Data = {
    character: Character_API
}

const DetailCard:FunctionalComponent<Data> = (props) => {
    return (
        <div class="detail">
            <img src={props.character.image} alt={props.character.name} />
            <h2>
                {props.character.name}
                <Star id={props.character.id}/>
            </h2>
            <p>Casa: {props.character.house}</p>
            <p>{props.character.alive ? "Vivo" : "Muerto" }</p>
            <a href="/">Volver</a>
        </div>
    )
}

export default DetailCard