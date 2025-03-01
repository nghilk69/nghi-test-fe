import React from "react";

const SocialMediaComponent: React.FC<any> = ({data}) => {
    return (
        <div className="container-so mt-4">
            <div className="social-media-container">
                <div className="text-section">
                    <div className="so-description">
                        {data?.text}
                    </div>
                    <h2>
                        {data?.title} <span>#BASIC</span>
                    </h2>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="image-wrapper"></div>

                        <div className="footer-so">
                            <div className="text flex justify-between">
                                <h3>{data?.reviews[0] ? data?.reviews[0].author : ''}</h3>
                                <div className="date">{data?.reviews[0] ? data?.reviews[0].date : ''}</div>

                            </div>
                            <p className="text-left">{data?.reviews[0] ? data?.reviews[0].review : ''}</p>
                        </div>
                    </div>
                </div>

                <div className="image-grid">
                    <div className="grid-card">
                        <div className="grid-item">
                            <img src="/assets/food-2.svg" alt="Avocado"/>
                            <div className="footer-food">
                                <div className="flex items-center">
                                    <img alt='ings' src="/assets/mdi_instagram.svg"/>
                                    <h3 className="ml-2">{data?.reviews[1] ? data?.reviews[1].author : ''}</h3>
                                </div>
                                <div className="arrow-food">
                                    <img alt='arr' src="/assets/ArrowUpRightFood.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-card">
                        <div className="grid-item">
                            <img src="/assets/food-3.svg" alt="Avocadoa"/>
                            <div className="footer-food">
                                <div className="flex items-center">
                                    <img alt='ings' src="/assets/mdi_instagram.svg"/>
                                    <h3 className="ml-2">{data?.reviews[2] ? data?.reviews[2].author : ''}</h3>
                                </div>
                                <div className="arrow-food">
                                    <img alt='arr' src="/assets/ArrowUpRightFood.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-card">
                        <div className="grid-item">
                            <img src="/assets/food-4.svg" alt="Avocaado"/>
                            <div className="footer-food">
                                <div className="flex items-center">
                                    <img alt='ings' src="/assets/mdi_instagram.svg"/>
                                    <h3 className="ml-2">{data?.reviews[3] ? data?.reviews[3].author : ''}</h3>
                                </div>
                                <div className="arrow-food">
                                    <img alt='arr' src="/assets/ArrowUpRightFood.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-card">
                        <div className="grid-item">
                            <img src="/assets/food-5.svg" alt="Aavocado"/>
                            <div className="footer-food">
                                <div className="flex items-center">
                                    <img alt='ings' src="/assets/mdi_instagram.svg"/>
                                    <h3 className="ml-2">{data?.reviews[4] ? data?.reviews[4].author : ''}</h3>
                                </div>
                                <div className="arrow-food">
                                    <img alt='arr' src="/assets/ArrowUpRightFood.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-text">
                    {data?.footer}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaComponent;
