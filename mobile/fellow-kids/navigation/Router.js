import {
  createRouter,
} from '@exponent/ex-navigation';

import ConvoList from '../screens/ConvoList';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => ConvoList,
  rootNavigation: () => RootNavigation,
}));
