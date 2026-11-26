
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // Questions button
  const questionsButton = document.getElementById("questionsButton");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nhmohammed7@hawk.illinoistech.edu");
    });
  }

  // Load Google Maps on the map page
  const mapElement = document.getElementById("map");

  if (mapElement) {
    const googleScript = document.createElement("script");

   googleScript.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap&loading=async";

    googleScript.async = true;

    googleScript.onerror = function () {
      mapElement.textContent = "Google Maps could not load.";
    };

    document.head.appendChild(googleScript);
  }

});

function initMap() {

  const mapElement = document.getElementById("map");

  if (!mapElement || !window.google || !google.maps) {
    return;
  }

  // Feature 1: Interactive map
  const map = new google.maps.Map(mapElement, {
    center: { lat: 40.7580, lng: -73.9855 },
    zoom: 12,

    // Feature 2: Map and satellite controls
    mapTypeControl: true,
    mapTypeId: "roadmap"
  });

  // Feature 3: Three clickable markers and information windows
  const locations = [
    {
      name: "Times Square",
      position: { lat: 40.7580, lng: -73.9855 },
      description: "One of the most exciting places in New York City!"
    },
    {
      name: "Statue of Liberty",
      position: { lat: 40.6892, lng: -74.0445 },
      description: "A famous landmark I visited by ferry."
    },
    {
      name: "Central Park",
      position: { lat: 40.7829, lng: -73.9654 },
      description: "A beautiful park in the heart of Manhattan."
    }
  ];

  const infoWindow = new google.maps.InfoWindow();

  locations.forEach(function (location) {

    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.name
    });

    marker.addListener("click", function () {

      infoWindow.setContent(
        "<h3>" + location.name + "</h3><p>" +
        location.description + "</p>"
      );

      infoWindow.open({
        anchor: marker,
        map: map
      });

    });

  });

}
