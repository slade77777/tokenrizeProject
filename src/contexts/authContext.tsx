import React, {FC, useState} from 'react';

export type AuthProps = {
  isLogin: boolean;
  login?: Function;
};

export const AuthContext = React.createContext<AuthProps>({
  isLogin: false,
  login: Function,
});

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({children}) => {
  const [isLogin, setLogin] = useState(false);

  function login() {
    setLogin(true);
  }

  function logout() {
    setLogin(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthState = () => React.useContext(AuthContext);

export {AuthProvider, useAuthState};
