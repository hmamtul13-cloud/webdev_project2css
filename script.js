
"use strict";

// Questions button and Google Maps loading
document.addEventListener("DOMContentLoaded", function () {

  const questionsButton = document.getElementById("questionsButton");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert(
        "If you have questions, contact me at:\n" +
        "hmohammed7@hawk.illinoistech.edu"
      );
    });
  }

  const mapElement = document.getElementById("map");

  if (mapElement) {

    const googleScript = document.createElement("script");

    googleScript.src =
      "https://maps.googleapis.com/maps/api/js?keyAIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap&callback=initMap&loading=async";

    googleScript.async = true;

    googleScript.onerror = function () {
      mapElement.textContent =
        "Google Maps failed to load. Check your API key and internet connection.";
    };

    document.head.appendChild(googleScript);
  }

});

// Initialize Google Map
function initMap() {

  const mapElement = document.getElementById("map");

  if (!mapElement || !window.google || !google.maps) {
    return;
  }

  const map = new google.maps.Map(mapElement, {
    center: { lat: 40.7580, lng: -73.9855 },
    zoom: 12,
    mapTypeControl: true,
    mapTypeId: "roadmap"
  });

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
      description: "A beautiful park in Manhattan."
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
