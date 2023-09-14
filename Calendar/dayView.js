const days = document.querySelectorAll(".daysCalendar");
let selectedMonth;
const monthLibrary = {
    "Jan": 1, 
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12,
};

export function hideAllDays (){
    for (const day of days) {
        const monthCaption = day.querySelector('caption')
        day.style.display = "none";
        monthCaption.addEventListener('click', ()=>{
            day.style.display = "none";
            selectedMonth.style.display = "block";
        });
    };
};

export function showDays(event, month, selectedYear){
    const target = event.target;
    const daysOfMonth = document.getElementById(`month-${selectedYear}-${monthLibrary[month]}`);
    
    daysOfMonth.style.display = "block";
    selectedMonth = document.getElementById(`year-${selectedYear}`);
    selectedMonth.style.display = "none"
};
