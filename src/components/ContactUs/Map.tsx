import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './Map.css'

interface Props {
	position: [a: number, b: number];
}

const Map = ({ position = [43.651070, -79.347015] }: Props) => {
	return (
		<div className="relative z-0 h-full">
			<div className="w-full h-full">
				<MapContainer
					center={position}
					zoom={13}
					scrollWheelZoom={false}
					style={{ height: "100%" }}
					zoomControl={false}
				>
					<TileLayer
						attribution=""
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>This is our main branch at Toronto, ON, Canada</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default Map;
