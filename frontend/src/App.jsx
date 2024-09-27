import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import Navbar from './navbar';
import UserList from './userList';

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Box sx={{ width: '100%', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{ mt: 2, p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <UserList users={users} /> {/* UserList now handles filtering */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default App;
