import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';

const AddUserForm = ({ fetchUsers }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [expertise, setExpertise] = useState('');
    const [industries, setIndustries] = useState('');
    const [stages, setStages] = useState('');
    const [location, setLocation] = useState('');
    const [languages, setLanguages] = useState('');

    const expertiseOptions = ['AI/ML', 'Finance', 'Marketing', 'Product Management', 'Software Development'];
    const industryOptions = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail'];
    const stageOptions = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'IPO'];
    const languageOptions = ['English', 'Spanish', 'Mandarin', 'French', 'German'];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            category,
            expertise,
            industries,
            stages,
            location,
            languages,
        };

        try {
            await axios.post('http://localhost:5000/api/users', userData);
            fetchUsers();
            setName('');
            setCategory('');
            setExpertise('');
            setIndustries('');
            setStages('');
            setLocation('');
            setLanguages('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mb: 2,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5', // Light grey background
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    color: 'purple',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                Add User
            </Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                fullWidth
                select
                margin="normal"
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value="Mentor">Mentor</MenuItem>
                <MenuItem value="Investor">Investor</MenuItem>
                <MenuItem value="Cofounder">Cofounder</MenuItem>
            </TextField>
            <TextField
                fullWidth
                select
                margin="normal"
                label="Expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
            >
                <MenuItem value="">Select Expertise</MenuItem>
                {expertiseOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                select
                margin="normal"
                label="Industries"
                value={industries}
                onChange={(e) => setIndustries(e.target.value)}
            >
                <MenuItem value="">Select Industry</MenuItem>
                {industryOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                select
                margin="normal"
                label="Stages"
                value={stages}
                onChange={(e) => setStages(e.target.value)}
            >
                <MenuItem value="">Select Stage</MenuItem>
                {stageOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                margin="normal"
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
                fullWidth
                select
                margin="normal"
                label="Languages"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
            >
                <MenuItem value="">Select Language</MenuItem>
                {languageOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                ))}
            </TextField>
            <Button
    type="submit"
    variant="contained"
    sx={{
        backgroundColor: '#C08DC3', // Light purple
        color: 'white', // Text color
        '&:hover': {
            backgroundColor: 'purple', // Darker shade on hover
        },
        mt: 2, // Add margin-top for spacing
    }}
>
    Add User
</Button>

        </Box>
    );
};

export default AddUserForm;
