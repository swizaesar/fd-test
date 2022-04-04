import { Card } from "reactstrap";
import styled from "styled-components";
import { color } from "../../Utils/Variable";
export const CardProductStyle = styled(Card)`
    margin-bottom: 30px;
    position: relative;
    cursor: pointer;
    .product {
        &-image {
            padding: 20px;
        }
        &-rating {
            margin-bottom: 10px;
        }
        &-name {
            margin-bottom: 5px;
            font-size: 14px;
        }
        &-desc {
            font-size: 12px;
        }
        &-user {
            position: absolute;
            top: -54px;
            left: 0;
            right: 0;
            display: flex;
            padding: 15px;
            &__image {
                width: 45px;
                border-radius: 50%;
                margin-right: 15px;
            }
            &__name {
                font-size: 12px;
                font-weight: bold;
            }
            &__position {
                font-size: 10px;
            }
        }
    }
`;
export const CardArticleStyle = styled.div`
    margin-bottom: 30px;
    .img-fluid {
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .title {
        font-size: 16px;
        font-weight: bold;
    }
    .desc {
        font-size: 12px;
        color: #4a4a4a;
        text-transform: capitalize;
        span {
            color: #aaa;
        }
    }
`;
export const CardReviewStyle = styled(Card)`
    position: relative;
    .card {
        &-top {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
            padding-bottom: 15px;
            img {
                width: 58px;
                margin-right: 5px;
            }
            &__name {
                margin-bottom: 5px;
            }
            &__rating {
                margin-bottom: 10px;
            }
            &__comment {
                font-size: 14px;
                &-text {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                &-button {
                    cursor: pointer;
                    color: ${color.primary};
                }
            }
        }
        &-bottom {
            position: absolute;
            bottom: -70px;
            text-align: center;
            left: 0;
            right: 0;
            .img-avatar {
                margin: auto;
                width: 40px;
                border-radius: 50%;
            }
            &__user {
                &-name {
                    font-size: 14px;
                    font-weight: 600;
                }
                &-profile {
                    font-size: 12px;
                    color: #aaa;
                }
            }
        }
    }
`;
export const CardPopularStyle = styled(Card)`
    box-shadow: rgb(0 0 0 / 8%) -4px 4px 16px;
    border: unset;
    text-align: center;
    .img-fluid {
        margin-bottom: 5px;
    }
    .title {
        font-size: 18px;
        margin-bottom: 30px;
        font-weight: 700;
    }
    .desc {
        font-size: 16px;
        font-weight: 500;
    }
    .icon-action {
        display: flex;
        margin: 0 20px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
`;
