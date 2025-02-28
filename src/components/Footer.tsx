import React from "react";

const FooterComponent: React.FC<any> = ({data}) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <p className="footer-title">{ data?.address?.name }</p>
                    <p>{ data?.address?.phone }</p>
                    <p>{ data?.address?.location }</p>
                </div>
                <div className="footer-section">
                    <p>{ data?.links[0]? data?.links[0]?.name : '' }</p>
                    <p>{ data?.links[1]? data?.links[1]?.name : '' }</p>
                    <p>{ data?.links[2]? data?.links[2]?.name : '' }</p>
                </div>
                <div className="footer-section">
                    <p>{ data?.links[3]? data?.links[3]?.name : '' }</p>
                    <p>{ data?.links[4]? data?.links[4]?.name : '' }</p>
                    <p>{ data?.links[5]? data?.links[5]?.name : '' }</p>
                </div>
                <div className="footer-section">
                    <p>{ data?.links[6]? data?.links[6]?.name : '' }</p>
                    <p>{ data?.links[7]? data?.links[7]?.name : '' }</p>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>© BASIC 2024</p>
                <div className="social-icons">
                    <img alt='fb' src="/assets/facebook.svg"/>
                    <img alt='inst' src="/assets/insta.svg"/>
                    <img alt='youtube' src="/assets/youtube.svg"/>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
