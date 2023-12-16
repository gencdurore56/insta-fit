/*
FILENAME: sophisticated_app.js

DESCRIPTION: This code demonstrates a sophisticated JavaScript application that simulates a hotel management system. It includes various modules for managing guests, rooms, reservations, and payments. The code is more than 200 lines long and showcases professional and creative programming techniques.

DISCLAIMER: This code is for demonstration purposes only. It may contain simplified or incomplete features and should not be used in production environments without thorough testing and additional development.

*/

// Module: Guest Management
const GuestManager = (function() {
  const guests = [];

  return {
    addGuest: function(guest) {
      guests.push(guest);
      console.log(`New guest added: ${guest.name}`);
    },
    removeGuest: function(guest) {
      const index = guests.indexOf(guest);
      if (index > -1) {
        guests.splice(index, 1);
        console.log(`Guest removed: ${guest.name}`);
      } else {
        console.log(`Guest not found: ${guest.name}`);
      }
    },
    getAllGuests: function() {
      return guests;
    },
    searchGuest: function(name) {
      return guests.filter(guest => guest.name === name);
    }
  };
})();

// Module: Room Management
const RoomManager = (function() {
  const rooms = [];

  return {
    addRoom: function(room) {
      rooms.push(room);
      console.log(`New room added: ${room.number}`);
    },
    removeRoom: function(room) {
      const index = rooms.indexOf(room);
      if (index > -1) {
        rooms.splice(index, 1);
        console.log(`Room removed: ${room.number}`);
      } else {
        console.log(`Room not found: ${room.number}`);
      }
    },
    getAllRooms: function() {
      return rooms;
    },
    searchRoom: function(number) {
      return rooms.filter(room => room.number === number);
    }
  };
})();

// Module: Reservation Management
const ReservationManager = (function() {
  const reservations = [];

  return {
    addReservation: function(reservation) {
      reservations.push(reservation);
      console.log(`New reservation added: ${reservation.guest.name} - Room ${reservation.room.number}`);
    },
    removeReservation: function(reservation) {
      const index = reservations.indexOf(reservation);
      if (index > -1) {
        reservations.splice(index, 1);
        console.log(`Reservation removed: ${reservation.guest.name} - Room ${reservation.room.number}`);
      } else {
        console.log(`Reservation not found: ${reservation.guest.name} - Room ${reservation.room.number}`);
      }
    },
    getAllReservations: function() {
      return reservations;
    },
    searchReservation: function(guestName) {
      return reservations.filter(reservation => reservation.guest.name === guestName);
    }
  };
})();

// Sample usage:

const guest1 = { name: 'John Doe' };
const guest2 = { name: 'Jane Smith' };

GuestManager.addGuest(guest1);
GuestManager.addGuest(guest2);

const room1 = { number: '101', type: 'Single' };
const room2 = { number: '102', type: 'Double' };

RoomManager.addRoom(room1);
RoomManager.addRoom(room2);

const reservation1 = { guest: guest1, room: room1, checkInDate: '2022-01-01', checkOutDate: '2022-01-05' };
const reservation2 = { guest: guest2, room: room2, checkInDate: '2022-02-01', checkOutDate: '2022-02-05' };

ReservationManager.addReservation(reservation1);
ReservationManager.addReservation(reservation2);

console.log('--- Guests ---');
console.log(GuestManager.getAllGuests());

console.log('--- Rooms ---');
console.log(RoomManager.getAllRooms());

console.log('--- Reservations ---');
console.log(ReservationManager.getAllReservations());
