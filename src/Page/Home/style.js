import styled from "styled-components";
import { color } from "../../Utils/Variable";

const Style = styled.div`
    .frame {
        display: block;
        justify-content: center;
        margin: 20px 0;
    }
    .top-frame {
        width: 970px;
        margin: auto;
        height: 50px;
        border: 1px solid #c7c7c7;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        color: #5b5b5b;
        font-size: 26px;
        text-align: center;
        font-weight: 700;
    }
    .billboard {
        text-align: center;
        margin: auto;
        width: 970px;
        height: 250px;
        border: 1px solid #c7c7c7;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 35px;
        color: #5b5b5b;
        font-size: 26px;
        font-weight: 700;
    }
    .mr-2 {
        text-align: center;
        margin: auto;
        width: 300px;
        height: 250px;
        border: 1px solid #c7c7c7;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        color: #5b5b5b;
        font-size: 26px;
        font-weight: 700;
    }
    .section {
        &-choice {
            &__header {
                margin-bottom: 60px;
            }
        }
        &-skin {
            background-color: ${color.secondary};
            padding: 20px;
            padding-bottom: 0;
            margin-bottom: 40px;
            .title {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .desc {
                font-size: 14px;
                font-weight: 500;
                line-height: 1.3;
                margin-bottom: 30px;
            }
        }
        &-articles,
        &-reviews,
        &-popular,
        &-videos,
        &-trending {
            padding: 20px;
            &__title {
                margin-bottom: 30px;
                .sub-title {
                    color: #4a4a4a;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
            .slick-slider {
                margin: 0 -15px;
            }
            .card {
                &-slider {
                    padding: 0 15px;
                }
            }
        }
        &-reviews,
        &-trending {
            .slick {
                &-slider {
                    .fas {
                        position: absolute;
                        bottom: -35px;
                        color: ${color.primary};
                        cursor: pointer;
                        z-index: 2;
                        font-size: 20px;
                    }
                    .fa-angle-right {
                        right: 310px;
                    }
                    .fa-angle-left {
                        left: 310px;
                    }
                }
                &-dots {
                    bottom: -35px;
                    li {
                        button {
                            &:before {
                                color: ${color.primary};
                            }
                        }
                    }
                }
                &-list {
                    min-height: 345px;
                }
            }
        }
        &-trending {
            .slick {
                &-slider {
                    .fa-angle-right {
                        bottom: 25px;
                        right: 520px;
                    }
                    .fa-angle-left {
                        bottom: 25px;
                        left: 520px;
                    }
                }
                &-dots {
                    bottom: 25px;
                }
            }
        }
        &-videos {
            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 15vw);
                gap: 1rem;
                &-1 {
                    grid-row-start: 1;
                    grid-column-start: 1;
                    grid-row-end: 3;
                    grid-column-end: 3;
                }
                &-2 {
                    grid-row-start: 1;
                    grid-column-start: 3;
                    grid-row-end: 1;
                    grid-column-end: 3;
                }
                &-3 {
                    grid-row-start: 2;
                    grid-column-start: 3;
                    grid-row-end: 2;
                    grid-column-end: 3;
                }
            }
        }
        &-brand {
            &__content {
                margin-bottom: 40px;
                .img-brand {
                    display: block;
                    margin: auto;
                }
            }
            &__bottom {
                h4 {
                    font-weight: 700;
                    font-size: 20px;
                }
                p {
                    font-size: 16px;
                }
            }
        }
    }
`;
export default Style;
