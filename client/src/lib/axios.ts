import axios from "axios";

/* import { selectCurrentToken } from "../store/redux/authSlice";

const token = selectCurrentToken; */

const client = axios.create({ baseURL: "https://localhost:7265/api" });

export const request = ({ ...options }) => {
    //  if (token) client.defaults.headers.common.Authorization = `Bearer ${token}`;

    const onSuccss = (res: any) => res;
    const onError = (err: any) => console.log(err);

    return client(options).then(onSuccss).catch(onError);
};
