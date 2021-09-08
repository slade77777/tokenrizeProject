import React, {FC} from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import MainIcon from '../images/MainIcon';
import MarketIcon from '../images/MarketIcon';
import WalletIcon from '../images/WalletIcon';
import PortfolioIcon from '../images/PorfolioIcon';
import MoreIcon from '../images/MoreIcon';
import Market from './Market';

const EmptyScreen = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const renderScene = SceneMap({
  home: EmptyScreen,
  markets: Market,
  wallets: EmptyScreen,
  portfolio: EmptyScreen,
  more: EmptyScreen,
});

const Main: FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'markets', title: 'Markets'},
    {key: 'wallets', title: 'Wallets'},
    {
      key: 'portfolio',
      title: 'Portfolio',
    },
    {key: 'more', title: 'More'},
  ]);

  function renderIcon(name: string, isActive?: boolean) {
    const color = isActive ? '#597AF4' : '#9194BB';
    switch (name) {
      case 'home':
        return <MainIcon fill={color} />;
      case 'markets':
        return <MarketIcon fill={color} />;
      case 'wallets':
        return <WalletIcon fill={color} />;
      case 'portfolio':
        return <PortfolioIcon fill={color} />;
      case 'more':
        return <MoreIcon fill={color} />;
    }
  }

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition="bottom"
      renderTabBar={props => {
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const isActive = index === i;
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.tabItem}
                  onPress={() => setIndex(i)}>
                  {renderIcon(route.key, isActive)}
                  <Text
                    style={{
                      ...styles.labelText,
                      color: isActive ? '#597AF4' : '#9194BB',
                    }}>
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
      initialLayout={{width: layout.width}}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#9194BB',
    fontWeight: '500',
    fontSize: 13,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Main;
