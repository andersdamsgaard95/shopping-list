import { useState } from 'react';

export default function TaskAdder({ kindOfTask, placeholder, setCalender }) {

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [calenderNote, setCalenderNote] = useState('');

    function handleChange(event) {
        switch (event.target.name) {
            case 'startTime':
                setStartTime(event.target.value);
                break;
            case 'endTime':
                setEndTime(event.target.value);
                break;
            case 'calenderNote':
                setCalenderNote(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setCalender((prev) => [
            ...prev,
            {startTime, endTime, kindOfTask, calenderNote}
        ])

        setStartTime('');
        setEndTime('');
        setCalenderNote('');
    }
    
    return (
        <section>
            <h3>When do you wanna {kindOfTask}?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="time"
                    value={startTime}
                    name='startTime'
                    onChange={handleChange}
                    required
                />
                <input 
                    type="time"
                    value={endTime}
                    name='endTime'
                    onChange={handleChange}
                />
                <input
                    name='calenderNote'
                    type="text"
                    value={calenderNote}
                    placeholder={placeholder}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Add to calender</button>
            </form>
        </section>
    )
}
