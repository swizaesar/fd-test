import React from "react";
import EditorChoice from "./EditorChoice";
import fetchApi from "../../Services/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import Style from "./style";
import MatchSkin from "./MatchSkin";
import LatestArticles from "./LatestArticles";
import LatestReviews from "./LatestReviews";
import PopularGroup from "./PopularGroups";
import LatestVideos from "./LatestVideos";
import Trending from "./Trending";
import TopBrand from "./TopBrand";
import { Container } from "reactstrap";

const Home = () => {
    const [data, setData] = React.useState([]);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    React.useEffect(() => {
        fetchApi.getProductList({ dispatch });
    }, []);
    React.useEffect(() => {
        if (state?.productList?.isSuccess) {
            setData(state.productList.data);
        }
    }, [state]);
    return (
        <Style>
            <Container>
                <div className="frame">
                    <div className="top-frame">Top Frame 970x50</div>
                    <div className="billboard">Billboard 970x250</div>
                </div>
            </Container>
            <EditorChoice product={data["editor's choice"]} />
            <MatchSkin product={data["editor's choice"]} />
            <Container>
                <div className="frame">
                    <div className="billboard">
                        Horizontal 970x250 <br />
                        (Internal campaign only)
                    </div>
                </div>
            </Container>
            <LatestArticles product={data["latest articles"]} />
            <LatestReviews product={data["latest review"]} />
            <PopularGroup />
            <LatestVideos />
            <Trending product={data["editor's choice"]} />
            <TopBrand />
        </Style>
    );
};
export default Home;
