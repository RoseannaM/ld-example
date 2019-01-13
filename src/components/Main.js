import React, { Component } from 'react';
import styled from 'styled-components';
import {withFlags} from 'ld-react';
import backGroundImage from '../images/nfl-football-field.jpg';

const Mainbackground = styled.div`
  font-family: 'Staatliches', cursive;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 23%, rgba(0, 0, 0, 0.7215686274509804)),
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