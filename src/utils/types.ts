export type IdentityData = {
  FIRST_NAME: string;
  FAMILY_NAME: string;
  ID_NUMBER: string;
  GENDER: 'male' | 'female';
  front_ID: string;
  back_ID: string;
  selfi: string;
};

export type IdentityResult = {
  Decision: boolean;
  Checking: string | CheckingResult;
};

export type CheckingResult = {
  ID_TYPE: string;
  ID_NUMBER: string;
  FIRST_NAME: string;
  FAMILY_NAME: string;
  GENDER: string;
  BIRTHDAY: string;
  NATIONALITY: string;
  ISSUING_NATIONALITY: string;
  EXPIRY_DATE: string;
};
