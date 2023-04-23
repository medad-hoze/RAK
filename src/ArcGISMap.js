// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import view from '@arcgis/core/views/View';
import './App.css';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Fullscreen from "@arcgis/core/widgets/Fullscreen.js";
// import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import reSize from './App.js';


const ArcGISMap = ({openLayer,reSize}) => {
  const mapDiv = useRef(true);
  let ignore = false;

  console.log(reSize)

  useEffect(() => {

    if (ignore) return;
    
    if (mapDiv.current) {
      const map = new Map({
        basemap: 'topo-vector'
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });

      const featureLayer = new FeatureLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0'
      });

      const fullscreen = new Fullscreen({
        view: view
      });
      console.log('1')
    
      if (openLayer) {
        console.log('add')
        map.add(featureLayer);
      } else {
        console.log('remove')
        map.remove(featureLayer);
        }
        view.ui.add(fullscreen, "top-right");
    }
    ignore = true;
  }, [openLayer,reSize]);


  const webmap = (size)  => {
    if (size) {
        return "webmap"
    } else {
        return "webmapLarge"
    }
    }


  return <div className = {webmap(reSize)} ref={mapDiv}></div>;
};

export default ArcGISMap;