import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
    id: string
}
const Star:FunctionalComponent<Data> = (props) => {

    const [Fav, setFav] = useState<boolean>(false)

    const addFav = () => {
        const almacen:string[] = []

        const cookie = document.cookie.split("; ").find(e => e.startsWith("favorites="))

        if(!Fav) {
            if(!cookie) almacen.push(props.id)
            else {
                const value = JSON.parse(decodeURIComponent(cookie.split("=")[1])) as Array<string>
                almacen.push(...value, props.id)
            }
        } else {
            if(cookie) {
                const value = JSON.parse(decodeURIComponent(cookie.split("=")[1])) as Array<string>
                const aux = value.filter(e => e !== props.id)
                almacen.push(...aux)
            }
        }

        const date = new Date()
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000))
        document.cookie = `favorites=${encodeURIComponent(JSON.stringify(almacen))};Expires=${date.toUTCString()};Path=/`
        setFav(!Fav)
    }

    useEffect(() => {
        const cookie = document.cookie.split("; ").find(e => e.startsWith("favorites="))
        if(cookie) {
            const value = JSON.parse(decodeURIComponent(cookie.split("=")[1])) as Array<string>
            if(value.some(e => e === props.id)) setFav(true)
        }
    },[])

    return (
        <span onClick={addFav} style={Fav ? "color: gold;cursor:pointer;" : "cursor:pointer"}>★</span>
    )
}

export default Star