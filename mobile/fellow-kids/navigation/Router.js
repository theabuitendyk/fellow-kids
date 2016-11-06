import {
  createRouter,
} from '@exponent/ex-navigation';

import ConvoList from '../screens/ConvoList';
import Convo from '../screens/Convo';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => ConvoList,
  convo: () => Convo,
  rootNavigation: () => RootNavigation,
}));
