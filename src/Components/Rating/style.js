import styled from "styled-components";
import { color } from "../../Utils/Variable";

const Style = styled.div`
    text-align: left;
    i {
        font-size: 14px;
        color: #ddd;
        &.active {
            color: ${color.primary};
        }
    }
    span {
        font-size: 12px;
    }
`;
export default Style;
