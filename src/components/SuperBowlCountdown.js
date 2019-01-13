import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import {withFlags} from 'ld-react';
import styled from 'styled-components';

const H3Title = styled.h3`
  font-size: 3.5em;
  text-align: center;
  color: white;
  margin-bottom: 0;
`;
const H4Title = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin-top: 0;
`;
const H1Title = styled.h1`
  color: white;
  font-size: 5.0em;
  margin-top: 0;
`;

const HorizontalRule = styled.hr`
  border: 2px solid white;
  margin-top: 0;
`
 class SuperBowlCountdown extends Component {
    render() {
      return (
        <div> 
          {
            this.props.flags.showCountDown ?
            <div>
              <H3Title>Superbowl LIII</H3Title>
              <HorizontalRule/>
              <H4Title>February 3, 2019</H4Title>
              <H1Title>
                <Countdown date={'Sun, 03 Feb 2019'}/>
              </H1Title>
            </div>
              :
              <div></div>
          }
        </div>
      );
    }
  }
  
export default withFlags(SuperBowlCountdown);
