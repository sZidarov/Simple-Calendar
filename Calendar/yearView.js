import { displayMonth } from "./monthVeiw.js";

const years = document.getElementById('years');


export function displayMonthOfYear(){
    const yearTr = years.querySelectorAll(".day");
    for (const year of yearTr) {
        const yearName = year.querySelector('.date').textContent;
        year.addEventListener("click", displayMonth.bind(null, yearName));
    };
    //console.log(years);
}

//export {displayYears}