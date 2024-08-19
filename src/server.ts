import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files (e.g., images) from the 'public' directory
app.use('/img', express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
  res.send('Image Server is running. Access images at /img/your-image-name.jpg');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
