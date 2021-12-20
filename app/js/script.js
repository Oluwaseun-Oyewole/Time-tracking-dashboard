const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
const daily = document.querySelector('.daily')
const themes = document.querySelectorAll('.theme')

const hours = document.querySelectorAll('.hour')
const durations = document.querySelectorAll('.duration')


async function fetchData() {
    const response = await fetch('./data.json');
    const data = await response.json();
    
    daily.addEventListener('click', (e) => {
        e.preventDefault()
        themes.forEach(theme => {
            for(let i=0; i<data.length; i++){

                hours[i].textContent = data[i].timeframes.daily.current + (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
                durations[i].textContent = "Yesterday-" + data[i].timeframes.daily.previous + (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
            }active(monthly, weekly, daily);
        })

        active(daily, monthly, weekly);
    })

    weekly.addEventListener('click', (e) => {
        e.preventDefault()
        themes.forEach(theme => {
            for(let i=0; i<data.length; i++){

                hours[i].textContent = data[i].timeframes.weekly.current + (data[i].timeframes.weekly.current > 1 ? "hrs" : "hr");
                durations[i].textContent = "Last Week - " + data[i].timeframes.weekly.previous + (data[i].timeframes.weekly.previous > 1 ? "hrs" : "hr");
            }
        })

        active(weekly, monthly, daily);
    })
    

    monthly.addEventListener('click', (e) => {
        e.preventDefault()

        themes.forEach(theme => {
            for(let i=0; i<data.length; i++){


                hours[i].textContent = data[i].timeframes.monthly.current + (data[i].timeframes.monthly.current > 1 ? "hrs" : "hr");
                durations[i].textContent = "Last Month - " + data[i].timeframes.monthly.previous + (data[i].timeframes.monthly.previous > 1 ? "hrs" : "hr");
            }
        })

        active(monthly, weekly, daily);
    })

}

fetchData();

function active(e, active1, active2) {
    active1.classList.remove("active");    
    active2.classList.remove("active");    
    e.classList.add("active");
}