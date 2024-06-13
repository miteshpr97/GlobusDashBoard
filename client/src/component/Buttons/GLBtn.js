import React from 'react';
import Button from '@mui/material/Button';

const GLBtn = () => {
    return (
        <div
            style={{ width: "60vw", height: "60px", backgroundColor: "#95D2B3", marginLeft: "20px", marginTop: "10px" }}
        >
            <div
                style={{ padding: "12px", display: "flex", gap: "10px" }}
            >
                <Button 
                    variant="contained" 
                    style={{ backgroundColor: "#FF5733", color: "#FFFFFF" }}
                >
                    VIEW
                </Button>
                <Button variant="contained" color="primary">SAVE</Button>
                <Button variant="contained" color="secondary">DELETE</Button>
                <Button variant="contained" color="success">UPDATE</Button>
            </div>
        </div>
    );
}

export default GLBtn;
