import { AppRegistry } from 'react-360';

import { connect } from './src/app/store';
import ButtonsPanel from './src/components/ButtonsPanel';
import InfoPanel from './src/components/InfoPanel';

const ConnectedButtonsPanel = connect(ButtonsPanel);
const ConnectedInfoPanel = connect(InfoPanel);

AppRegistry.registerComponent('ConnectedButtonsPanel', () => ConnectedButtonsPanel);
AppRegistry.registerComponent('ConnectedInfoPanel', () => ConnectedInfoPanel);
