export type IdentityData = {
    FIRST_NAME: string,
    FAMILY_NAME: string,
    ID_NUMBER: string,
    GENDER: 'M' | 'F',
    front_ID: string,
    back_ID: string,
    selfi: string
}

export type IdentityResult = {
    Decision: boolean,
    Checking: string,
}