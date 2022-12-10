import React from 'react';

const Form = ({input, setInput, todos, setTodos, setStatus}) => {

    const handleChange = (e) => {
         setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: input,
                completed: false,
                id: Math.random()*1000
            }
        ]);
        setInput('');
    };

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input 
                onChange={handleChange} 
                value={input} 
                type='text' 
                className='todo-input' 
            />
            <button 
                onClick={handleSubmit} 
                className='todo-button' 
                type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select 
                        onChange={handleStatus}
                        name='todos' 
                        className='filter-todo'>
                            <option value='all'>all</option>
                            <option value='completed'>completed</option>
                            <option value='uncompleted'>uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;