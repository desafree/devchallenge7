const AirPressure = ({data}) => {
    return ( 
        <div className="air-pressure-container">
            <h4>Air Pressure</h4>
            <h3><span>{Math.ceil(data.consolidated_weather[0].air_pressure)}</span> mb</h3>
        </div>
     );
}
 
export default AirPressure;