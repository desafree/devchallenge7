import { format} from 'date-fns'

const Preview = ({data, grade}) => {

    let date = new Date(data.consolidated_weather[0].applicable_date)
    let formattedDate = format(date, "EEE, d MMM")

    return ( 
        <div className="preview-container">
            {(data.consolidated_weather[0].weather_state_name=="Clear")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Clear.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Snow")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Snow.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Sleet")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Sleet.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Hail")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Hail.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Thunderstorm")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Thunderstorm.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Heavy Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyRain.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Light Rain")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightRain.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Showers")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/Shower.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Heavy Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/HeavyCloud.png")}></img> : null}
            {(data.consolidated_weather[0].weather_state_name=="Light Cloud")? <img src={require("/home/desafree/devchallenge7/src/weather-app-master/LightCloud.png")}></img> : null}
            

            {(grade==1)? <h3 className="temp"><span>{Math.ceil(data.consolidated_weather[0].the_temp)}</span>°C</h3> : null}
            {(grade==-1)? <h3 className="temp"><span>{Math.ceil(((data.consolidated_weather[0].the_temp)*9/5)+32)}</span>F</h3> : null}

            <h4>{data.consolidated_weather[0].weather_state_name}</h4>

            <p>Today  .  {formattedDate}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#88869D"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>   {data.title}</p>
        </div>
     );
}
 
export default Preview;