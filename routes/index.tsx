import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ContainerCard from "../components/ContainerCard.tsx";
import { getCharacters } from "../utils/harry_API.ts";
import { Character_API } from "../utils/types.ts";

export const handler:Handlers = {
  GET: async(_req:Request, ctx:FreshContext<unknown, Character_API[]>) => {
    const character = await getCharacters()
    return ctx.render(character)
  }
}


export default function Home(props:PageProps<Character_API[]>) {
  return <ContainerCard characters={props.data}/>
}
