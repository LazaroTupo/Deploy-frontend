import Day from "./Day.jsx";

import { getWeekDay, equalsDates } from "../helpers/helpers.js";

import "../css/daysCarousel.css"

export default function DaysCarousel({dates, date ,handleDateClick}) {
    return (
        <div className="days-carousel">
            {dates.map((d) => {
                return <Day key={d.toString()} active={equalsDates(d, date)} date={d} handleDateClick={handleDateClick}>{getWeekDay(d.getDay())}<br/>{d.getDate()}</Day>
            })} 
        </div>
    );
}