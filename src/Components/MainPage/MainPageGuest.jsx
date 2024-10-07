// import React from 'react';
// import './MainPageGuest.css';  

// const hotels = [
//     {
//       id: 1,
//       hotelid: 'H001',
//       name: 'Grand Plaza Hotel',
//       address: '123 Main Street, City Center',
//       phone: '123-456-7890',
//       email: 'contact@grandplaza.com',
//       available_room: 15
//     },
//     {
//       id: 2,
//       hotelid: 'H002',
//       name: 'City View Inn',
//       address: '456 Park Avenue, Riverside',
//       phone: '987-654-3210',
//       email: 'info@cityviewinn.com',
//       available_room: 8
//     },
//     {
//       id: 3,
//       hotelid: 'H003',
//       name: 'Ocean Breeze Hotel',
//       address: '789 Beach Road, Seaside',
//       phone: '555-123-4567',
//       email: 'stay@oceanbreeze.com',
//       available_room: 12
//     },
//     {
//       id: 4,
//       hotelid: 'H004',
//       name: 'Mountain Retreat Lodge',
//       address: '321 Alpine Trail, Mountainview',
//       phone: '111-222-3333',
//       email: 'info@mountainretreat.com',
//       available_room: 20
//     },
//     {
//       id: 5,
//       hotelid: 'H005',
//       name: 'Sunset Resort & Spa',
//       address: '654 Ocean Drive, Coastline',
//       phone: '444-555-6666',
//       email: 'relax@sunsetresort.com',
//       available_room: 25
//     },
//     {
//       id: 6,
//       hotelid: 'H006',
//       name: 'Downtown Luxury Suites',
//       address: '789 Elm Street, Business District',
//       phone: '777-888-9999',
//       email: 'stay@downtownluxury.com',
//       available_room: 18
//     },
//     {
//       id: 7,
//       hotelid: 'H007',
//       name: 'Forest Edge Hotel',
//       address: '101 Forest Path, Woodland Area',
//       phone: '333-444-5555',
//       email: 'bookings@forestedge.com',
//       available_room: 10
//     },
//     {
//       id: 8,
//       hotelid: 'H008',
//       name: 'Lakeside View Inn',
//       address: '222 Lakefront Avenue, Lakeside',
//       phone: '666-777-8888',
//       email: 'reservations@lakesideview.com',
//       available_room: 30
//     },
//     {
//       id: 9,
//       hotelid: 'H009',
//       name: 'The Royal Heritage Palace',
//       address: '56 King’s Road, Historic District',
//       phone: '222-333-4444',
//       email: 'royal@heritagepalace.com',
//       available_room: 12
//     },
//     {
//         id: 10,
//         hotelid: 'H010',
//         name: 'Desert Mirage Resort',
//         address: '89 Desert Oasis Lane, Mirage City',
//         phone: '888-999-0000',
//         email: 'info@desertmirageresort.com',
//         available_room: 22
//       }
//     ]  
  

// function MainPageGuest() {
//   return (
//     <div className="container2">
//       <div className="main-title">
//         <h1>Hotels for you!!</h1>
//       </div>
//       <div className="block-container">
//        <div className='grid'>
//         {hotels.map((hotel) => (
//           <div className="block" key={hotel.id}>
            
//               <h3>{hotel.hotelid}. {hotel.name}</h3>
//               <p>Address: {hotel.address}</p>
//               <p>Phone: {hotel.phone}</p>
//               <p>Email: {hotel.email}</p>
//               <h4>Available Rooms: {hotel.available_room}</h4>

//           </div>
//         ))}
//       </div>
//       </div>
//       </div>
   
//   );
// }

// export default MainPageGuest;
import React from 'react';
import './MainPageGuest.css';  

const hotels = [
  {
    id: 1,
    hotelid: 'H001',
    name: 'Grand Plaza Hotel',
    address: '123 Main Street, City Center',
    phone: '123-456-7890',
    email: 'contact@grandplaza.com',
    available_room: 15
  },
  {
    id: 2,
    hotelid: 'H002',
    name: 'City View Inn',
    address: '456 Park Avenue, Riverside',
    phone: '987-654-3210',
    email: 'info@cityviewinn.com',
    available_room: 8
  },
  {
    id: 3,
    hotelid: 'H003',
    name: 'Ocean Breeze Hotel',
    address: '789 Beach Road, Seaside',
    phone: '555-123-4567',
    email: 'stay@oceanbreeze.com',
    available_room: 12
  },
  {
    id: 4,
    hotelid: 'H004',
    name: 'Mountain Retreat Lodge',
    address: '321 Alpine Trail, Mountainview',
    phone: '111-222-3333',
    email: 'info@mountainretreat.com',
    available_room: 20
  },
  {
    id: 5,
    hotelid: 'H005',
    name: 'Sunset Resort & Spa',
    address: '654 Ocean Drive, Coastline',
    phone: '444-555-6666',
    email: 'relax@sunsetresort.com',
    available_room: 25
  },
  {
    id: 6,
    hotelid: 'H006',
    name: 'Downtown Luxury Suites',
    address: '789 Elm Street, Business District',
    phone: '777-888-9999',
    email: 'stay@downtownluxury.com',
    available_room: 18
  },
  {
    id: 7,
    hotelid: 'H007',
    name: 'Forest Edge Hotel',
    address: '101 Forest Path, Woodland Area',
    phone: '333-444-5555',
    email: 'bookings@forestedge.com',
    available_room: 10
  },
  {
    id: 8,
    hotelid: 'H008',
    name: 'Lakeside View Inn',
    address: '222 Lakefront Avenue, Lakeside',
    phone: '666-777-8888',
    email: 'reservations@lakesideview.com',
    available_room: 30
  },
  {
    id: 9,
    hotelid: 'H009',
    name: 'The Royal Heritage Palace',
    address: '56 King’s Road, Historic District',
    phone: '222-333-4444',
    email: 'royal@heritagepalace.com',
    available_room: 12
  },
  {
    id: 10,
    hotelid: 'H010',
    name: 'Desert Mirage Resort',
    address: '89 Desert Oasis Lane, Mirage City',
    phone: '888-999-0000',
    email: 'info@desertmirageresort.com',
    available_room: 22
  }
];

function MainPageGuest() {
  return (
    <div className="container2">
      <div className="main-title">
        <h1>Hotels for You!!!</h1>
      </div>
      <div className="block-container">
        <div className='grid'>
          {hotels.map((hotel) => (
            <div className="block" key={hotel.id}>
              <h2>{hotel.hotelid}. {hotel.name}</h2>
              <p><strong>Address:</strong> {hotel.address}</p>
              <p><strong>Phone:</strong> {hotel.phone}</p>
              <p><strong>Email:</strong> {hotel.email}</p>
              <h4>Available Rooms: {hotel.available_room}</h4>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPageGuest;
