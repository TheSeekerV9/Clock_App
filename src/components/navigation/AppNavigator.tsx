import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WorldClockScreen from '../screens/WorldClockScreen';

const {Screen, Navigator} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator>
      <Screen name="World Clock" component={WorldClockScreen} />
    </Navigator>
  );
};

export default AppNavigator;
