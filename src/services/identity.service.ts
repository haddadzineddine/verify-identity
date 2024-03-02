import { accessToken, apiUrl } from '../config/app';
import { api } from '../lib/axios';
import { image64ToImageFile } from '../utils';
import { IdentityData, IdentityResult, InspectionResult } from '../utils/types';

export const saveIdentity = async (identity: IdentityData): Promise<IdentityResult> => {
  const { FIRST_NAME, FAMILY_NAME, ID_NUMBER, GENDER } = identity;
  console.log(GENDER, 'jqkbdjksdv');

  const url = `${apiUrl}/ekyc?FIRST_NAME=${FIRST_NAME}&FAMILY_NAME=${FAMILY_NAME}
    &ID_NUMBER=${ID_NUMBER}&GENDER=${GENDER.toLocaleLowerCase() === 'male' ? 'M' : 'F'}`;

  const front_file = await image64ToImageFile(identity.front_ID);
  const back_file = await image64ToImageFile(identity.back_ID);
  const selfi_file = await image64ToImageFile(identity.selfi);

  // const data = new FormData();
  // data.append('back_ID', back_file);
  // data.append('front_ID', front_file);
  // data.append('selfi', selfi_file);
  // export const createCustomerIdUrl = `/Onboarding/customers/`;
  // export const createCustomerOcrRecordUrl = (customerId: string) => `/Onboarding/customers/${customerId}/ocr`;
  // export const createCustomerFaceMatchUrl = (customerId: string) => `/Onboarding/customers/${customerId}/face_match`;
  // export const createCustomerInspectionUrl = (customerId: string) => `/Onboarding/customers/${customerId}/inspection`;

  // 1- create customer Id

  const customerResponse = await api.post('/Onboarding/customers/', {}, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const customerId = customerResponse.data['User ID']

  console.log(customerId, 'customerId');

  // 2- create customer ocr record

  const ocrRecordResponse = await api.postForm(`/Onboarding/customers/${customerId}/ocr/`, {
    fornt_ID: front_file,
    back_ID: back_file,
    type: 'idcard',
  }, {  
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
      'accept': 'application/json',
    },
  });

  console.log(ocrRecordResponse, 'ocrRecordResponse');

  // 3- create customer face match

  const faceMatchResponse = await api.postForm(`/Onboarding/customers/${customerId}/face_match`, {
    Image: selfi_file,
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(faceMatchResponse, 'faceMatchResponse');

  // 4- create customer inspection

  const inspectionResponse = await api.post<InspectionResult>(`/Onboarding/customers/${customerId}/inspection`, {}, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(inspectionResponse, 'inspectionResponse');

  const result = inspectionResponse.data;


  return {
    decision: result.status === 'passed' ? true : false,
    face_similarity : result.face_similarity,
  };
};
