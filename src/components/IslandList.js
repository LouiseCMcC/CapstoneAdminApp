import React from "react";

const IslandList = ({islands}) => {

    const islandsItems = islands.map((island) => {
        return <islandItem island={island}/>
    })

}

export default IslandList