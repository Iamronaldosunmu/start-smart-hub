import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import marker from "./../../../assets/Vector.png";

interface Props {
  position: [a: number, b: number];
}


const customIcon = L.icon({
  iconUrl: marker,
  iconSize: [33, 40],
  iconAnchor: [12, 12],
});

const Map = ({ position }: Props) => {
  return (
    <div className="relative z-0">
      <MapContainer
        className="h-full w-full object-contain relative"
        center={position}
        zoomControl={false}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={customIcon}>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
