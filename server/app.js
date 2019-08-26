import express from 'express';
import Debug from 'debug';
import path from 'path';

const app = express();
const debug = Debug('dev');

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  debug('listening on port 3000');
});
