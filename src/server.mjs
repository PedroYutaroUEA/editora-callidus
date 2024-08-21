import path from "path";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const app = express();
const port = 3001

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.static(path.join(__dirname)));

app.get('/api/books.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'books.json'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})