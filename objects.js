var hotel = {name: 'Biltmore',
rooms: 500,
roomsBooked: 150, 
roomService: 'Yes',
pool: 'Yes',
gym: 'Yes',
businessOffice: 'Yes'

roomsAvail: function() {
    return this.rooms - this.roomsBooked;
}

}