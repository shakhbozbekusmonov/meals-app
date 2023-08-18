import axios from "axios";
import { API_PATH } from "../Utils/constants";

export const Api = axios.create({
    baseURL: API_PATH,
});
