import React from "react";

const ExperiencesComponent: React.FC<any> = ({data}) => {
    return (
        <div className="experiences-container">
            <div className="experiences-content">
                <div className="experiences-text">
                    <h2 className="highlight">
                        <span className="highlight">{data?.title}</span> {data?.subtitle}
                    </h2>
                    <div className="title-container">
                        <hr className="line"/>
                        <p className="title-ex">{data?.text_title}</p>
                    </div>
                    <div className="title-container">
                        <p className="description-ex">
                            {data?.text}
                        </p>
                    </div>
                </div>
                <div className="experiences-image">
                    <img src="/assets/icescrem.svg" alt="Experience"/>
                </div>
            </div>
            <div className="experiences-icons">
                <div className="icon-box">
                    <img alt='authen' src="/assets/authen.svg"/>
                    <p className="icon-title">{data?.pictos[0] ? data?.pictos[0].title : ''}</p>
                    <p className="icon-subtitle">{data?.pictos[0] ? data?.pictos[0].description : ''}</p>
                </div>
                <div className="icon-box">
                    <img alt='res' src="/assets/respect.svg"/>
                    <p className="icon-title">{data?.pictos[1] ? data?.pictos[1].title : ''}</p>
                    <p className="icon-subtitle">{data?.pictos[1] ? data?.pictos[1].description : ''}</p>
                </div>
                <div className="icon-box">
                    <img alt='dive' src="/assets/diversite.svg"/>
                    <p className="icon-title">{data?.pictos[2] ? data?.pictos[2].title : ''}</p>
                    <p className="icon-subtitle">{data?.pictos[2] ? data?.pictos[2].description : ''}</p>
                </div>
                <div className="icon-box">
                    <img alt='personal' src="/assets/personal.svg"/>
                    <p className="icon-title">{data?.pictos[3] ? data?.pictos[3].title : ''}</p>
                    <p className="icon-subtitle">{data?.pictos[3] ? data?.pictos[3].description : ''}</p>
                </div>
                <div className="icon-box">
                    <img alt='confort' src="/assets/confort.svg"/>
                    <p className="icon-title">{data?.pictos[4] ? data?.pictos[4].title : ''}</p>
                    <p className="icon-subtitle">{data?.pictos[4] ? data?.pictos[4].description : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperiencesComponent;
