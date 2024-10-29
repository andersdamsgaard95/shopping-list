import { useState } from 'react';

export default function TaskAdder({ kindOfTask, timeInputName, placeholder, setCalender }) {

    const [time, setTime] = useState(0);
    const [calenderNote, setCalenderNote] = useState('');

    function handleChange(event) {
        switch (event.target.name) {
            case timeInputName:
                setTime(event.target.value);
                break;
            case 'calenderNote':
                setCalenderNote(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setCalender((prev) => [
            ...prev,
            {time, kindOfTask, calenderNote}
        ])

        setTime(0);
        setCalenderNote('');
    }
    
    return (
        <section>
            <h3>When do you wanna {kindOfTask}?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="time"
                    value={time}
                    name={timeInputName}
                    onChange={handleChange}
                />
                <input
                    name='calenderNote'
                    type="text"
                    value={calenderNote}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <button type='submit'>Add to calender</button>
            </form>
        </section>
    )
}
