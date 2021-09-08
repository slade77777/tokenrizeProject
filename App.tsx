/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
//@ts-ignore
const isHermes = () => !!global.HermesInternal;
console.log(isHermes());

import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigation from './src/Navigation';
import {AuthProvider} from './src/contexts/authContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
        </SafeAreaView>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
