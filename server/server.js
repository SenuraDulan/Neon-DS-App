import express from 'express';
import cors from 'cors';
import { setupDB, insertContact, insertUser, logWhatsAppClick } from './db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize Database Table
setupDB();

// Test Route
app.get('/', (req, res) => {
  res.send('NeonDS API Running');
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  try {
    await insertContact(firstName, lastName, email, message);
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// WhatsApp Click Logging
app.post('/api/whatsapp', async (req, res) => {
  try {
    await logWhatsAppClick();
    res.status(200).json({ success: true, message: 'Click logged.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Simple Google Auth Endpoint (Expects token or profile info from frontend)
app.post('/api/auth/google', async (req, res) => {
  const { email, name, picture } = req.body;
  try {
    const user = await insertUser(email, name, picture);
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
