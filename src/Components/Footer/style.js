import styled from "styled-components";
import { color } from "../../Utils/Variable";

const Style = styled.footer`
    padding: 30px;
    .footer {
        &-nav {
            list-style: none;
            padding: 0;
            display: block;
            &__list {
                padding: 8px;
                &-item {
                    color: #000;
                    text-decoration: unset;
                    font-weight: bold;
                    font-size: 14px;
                    transition: all 0.25s ease;
                    &:hover {
                        text-decoration: unset;
                        color: ${color.primary};
                        transition: all 0.25s ease;
                    }
                }
            }
        }
        &-text {
            color: #000;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        &-download {
            display: flex;
            &__app {
                margin-right: 7px;
            }
        }
        &-sosmed {
            list-style: none;
            padding: 0;
            display: flex;
            align-items: center;
            &__list {
                &-item {
                    padding: 10px;
                    img {
                        width: 30px;
                    }
                }
            }
        }
    }
    .img-logo {
        width: 150px;
        margin-bottom: 10px;
    }
    .copyright {
        color: #aaa;
        font-size: 14px;
        font-weight: 500;
    }
`;
export default Style;
