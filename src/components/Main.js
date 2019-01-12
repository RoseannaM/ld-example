import React, { Component } from 'react';
import styled from 'styled-components';
import {withFlags} from 'ld-react';
import backGroundImage from '../images/nfl-football-field.jpg';

const Mainbackground = styled.div`
  background: linear-gradient(rgba(0, 16, 81, 0.6509803921568628),rgba(0, 36, 90, 0) ),
  url(${backGroundImage});
  background-size: cover;
  background-position: right 35% bottom 45%;
  filter: ${props => props.isTBD ? "none" : 'grayscale(80%) opacity(80%)'}
`
 class Main extends Component {
    render() {
      const isTBD = this.props.flags.superBowlTeams === "TBD";
      return (
        <div>
          <Mainbackground isTBD={isTBD}>{this.props.children}</Mainbackground>
        </div>
      );
    }
  }
  
  export default withFlags(Main);