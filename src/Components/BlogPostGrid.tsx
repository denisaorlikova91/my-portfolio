import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack } from '@mui/material';

interface BlogProps {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    cover_image: string | null;
    url: string;
} 

const BlogPostGrid: React.FC = () => {
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
                width={'100%'}
                gap={4}
                p={2}
                >
             <Typography align='center' variant="h2" component="h2" gutterBottom mt={8}>My Articles</Typography>
                {isLoading && <p>Loading articles...</p>}
                {error && <p className="error">{error}</p>}
                <Grid container spacing={2}>
                    {articles.map((article) => (
                            <Grid item xs={12} sm={6} md={4} key={article.id}>
                               <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt="article cover image"
                                            height="180"
                                            image={article.cover_image ?? undefined}
                                        />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions >
                                        <Button size="small">Read on Dev.to</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
  </React.Fragment>
    );
  };
  
  export default BlogPostGrid;
