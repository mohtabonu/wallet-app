

const slider=document.getElementById("slider") as HTMLInputElement;
const display=document.getElementById("value") as HTMLDivElement;
const bodyColor=document.getElementById('bodyColor') as HTMLBodyElement;


if (slider && display) {
  slider.addEventListener("input", (e) => {
    e.preventDefault()
    const value=slider.value;
    display.textContent=`Value:${value} %`;
    bodyColor.style.backgroundColor=`hsl(180,${value}%, ${value}%)`
  });
}



