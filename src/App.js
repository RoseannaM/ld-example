import React, { Component } from 'react';

import styled from 'styled-components';
import './App.css';
import Banner from './components/Banner';
import SuperBowlCountdown from './components/SuperBowlCountdown'
import {withFlagProvider} from 'ld-react';
import Main from './components/Main';

const MainApp = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const Header = styled.header`
`
const OuterDiv = styled.div`
  
`
const Title = styled.h1`
`;

class App extends Component {
  render() {
    return (
      <OuterDiv>
        <Banner/>
        <Main>
          <MainApp>
            <Header className="App-header">
              <SuperBowlCountdown/>
            </Header>
          </MainApp>
        </Main>
      </OuterDiv>
    );
  }
}
                                                     
export default withFlagProvider(App, {clientSideId: '5c3850185d21862ee0b54124'});
