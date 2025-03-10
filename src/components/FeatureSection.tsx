
const FeatureSection: React.FC<any> = ({data}) => {


    return (
        <section className="features py-12 bg-white">
            <div className="container mx-auto text-center">
                <div className="flex items-center">
                    <div className="line-title"></div>
                    <h2 className="features-title mb-2 px-2">{data.title}</h2>
                    <div className="line-title"></div>
                </div>

                <p className="features-subtitle mb-10">{ data.subtitle }</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="rounded-lg card-item">
                        <img src="/assets/features1.svg" alt="Cours en Ligne" className="rounded-lg mb-4" />
                        <h3 className="title-bloc1">{ data.cases[0]?.category }</h3>
                        <h2 className="sub-bloc1">{ data.cases[0]?.tagline }</h2>
                        <p className="des-bloc1 mb-4">{ data.cases[0]?.description }</p>
                        <button className="btn text-orange-500 btn-feature"><span>{ data.cases[0]?.cta }<img
                            src='/assets/ArrowUpRight.svg'/></span></button>
                    </div>
                    <div className="rounded-lg card-item-2 card-item">
                        <img src="/assets/features2.svg" alt="Ateliers Pratiques" className="rounded-lg mb-4"/>
                        <h3 className="title-bloc1">{ data.cases[1]?.category }</h3>
                        <h2 className="sub-bloc1">{ data.cases[1]?.tagline }</h2>
                        <p className="des-bloc1 mb-4">{ data.cases[1]?.description }</p>
                        <button className="btn text-orange-500 btn-feature"><span>{data.cases[1]?.cta}<img
                            src='/assets/ArrowUpRight.svg'/></span></button>
                </div>
                    <div className="rounded-lg card-item">
                        <img src="/assets/features3.svg" alt="Expériences Gastronomiques" className="rounded-lg mb-4"/>
                        <h3 className="title-bloc1">{data.cases[2]?.category}</h3>
                        <h2 className="sub-bloc1">{data.cases[2]?.tagline}</h2>
                        <p className="des-bloc1 mb-4">{data.cases[2]?.description}</p>
                        <button className="btn text-orange-500 btn-feature"><span>{data.cases[2]?.cta}<img
                            src='/assets/ArrowUpRight.svg'/></span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
