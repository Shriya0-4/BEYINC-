import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'; // Import the UserCard component
import { TextField, Box, Button, Typography, Divider, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        industry: '',
        category: '',
        expertise: '',
        location: '',
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/users');
                setUsers(data);
                setFilteredUsers(data); // Initialize filtered users with all users
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        let filtered = users;

        if (filters.name) {
            filtered = filtered.filter((user) =>
                user.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        }
        if (filters.industry) {
            filtered = filtered.filter((user) =>
                user.industries.toLowerCase().includes(filters.industry.toLowerCase())
            );
        }
        if (filters.category) {
            filtered = filtered.filter((user) =>
                user.category.toLowerCase().includes(filters.category.toLowerCase())
            );
        }
        if (filters.expertise) {
            filtered = filtered.filter((user) =>
                user.expertise.toLowerCase().includes(filters.expertise.toLowerCase())
            );
        }
        if (filters.location) {
            filtered = filtered.filter((user) =>
                user.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        setFilteredUsers(filtered);
    };

    return (
        <Grid container spacing={2}>
            {/* Filter Section */}
            <Grid item xs={12} md={4}>
                <Box
                    component="form"
                    sx={{
                        mb: 3,
                        p: 3,
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: 'white', // Set background color to white
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Filter 
                    </Typography>
                    {/* Divider below the header */}
                    <Divider sx={{ mb: 2 }} />

                    {/* Text input for name filter */}
                    <div>
                        <Typography variant="body1" sx={{ mb: 1 }}>Name</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="name"
                            value={filters.name}
                            onChange={handleFilterChange}
                            sx={{ mb: 2 }}
                        />
                    </div>

                    {/* Dropdowns for other filters */}
                    {['industry', 'category', 'expertise', 'location'].map((key) => (
                        <div key={key}>
                            <Typography variant="body1" sx={{ mb: 1 }}>{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>
                            <TextField
                                select
                                fullWidth
                                variant="outlined"
                                name={key}
                                value={filters[key]}
                                onChange={handleFilterChange}
                                sx={{ mb: 2 }}
                            >
                                <MenuItem value="">Select {key.charAt(0).toUpperCase() + key.slice(1)}</MenuItem>
                                {key === 'industry' && ['Technology', 'Healthcare', 'Finance'].map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                                {key === 'category' && ['Mentor', 'Investor', 'Cofounder'].map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                                {key === 'expertise' && ['AI/ML', 'Finance', 'Marketing'].map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                                {key === 'location' && ['New York', 'San Francisco', 'London'].map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </TextField>
                        </div>
                    ))}
                    <Button
                        variant="contained"
                        onClick={applyFilters}
                        sx={{
                            backgroundColor: '#C08DC3',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'purple',
                            },
                        }}
                    >
                        Apply Filters
                    </Button>
                </Box>
            </Grid>

            {/* User Cards Section */}
            <Grid item xs={12} md={8}>
                <Divider sx={{ mb: 2 }} />
                <div>
                    {filteredUsers.map((user) => (
                        <UserCard key={user._id} user={user} />
                    ))}
                </div>
            </Grid>
        </Grid>
    );
};

export default UserList;
