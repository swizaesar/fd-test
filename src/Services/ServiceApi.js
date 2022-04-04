import axios from "axios";

const serviceApi = async (options) => {
    const configAxios = {
        baseURL: "https://virtserver.swaggerhub.com",
    };
    const axiosConfig = axios.create(configAxios);
    return await axiosConfig(options)
        .then((res) => {
            return {
                response: res.data,
                success: true,
                error: false,
                key: options.key,
                type: "success",
            };
        })
        .catch((err) => {
            return {
                response: err.data,
                success: false,
                error: true,
                key: options.key,
                type: "error",
            };
        });
};
const fetchApi = async (dispatch, value) => {
    const result = await serviceApi(value);
    if (result) {
        dispatch({
            data: result.response,
            isError: result.error,
            isSuccess: result.success,
            key: value.key,
            type: result.type,
        });
    }
};
const serviceAction = (dispatch) => ({
    fetchApi: (value) => {
        fetchApi(dispatch, value);
    },
});
export default serviceAction;
