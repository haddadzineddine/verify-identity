import { CheckingResult, IdentityData } from './types';

export const canMoveToUploadImage = (identityState: IdentityData) => {
  if (
    identityState.FIRST_NAME !== '' &&
    identityState.FAMILY_NAME !== '' &&
    identityState.ID_NUMBER !== ''
  ) {
    return true;
  }
  return false;
};

export const canSubmitForm = (identityState: IdentityData) => {
  if (
    canMoveToUploadImage(identityState) &&
    identityState.back_ID !== '' &&
    identityState.front_ID !== '' &&
    identityState.selfi !== ''
  ) {
    return true;
  }
  return false;
};

export const image64ToImageFile = async (base64: string) => {
  const res = await fetch(base64);
  const blob = await res.blob();
  return new File([blob], generateRandomString + '.jpeg');
};

export const generateRandomString = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getIdentityResultCheckingAsCorrect = (identityCheckingResultChecking: string | CheckingResult) => {
  return identityCheckingResultChecking as CheckingResult;
}

export const getIdentityResultCheckingAsInCorrect = (identityCheckingResultChecking: string | CheckingResult) => {
  return identityCheckingResultChecking as string;
}

