import React, {FC} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {useAuthState} from '../contexts/authContext';

const Login: FC = () => {
  const {login} = useAuthState();
  return (
    <ImageBackground
      source={require('../images/background.png')}
      style={styles.body}>
      <View style={styles.centerHorizontal}>
        <Image
          source={require('../images/logo.png')}
          style={{width: 55, height: 55}}
        />
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.note}>Please sign in to continue</Text>
      </View>
      <View style={styles.form}>
        <CustomTextInput
          icon={require('../images/name.png')}
          placeholder={'Email'}
          onChange={() => {}}
        />
        <CustomTextInput
          icon={require('../images/pass.png')}
          placeholder={'Password'}
          onChange={() => {}}
          isSecure
        />
        <View style={styles.row}>
          <Text style={styles.normalText}>Remember me</Text>
          <Text style={styles.normalText}>Forgot your password?</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => login?.()}>
          <Text style={styles.textButton}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.normalText}>
          Don’t have an account yet? SIGN UP
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    flex: 1,
  },
  centerHorizontal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: '900',
    color: 'white',
    marginTop: 20,
  },
  note: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    marginTop: 15,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    backgroundColor: '#BDCFFF',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  textButton: {
    fontWeight: '700',
    fontSize: 14,
    color: '#5073F2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Login;
