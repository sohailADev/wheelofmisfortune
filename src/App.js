import React from 'react';
import Angle from './components/angle.component'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  componentDidMount(){
    this.props.changeTMList();
    this.props.initializeLocation(this.props.teamMembers);
  }



  startRotation = () => {
    this.props.resetStandup(false);
    const time = Math.floor(Math.random() * 10000) + 1;
    this.props.updateTimer(time);
    this.props.changeCircle("circle start-rotate");
    setTimeout(() => {
      this.props.updateLocation(this.props);
      this.props.changeCircle("circle start-rotate stop-rotate");
      this.props.calculateWinner(this.props);
      this.props.saveStandup(this.props.whosOnFirst);
    },time);
  };


    render(){
      console.log(this.props);
      const tms = Array.from(this.props.teamMembers).map((props) => 
      <Angle key={props.firstName} firstName={props.firstName}/>
    );

      return (
        <div>
        <div>
        <div className="arrow"></div>
        <ul className={this.props.circle}>
          {tms}
        </ul>
        <button className="spin-button" onClick={this.startRotation}>SPIN</button>
      </div>
      <div>
      <h1>The winner is... {(this.props.isSaved) ? this.props.whosOnFirst.firstName + "!!!": ""}</h1>
      </div>
      <div>
      <h1>{(this.props.isSaved) ? "Saved to Database!" : ""}</h1>
      </div>
      </div>
      );

    }
}
export default App;
