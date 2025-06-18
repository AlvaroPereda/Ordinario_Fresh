import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "@std/http/cookie"
import { Character_API } from "../utils/types.ts";
import { getCharactersID } from "../utils/harry_API.ts";
import ContainerCard from "../components/ContainerCard.tsx";

export const handler:Handlers = {
    GET : async(req:Request, ctx:FreshContext<unknown, Character_API[]>) => {
        const cookie = getCookies(req.headers)
        if(cookie.favorites) {
            const value = JSON.parse(decodeURIComponent(cookie.favorites)) as Array<string>
            const characters: Character_API[] = await Promise.all(value.map(async(e) => await getCharactersID(e)))
            return ctx.render(characters)
        }
        return ctx.render([])
    }
}

export default (props:PageProps<Character_API[]>) => {
    return <ContainerCard characters={props.data}/>
}