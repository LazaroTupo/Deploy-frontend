import Day from "./Day.jsx";

import { getWeekDay, equalsDates } from "../helpers/helpers.js";

import "../css/daysCarousel.css"

export default function DaysCarousel({dates}) {
    return (
        <div className="days-carousel semana">
            {dates.map((date) => {
                return <Day key={date.toString()} active={equalsDates(date, new Date())}>{getWeekDay(date.getDay())}<br/>{date.getDate()}</Day>
            })} 
        </div>
    );
}