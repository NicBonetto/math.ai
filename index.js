import 'dotenv/config';
import express from 'express';
import routes from './src/routes/index.js';

const app = express();

app.use( express.json() );

app.post( '/api/solve', routes.solve );

app.listen( process.env.PORT || 3000, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${ process.env.PORT || 3000 }`);
});
