import React from 'react';
import './App.css';
import ArcGISMap from './ArcGISMap';
import picRAK from './images/rak.png';
import { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';


function App() {

  const [openLayer, setOpenLayer] = useState(false);

  const handleOpenLayer = () => {
    const result =!openLayer
    setOpenLayer(result)
    console.log(openLayer)
  }

  const [reSize, setreSize] = useState(false);
  const changeSize = () => {
    const result1 =!reSize
    setreSize(result1)
  }

//   function handleGeoJSONUpload(event) {
//     var file = event.target.files[0];
//     if (file) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             var geojson = JSON.parse(e.target.result);
//             console.log(geojson)
//             setGeojson(geojson)
//         };
//         reader.readAsText(file);
//     }
// }

  return (
    <div className="App">
      <div className="row">
        <div className="col s12 left-align">
        <header style={{ background: 'peru' }}
          className="App-header">
        <img src={picRAK} alt="RAK" />
      </header>
        </div>
      <div className="row">
        <div className="col s12 left-align">
          <div className="valign-wrapper">
            <button className='waves-effect waves-light btn-large' onClick={handleOpenLayer}>add layer</button>
            <div className="spacer"></div>
            <button className='waves-effect waves-light btn-large' onClick={handleOpenLayer}>add layer</button>
            <div className="spacer"></div>
            <button className='waves-effect waves-light btn-large' onClick={handleOpenLayer}>add layer</button>
            <div className="spacer"></div>
            <button className='waves-effect waves-light btn-large' onClick={handleOpenLayer}>add layer</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
        <div className="row">
          <button onClick={changeSize} className='reSizeButton' >resize map</button>
          <ArcGISMap id="map" openLayer = {openLayer} reSize = {reSize}/>
        </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;

