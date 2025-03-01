import React, {useState} from "react";
import "leaflet/dist/leaflet.css";


interface Marker {
    id: number;
    top: string;
    left: string;
    name: string;
    description: string;
    img: string;
}

const MapSection: React.FC<any> = ({ data, bloc2 }) => {
    const [activeMarker, setActiveMarker] = useState<number | null>(null);
    const markers: Marker[] = [
        { id: 1, top: "40%", left: "45%", name: data[0]? data[0].name : '', description: data[0] && data[0].activities ? data[0].activities.join(', ') : '', img: "/assets/MapPin1.png" },
        { id: 2, top: "80%", left: "55%", name: data[1]? data[1].name : '', description: data[1] && data[1].activities ? data[1].activities.join(', ') : '', img: "/assets/MapPin2.png" },
        { id: 3, top: "50%", left: "70%", name: data[2]? data[2].name : '', description: data[2] && data[2].activities ? data[2].activities.join(', ') : '', img: "/assets/MapPin3.png" },
    ];

    const handleMarkerClick = (id: number) => {
        setActiveMarker(id);
    };

    const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveMarker(null);
    };

    return (
        <section className="p-12 map-section">
            <div className="container mx-auto text-center flex-row justify-items-center">
                <div className="w-full">
                <div className="flex items-center">
                    <div className="line-title"></div>
                    <h2 className="features-title mb-2">{bloc2.title}</h2>
                    <div className="line-title"></div>
                </div>
                </div>
                <div className="map-activity flex gap-4 my-4 justify-center">
                    <button
                        className="button-map flex items-center gap-2">
                        <img alt="mou" src="/assets/tourism-icon.svg"/> {bloc2?.cases[0]}
                    </button>
                    <button
                        className="button-map flex items-center gap-2">
                        <img alt="mou1" src="/assets/fishing-icon.svg"/> {bloc2?.cases[1]}
                    </button>
                    <button
                        className="button-map flex items-center gap-2">
                        <img alt="mou2" src="/assets/hunting-icon.svg"/> {bloc2?.cases[2]}
                    </button>
                </div>
                {/* Bản đồ */}
                <div onClick={handleMapClick}
                     className="map-container mb-10 relative w-2/3 overflow-hidden justify-center flex">
                    <img src="/assets/map.png" alt="Map" className="map-image"/>
                    {markers.map((marker) => (
                        <div
                            key={marker.id}
                            className={`marker ${activeMarker === marker.id ? "active" : ""}`}
                            style={{top: marker.top, left: marker.left}}
                            onClick={(e) => {
                                e.stopPropagation(); // Ngăn chặn click lan ra map
                                handleMarkerClick(marker.id);
                            }}
                        >
                            <img src={marker.img} alt={marker.name}/>
                            {/* Popup hiển thị Name & Description */}
                            {activeMarker === marker.id && (
                                <div className="popup">
                                    <strong>{marker.name}</strong>
                                    <p>{marker.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="sample-map">
                        <img src="/assets/sample.png" alt={'sample'}/>
                        Emplacement
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
