const Wind = ({data}) => {
    return ( 
        <div className="wind-container">
            <h4>Wind status</h4>
            <h3><span>{Math.ceil(data.consolidated_weather[0].wind_speed)}</span>mph</h3>
            <h5>{data.consolidated_weather[0].wind_direction_compass}</h5>
        </div>
     );
}
 
export default Wind;