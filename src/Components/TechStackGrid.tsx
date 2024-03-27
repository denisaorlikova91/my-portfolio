import { Box, Grid, Paper, Typography } from "@mui/material";

const techStackArray = [
    { name: "React.js", category: "Frontend Library", icon: "techStackIcons/react.png" },
    { name: "TypeScript", category: "Programming Language", icon: "techStackIcons/typescript.png" },
    { name: "JavaScript", category: "Programming Language", icon: "techStackIcons/js.png" },
    { name: "REST APIs", category: "Web Communication", icon: "techStackIcons/api.png" },
    { name: "Node.js", category: "Backend Runtime", icon: "techStackIcons/node-js.png" },
    { name: "git", category: "Version Control", icon: "techStackIcons/git.png" },
    { name: "Material UI", category: "UI Component Library", icon: "techStackIcons/mui.png" },
    { name: "Figma", category: "Design Tool", icon: "techStackIcons/figma.png" },
    { name: "Jira", category: "Project Management", icon: "techStackIcons/jira.png" },
    { name: "SCSS", category: "CSS Preprocessor", icon: "techStackIcons/sass.png" },
    { name: "GitLab", category: "Version Control & CI/CD", icon: "techStackIcons/gitlab.png" },
    { name: "Python", category: "Programming Language", icon: "techStackIcons/python.png" },
    { name: "CSS", category: "Web Styling", icon: "techStackIcons/css-3.png" },
    { name: "HTML", category: "Web Structure", icon: "techStackIcons/html-5.png" },
    { name: "npm", category: "Package Manager", icon: "techStackIcons/npm.jpeg" }, 
    { name: "yarn", category: "Package Manager", icon: "techStackIcons/yarn.webp" }, 
];


const TechStackGrid = () => 
        <Grid container spacing={1} md={5}>
            {techStackArray.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index} p={1}>
                    <Paper elevation={1} sx={{
                        padding: 1,
                    }}>
                        <Box
                            p={2}
                            display="flex"
                            justifyContent={'center'}                            
                        >
                            <img src={item.icon} alt="Denisa Orlikova" width='70%' height='auto' />
                        </Box>
                        <Typography align="center">
                            {item.name}
                        </Typography>
                    </Paper>
            </Grid>
            ))}
        </Grid>

              
export default TechStackGrid;