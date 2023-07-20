import { Company, User } from "./data";

const user = new User
const company = new Company

console.log('name',user.name)
console.log('lat',user.lat)
console.log('lng',user.lng)

console.log('-----------------');

console.log('name',company.name)
console.log('catchPhrase',company.catchPhrase)
console.log('lat',company.location.lat)
console.log('lng',company.location.lng)

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: user.lat, lng: user.lng};

function initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 12,
    };
  
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);
  
    // Đánh dấu hiện tại
    const currentLocationMarker = new google.maps.Marker({
      position: { lat: user.lat, lng: user.lng },
      map: map,
      title: "User Location",
    });
  
    // Đánh dấu vị trí mới
    const newLocationMarker = new google.maps.Marker({
      position: { lat: company.location.lat, lng: company.location.lng },
      map: map,
      title: "Company Location",
    });
  }

  initMap();