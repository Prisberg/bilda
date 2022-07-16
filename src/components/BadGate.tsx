import { Box, Typography } from "@mui/material";
import "../utils/style.css"

export default function BadGate() {
    return (
        <Box className="centerColumn">
            <Typography variant="h3">
                404: An error ocurred.
            </Typography>
        </Box>
    );
}