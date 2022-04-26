import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        // eslint-disable-next-line react/no-unstable-nested-components
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
