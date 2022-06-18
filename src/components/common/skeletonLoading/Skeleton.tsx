
import React, { useContext } from "react"
//import { ColorContext } from "../context/ColorContext";
const Skeleton = () => {
   // const colors = useContext(ColorContext)
    return (
      <div className="card skeleton">
          <div className="title text"></div>
          <div className="description text"></div>
          <div className="description text"></div>
          <div className="description text"></div>
          <div className="overlay"></div>
      </div>
    )
}

export default Skeleton
