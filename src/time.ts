

const currentTime = new Date();
export const hours = currentTime.getHours(); 
export const minutes = currentTime.getMinutes(); 
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

export const day = currentTime.getDate().toString().padStart(2, '0'); 
export const month = months[currentTime.getMonth()]; 
export const year = currentTime.getFullYear(); 





