import { Character_API } from "./types.ts";

export const getCharacters = async():Promise<Character_API[]> => {
    const data = await fetch("https://hp-api.onrender.com/api/characters")
    const result: Character_API[] = await data.json()
    const resultFinal:Character_API[] = result.map(e => ({
        id: e.id,
        name: e.name,
        image: e.image ? e.image : "https://ordinaria-limonera.deno.dev/no-image.jpg?__frsh_c=34f676c81b05e1f573aa6867cbfe80be3288b355",
        house: e.house,
        alive: e.alive
    })) 
    return resultFinal
}

export const getCharactersID = async(id: string):Promise<Character_API> => {
    const data = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
    const result: Character_API[] = await data.json()
    return ({
        id: result[0].id,
        name: result[0].name,
        image: result[0].image ? result[0].image : "https://ordinaria-limonera.deno.dev/no-image.jpg?__frsh_c=34f676c81b05e1f573aa6867cbfe80be3288b355",
        house: result[0].house,
        alive: result[0].alive
    })
}