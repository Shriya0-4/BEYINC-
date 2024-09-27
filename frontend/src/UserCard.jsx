import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';

// Styled Chip component for tags
const StyledChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    fontSize: '0.8rem',
}));

const UserCard = ({ user }) => {
    // Check if user data is incomplete
    if (!user) {
        return null; // Return null if user data is not provided
    }

    return (
        <Card variant="outlined" sx={{ margin: 2, position: 'relative' }}>
            {/* Rating and Reviews in Top Right Corner */}
            <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ color: 'gold', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                    {user.rating?.average ? user.rating.average : 'No rating'} ({user.rating?.reviews_count ? user.rating.reviews_count : '0'} reviews)
                </Typography>
            </Box>

            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {user.name} {user.verified && '✅'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.bio?.description || 'No description available.'}
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom sx={{ marginTop: 2 }}>
                    Expertise:
                </Typography>
                <Box>
                    {user.expertise_tags && user.expertise_tags.length > 0 ? (
                        user.expertise_tags.map((tag, index) => (
                            <StyledChip key={index} label={tag} variant="outlined" />
                        ))
                    ) : (
                        <StyledChip label="No expertise tags" variant="outlined" />
                    )}
                </Box>

                <Typography variant="subtitle2" gutterBottom sx={{ marginTop: 2 }}>
                    Industry Stages:
                </Typography>
                <Box>
                    {user.title && user.title.length > 0 ? (
                        user.title.map((industry, index) => (
                            <StyledChip key={index} label={industry} variant="outlined" />
                        ))
                    ) : (
                        <StyledChip label="No industries" variant="outlined" />
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserCard;
