import React from 'react';
import CustomButton from './CustomButton';
import { Box, Container } from '@mui/material';

const GLBtn = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <Box sx={{ height: "100vh" }}>
            <Container
                sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    backgroundColor: "#86B6F6", 
                    width: "120px",
                    gap: '10px', 
                    height: "400px",
                    alignItems: 'center',
                    marginTop: "10px",
                    marginRight: "10px"
                }}
            >
                <CustomButton 
                    variant='contained' 
                    onClick={handleClick}
                    sx={{ backgroundColor: '#003285', color: 'white' }}
                >
                    SAVE
                </CustomButton>

                <CustomButton 
                    variant='contained' 
                    onClick={handleClick}
                    sx={{ backgroundColor: '#7E8EF1', color: 'white' }}
                >
                    UPDATE
                </CustomButton>

                <CustomButton 
                    variant='contained' 
                    onClick={handleClick}
                    sx={{ backgroundColor: '#A1C398', color: 'white' }}
                >
                    DELETE
                </CustomButton>

                <CustomButton 
                    variant='contained' 
                    onClick={handleClick}
                    sx={{ backgroundColor: '#704264', color: 'white' }}
                >
                    EXCEL
                </CustomButton>
            </Container>
        </Box>
    );
};

export default GLBtn;
