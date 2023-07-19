import React from 'react';
import './WeatherBody.css';
const Weatherbody = (props) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}` 
    }
    return (
        <div className="container">
            <div className="cards">
                <h1>
                    {props.city}
                </h1>
                {props.city?( <h2>{dateBuilder(new Date())}</h2>):null}
                {/* <h5>
                    <img />
                </h5> */}
                {props.temp?(<h1 className="py-2 temp">{props.temp}&deg;c</h1>):null}
                <h3>
                    {props.temp_min?(<span className="temp_min">{props.temp_min}&deg;c</span>):null}
                    {props.temp_min&&props.temp_max?(<span className="space">-&nbsp;</span>):null}
                    {props.temp_max?(<span className="temp_max">{props.temp_max}&deg;c</span>):null}
                </h3>
                <h1 className="py-3">{props.description}</h1>
            </div>
        </div>
            
        
    );
}
export default Weatherbody;

