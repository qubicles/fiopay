
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import {  fromLeft } from 'react-navigation-transitions';

import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import LoginImport from '../screen/LoginImport';
import Contact from '../screen/Contact'
import PayInvoices from '../screen/PayInvoices'
import LoginImportEntered from '../screen/LoginImportEntered';
import PayScreen from '../screen/PayScreen';
import PaymentConfirm from '../screen/PaymentConfirm';
import PaymentSuccess from '../screen/PaymentSuccess';
import ContactRequestPayment from '../screen/ContactRequestPayment';
import RequestConfirm from '../screen/RequestConfirm';
import RequestSuccess from '../screen/RequestSuccess';
import InvoiceToPay from '../screen/InvoiceToPay';
import PaySubscription from '../screen/PaySubscription';
import RecurringPayment from '../screen/RecurringPayment';
import ProfileScreen from '../screen/ProfileScreen';
import ContactPay from '../screen/ContactPay';
import RequestPayment from '../screen/RequestPayment';
import RequestScreen from '../screen/RequestScreen'

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AnimationPaymentStack = createStackNavigator(
  {
    PaymentConfirm: {
      screen: PaymentConfirm,
        navigationOptions: {
          header: null
        }
    },
    PaymentSuccess:{
      screen: PaymentSuccess,
      navigationOptions: {
        header: null,
        
      }
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.ModalSlideFromBottomIOS,
    },
  }
)

const AnimationRequestStack = createStackNavigator(
  {
    RequestConfirm:{
      screen: RequestConfirm,
      navigationOptions: {
        header: null
      }
    },
    RequestSuccess: {
      screen: RequestSuccess,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.ModalSlideFromBottomIOS,
    },
  }
)

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        header: null
      }
    },
    PayInvoices: {
      screen: PayInvoices,
      navigationOptions: {
        header: null
      }
    },
    PayScreen : {
      screen: PayScreen,
      navigationOptions: {
        header: null
      }
    },
   
    ContactRequestPayment: {
      screen: ContactRequestPayment,
      navigationOptions: {
        header: null,
        cardStyleInterpolator: forFade,
      }
    },
    InvoiceToPay: {
      screen: InvoiceToPay,
      navigationOptions: {
        header: null
      }
    },
    PaySubscription: {
      screen: PaySubscription,
      navigationOptions: {
        header: null
      }
    },
    RecurringPayment: {
      screen: RecurringPayment,
      navigationOptions: {
        header: null
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    ContactPay: {
      screen:ContactPay,
      navigationOptions: {
        header: null
      }
    },
    RequestPayment: {
      screen: RequestPayment,
      navigationOptions: {
        header: null
      }
    },
    RequestScreen: {
      screen: RequestScreen,
      navigationOptions: {
        header: null
      }
    }
   
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => fromLeft(300)

  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
      header: null
    }
  },
);


const LoginStack = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    LoginImport: {
      screen: LoginImport,
      navigationOptions: {
        header: null
      }
    },
    LoginImportEntered :{
      screen: LoginImportEntered,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppNavigation = createSwitchNavigator(
  {
    Login: LoginStack,
    HomeScreen : HomeStack,
    AnimationPaymentStack,
    AnimationRequestStack,
    
  },
  {
    headerMode: "none",
    initialRouteName: 'Login',
    navigationOptions: {
      headerVisible: false
    },
  }
);

export default createAppContainer(AppNavigation);
