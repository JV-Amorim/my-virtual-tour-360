import { AppRegistry } from 'react-360';

import { connect } from './store';
import ButtonsPanel from './components/ButtonsPanel';
import InfoPanel from './components/InfoPanel';

const ConnectedButtonsPanel = connect(ButtonsPanel);
const ConnectedInfoPanel = connect(InfoPanel);

AppRegistry.registerComponent('ConnectedButtonsPanel', () => ConnectedButtonsPanel);
AppRegistry.registerComponent('ConnectedInfoPanel', () => ConnectedInfoPanel);
