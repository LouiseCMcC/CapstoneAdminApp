import React, { useState } from 'react';

const IslandForm = ({islands, onIslandFormSubmit}) => {
    const[islandChoice, setIslandChoice] = useState('');

    const handleIslandChoiceChange = (event) => {
        setIslandChoice(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const payload = {
            islandChoice
        }
        onIslandFormSubmit(payload);
        resetForm();
    }

    const resetForm = () => {
        setIslandChoice('')
    }

    const islandChoices = islands.map((island) => {
        return (
            <option value={island['id']}>{island['name']}</option>
        )

        //<option value={island}>{island['name']}</option>
    })

    return (
        <>
        
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