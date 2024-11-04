import { useState, useEffect } from 'react';

export default function Calender({ calender, setCalender }) {

    //const [sortedCalender, setSortedCalender] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedStartTime, setEditedStartTime] = useState('');
    const [editedEndTime, setEditedEndTime] = useState('');
    const [editedNote, setEditedNote] = useState('');

    //  Sorting the calendar based on parsed start times
    const sortedCalender = [...calender].sort((a, b) => {
        const startA = new Date(`1970-01-01T${a.startTime}:00`);
        const startB = new Date(`1970-01-01T${b.startTime}:00`);
        return startA - startB;
    });

    function editCalender(calenderIndex) {
        setEditIndex(calenderIndex);
        setEditedStartTime(calender[calenderIndex].startTime);
        setEditedEndTime(calender[calenderIndex].endTime);
        setEditedNote(calender[calenderIndex].calenderNote);
    }

    function handleChange(event) {
        switch (event.target.name) {
            case 'editedStartTime':
                setEditedStartTime(event.target.value);
                break;
            case 'editedEndTime':
                setEditedEndTime(event.target.value);
                break;
            case 'editedCalenderNote':
                setEditedNote(event.target.value);
                break;
        }
    }

    function handleSubmit(calenderIndex) {
        setCalender((prev) => {
            return prev.map((item, index) => (
                calenderIndex === index ? {...item, startTime: editedStartTime, endTime: editedEndTime, calenderNote: editedNote} : item
            ));
        })
        setEditIndex(null);
        setEditedStartTime('');
        setEditedEndTime('');
        setEditedNote('');
    }

    function deleteCalenderItem(calenderIndex) {
        setCalender((prev) => {
            return prev.filter((_, index) => (
                calenderIndex !== index
            ));
        })
    }

    function resetCalender() {
        setCalender([]);
    }

    return (
        <section>
            <h3>Calender</h3>
            {calender.length > 0 && <button onClick={resetCalender}>Reset calender</button>}
            <ul>
                {
                    sortedCalender.map((item, index) => (
                        <li>
                            {editIndex === index ? (
                                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(index); }}>
                                    <input 
                                        type="time"
                                        value={editedStartTime}
                                        name='editedStartTime'
                                        onChange={handleChange}
                                        required
                                    />
                                    <input 
                                        type="time"
                                        value={editedEndTime}
                                        name='editedEndTime'
                                        onChange={handleChange}
                                    />
                                    <input
                                        name='editedCalenderNote'
                                        type="text"
                                        value={editedNote}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type='submit'>Save edit</button>
                                </form>
                            ) : (
                                <div>
                                    <p>{item.startTime} {item.endTime && `- ${item.endTime}`}</p>
                                    <p>{item.kindOfTask}</p>
                                    <p>{item.calenderNote}</p>
                                    <div>
                                        <button onClick={() => editCalender(index)}>Edit</button>
                                        <button onClick={() => deleteCalenderItem(index)}>delete</button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}