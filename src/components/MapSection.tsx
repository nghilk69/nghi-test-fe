import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, {LatLngExpression} from "leaflet";

const MapSection: React.FC<any> = ({ data, bloc2 }) => {
    const customIcon = (iconUrl: string) =>
        L.icon({
            iconUrl,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
        });

    const markers: { position: LatLngExpression; img: string; label: string }[] = [
        { position: [48.8566, 2.3522], img: "/assets/MapPin1.png", label: "" },
        { position: [45.764, 4.8357], img: "/assets/MapPin2.png", label: "" },
        { position: [43.6047, 1.4442], img: "/assets/MapPin3.png", label: "" },
    ];
    return (
        <section className="p-12 map-section">
            <div className="container mx-auto text-center flex-row justify-items-center">
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
                <div className=" mb-10 relative w-2/3 h-[698px] overflow-hidden justify-center flex">
                    <MapContainer center={[47, 2]} zoom={6} className="w-full h-full rounded-lg absolute">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                position={marker.position}
                                icon={customIcon(marker.img)}
                            >
                                <Popup>{marker.label}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
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
