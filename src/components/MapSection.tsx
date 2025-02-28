

const MapSection: React.FC<any> = ({ data, bloc2 }) => {
    return (
        <section className="p-12 map-section">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">{bloc2.title}</h2>
                <div className="flex gap-4 my-4 justify-center">
                    <button
                        className="button-map flex items-center gap-2">
                        <img src="/assets/tourism-icon.svg"/> { bloc2?.cases[0] }
                    </button>
                    <button
                        className="button-map flex items-center gap-2">
                        <img src="/assets/fishing-icon.svg"/> { bloc2?.cases[1] }
                    </button>
                    <button
                        className="button-map flex items-center gap-2">
                        <img src="/assets/hunting-icon.svg"/> { bloc2?.cases[2] }
                    </button>
                </div>
                {/* Bản đồ */}
                <div className=" mb-10 relative w-full h-[500px] overflow-hidden justify-center flex">
                    <iframe
                        width={'70%'}
                        height={'100%'}
                        style={{border: 0, borderRadius: 20}}
                        loading="lazy"
                        allowFullScreen
                        // src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&center=${47},${75}&zoom=5&maptype=satellite&&language=en-US`}
                        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${encodeURIComponent(data?.address)}&zoom=10&maptype=satellite&&language=en-US`}
                    />
                </div>
            </div>
        </section>
    );
}

export default MapSection;
