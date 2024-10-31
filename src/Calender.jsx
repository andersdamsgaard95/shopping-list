import { useState, useEffect } from 'react';

export default function Calender({ calender }) {

    const [sortedCalender, setSortedCalender] = useState([]);
    
    useEffect(() => {
        // Sorting the calendar based on parsed start times
        const sorted = [...calender].sort((a, b) => {
            const startA = new Date(`1970-01-01T${a.startTime}:00`);
            const startB = new Date(`1970-01-01T${b.startTime}:00`);
            return startA - startB;
        });
        setSortedCalender(sorted);
    }, [calender]);

    return (
        <section>
            <h3>Calender</h3>
            <ul>
                {
                    sortedCalender.map((item, index) => (
                        <li>
                            <p>{item.startTime} {item.endTime && `- ${item.endTime}`}</p>
                            <p>{item.kindOfTask}</p>
                            <p>{item.calenderNote}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}