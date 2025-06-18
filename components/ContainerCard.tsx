import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character_API } from "../utils/types.ts";
import Star from "../islands/Star.tsx";

type Data = {
    characters: Character_API[]
}

const ContainerCard:FunctionalComponent<Data> = (props) => {
    return (
        <div class="grid">
            {props.characters.map(e => 
                <div key={e.id} class="card">
                    <a href={`characters/${e.id}`}>
                        <img src={e.image} alt={e.name} width="100px"/>
                    </a>
                    <div class="card-info">
                        <a href={`characters/${e.id}`} class="name">{e.name}</a>
                        <Star id={e.id}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContainerCard