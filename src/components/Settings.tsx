import { Box, Button, Typography } from "@mui/material";
import CreateQuestion from "./CreateQuestion";
import HandlePersonalQuestions from "./HandlePersonalQuestions";


function Settings() {

    return (
        <Box sx={{gap: '1rem'}} className="centerColumn">
            <Typography variant="h4">Inställningar</Typography>
            <CreateQuestion/>
            <HandlePersonalQuestions/>
        </Box>
    );
}

export default Settings;