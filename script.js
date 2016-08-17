function myFunction() {
	var words = document.getElementById("welcome");  
	var btn = document.getElementById("btn");
	if (words.innerHTML === "Welcome to my page!"){
	  words.innerHTML = "Thanks for visiting!";
	  btn.innerHTML = "nice";
	}
	else {
	  words.innerHTML = "Welcome to my page!";
	  btn.innerHTML = 'yo';
	}
}

function changePic(){
	var image = document.getElementById("change");
	if (image.src.match("sky")){
	  image.src = "landing.jpg";
	  image.alt = "Angel's Landing at Zion National Park";
	}
	else {
	  image.src = "sky.jpg";
	  image.alt = "Generic Sky Picture";
	}  
}

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 42.445070, lng: -76.487948},
      zoom: 14
  });
  var climbing = new google.maps.Marker({
  	position: {lat: 42.445055, lng: -76.478626},
  	map: map,
  	title: 'Climbing'
  });
  var home = new google.maps.Marker({
  	position: {lat: 42.445070, lng: -76.487948},
  	map: map,
  	title: 'Home'
  });
}