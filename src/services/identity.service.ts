import { image64ToImageFile } from '../utils';
import { IdentityData, IdentityResult } from '../utils/types';

export const saveIdentity = async (identity: IdentityData): Promise<IdentityResult> => {
  const { FIRST_NAME, FAMILY_NAME, ID_NUMBER, GENDER } = identity;
  console.log(GENDER, 'jqkbdjksdv');

  const url = `https://ekyc-aumez3u45a-lm.a.run.app/ekyc?FIRST_NAME=${FIRST_NAME}&FAMILY_NAME=${FAMILY_NAME}
    &ID_NUMBER=${ID_NUMBER}&GENDER=${GENDER.toLocaleLowerCase() === 'male' ? 'M' : 'F'}`;

  const front_file = await image64ToImageFile(identity.front_ID);
  const back_file = await image64ToImageFile(identity.back_ID);
  const selfi_file = await image64ToImageFile(identity.selfi);

  const data = new FormData();
  data.append('back_ID', back_file);
  data.append('front_ID', front_file);
  data.append('selfi', selfi_file);

  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  const result: IdentityResult = await response.json();

  return result;
};
