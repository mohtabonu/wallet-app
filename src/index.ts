import { hours, minutes, day, month, year } from "./time";
import { timeElements, dateElements } from "./elements";

timeElements.forEach(elm => {
    elm.textContent = `${hours}:${minutes}`;
})
dateElements.forEach(date => {
    date.textContent = `Today, ${day} ${month} ${year}`
});