// Parcel automatically transpiles TypeScript whenever we use a .ts or .tsx file. In addition to stripping the types to convert TypeScript to JavaScript, Parcel also compiles modern language features like classes and async await as necessary, according to our browser targets. It also transpiles JSX automatically.
// if there is an index.html file where a script tag exists linking to 'index.ts', then Parcel compiles it to JS and replaces the script tag
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import * as L from "leaflet";

const person = new User();
const business = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(person);
customMap.addMarker(business);

// new google.maps.Map(document.getElementById("map"), {
//   center: aguy.location,
//   zoom: 1,
// });

// let map: google.maps.Map;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

// import export quick examples:
// export class User {}
// export const color = 'red;
// import { User, color } from "./User";

// const someFunction = (a: number) => {}
// export default someFunction;
// import anything from "./User";
// anything(5);

// in TypeScript, default exports are not normally used
