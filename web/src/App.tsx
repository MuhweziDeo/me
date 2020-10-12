import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { Nav } from './shared';


const engine = new Styletron({});

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const App: React.FunctionComponent = () => {
  return (
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Nav/>
    </BaseProvider>
  </StyletronProvider>
  );
}

export default App;
