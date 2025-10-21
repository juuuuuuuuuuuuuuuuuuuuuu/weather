const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=suwon&appid=62738fca531bbaaa065f29532ed9438c`

// weatherDate = fetch(apiurl)
async function getweather() {
    const response = await fetch(apiurl)

    const data = await response.json();

    const {
        name: country,
        main: {temp, humidity},
        weather: [{ id, main}],
        wind: {speed}
    } = data

    console.log(country)
    console.log(temp)
    console.log(humidity)
    console.log(id)
    console.log(main)
    console.log(speed)
    console.log(data)
}

getweather()