import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = ({route}) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const calculateRoute = (origin, destination) => {
    const API_KEY = 'AIzaSyDR8mTO-8kJ5SPp8PWzxY7_SWTDhtkwQx0';

    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {        
        if (responseJson.status === 'OK') {
          const points = responseJson.routes[0].overview_polyline.points;
          const coordinates = decodePolyline(points);          
          setRouteCoordinates(coordinates);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to decode Google Maps polyline encoding
  const decodePolyline = (encodedPolyline) => {
    const polylinePoints = [];
    let index = 0,
    latitude = 0,
    longitude = 0;

    while (index < encodedPolyline.length) {
      let b, shift = 0, result = 0;
      do {
        b = encodedPolyline.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
      latitude += dlat;

      shift = 0;
      result = 0;
      do {
        b = encodedPolyline.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = ((result & 1) !== 0 ? ~(result >> 1) : (result >> 1));
      longitude += dlng;

      polylinePoints.push({
        latitude: latitude / 1e5,
        longitude: longitude / 1e5,
      });
    }

    return polylinePoints;
  };
  
  const renderMarkers = () => {
    var {desc, name} = route.params
    var edges
    var coordinates = {latitude: 0, longitude: 0}
    if (route.params.context === "trails") {
      edges = route.params.edges
      return (
        edges.map((edge,index) => {
          calculateRoute({latitude: edge.edge_start.pin_lat, longitude: edge.edge_start.pin_lng},
            {latitude: edge.edge_end.pin_lat, longitude: edge.edge_end.pin_lng});          
          
          if(index < edges.length - 1) {
            return(
              <Marker
                  key={index}
                  coordinate={{latitude: edge.edge_start.pin_lat, longitude: edge.edge_start.pin_lng}} 
                  title={edge.edge_start.pin_name}
                  description={edge.edge_start.pin_desc}                
              />
            )
          }
          else {
            return(
              <>
              <Marker
                  key={index}
                  coordinate={{latitude: edge.edge_start.pin_lat, longitude: edge.edge_start.pin_lng}} 
                  title={edge.edge_start.pin_name}
                  description={edge.edge_start.pin_desc}                
              />
              <Marker
                  key={index}
                  coordinate={{latitude: edge.edge_end.pin_lat, longitude: edge.edge_end.pin_lng}} 
                  title={edge.edge_start.pin_name}
                  description={edge.edge_start.pin_desc}                
              />
              </>
            )
          }
        })
        
      )
    }

    else if (route.params.context === "pins") {
      coordinates.latitude = route.params.lat
      coordinates.longitude = route.params.lng
      return(
        <Marker
            key={0}
            coordinate={coordinates}
            title={name}
            description={desc}    
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {renderMarkers()}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="green"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
