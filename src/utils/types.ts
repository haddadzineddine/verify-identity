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
  decision: boolean;
  face_similarity: string;
};

export type FaceSimilarity = {
  Similarity: string;
};

export type IdentityImage = {
  Card_face: string;
  Selfi_face: string;
};

export type CheckingResult = {
  ID_TYPE: string;
  ID_NUMBER: string;
  FIRST_NAME: string;
  FAMILY_NAME: string;
  AGE: string;
  GENDER: string;
  BIRTHDAY: string;
  NATIONALITY: string;
  ISSUING_NATIONALITY: string;
  EXPIRY_DATE: string;
};


type DataConsistency = {
  FIRST_NAME: string;
  FAMILY_NAME: string;
  ID_TYPE: string;
  ID_NUMBER: string;
  BIRTHDAY: string;
  GENDER: string;
  EXPIRY_DATE: string;
};

export type InspectionResult = {
  status: string;
  data_consistency: DataConsistency;
  face_match: string;
  face_similarity: string;
  document_expired: string;
};