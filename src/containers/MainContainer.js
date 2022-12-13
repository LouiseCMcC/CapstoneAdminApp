import { useState, useEffect } from "react";
import IslandForm from "../components/IslandForm";

const MainContainer = () => {
 const[islands, setIslands] = useState([]);
 const[chosenIsland, setChosenIsland] = useState('');

 useEffect(()=> {
    fetchIslands();
 }, [])

 const fetchIslands = () => {
    fetch('http://localhost:8080/questionislands')
    .then(res => res.json)
    .then(
        console.log("HERE"),
        islands => setIslands(islands))
 }

 const onFormSubmit = (islandChosen) => {
    setChosenIsland(islandChosen)
 }

 if(!islands){
    return(
    <>
    <h1>Loading...</h1>
    </>
    )
}
 else {
 return (
    <>
    <IslandForm islands={islands} onFormSubmit={onFormSubmit}/>
    </>
 )
}
}

export default MainContainer;