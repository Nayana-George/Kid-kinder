import Booking from "../model/bookmodel.js";
   
   
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const bookuser = async (req, res) => {
  try {
    const { name, email, seatClass } = req.body;
    const newBooking = new Booking({ name, email, seatClass });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server error' });
  }
};