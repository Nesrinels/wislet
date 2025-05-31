import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import libphonenumber from 'google-libphonenumber';
import { countries } from 'country-data';

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(); // ✅ already defined correctly here

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    // ✅ Determine country and currency from phone number
    let currency = 'USD'; // fallback
    try {
      const parsedNumber = phoneUtil.parse(phone);
      const regionCode = phoneUtil.getRegionCodeForNumber(parsedNumber);
      const country = countries[regionCode];

      if (country && country.currencies.length > 0) {
        currency = country.currencies[0]; // e.g. 'DZD'
      }
    } catch (err) {
      console.warn('⚠️ Failed to determine currency from phone:', err.message);
    }

    // ✅ Create user with currency
    const user = await User.create({ name, email, password, phone, currency });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        currency: user.currency,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        currency: user.currency,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
