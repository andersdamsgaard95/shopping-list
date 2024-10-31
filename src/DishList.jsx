//  IMPORTS
import { useState } from 'react';
import './DishList.css';

//  TASKLIST COMPONENT
export default function DishList({ listHeading, mealList, setMealList, exportMeal, possibleToPrioritize }) {

    //  STATE VARIABLES
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedDish, setEditedDish] = useState('');
    const [editedRecipe, setEditedRecipe] = useState('');
    const [editedRecipeLink, setEditedRecipeLink] = useState('');
    const [whichDayToAddSavedMealTo, setWhichDayToAddSavedMealTo] = useState('Monday');
    
    //  EVENT HANDLERS
    function deleteDish(taskIndex) {
        setMealList((prev) => {
            return prev.filter((_, index) => taskIndex !== index);
        })
    }
    function editDish(taskIndex) {
        setEditingIndex(taskIndex);
        setEditedDish(mealList[taskIndex].dish);
        setEditedRecipe(mealList[taskIndex].recipe);
        setEditedRecipeLink(mealList[taskIndex].recipeLink);
    }
    function handleEditChange(event) {
        switch(event.target.name) {
            case 'editedDish':
                setEditedDish(event.target.value);
                break;
            case 'editedRecipe':
                setEditedRecipe(event.target.value);
                break;
            case 'editedRecipeLink':
                setEditedRecipeLink(event.target.value);
                break;
        }
    }
    function handlePriorityChange(event, index) {
        const { name, value } = event.target;

        setMealList((prev) => 
            prev.map((item, i) => 
                i === index ? { ...item, [name]: value } : item
            ));
    }
    function saveEdit(taskIndex) {
        setMealList((prev) => {
            return prev.map((item, index) => 
                (taskIndex === index ? {...item, dish: editedDish, recipe: editedRecipe, recipeLink: editedRecipeLink} : item))
        });

        setEditingIndex(null);
        setEditedDish('');
        setEditedRecipe('');
        setEditedRecipeLink('');
    }
    function handleDayChoice(event) {
        setWhichDayToAddSavedMealTo(event.target.value);
    }


    //  RETURN STATEMENT
    return (
        <ul>
            <h2>{listHeading}</h2>
            {
                mealList.map((recipeItem, index) => (

                    <li key={index}>
                    
                        {editingIndex === index ? (
                            <div className='editing-layout'>
                                <div className='edit-fields'>
                                    <input
                                        name='editedDish' 
                                        type="text"
                                        value={editedDish}
                                        onChange={handleEditChange} 
                                    />
                                    <textarea
                                        name='editedRecipe' 
                                        type="text"
                                        value={editedRecipe}
                                        onChange={handleEditChange} 
                                    />
                                    <input
                                        name='editedRecipeLink' 
                                        type="text"
                                        value={editedRecipeLink}
                                        onChange={handleEditChange} 
                                    />
                                </div>
                                <button onClick={() => saveEdit(index)}>Save</button>
                            </div>
                        ) : 
                        ( 
                            <div className='saved-layout'>
                                <div className='saved-dish-text'>
                                    <p className='dish-heading'>{recipeItem.dish}</p>
                                    <p>Own recipe:<br/>{recipeItem.recipe}</p>
                                    <p>Link to recipe:<br/>{recipeItem.recipeLink}</p>
                                    {/* PRIORITIZE */}                                
                                    {
                                        possibleToPrioritize && (
                                            <div>
                                                <label htmlFor="healthPriority">
                                                    Rate how healthy this meal is from 1-5:
                                                    <input 
                                                        id='healthPriority'
                                                        type="number"
                                                        min="1" max="5"
                                                        value={recipeItem.healthPriority || ''}
                                                        onChange={(e) => handlePriorityChange(e, index)}
                                                        name='healthPriority'
                                                    /> 
                                                </label>
                                                <label htmlFor="pricePriority">
                                                    How expensive is this meal approx to cook?
                                                    <input 
                                                        id="pricePriority"
                                                        type="number"
                                                        value={recipeItem.pricePriority || ''}
                                                        onChange={(e) => handlePriorityChange(e, index)}
                                                        name="pricePriority"
                                                    />
                                                </label>
                                            </div>                                          
                                        )
                                    }
                                </div>
                                <div>
                                    <button onClick={() => editDish(index)}>Edit</button>
                                    <button onClick={() => deleteDish(index)}>Delete dish</button>
                                    {!possibleToPrioritize ? 
                                        <button onClick={() => exportMeal(index)}>Save meal</button> :
                                        <label htmlFor='chooseDay'>
                                            Add meal to a day of the week:
                                            <select 
                                            name="chooseDay" 
                                            id="chooseDay"
                                            value={whichDayToAddSavedMealTo}
                                            onChange={handleDayChoice}>                                 
                                                <option value='Monday'>Monday</option>
                                                <option value='Tuesday'>Tuesday</option>
                                                <option value='Wednesday'>Wednesday</option>
                                                <option value='Thursday'>Thursday</option>
                                                <option value='Friday'>Friday</option>
                                                <option value='Saturday'>Saturday</option>
                                                <option value='Sunday'>Sunday</option>
                                            </select>
                                            <button onClick={() => exportMeal(index, whichDayToAddSavedMealTo)}>Add meal to day</button>
                                        </label>
                                    }
                                </div>
                            </div>)}

                    </li>

                ))
            }
        </ul>
    )
}