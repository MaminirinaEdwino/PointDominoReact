import { useState } from "react"

export default function Player_component({
    name
}) {
    const [listPoint, setListPoint] = useState([0])
    const [point, setPoint] = useState(0)

    

    const handlePoint = (e)=>{
        
        if (listPoint[0] == 0) {
            var pointTotal = listPoint[0]+parseInt(point)
            setListPoint([pointTotal])
        }
        else{
            var pointTotal = listPoint[listPoint.length -1]+parseInt(point)
            setListPoint([...listPoint, pointTotal])
        }
    }
    return <article>
        <div>{name}</div>

        <div className="point_total">{listPoint.map((p, i)=><span key={i+name}>{p} <br></br></span>)}</div>
        <div className="addPoint">
            <input className="inputPoint" type="number" onInput={(e)=>{setPoint(e.target.value)}}/>
            {point>0&&point<120&&<button onClick={handlePoint}>Add</button>}
        </div>
    </article>
}