
import emailjs from '@emailjs/browser';

const sendEmail = (templateParams) => {
    emailjs.send('service_1kb3ylc', 'template_w97hxyi', templateParams, 'gvEcdVDwX4As8OroG')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
        console.log('FAILED...', error);
        });
}

export default sendEmail;