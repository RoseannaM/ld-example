import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import {withFlags} from 'ld-react';

 class SuperBowlCountdown extends Component {
    render() {
      return (
        <div> 
          {
            this.props.flags.showCountDown ?
            <div>
              <h1>Superbowl 2019 Countdown</h1>
              <Countdown date={'Sun, 03 Feb 2019'}/>
            </div>
              :
              <div></div>
          }
        </div>
      );
    }
  }
  
export default withFlags(SuperBowlCountdown);
