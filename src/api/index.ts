import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import repos from './repos';
import time_windows from './time_windows';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

router.use('/repos', repos);

router.use('/time_windows', time_windows);

export default router;
