const Visibility = ({data}) => {
    return ( 
        <div className="visibility-container">
            <h4>Visibility</h4>
            <h3><span>{Math.ceil(data.consolidated_weather[0].visibility*10)/10}</span> miles</h3>
        </div>
     );
}
 
export default Visibility;