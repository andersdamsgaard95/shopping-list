//  IMPORTS
import { useState } from 'react';
import './DishList.css';

//  TASKLIST COMPONENT
export default function DishList({ taskList, setTaskList }) {

    //  STATE VARIABLES
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedDish, setEditedDish] = useState('');
    const [editedRecipe, setEditedRecipe] = useState('');
    const [editedRecipeLink, setEditedRecipeLink] = useState('');
    
    //  EVENT HANDLERS
    function deleteDish(taskIndex) {
        setTaskList((prev) => {
            return prev.filter((_, index) => taskIndex !== index);
        })
    }
    function editDish(taskIndex) {
        setEditingIndex(taskIndex);
        setEditedDish(taskList[taskIndex].dish);
        setEditedRecipe(taskList[taskIndex].recipe);
        setEditedRecipeLink(taskList[taskIndex].recipeLink);
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
    function saveEdit(taskIndex) {
        setTaskList((prev) => {
            return prev.map((item, index) => 
                (taskIndex === index ? {...item, dish: editedDish, recipe: editedRecipe, recipeLink: editedRecipeLink} : item))
        });

        setEditingIndex(null);
        setEditedDish('');
        setEditedRecipe('');
        setEditedRecipeLink('');
    }


    //  RETURN STATEMENT
    return (
        <ul>
            {
                taskList.map((recipeItem, index) => (

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
                                </div>
                                <div>
                                    <button onClick={() => deleteDish(index)}>Delete dish</button>
                                    <button onClick={() => editDish(index)}>Edit</button>
                                </div>
                            </div>)}

                    </li>

                ))
            }
        </ul>
    )
}