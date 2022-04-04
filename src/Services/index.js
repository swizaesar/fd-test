import serviceState from "./ServiceState";

const stateRedux = (state, action) => {
    return {
        ...state,
        [action.key]: { ...action },
    };
};
const serviceRedux = (state = serviceState, action = () => {}) => {
    return stateRedux(state, action);
};
export default serviceRedux;
