import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        console.log('Form submitted:', formData); 
        setIsSubmitted(true); 
      };

  return (
    <section className="contact-page">
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have a project in mind? Want to collaborate? Let's connect!
        </Typography>

      {isSubmitted ? (
        <Box className="success-message" sx={{ mt: 2 }}>
          <Typography variant="body1">
            Thank you for your message! I'll get back to you shortly.
          </Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
             <TextField
               fullWidth
               name="subject"
               label="Subject"
               value={formData.subject}
               onChange={handleChange}
             />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                label="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
