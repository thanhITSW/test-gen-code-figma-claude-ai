import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";



const MapComponent: React.FC = () => {
  const position: LatLngExpression = [10.794086040049127, 106.64164982562498];

  const positions: { id: number; position: LatLngExpression; name: string }[] = [
    { id: 1, position: [10.794086040049127, 106.64164982562498], name: "Hà Nội" },
    { id: 2, position: [10.794507267672506, 106.64186118462572], name: "Hồ Chí Minh" },
    { id: 3, position: [16.0544, 108.2022], name: "Đà Nẵng" },
    // Thêm các vị trí khác nếu cần
  ];

  // Fix Leaflet default icon issue
useEffect(() => {
  // This is needed to properly display the default marker icon
  delete (window as any).L.Icon.Default.prototype._getIconUrl;
  (window as any).L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
  });
}, []);

const createMarkerWithArrow = (text) => {
  return L.divIcon({
    className: 'custom-marker-container',
    html: `
      <div class="marker-rectangle">
        <div class="marker-content">${text}</div>
        <div class="marker-arrow"></div>
      </div>
    `,
    iconSize: [80, 45],    // Điều chỉnh để có chỗ cho mũi tên
    iconAnchor: [40, 40],  // Điểm neo ở dưới mũi tên
    popupAnchor: [0, -45]  // Popup xuất hiện phía trên hình chữ nhật
  });
};

  return (
    <>
          <style>
        {`
          .custom-marker-container {
            background: transparent;
            border: none;
          }
          
          .marker-rectangle {
            position: relative;
            width: 80px;
            height: 30px;
          }
          
          .marker-content {
            background-color: #3388ff;
            color: white;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 4px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .marker-arrow {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #3388ff;
          }
        `}
      </style>
    <div className="map-container" style={{ width: "500px", height: "500px" }}>
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        attributionControl={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
              {/* Render các markers từ mảng positions */}
      {positions.map(item => (
        <Marker key={item.id} position={item.position} icon={createMarkerWithArrow(item.name)}>
          <Popup>
            {item.name} <br /> Vị trí: 111
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    </div>
    </>
  );
};

export default MapComponent;