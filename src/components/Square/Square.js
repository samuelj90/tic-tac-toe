import React from 'react';
import './style.css';
class Square extends React.Component {
    render() { 
        return ( <button className="square" onClick={this.props.Onclick}>{this.props.value}</button> );
    }
}
 
export default Square;