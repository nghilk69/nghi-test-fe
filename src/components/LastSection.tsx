import React from "react";

const Lastection: React.FC<any> = ({data}) => {
    return (
        <section className="last-section">
            <div className="last-content">
                <h1 className="last-title bold">{data?.title}</h1>
                <h2 className="last-subtitle">{data?.subtitle}</h2>
                <p className="last-description">
                    {data?.text}
                </p>
                <button className="last-button">{data?.button}</button>
            </div>
        </section>
    );
};

export default Lastection;
