import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';
import Airan from './airan';

const Routes = createAppContainer(createSwitchNavigator({
    Main,
    NewEntry,
    Report,
    Airan,
}, {
    initialRouteName: 'Main',
    backBehavior: 'history',
}));

export default Routes;