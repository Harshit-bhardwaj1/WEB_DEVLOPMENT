let API_Key = 'eddd2950c80421a359cef61432c12240'
let city_name = 'Mathura'


let geoCodingAPI = (city_name,API_Key) => ( `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_Key}`)

let weatherAPI = (lat,lon,API_Key) =>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}`)

function getLocation(city_name, API_Key){
    return new Promise((resolve,reject)=>{
        fetch(geoCodingAPI(city_name,API_Key))
            .then((data)=> data.json())
            .then((data)=>{
                resolve ({'lon' : data[0].lon, 'lat': data[0].lat});    // hum return isiliye kar rahe h kyu ki function ka kamm karna hota h hume object bana ke return kiya h
            })
            .catch((err)=>{
                reject (err);
                
            })

    })
}

function getWeatherDeatils(API_Key,lat,lon){
    return new Promise((resolve,reject)=>{
        
    })
    fetch(weatherAPI(lat,lon,API_Key))
        .then((data)=> data.json())
        .then((data)=>{
            console.log(data.list[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
}

getLocation(city_name,API_Key)
    .then((data)=>{
        return{
            'API_Key':API_Key,
            'lat':lat,
            'lon': lon,
        }
    })
    .then(getWeatherDeatils)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);  
    })