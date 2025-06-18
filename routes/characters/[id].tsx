import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import DetailCard from "../../components/DetailCard.tsx";
import { getCharactersID } from "../../utils/harry_API.ts";
import { Character_API } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown,Character_API>) => {
        const { id } = ctx.params
        const character = await getCharactersID(id)
        return ctx.render(character)
    }
}

export default (props:PageProps<Character_API>) => {
    return <DetailCard character={props.data}/>
}