import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Props {
	position: [a: number, b: number];
}

const Map = ({ position = [51.505, -0.09] }: Props) => {
	return (
		<div className="relative z-0 h-full">
			<div className="w-full h-full">
				<MapContainer
					// center={[51.505, -0.09]}
					// zoom={13}
					// scrollWheelZoom={false}
					style={{ height: "100%" }}
				>
					<TileLayer
						// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default Map;
