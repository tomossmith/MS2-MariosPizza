//Credit: https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-multiple-markers-with-InfoWindow-to-Google-Map.aspx

var markers = [
  {
      "title": `Mario's Pizza - New York City`,
      "lat": '40.670',
      "lng": '-73.893530',
      "description": `<h1>Mario's Pizza</h1> Telephone: 555-2456`
  },
  {
      "title": 'Juhu Beach',
      "lat": '19.0883595',
      "lng": '72.82652380000002',
      "description": 'Juhu Beach is one of favourite tourist attractions situated in Mumbai.'
  },
  {
      "title": 'Girgaum Beach',
      "lat": '18.9542149',
      "lng": '72.81203529999993',
      "description": 'Girgaum Beach commonly known as just Chaupati is one of the most famous public beaches in Mumbai.'
  },
  {
      "title": 'Jijamata Udyan',
      "lat": '18.979006',
      "lng": '72.83388300000001',
      "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
  },
  {
      "title": 'Sanjay Gandhi National Park',
      "lat": '19.2147067',
      "lng": '72.91062020000004',
      "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
  }
  ];
  window.onload = function () {
      LoadMap();
  }
  function LoadMap() {
      var mapOptions = {
          center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("Map"), mapOptions);

      //Create and open InfoWindow.
      var infoWindow = new google.maps.InfoWindow();

      for (var i = 0; i < markers.length; i++) {
          var data = markers[i];
          var myLatlng = new google.maps.LatLng(data.lat, data.lng);
          var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: data.title
          });

          //Attach click event to the marker.
          (function (marker, data) {
              google.maps.event.addListener(marker, "click", function (e) {
                  //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                  infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                  infoWindow.open(map, marker);
              });
          })(marker, data);
      }
  }

  