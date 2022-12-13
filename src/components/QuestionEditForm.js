import React, { useState } from 'react';

const QuestionEditForm = ({chosenIsland, chosenQuestion, allQuestions, islands}) => {


    const postQuestion = (payload) => {

        console.log( "payload['question_text'] : " + payload['question_text']);


        console.log( "payload.question_text : " + payload.question_text);

        console.log( "payload: " + payload);

        for (var key in payload) {
            console.log("key : " + key);
        }

        const baseURL = 'http://localhost:8080/questions/';
        return fetch(baseURL, {
            method: 'PUT',
            body: {
                "id": 1,
                "questionIsland": {
                "id": 1,
                "language": "Python",
                "name": "Outputs and Variables"
                },
                "question_position": 1,
                "question_type": "multiple_choice",
                "question_text": "Please output the question changing:",
                "question_code": "_____('Hello')",
                "points_value": 10,
                "response1": "print",
                "response2": "console",
                "response3": "system.out",
                "response4": "output",
                "correct_response": 1
                },
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }

    const [formData, setFormData] = useState({});

    const[questionChoice, setQuestionChoice] = useState('');
    const[questionTextChoice, setQuestionTextChoice] = useState('Output the string:');


    const handleQuestionTextChange = (event) => {
        setQuestionTextChoice(event.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newFormData={}
        newFormData["question_position"]=formData.question_position;
        newFormData["question_type"]=formData.question_type;
        newFormData["question_text"]=formData.question_text;
        postQuestion(newFormData)
        // .then((data) => {
        //     addQuestion(data);
        // });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return(
        <>
        

        <form onSubmit={handleFormSubmit}>

            <label htmlFor="question_position">Question Position:</label>
            <input onChange={onChange} type="text" id="question_position"  value="1" required/>

            <label htmlFor="question_type">Q type : </label>
            <select name="question_type" value="question_type" onChange={onChange}>
                <option value="multiple_choice">multiple_choice</option>
                <option value="fill_blank">fill_blank</option>
                <option value="text_input">text_input</option>
            </select>

            <label htmlFor="question_text">Text</label>
            <input onChange={handleQuestionTextChange} type="text" id="question_text" value={questionTextChoice} required/>

            <label htmlFor="question_code">Q Code</label>
            <input onChange={onChange} type="text" id="question_code" value="_____('Hello')" required/>

            <label htmlFor="respose1">response1</label>
            <input onChange={onChange} type="text" id="respose1" value="print" required/>

            <label htmlFor="respose2">response2</label>
            <input onChange={onChange} type="text" id="respose2" value="console" required/>

            <label htmlFor="respose3">response2</label>
            <input onChange={onChange} type="text" id="respose3" value="system.out" required/>

            <label htmlFor="respose4">response2</label>
            <input onChange={onChange} type="text" id="respose4" value="output" required/>

            <label htmlFor="correct_response">response2</label>
            <input onChange={onChange} type="text" id="correct_response" value="1" required/>

            <input type="submit" value="Save" />

        </form>
        </>
    )
}

export default QuestionEditForm;