import { useState } from 'react';

export default function Calender({ calender }) {

    return (
        <section>
            <h3>Calender</h3>
            <ul>
                {
                    calender.map((item, index) => (
                        <li>
                            <p>{item.time}</p>
                            <p>{item.kindOfTask}</p>
                            <p>{item.calenderNote}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}