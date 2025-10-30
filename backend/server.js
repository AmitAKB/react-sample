import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json([
    { id: 1, name: 'Amit', status: 'Active' },
    { id: 2, name: 'Priya', status: 'Inactive' },
    { id: 3, name: 'Ravi', status: 'Active' }
  ]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
