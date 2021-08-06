//Credit: https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-multiple-markers-with-InfoWindow-to-Google-Map.aspx

var markers = [{
  
  "title": `Mario's Pizza - Little Italy, NYC`,
  "lat": '40.71902502339173',
  "lng": '-73.99728568465896',
  "description": `<h4>Mario's Little Italy</h4>
      <br>
      <br> <img src="./assets/images/little-italy.jpg" alt="Little Italy Store" style="width:20em;">
      <br>
      <br> <strong>Address:</strong> 34th St, New York, NY 10016, United States
      <br> Our Little Italy store is the first store that we brought into the U.S.
      <br> <strong>Telephone:</strong> +021 2431 4505
      <br> <strong>Opening Hours:</strong> 11am - 3am / Everyday.
      <br>
      <br>`

},
{
  "title": `Mario's Pizza - Louisiana`,
  "lat": '30.94593894883351',
  "lng": '-91.24659293776425',
  "description": `<h4>Mario's Louisiana</h4>
  <br>
  <br> <img src="./assets/images/louisiana.jpg" alt="Louisiana Store" style="width:20em;">
  <br>
  <br> <strong>Address:</strong> 6, Carrollton Ave, New Orleans, LA 70118, United States
  <br> <strong>Telephone:</strong> +150 4866 1200
  <br> <strong>Opening Hours:</strong> 11am - 1am / Everyday.
  <br>
  <br>`
},
{
  "title": `Mario's Pizza - Fremont St, Las Vegas`,
  "lat": '36.16149155438114',
  "lng": '-115.12233330745995',
  "description": `<h4>Mario's Las Vegas</h4>
  <br>
  <br> <img src="./assets/images/lasvegas.jpg" alt="Las Vegas Store" style="width:20em;">
  <br>
  <br> <strong>Address:</strong> 19, Fremont St, Las Vegas, NV 89101, United States
  <br> <strong>Telephone:</strong> +170 2386 9498
  <br> <strong>Opening Hours:</strong> 11am - 3am / Everyday.
  <br>
  <br>`
},
{
  "title": `Mario's Pizza - Chicago`,
  "lat": '41.89593742607879',
  "lng": '-87.62568495351836',
  "description": `<h4>Mario's Chicago</h4>
  <br>
  <br> <img src="./assets/images/chicago.jpg" alt="Chicago Store" style="width:20em;">
  <br>
  <br> <strong>Address:</strong> 7, Rush St, Chicago, IL 60611, United States
  <br> <strong>Telephone:</strong> +131 2951 0700
  <br> <strong>Opening Hours:</strong> 11am - 3am / Everyday.
  <br>
  <br>`
},
{
  "title": `Mario's Pizza - Seattle`,
  "lat": '47.61020386532794',
  "lng": '-122.33262647971314',
  "description": `<h4>Mario's Seattle</h4>
  <br>
  <br> <img src="./assets/images/seattle.jpg" alt="Seattle Store" style="width:20em;">
  <br>
  <br> <strong>Address:</strong> 13, 8th Ave, Seattle, WA 98101, United States
  <br> <strong>Telephone:</strong> +120 6332 1299
  <br> <strong>Opening Hours:</strong> 11am - 3am / Everyday.
  <br>
  <br>`
}
];
window.onload = function () {
LoadMap();
}

function LoadMap() {
var mapOptions = {
  center: new google.maps.LatLng(39.75500275292877, -101.28326905998865),
  zoom: 4.5,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("Map"), mapOptions);

//Create and open InfoWindow.
var infoWindow = new google.maps.InfoWindow();

for (var i = 0; i < markers.length; i++) {
  var data = markers[i];
  var myLatlng = new google.maps.LatLng(data.lat, data.lng);
  var marker = new google.maps.Marker({
    icon:'./assets/images/map-marker.png',
    position: myLatlng,
    map: map,
    title: data.title
  });

  //Attach click event to the marker.
  (function (marker, data) {
    google.maps.event.addListener(marker, "click", function (e) {
      map.panTo(this.getPosition());
      //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
      infoWindow.setContent("<div style = 'width:250px;min-height:250px'>" + data.description + "</div>");
      infoWindow.open(map, marker);
    });
  })(marker, data);
}
}