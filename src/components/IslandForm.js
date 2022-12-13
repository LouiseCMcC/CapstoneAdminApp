import React, { useState } from 'react';

const IslandForm = ({islands, onFormSubmit}) => {
    const[islandChoice, setIslandChoice] = useState('');

    const handleIslandChoiceChange = (event) => {
        setIslandChoice(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const payload = {
            islandChoice
        }
        onFormSubmit(payload);
        resetForm();
    }

    const resetForm = () => {
        setIslandChoice('')
    }

    const islandChoices = islands.map((island) => {
        return (
        <option value={island}>{island['name']}</option>
        )
    })

    return (
        <>
        {islands}
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="islandChoice">Island: </label>
            <select name="islandChoice" value={islandChoice} onChange={handleIslandChoiceChange}>
                <option value="" disabled>Choose...</option>
            {islandChoices}
            </select>

            <input type="submit" value="Save" />

        </form>
        </>
    )
}

export default IslandForm;