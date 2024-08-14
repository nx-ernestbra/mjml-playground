import fs from 'fs';
import path from 'path';
import mjml from 'mjml';
import nodemailer from 'nodemailer';

export function sendEmail(templateFile: string = 'welcome.mjml') {
    // Adjust path calculation based on the location of compiled code
    const templatePath = path.resolve(__dirname, '../src/templates', templateFile);

    // Check if the file exists
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template file not found: ${templatePath}`);
    }

    // Read and compile the MJML template
    const mjmlTemplate = fs.readFileSync(templatePath, 'utf8');
    const htmlOutput = mjml(mjmlTemplate).html;

    // Create a transporter object using environment variables
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT || '1025', 10),
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    });

    // Set up email data
    const mailOptions = {
        from: '"Example Sender" <sender@example.com>',
        to: 'recipient@example.com',
        subject: 'Hello from Node.js with MJML',
        html: htmlOutput
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return;
        }
        console.log('Message sent:', info.messageId);
    });
}
