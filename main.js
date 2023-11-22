let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";
const apiMeteo = fetch(url)
                    .then(async response=>{
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                    });