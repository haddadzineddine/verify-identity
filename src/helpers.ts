import { IdentityData } from "./types";

export const canMoveToUploadImage = (identityState: IdentityData) => {
    if (
        identityState.FIRST_NAME !== "" &&
        identityState.FAMILY_NAME !== "" &&
        identityState.ID_NUMBER !== ""
    ) {
        return true;
    }
    return false;
}

export const canSubmitForm = (identityState: IdentityData) => {
    if (canMoveToUploadImage(identityState)
        && identityState.back_ID !== "" &&
        identityState.front_ID !== "" &&
        identityState.selfi !== "") {
        return true;
    }
    return false;
}