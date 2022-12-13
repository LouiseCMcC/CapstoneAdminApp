import React, { useState } from 'react';

const QuestionForm = ({islands, chosenIsland, allQuestions, onQuestionFormSubmit}) => {
    const[questionChoice, setQuestionChoice] = useState('');

    const handleQuestionChoiceChange = (event) => {
        setQuestionChoice(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const payload = {
            questionChoice
        }

        console.log("payload : " + payload);

        onQuestionFormSubmit(payload);
        resetForm();
    }

    const resetForm = () => {
        setQuestionChoice('')
    }

    // const questions = chosenIsland['questions'];
    // console.log("questions : " + questions);

    // console.log("chosenIsland : " + chosenIsland);

    // console.log("chosenIsland['id'] : " + chosenIsland['id']);
    // console.log("chosenIsland[0] : " + chosenIsland[0]);
    // console.log("chosenIsland[1] : " + chosenIsland[1]);


    // console.log("chosenIsland.language : " + chosenIsland.language);

    // console.log("chosenIsland[islandChoice] : " + chosenIsland['islandChoice']);


    // console.log("chosenIsland[islandChoice][0]['questions'] : " + chosenIsland['islandChoice'][0]['questions']);



    // console.log("chosenIsland[islandChoice][0] : " + chosenIsland['islandChoice'][0]);


    // console.log("chosenIsland[islandChoice][1] : " + chosenIsland['islandChoice'][1]);


    // console.log("chosenIsland[islandChoice][1] : " + chosenIsland['islandChoice'][2]);


    // console.log("chosenIsland[islandChoice][3] : " + chosenIsland['islandChoice'][3]);

    // for (var key in allQuestions) {
    //     console.log("key : " + key);
    // }

    console.log("allQuestions : " + allQuestions);
    
// allQuestions FILTER
    const questionChoices = allQuestions.map((question) => {
        return (
            <option value={question}>{question['question_text']}</option>
        )
    })

    return (
        <>
        
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="questionChoice">Island: </label>
            <select name="questionChoice" value={questionChoice} onChange={handleQuestionChoiceChange}>
                <option value="" disabled>Choose...</option>
            {questionChoices}
            </select>

            <input type="submit" value="Save" />

        </form>
        </>
    )
}

export default QuestionForm;