import React, { Component } from 'react';
import styled from 'styled-components';
import {withFlags} from 'ld-react';
import { GiParasaurolophus, GiRoundStar, GiHangGlider, GiStumpRegrowth} from 'react-icons/gi';
import { IconContext } from "react-icons";
import convert from 'color-convert';

const darkenColor = (colorCode)=> {
  const hslColor = convert.hex.hsl(colorCode);
  hslColor[2] = hslColor[2]-10;
  const darkenColor = convert.hsl.hex(hslColor);
  return "#" + darkenColor;
}
const winnerValues = {
  'TBD' : 'Gray',
  'New Orleans Dinosaurs': {primary:'#97233F',secondary: "pink", icon: <GiParasaurolophus/>},
  'Kansas City Stars': {primary:'#241773',secondary: "green", icon: <GiRoundStar/>},
  'Los Angeles Gliders': {primary:'#AD8900',secondary: "black", icon: <GiHangGlider/>},
  'New England Stumps': {primary:'#046A38',secondary: "#69BE28", icon: <GiStumpRegrowth/>}
}
const Winner = styled.h1`
  margin: auto;
  font-size: 2.5em;
  text-align: center;
  color: ${props => winnerValues[props.team].primary};
`
const Band = styled.div`
  height: 12vh;
  width: 100vw;
  background-color: ${props => winnerValues[props.team].secondary};
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(60% - 6vh);
  z-index: 1;
`
const StyledIcon = styled.div`
  color: ${props => winnerValues[props.team].primary};
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(35% - 6vh);
  z-index: 1;
  left: 50%;
  width: auto;
  transform: translateX(-50%);
`


 class Banner extends Component {
    render() {
      const winningTeam = this.props.flags.superBowlTeams;
      if(!winningTeam){
        return null
      }
      const icon = winnerValues[winningTeam].icon;
      const primaryColor = winnerValues[winningTeam].primary;
      const outlineColor = darkenColor(primaryColor)
      return (
        this.props.flags.showCountDown ?
        <div></div>
        :
        <div>
          <StyledIcon team={winningTeam}>
            <IconContext.Provider value={{ size: "12em", style: { stroke: outlineColor, strokeWidth: '10'  } }}>
              {icon}
            </IconContext.Provider>
          </StyledIcon>
          <Band team={winningTeam}>
            <Winner team={winningTeam}>{winningTeam}</Winner>
          </Band>
        </div>
      );
    }
  }
  
  export default withFlags(Banner);