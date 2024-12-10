// /**
//  * Copyright 2024 Google LLC
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *    https://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// import {
//   forwardRef,
//   useContext,
//   useEffect,
//   useImperativeHandle,
//   useRef,
//   useMemo
// } from 'react';

// import type { Ref } from 'react';
// import { GoogleMapsContext, latLngEquals } from '@vis.gl/react-google-maps';

// type CircleEventProps = {
//   onClick?: (e: google.maps.MapMouseEvent) => void;
//   onDrag?: (e: google.maps.MapMouseEvent) => void;
//   onDragStart?: (e: google.maps.MapMouseEvent) => void;
//   onDragEnd?: (e: google.maps.MapMouseEvent) => void;
//   onMouseOver?: (e: google.maps.MapMouseEvent) => void;
//   onMouseOut?: (e: google.maps.MapMouseEvent) => void;
//   onRadiusChanged?: (r: number) => void;
//   onCenterChanged?: (p: google.maps.LatLng | null) => void;
// };

// export type CircleProps = google.maps.CircleOptions & CircleEventProps;

// export type CircleRef = Ref<google.maps.Circle | null>;

// function useCircle(props: CircleProps) {
//   const {
//     onClick,
//     onDrag,
//     onDragStart,
//     onDragEnd,
//     onMouseOver,
//     onMouseOut,
//     onRadiusChanged,
//     onCenterChanged,
//     radius,
//     center,
//     ...circleOptions
//   } = props;

//   const callbacks = useMemo(() => ({
//     onClick,
//     onDrag,
//     onDragStart,
//     onDragEnd,
//     onMouseOver,
//     onMouseOut,
//     onRadiusChanged,
//     onCenterChanged
//   }), [onClick, onDrag, onDragStart, onDragEnd, onMouseOver, onMouseOut, onRadiusChanged, onCenterChanged]);

//   const circleRef = useRef<google.maps.Circle | null>(null);

//   const circle = useMemo(() => {
//     const instance = new google.maps.Circle();
//     instance.setOptions(circleOptions);
//     return instance;
//   }, [circleOptions]);

//   const map = useContext(GoogleMapsContext)?.map;

//   useEffect(() => {
//     if (!map) {
//       console.error('<Circle> must be rendered within a <Map> component.');
//       return;
//     }

//     circle.setMap(map);
//     circleRef.current = circle;

//     return () => {
//       circle.setMap(null);
//       circleRef.current = null;
//     };
//   }, [map, circle]);

//   useEffect(() => {
//     if (center && !latLngEquals(center, circle.getCenter())) {
//       circle.setCenter(center);
//     }
//   }, [center, circle]);

//   useEffect(() => {
//     if (radius != null && radius !== circle.getRadius()) {
//       circle.setRadius(radius);
//     }
//   }, [radius, circle]);

//   useEffect(() => {
//     const gme = google.maps.event;

//     const eventMappings: [keyof google.maps.MapsEventListener, keyof CircleEventProps][] = [
//       ['click', 'onClick'],
//       ['drag', 'onDrag'],
//       ['dragstart', 'onDragStart'],
//       ['dragend', 'onDragEnd'],
//       ['mouseover', 'onMouseOver'],
//       ['mouseout', 'onMouseOut']
//     ];

//     eventMappings.forEach(([eventName, handlerKey]) => {
//       gme.addListener(circle, eventName, (e: google.maps.MapMouseEvent) => {
//         callbacks[handlerKey]?.(e);
//       });
//     });

//     gme.addListener(circle, 'radius_changed', () => {
//       callbacks.onRadiusChanged?.(circle.getRadius());
//     });

//     gme.addListener(circle, 'center_changed', () => {
//       callbacks.onCenterChanged?.(circle.getCenter());
//     });

//     return () => {
//       gme.clearInstanceListeners(circle);
//     };
//   }, [callbacks, circle]);

//   return circle;
// }

// export const Circle = forwardRef<google.maps.Circle | null, CircleProps>(
//   (props, ref) => {
//     const circle = useCircle(props);

//     useImperativeHandle(ref, () => circle, [circle]);

//     return null;
//   }
// );
