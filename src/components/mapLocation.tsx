'use client'

import { Loader } from "@googlemaps/js-api-loader";
import React, {useEffect} from "react";

export function Map(){
  
  const mapRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {

      const  loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary

      const position = {
        lat:-22.024181365966797,
        lng: -47.8944091796875
      }

      //map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 19,
        mapId: "c313721f5fce1646",

      }

     // const mapStyle: google.maps.MapTypeStyle = {
       // stylers: 'c313721f5fce1646',

      //}
    
      //setup
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

      //setup marker 
      const marker = new Marker({
        map: map,
        position: position,
        

      })

  }
  initMap();

  }, [])


  return(
    <div style={{height: '300px', width: '300px' }} ref={mapRef} />

    
  )
}