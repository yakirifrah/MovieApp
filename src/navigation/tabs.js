import React from 'react';
import {MovieListScreen} from '../screens/index';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteMovieIconWithBadge} from '../lib/utils';
import favoriteRoute from './favoriteStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="movieTabs"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Popular movie') {
            iconName = focused
              ? require('../assets/cinema-red.png')
              : require('../assets/cinema.png');
            return (
              <Image
                source={iconName}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            );
          } else if (route.name === 'my favorite') {
            iconName = focused
              ? require('../assets/video-camera-red.png')
              : require('../assets/video-camera.png');
          }
          return (
            <FavoriteMovieIconWithBadge
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Popular movie" component={MovieListScreen} />
      <Tab.Screen name="my favorite" component={favoriteRoute} />
    </Tab.Navigator>
  );
};
export default TabStack;
