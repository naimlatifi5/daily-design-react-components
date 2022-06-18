import React, {useContext} from "react"
//import { ColorContext } from "../useContextAPI/ColorContext";
import Skeleton from "./Skeleton";
const Card = ( {title, body, isEmpty} ) => {
    //const colors = useContext(ColorContext)
    return (
        <>
        {
        isEmpty ? <Skeleton /> : <div className="card"> 
          <h2>{title}</h2>
          <p>{body}</p>
            </div>
        }
      </>
    )
}

export default Card




