import './style.css'

let objM = (function() {
    function initPage() {
        const formEl = document.querySelector('form');

        formEl.onsubmit = async (e) => {
            e.preventDefault();

            let formData = new FormData(e.target);
            let nameOfCity = formData.get('cityname');
            
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=88f7313e7d319be76352d193eea2c938&units=metric`,{mode: 'cors'})
            const data = await response.json();
            console.log(data)
        }
    }

    return {initPage}
})();

objM.initPage();