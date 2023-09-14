import { showDays } from "./dayView.js";

const years = document.getElementById('years');
const months = document.querySelectorAll('.monthCalendar')
const monthsArr = Array.from(months);
export function hideAllMonths(){
    for (const month of monthsArr) {
        const yearName = month.querySelector("caption");
        month.style.display = "none";
        yearName.addEventListener("click", ()=>{
            month.style.display = "none";
            years.style.display = "block";
        });
        const monthNames = month.querySelectorAll('td');
        for (const monthName of monthNames) {
            const monthText = monthName.querySelector('.date').textContent;
            const yearText = yearName.textContent;
            monthName.addEventListener("click", (event) => {
                //console.log("Maika ti");
                showDays(event, monthText, yearText)
            });
            //console.log(yearName.textContent);
        }

        //console.log(monthNames.parentelement);
    };
};


export function displayMonth (yearName){
    //display selected month
    const currentMonth = document.getElementById(`year-${yearName}`)
    currentMonth.style.display = "block"

    //Hide years table
    years.style.display = "none";

    //return console.log(yearName);
};

//export {displayMonth}
