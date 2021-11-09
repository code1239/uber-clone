import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZTEyMzkiLCJhIjoiY2t2cjBhbmJsMm9rMDJ1dGsxNm53dmt2aSJ9.2d6ja2GjN9ZidUUkcPPj9A';

const Map = ({pickupCoordinates, dropoffCoordinates}) => {
    useEffect(() => {
    const map  = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [35,39],
    zoom: 4.3
    });
   if(pickupCoordinates && dropoffCoordinates){ 
    addToMap(map, pickupCoordinates, dropoffCoordinates)
    map.fitBounds([
     pickupCoordinates, 
     dropoffCoordinates
    ],{
      padding: 60
    })
   } 
   
   
  }, [pickupCoordinates, dropoffCoordinates]);

 

    const addToMap = (map, pickupCoordinates, dropoffCoordinates) => {
      const marker1 = new mapboxgl.Marker()
      .setLngLat(pickupCoordinates)
      .addTo(map);
      const marker2 = new mapboxgl.Marker()
      .setLngLat(dropoffCoordinates)
      .addTo(map);
    }
    

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`