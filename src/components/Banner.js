import React, { Component } from 'react';
import styled from 'styled-components';
import {withFlags} from 'ld-react';
import { GiParasaurolophus, 
  GiRoundStar, 
  GiHangGlider, 
  GiStumpRegrowth, 
  GiPrayingMantis,
  GiBurningMeteor,
  GiThornyVine,
  GiPeach,
  GiCigale,
  GiEasterEgg
} from 'react-icons/gi';
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
  'New Orleans Dinosaurs': {primary:'#66925e',secondary: "#51bae4", icon: <GiParasaurolophus/>},
  'Kansas City Stars': {primary:'#0425a2',secondary: "#256d75", icon: <GiRoundStar/>},
  'Los Angeles Gliders': {primary:'#AD8900',secondary: "#241773", icon: <GiHangGlider/>},
  'New England Stumps': {primary:'#046A38',secondary: "#69BE28", icon: <GiStumpRegrowth/>},
  'Chicago Mantids': {primary:'#78bf1c',secondary: "#00a285", icon: <GiPrayingMantis/>},
  'Dallas Meteors': {primary:'#bf971c',secondary: "#a20015", icon: <GiBurningMeteor/>},
  'Indianapolis Vines': {primary:'#ad8900',secondary: "#024e10", icon: <GiThornyVine/>},
  'Baltimore Peaches': {primary:'#e89877',secondary: "#4e2902", icon: <GiPeach/>},
  'San Diego Cicadas': {primary:'#77e8d5',secondary: "#054e56", icon: <GiCigale/>},
  'Philadelphia Eggs': {primary:'#e877af',secondary: "#3e005d", icon: <GiEasterEgg/>}
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