import { useState } from 'react';
import './DishInput.css';

export default function DishInput({ setTaskList }) {

    const [dish, setDish] = useState('');
    const [recipe, setRecipe] = useState('');
    const [recipeLink, setRecipeLink] = useState('');

    function handleChange(event) {
        switch(event.target.name) {
            case 'dish':
                setDish(event.target.value);
                break;
            case 'recipe':
                setRecipe(event.target.value);
                break;
            case 'recipeLink':
                setRecipeLink(event.target.value);
                break;
        }
    }
    function handleSubmit(event) {
        event.preventDefault();

        setTaskList( (prev) => [
            {dish, recipe, recipeLink},
            ...prev
        ]);

        setDish('');
        setRecipe('');
        setRecipeLink('');
    }

    return (
        <div className='dish-input-container'>
            <h1>Tilføj ny opskrift</h1>
            <form className='add-dish-form' onSubmit={handleSubmit}>
                <input
                    name='dish'
                    value={dish}
                    onChange={handleChange}
                    type='text'
                    placeholder='Add dish'
                    required
                />
                <textarea
                    name='recipe'
                    type='text-area'
                    value={recipe}
                    placeholder='Add your own unique recipe'
                    onChange={handleChange}
                />
                <input
                    name='recipeLink'
                    type="text"
                    value={recipeLink}
                    placeholder='Add a link to your favorite recipe'
                    onChange={handleChange}
                />
                <button type='submit'>Add recipe</button>
            </form>
        </div>
    )
}