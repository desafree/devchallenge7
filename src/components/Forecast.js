import { format} from 'date-fns'

const Forecast = ({data,grade}) => {

    // let date = new Date(data.consolidated_weather[0].applicable_date)
    // let formattedDate = format(date, "EEE, e MMM")
    // console.log(formattedDate)

    return ( 
        <div className="forecast-container">
            {data.consolidated_weather.map((day,index)=>{

                let date = new Date(data.consolidated_weather[index].applicable_date)
                let formattedDate = format(date, "EEE, d MMM")

                if(index==1) {
                    return <div className="forecast-day-container">
                        
                        <h4>Tomorrow</h4>

                        {(data.consolidated_weather[index].weather_state_name=="Clear")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Clear.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Snow")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Snow.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Sleet")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Sleet.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Hail")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Hail.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Thunderstorm")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Thunderstorm.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Heavy Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyRain.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Light Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightRain.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Showers")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Shower.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Heavy Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyCloud.png")}></img> : null}
                        {(data.consolidated_weather[index].weather_state_name=="Light Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightCloud.png")}></img> : null}
                        
            

                        <div className="temperatures">
                            {(grade==1)? <h4 className="min-temp">{Math.ceil(data.consolidated_weather[index].min_temp)}°C</h4> : null}
                            {(grade==-1)? <h4 className="min-temp">{((Math.ceil(data.consolidated_weather[index].min_temp))*9/5)+32}F</h4> : null}
                            {(grade==1)? <h4 className="max-temp">{Math.ceil(data.consolidated_weather[index].max_temp)}°C</h4> : null}
                            {(grade==-1)? <h4 className="max-temp">{((Math.ceil(data.consolidated_weather[index].max_temp))*9/5)+32}F</h4> : null}
                        </div>

                    </div>
                }

                else if(index>1) {
                    return <div className="forecast-day-container">
                        
                    <h4>{formattedDate}</h4>

                    {(data.consolidated_weather[index].weather_state_name=="Clear")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Clear.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Snow")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Snow.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Sleet")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Sleet.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Hail")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Hail.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Thunderstorm")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Thunderstorm.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Heavy Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyRain.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Light Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightRain.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Showers")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Shower.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Heavy Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyCloud.png")}></img> : null}
                    {(data.consolidated_weather[index].weather_state_name=="Light Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightCloud.png")}></img> : null}
                    
        

                    <div className="temperatures">
                        {(grade==1)? <h4 className="min-temp">{Math.ceil(data.consolidated_weather[index].min_temp)}C</h4> : null}
                        {(grade==-1)? <h4 className="min-temp">{((Math.ceil(data.consolidated_weather[index].min_temp))*9/5)+32}F</h4> : null}
                        {(grade==1)? <h4 className="max-temp">{Math.ceil(data.consolidated_weather[index].max_temp)}C</h4> : null}
                        {(grade==-1)? <h4 className="max-temp">{((Math.ceil(data.consolidated_weather[index].max_temp))*9/5)+32}F</h4> : null}
                    </div>

                </div>
                }


                
            })}
        </div>
     );
}
 
export default Forecast;