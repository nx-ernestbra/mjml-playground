import dotenv from 'dotenv';
import { sendEmail } from './sendEmail';

// Load environment variables from .env file
dotenv.config();

// Get template file name from command-line arguments or default to 'welcome.mjml'
const templateFile = process.argv[2] || 'welcome.mjml';

// Call the sendEmail function
sendEmail(templateFile);
