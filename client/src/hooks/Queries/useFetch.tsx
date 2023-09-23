import { useQuery } from "react-query";

import { request } from "../../lib/axios";
const fetch = (endpoint: string) => {
    return request({ url: endpoint });
};

const UseFetch = (endpoint: string) => {
    return useQuery(endpoint, () => fetch(endpoint), {
        staleTime: Infinity,
    });
};

export default UseFetch;
