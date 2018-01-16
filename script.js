document.getElementById('button').addEventListener('click', () => 
{
    let enteredCity = document.getElementsByClassName("cityName")[0].value
    console.log(enteredCity)
    //api key
    let apiKEY = 'f12a3652491be785d25995cce374d0c7'
    let fahrenheit = '&units=imperial'
    let celsius = '&units=metric'

    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+enteredCity+'&APPID='+apiKEY+fahrenheit;
   
    const promise = axios.get(url);

    promise.then(data => {
       // let currentTempRounded = data.data.main.temp
        if (data.data.name != undefined) {
            var currentTempRounded = Math.round(data.data.main.temp)
            document.getElementsByClassName("city")[0].innerHTML = data.data.name
            
            document.getElementsByClassName("currentTemp")[0].innerHTML = "Temperature: " + currentTempRounded
            //var currentTemp = document.getElementsByClassName('currentTemp')
            //currentTemp.src = data.data.main.temp;

        console.log(currentTempRounded)

        }
    })
})