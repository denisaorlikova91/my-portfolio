import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Link } from '@mui/material';

interface BlogProps {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    cover_image: string | null;
    url: string;
} 

const Blog: React.FC = () => {
    const [articles, setArticles] = useState<BlogProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const fetchArticles = async (username: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://dev.to/api/articles?username=${username}`);
        setArticles(response.data);
        setError(null); 
      } catch (error) {
        setError("Error fetching articles"); // Handle errors
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      const username = 'orlikova'; // Replace with your username
      fetchArticles(username);
    }, []);
  
    return (
      <React.Fragment>
      <Container>
          <Box
              height={'100vh'}
              width={'100%'}
              flexDirection={'column'}
              display="flex"
              justifyContent={'center'}
              gap={4}
              p={2}
              >
           
           <Typography variant="h2" component="h2" gutterBottom>Blog</Typography>
           <Typography variant="body1" gutterBottom>
              This section is still under construction. You can check out my blog posts at <Link href="https://dev.to/orlikova" target="_blank" rel="noopener noreferrer">Dev.to</Link>.
          </Typography>
          </Box>
      </Container>
</React.Fragment>
    );
  };
  
  export default Blog;
