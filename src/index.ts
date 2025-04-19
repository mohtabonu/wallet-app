import { hours, minutes, day, month, year } from "./time";
import { timeElement, dateElements } from "./elements";

timeElement.textContent = `${hours}:${minutes}`;
dateElements.forEach(date => {
    date.textContent = `Today, ${day} ${month} ${year}`
});