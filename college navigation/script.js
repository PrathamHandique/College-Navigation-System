mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdGhhMTIzIiwiYSI6ImNsbjUzOWxrZjA2dnIya2p0NHZmdmU5cjUifQ.OyRqI_WDeq8TmZTs_MTPBw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24,53.48])
}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v12', 
        center: center, 
        zoom: 16, 
      })
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)  

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
    map.addControl(directions, "top-left")
}
