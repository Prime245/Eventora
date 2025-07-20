// backend/routes/booking.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/booking'); // ✅ Correct relative path

// @route   POST /api/bookings
// @desc    Create a new booking
router.post('/', async (req, res) => {
  console.log('POST /api/bookings hit'); // ✅ Debug log
  console.log(req.body); // ✅ See what data is sent

  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error('❌ Booking Save Error:', err);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

    
module.exports = router;
