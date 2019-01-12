import React, { Component } from 'react';
import styled from 'styled-components';
import {withFlags} from 'ld-react';

const winnerColors = {
  'TBD' : 'Gray',
  'New Orleans Saints': 'red',
  'Kansas City Chiefs': 'blue',
  'Los Angeles Rams' : 'green'
}
//template literal: styled.h1
//props is object of props 
//{ team : "team name"}

const Winner = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => winnerColors[props.team]};
`;
 
 class Banner extends Component {
    render() {
      const winningTeam = this.props.flags.superBowlTeams;
      return (
        <div>
            <div><Winner team={winningTeam}>{winningTeam}</Winner></div>
        </div>
      );
    }
  }
  
  export default withFlags(Banner);