import { image64ToImageFile } from './../helpers';
import { IdentityData } from "../types";

export const saveIdentity = async (identity: IdentityData) => {

    const { FIRST_NAME, FAMILY_NAME, ID_NUMBER, GENDER } = identity;

    const url = `https://ekyc-aumez3u45a-lm.a.run.app/ekyc?FIRST_NAME=${FIRST_NAME}&FAMILY_NAME=${FAMILY_NAME}
    &ID_NUMBER=${ID_NUMBER}&GENDER=${GENDER}`;

    console.log(identity.front_ID);
    

    // const front_file = await image64ToImageFile(identity.front_ID);
    // const back_file = await image64ToImageFile(identity.back_ID);
    // const selfi_file = await image64ToImageFile(identity.selfi);

    // const data = new FormData();
    // data.append('back_ID', back_file);
    // data.append('front_ID', front_file);
    // data.append('selfi', selfi_file);


    // const response = await fetch(url, {
    //     method: 'POST',
    //     body: data
    // });

    // const result = await response.json();

    // console.log(result);
    // return result;
}

