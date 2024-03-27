import { Box, Grid, Paper, Typography } from "@mui/material";

const techStackArray = [
    { name: "React.js", category: "Frontend Library", icon: "react-icon" },
    { name: "JavaScript", category: "Programming Language", icon: "techStackIcons/js.png" },
    { name: "TypeScript", category: "Programming Language", icon: "techStackIcons/typescript.png" },
    { name: "Python", category: "Programming Language", icon: "techStackIcons/python.png" },
    { name: "Node.js", category: "Backend Runtime", icon: "techStackIcons/node-js.png" },
    { name: "npm", category: "Package Manager", icon: "npm-icon" }, 
    { name: "yarn", category: "Package Manager", icon: "yarn-icon" }, 
    { name: "REST APIs", category: "Web Communication", icon: "api-icon" },
    { name: "HTML", category: "Web Structure", icon: "techStackIcons/html-5.png" },
    { name: "CSS", category: "Web Styling", icon: "techStackIcons/css-3.png" },
    { name: "SCSS", category: "CSS Preprocessor", icon: "techStackIcons/sass.png" },
    { name: "git", category: "Version Control", icon: "git-icon" },
    { name: "zsh", category: "Shell", icon: "zsh-icon" },
    { name: "Bash", category: "Shell", icon: "bash-icon" },
    { name: "Material UI", category: "UI Component Library", icon: "mui-icon" },
    { name: "Figma", category: "Design Tool", icon: "techStackIcons/figma.png" },
    { name: "Jira", category: "Project Management", icon: "techStackIcons/jira.png" },
    { name: "GitLab", category: "Version Control & CI/CD", icon: "techStackIcons/gitlab.png" },
    { name: "BitBucket", category: "Version Control & CI/CD", icon: "bitbucket-icon" },
    { name: "Jenkins", category: "CI/CD", icon: "jenkins-icon" }
];


const TechStack = () => 
    <Box>
        <Typography variant="h3" component='h3' gutterBottom>
            Technologies
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} md={6}>
            {techStackArray.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index} p={1}>
                    <Paper elevation={1}>
                        <Box
                        p={2}
                        >
                            <img src={item.icon} alt="Denisa Orlikova" width='100%' height='auto' />
                        </Box>
                        <Typography align="center">
                            {item.name}
                        </Typography>
                    </Paper>
            </Grid>
            ))}
        </Grid>
        </Box>
    </Box>
              
export default TechStack;