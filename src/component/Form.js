import React from 'react';
import './Form.css';
const Form = (props) => {
    return (
        <div className="container">
            <form onSubmit={props.loaderWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" name="city" placeholder="city..."/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="country" placeholder="country"/>
                    </div>
                    <div className="col-md-3 mb-md-0 text-md-left">
                        <button className="btn btn-success">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Form;
