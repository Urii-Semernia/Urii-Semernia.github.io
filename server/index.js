import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5050;

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicDir = path.join(__dirname, '..', 'public');
const uploadsDir = path.join(publicDir, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Serve static files (so uploaded files are accessible)
app.use('/uploads', express.static(uploadsDir));
app.use(express.static(path.join(__dirname, '..')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, 'profile' + ext);
  }
});
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const url = `/uploads/${req.file.filename}`;
    return res.json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
});

app.get('/api/profile', (req, res) => {
  try {
    if (!fs.existsSync(uploadsDir)) {
      return res.status(404).json({ error: 'No profile image' });
    }
    const files = fs.readdirSync(uploadsDir);
    const profileFile = files.find(f => /^profile\./.test(f));
    if (profileFile) return res.json({ url: `/uploads/${profileFile}` });
    return res.status(404).json({ error: 'No profile image' });
  } catch (error) {
    console.error('Error reading profile:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
