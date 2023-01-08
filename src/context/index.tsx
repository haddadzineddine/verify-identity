import { createContext, useState } from 'react';
import { IdentityData, IdentityResult } from '../utils/types';

export const initialData: IdentityData = {
  FIRST_NAME: '',
  FAMILY_NAME: '',
  ID_NUMBER: '',
  GENDER: 'male',
  front_ID: '',
  back_ID: '',
  selfi: '',
};

export const initialResult: IdentityResult = {
  Decision: false,
  Checking: '',
  Face_Similarity: {
    Similarity: '0,00%',
  },
  Images: {
    Card_face: '',
    Selfi_face: '',
  },
};

export const IdentityCheckingResultContext = createContext({
  identityCheckingResult: initialResult,
  SetIdentityCheckingResult: (initialResult: IdentityResult) => {},
});

export const IdentityContext = createContext({
  identityState: initialData,
  identitySetState: (initialData: IdentityData) => {},
});

type IdentityProviderProps = {
  children: React.ReactNode;
};

export const IdentityProvider = ({ children }: IdentityProviderProps) => {
  const [identityState, identitySetState] = useState<IdentityData>(initialData);
  const [identityCheckingResult, SetIdentityCheckingResult] =
    useState<IdentityResult>(initialResult);

  return (
    <IdentityContext.Provider value={{ identityState, identitySetState }}>
      <IdentityCheckingResultContext.Provider
        value={{ identityCheckingResult, SetIdentityCheckingResult }}
      >
        {children}
      </IdentityCheckingResultContext.Provider>
    </IdentityContext.Provider>
  );
};
