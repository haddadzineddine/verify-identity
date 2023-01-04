import axios from "axios";
import { IdentityData } from "../types";

export const saveIdentity = async (identity: IdentityData) => {
    console.log(identity);
    const response = await axios.post('https://ekyc-aumez3u45a-lm.a.run.app/ekyc', identity)
    console.log(response.data);
}