import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

   
// IsTheWinner(t, ll, ul) {
//     var lowerLimitChange = CalculateAngleChange(t, ll);
//     var upperLimitChange = CalculateAngleChange(t, ul);
   
//     if (lowerLimitChange <= 360 || lowerLimitChange >= 330)
//     {
//        //return true;
//        this.setState({
//            IsTheWinner: true
//        });
//     }
//     else if (upperLimitChange >= 0 && upperLimitChange <= 30)
//     {
//        this.setState({
//            IsTheWinner: true
//        });
//     }
//     else
//     {
//        this.setState({
//            IsTheWinner: false
//        })
//     }
//    };
   
//     CalculateAngleChange(t,a)
//    {
//        return (a + ((9*t)/25)) % 360;
//    }

export default class Angle extends React.Component{
    // state = {
    //     lowerLimit: this.props.lowerLimit,
    //     upperLimit: this.props.upperLimit,
    //     time: this.props.time,
    //     isOnFirst: false
    // }     


    render(){
        return (
            <li>
            <div className="text">{this.props.firstName}</div>
            </li>
        );
    }
}