import React from "react";
import { Container } from "reactstrap";

const LatestVideos = () => {
    return (
        <div className="section-videos">
            <Container>
                <div className="section-videos__title">
                    <h3 className="title">Latest Videos</h3>
                    <div className="sub-title">
                        <span>Watch and learn, ladies</span>
                        <a href="/" className="see-more">
                            See More <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="grid">
                        <div className="grid-1">
                            <iframe
                                title="latest videos"
                                height="100%"
                                width="100%"
                                src="https://www.youtube.com/embed/6LUdS0VFOJc"
                                frameBorder="0"
                            ></iframe>
                        </div>
                        <div className="grid-2">
                            <iframe
                                title="latest videos"
                                height="100%"
                                width="100%"
                                src="https://www.youtube.com/embed/3xX85gS--cs"
                                frameBorder="0"
                            ></iframe>
                        </div>
                        <div className="grid-3">
                            <iframe
                                title="latest videos"
                                height="100%"
                                width="100%"
                                src="https://www.youtube.com/embed/BKrWndOeFW4"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default LatestVideos;
