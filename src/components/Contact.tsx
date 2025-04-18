import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };

      console.log(templateParams);
      emailjs
        .send('service_sdz59iq', 'template_4fq924r', templateParams, '-Jn3n75Yko2qcGz2J')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const inputStyles = {
    input: {
      color: '#000',
      backgroundColor: 'transparent', // Prevents label clash
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff',
      paddingTop: '6px',
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#888',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5000ca',
      },
    },
    '& label': {
      backgroundColor: '#fff',
      padding: '0 4px',
    }
  };
  
;

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <h2>Got a project waiting to be realized? Let's make it happen!</h2>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                type="text"
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                InputLabelProps={{ style: { color: '#333' } }}
                sx={inputStyles}
              />
              <TextField
                type="text"
                required
                id="outlined-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                InputLabelProps={{ style: { color: '#333' } }}
                sx={inputStyles}
              />
            </div>
            <TextField
              type="text"
              required
              id="outlined-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              InputLabelProps={{ style: { color: '#333' } }}
              sx={inputStyles}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
