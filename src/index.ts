import dotenv from 'dotenv';
import { sendEmail } from './sendEmail';

// Load environment variables from .env file
dotenv.config();

// Call the sendEmail function
sendEmail();
