import React, { Component } from "react";
import '../../assets/css/custom.css';

class Icons extends Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.onNotifyClick(this.props.id)} title={this.props.title} id={this.props.id}
                    className={this.props.className} >
                    <img src={this.props.badge} alt={this.props.title} className="my-float" />
                </button>
            </div>
        );
    }
}


export default Icons;