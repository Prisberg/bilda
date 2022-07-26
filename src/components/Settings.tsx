import { Box, Typography } from "@mui/material";
import CreateQuestion from "./CreateQuestion";


function Settings() {

    return (
        <Box className="centerColumn">
            <Typography variant="h4">settings</Typography>
            <CreateQuestion/>
        </Box>
    );
}

export default Settings;