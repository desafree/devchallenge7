const Humidity = ({data}) => {
    return ( 
        <div className="humidity-container">
            <h4>Humidity</h4>
            <h3><span>{Math.ceil(data.consolidated_weather[0].humidity)}</span>%</h3>
            <meter min="0" max="100" value={Math.ceil(data.consolidated_weather[0].humidity)}></meter>
        </div>
     );
}
 
export default Humidity;