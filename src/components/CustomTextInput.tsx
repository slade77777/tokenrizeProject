import React, {FC, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  onChange: (val: string) => void;
  icon: ImageSourcePropType;
  placeholder: string;
  isSecure?: boolean;
};

const CustomTextInput: FC<Props> = ({
  onChange,
  icon,
  placeholder,
  isSecure,
}) => {
  const [showValue, setShowValue] = useState(true);

  return (
    <View>
      <Image source={icon} style={styles.icon} />
      <TextInput
        onChangeText={text => {
          onChange(text);
        }}
        style={styles.body}
        placeholder={placeholder}
        placeholderTextColor="#D6E1FF"
        secureTextEntry={isSecure ? showValue : false}
      />
      {isSecure && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setShowValue(!showValue)}>
          <Image source={require('../images/eye.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderWidth: 1.5,
    padding: 5,
    height: 47,
    marginVertical: 5,
    paddingHorizontal: 50,
    borderColor: 'rgb(143, 146, 247)',
    borderRadius: 5,
    color: '#D6E1FF',
    fontSize: 15,
    lineHeight: 18,
  },
  icon: {width: 20, height: 20, position: 'absolute', left: 20, top: 20},
  eye: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  eyeIcon: {
    width: 30,
    height: 20,
  },
});

export default CustomTextInput;
