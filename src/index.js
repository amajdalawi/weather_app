import './style.css'

let objM = (function() {
    function occupyData(jsonObj) {
        document.querySelector('div.cityname').textContent = jsonObj.name;
        document.querySelector('div.temp-result').textContent = `${Math.round(parseInt(jsonObj.main.temp, 10))}°C`;
        document.querySelector('div#feels-like-value').textContent = `${jsonObj.main.feels_like}°C`;
        document.querySelector('div#wind-speed-value').textContent = `${Math.round(jsonObj.wind.speed)} m/s`;
        document.querySelector('div#humidity-value').textContent = `${Math.round(jsonObj.main.humidity)}%`;
        document.querySelector('div#cloudiness').textContent = `${Math.round(jsonObj.clouds.all)}%`;
    }

    function initPage() {

        ( async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=amman&appid=88f7313e7d319be76352d193eea2c938&units=metric`,{mode: 'cors'})
            const data = await response.json();
            occupyData(data);
            console.log(data);
        })();

        // add functionality to the form
        const formEl = document.querySelector('form');
        formEl.onsubmit = async (e) => {
            e.preventDefault();

            try {
                const formData = new FormData(e.target);
                const nameOfCity = formData.get('cityname');
                
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=88f7313e7d319be76352d193eea2c938&units=metric`,{mode: 'cors'})
                if (!response.ok) {
                    throw Error('Please provide a correct city name');
                    
                }
                const data = await response.json();
                occupyData(data);
                console.log(data);
            } catch (err) {
                console.log(err)
            }
        }
    }
    
    
    return {initPage}
})();

objM.initPage();