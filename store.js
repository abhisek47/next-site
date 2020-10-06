import { useState } from 'react';

export const LoginContext = React.createContext(false);

const Store = ({ children }) => {
  const [login, setLogin] = useState(false);
  return <LoginContext value={[login, setLogin]}>{children}</LoginContext>;
};

export default Store;
