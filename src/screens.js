import { registerScreen } from './services/navigation';
import Home from './Home';
import { Auth, Filters, Detail } from './Screens/';
import Initializing from './Initializing';

const registerScreens = () => {
  registerScreen('Home', Home);
  registerScreen('Initializing', Initializing);
  registerScreen('Auth', Auth);
  registerScreen('Filters', Filters);
  registerScreen('Detail', Detail);
};

export default registerScreens;
