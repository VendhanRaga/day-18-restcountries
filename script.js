https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


var API_key = 'c388be7a6dd31a9b1e0dd04de04e0764'

async function api(){
    v = fetch('https://restcountries.com/v3.1/all')
    out = await v // responce
    prom = out.json() //promise
    output = await prom //output
    var parent_data_all = document.querySelector('.weather_data')


    for (let i of output){
        try{  

            var data_cont = document.createElement('div')
            data_cont.classList.add('card')

            //name
            var countryname = document.createElement('h3')
            countryname.innerHTML=`Country Name : ${i.name.common}`
            data_cont.append(countryname)
            console.log(`Country Name:${i.name.common}`)

            //flag
            var countryflag = document.createElement('img')
            countryflag.setAttribute('src',i.flags.png)
            data_cont.append(countryflag)
            console.log(i.flags.png);

           //capital
           var capital = document.createElement('h4')
           capital.innerText=`Capital : ${i.capital} `
           data_cont.append(capital)
           console.log(i.capital);
           //region
           var region = document.createElement('h4')
           region.innerText=`Continent : ${i.continents}`
           data_cont.append(region)
           console.log(i.continents);

           var button_weather = document.createElement('button')
           button_weather.setAttribute('onclick','weatherapi(this)')
        //   button_weather.setAttribute('data-bs-toggle','modal')
        //    button_weather.setAttribute(' data-bs-target','#exampleModal')
           button_weather.setAttribute('type','button')
         //  button_weather.classList.add('btn btn-primary')
           button_weather.innerText='Click to know Weather'
           data_cont.append(button_weather)
           




           parent_data_all.append(data_cont)
        }
        catch{
            //
        }
      

    }
    console.log(output[0].latlng)
    lat = output[0].latlng[0]
    lon = output[0].latlng[1]
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    v1 = fetch(url)
    out1 = await v1
    prom1 = out1.json()
    output1 = await prom1 
    console.log(output1)
}
api()

async function weatherapi(e){
    console.log(e);

}