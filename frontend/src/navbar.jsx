import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PitchIcon from '@mui/icons-material/AttachMoney'; // You can choose an appropriate icon for "Pitches"
import MentorIcon from '@mui/icons-material/People'; // You can choose an appropriate icon for "Mentor"
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'purple' }}>
                    BEYINC
                </Typography>
                
                {/* Search Input */}
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    sx={{
                        marginRight: 2,
                        backgroundColor: 'white',
                        borderRadius: '50%', // Rounded corners
                    }}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon sx={{ color: 'purple', marginRight: 1 }} />
                        ),
                    }}
                />

                {/* Navigation Buttons */}
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <HomeIcon />
                    <Typography variant="caption">Home</Typography>
                </Button>
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <PitchIcon />
                    <Typography variant="caption">Pitches</Typography>
                </Button>
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <MentorIcon />
                    <Typography variant="caption">Mentor</Typography>
                </Button>
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <MessageIcon />
                    <Typography variant="caption">Messages</Typography>
                </Button>
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <NotificationsIcon />
                    <Typography variant="caption">Notifications</Typography>
                </Button>
                <Button color="inherit" sx={{ color: 'purple', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <ProfileIcon />
                    <Typography variant="caption">Profile</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
