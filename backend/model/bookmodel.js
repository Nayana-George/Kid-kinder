import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  seatClass: {
    type: String,
    required: true
  }
});

const Booking = mongoose.model('bookings', bookingSchema);

export default Booking;
