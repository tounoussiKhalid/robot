import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Card extends React.Component {
   
    render(){
        const URL = "https://robohash.org/";
        return (
            <div className='Card'>
                <img alt="robot" src={`${URL + this.props.reference + "?100x100"}`}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p> {this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;