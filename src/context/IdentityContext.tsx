import { createContext, useState } from 'react';
import { IdentityData } from '../utils/types';

export const initialData: IdentityData = {
  FIRST_NAME: '',
  FAMILY_NAME: '',
  ID_NUMBER: '',
  GENDER: 'male',
  front_ID: '',
  back_ID: '',
  selfi: '',
};

export const IdentityContext = createContext({
  identityState: initialData,
  identitySetState: (initialData: IdentityData) => {},
});

type IdentityProviderProps = {
  children: React.ReactNode;
};

export const IdentityProvider = ({ children }: IdentityProviderProps) => {
  const [identityState, identitySetState] = useState<IdentityData>(initialData);
  return (
    <IdentityContext.Provider value={{ identityState, identitySetState }}>
      {children}
    </IdentityContext.Provider>
  );
};
