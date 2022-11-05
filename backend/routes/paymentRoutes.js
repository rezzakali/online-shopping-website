// external imports
import { Router } from 'express';

// internal imports
import {
  checkout,
  paymentVerification,
} from '../controller/paymentController.js';

// Router object
const router = Router();

router.post('/checkout', checkout);

router.post('/paymentverification', paymentVerification);

router.get('/getkey', (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

export default router;
