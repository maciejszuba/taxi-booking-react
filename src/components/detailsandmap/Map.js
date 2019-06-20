import React, { useEffect } from 'react'

const Map = () => {
    const google = window.google = window.google ? window.google : {}
    
    // useEffect(() => {
    //     renderMap();
    //     google && initMap();
    //      // eslint-disable-next-line
    //  }, [])
    
    //  const renderMap = async () => {
    //      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBwKqh6eN91t7znLNyZdUVstD-BoQ_n9RA&libraries=places&callback=initMap");    
    //  } 

    return (
        <div>
            <div id="map"></div>

        </div>
    )
}

export default Map

function initMap() {
    new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.5152403, lng: 13.399859 },
        zoom: 12
    });
}

function loadScript(url) {
    debugger;
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }