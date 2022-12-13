import { useState, useEffect } from "react";
import IslandForm from "../components/IslandForm";
import IslandList from "../components/IslandList";
import QuestionForm from "../components/QuestionForm";
import QuestionEditForm from "../components/QuestionEditForm";

const MainContainer = () => {
    const[islands, setIslands] = useState();
    const[allQuestions, setAllQuestions] = useState();
    const[chosenIsland, setChosenIsland] = useState();
    const[chosenQuestion, setChosenQuestion] = useState();

    useEffect(()=> {
        fetchIslands();
        fetchAllQuestions();
    }, [])

    const fetchIslands = () => {
        fetch('http://localhost:8080/questionislands')
        .then(res => res.json())

        .then(islands => setIslands(islands))
    }

    const fetchAllQuestions = () => {
        fetch('http://localhost:8080/questions')
        .then(res => res.json())

        .then(questions => setAllQuestions(questions))
    }

    const onIslandFormSubmit = (islandChosen) => {
        setChosenIsland(islandChosen);
        console.log("islandChosen : " + islandChosen);
    }

    const onQuestionFormSubmit = (questionChosen) => {
        setChosenQuestion(questionChosen);
        console.log("questionChosen : " + questionChosen)
    }

    if(!islands || !allQuestions){
        return(
            <>
            <h1>Loading...</h1>
            </>
        )
    }
    else if(chosenQuestion)
    {
        return(
            <>
                <h1>WE HAVE CHOSEN A QUESTION</h1>
                <QuestionEditForm chosenIsland={chosenIsland} chosenQuestion={chosenQuestion} allQuestions={allQuestions} islands={islands} />
            </>
        )
    }
    else if(chosenIsland)
    {
        return(
            <>
                <h1>Here are some questions within this island...</h1>
                <QuestionForm islands={islands} chosenIsland={chosenIsland} allQuestions={allQuestions} onQuestionFormSubmit={onQuestionFormSubmit}/>
            </>
        )
    }
    else {

        
        return (
            <>
            <h1>IslandForm </h1>
            <IslandForm islands={islands}  onIslandFormSubmit={onIslandFormSubmit}/>
            {/* <IslandList islands={islands} /> */}
            </>
        )
    }
}

export default MainContainer;