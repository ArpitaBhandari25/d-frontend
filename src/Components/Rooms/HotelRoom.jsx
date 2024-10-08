import React from 'react';
import './HotelRoom.css';

function HotelRoom() {
  // Static room data for demonstration purposes
  const rooms = [
    { id: 1, hotelid: 'H001', name: 'Grand Plaza Hotel', type: 'Deluxe Suite', status: 'Available', price: '$200/night' },
    { id: 2, hotelid: 'H002', name: 'City View Inn', type: 'Single Room', status: 'Booked', price: '$120/night' },
    { id: 3, hotelid: 'H003', name: 'Ocean Breeze Hotel', type: 'Double Room', status: 'Available', price: '$150/night' },
    { id: 4, hotelid: 'H004', name: 'Mountain Retreat Lodge', type: 'King Suite', status: 'Available', price: '$250/night' },
    { id: 5, hotelid: 'H005', name: 'Sunset Resort & Spa', type: 'Family Suite', status: 'Booked', price: '$300/night' },
    { id: 6, hotelid: 'H006', name: 'Downtown Luxury Suites', type: 'Penthouse', status: 'Available', price: '$500/night' },
    { id: 7, hotelid: 'H007', name: 'Forest Edge Hotel', type: 'Cabin Suite', status: 'Available', price: '$180/night' },
    { id: 8, hotelid: 'H008', name: 'Lakeside View Inn', type: 'Waterfront Room', status: 'Available', price: '$220/night' },
    { id: 9, hotelid: 'H009', name: 'The Royal Heritage Palace', type: 'Royal Suite', status: 'Booked', price: '$400/night' },
    { id: 10, hotelid: 'H010', name: 'Desert Mirage Resort', type: 'Oasis Room', status: 'Available', price: '$350/night' },
    { id: 11, hotelid: 'H001', name: 'Grand Plaza Hotel', type: 'Executive Suite', status: 'Booked', price: '$275/night' },
    { id: 12, hotelid: 'H002', name: 'City View Inn', type: 'Economy Room', status: 'Available', price: '$90/night' },
    { id: 13, hotelid: 'H003', name: 'Ocean Breeze Hotel', type: 'Luxury Suite', status: 'Available', price: '$320/night' },
    { id: 14, hotelid: 'H004', name: 'Mountain Retreat Lodge', type: 'Standard Room', status: 'Booked', price: '$180/night' },
    { id: 15, hotelid: 'H005', name: 'Sunset Resort & Spa', type: 'Poolside Villa', status: 'Available', price: '$600/night' },
    { id: 16, hotelid: 'H006', name: 'Downtown Luxury Suites', type: 'Junior Suite', status: 'Available', price: '$400/night' },
    { id: 17, hotelid: 'H007', name: 'Forest Edge Hotel', type: 'Garden Room', status: 'Available', price: '$210/night' },
    { id: 18, hotelid: 'H008', name: 'Lakeside View Inn', type: 'Deluxe Waterfront Room', status: 'Booked', price: '$270/night' },
    { id: 19, hotelid: 'H009', name: 'The Royal Heritage Palace', type: 'Heritage Suite', status: 'Available', price: '$450/night' },
    { id: 20, hotelid: 'H010', name: 'Desert Mirage Resort', type: 'Desert Villa', status: 'Available', price: '$550/night' }
  ];

  return (
    <div className="container4">
    <div className="main-title4">
      <h1>Hotels For You..!!</h1>
      </div>
      <div className="block-container4 grid4">
        {rooms.map((room) => (
          <div className="block4" key={room.id}>
            <h2>{room.hotelid}. {room.name}</h2>
            <p><strong>Type:</strong> {room.type}</p>
            <p><strong>Status:</strong> {room.status}</p>
            <p><strong>Price:</strong> {room.price}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default HotelRoom;
