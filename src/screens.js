
import { registerScreen } from './services/navigation'
import Home from './Home'
import Auth from './Auth'
import Initializing from './Initializing'

export const registerScreens = () => {
  registerScreen('Home', Home);
  registerScreen('Initializing', Initializing);
  registerScreen('Auth', Auth);
}
