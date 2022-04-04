import serviceAction from "../ServiceApi";

const fetchApi = {
    getProductList: ({ dispatch }) => {
        serviceAction(dispatch).fetchApi({
            url: "/hqms/FDN-WP/0.1/wp",
            method: "GET",
            key: "productList",
        });
    },
};
export default fetchApi;
