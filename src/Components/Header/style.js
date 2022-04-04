import styled from "styled-components";
import { color } from "../../Utils/Variable";

const Style = styled.header`
    position: relative;
    display: block;
    width: 100%;
    .header {
        &-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            &__logo {
                width: 125px;
            }
            &__form {
                width: 100%;
                margin: 0 20px;
                position: relative;
                border: 1px solid #ddd;
                border-radius: 5px;
                padding-left: 20px;
                &-input {
                    border: unset;
                    font-size: 12px;
                    &:focus {
                        outline: unset;
                        box-shadow: unset;
                    }
                }
                .fa-search {
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding: 8px;
                    cursor: pointer;
                }
            }
            &__btn {
                background: transparent;
                border: unset;
                padding: 0;
                margin-right: 10px;
                margin-left: 15px;
            }
            .btn-login {
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px 20px;
                width: 215px;
                border-radius: unset;
                .fa-user-circle {
                    font-size: 20px;
                    margin-right: 7px;
                }
            }
        }
        &-bottom {
            .nav {
                justify-content: center;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: bold;
                &-link {
                    color: #000;
                    transition: all 0.25s ease;
                    &:hover {
                        color: ${color.primary};
                    }
                }
            }
        }
    }
`;
export default Style;
