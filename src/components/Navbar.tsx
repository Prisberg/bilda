import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import { useQuizContext } from "../utils/Context";


function Navbar() {
    const location = useLocation();
    const navigate = useNavigate()
    const { setSelectedQuestions, selectedQuestions, quizActive, setQuizActive } = useQuizContext()

    useEffect(() => {
        console.log(location);
        // If leaving /quiz set quizactive to false and reset selectedQuestions.
        if(location.pathname === '/quiz' && quizActive) {
            return
        } else {
            setQuizActive(false)
        }
    }, [location]);

    return (
        <Box sx={{ zIndex: 3, position: 'absolute', width: '100%' }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => navigate('/')}
                        >
                            <Typography variant="h6" component="div">
                                BILDA
                            </Typography>
                        </IconButton>
                    </Box>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, right: 0 }}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;