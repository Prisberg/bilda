import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate()
    const { quizActive, setQuizActive, username } = useQuizContext()

    useEffect(() => {
        if (location.pathname === '/quiz' && quizActive) {
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
                            aria-label="menu"
                            sx={{
                                transition:'color 200ms ease-in-out',
                                mr: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    color: '#ff9100',
                                }
                            }}
                            onClick={() => navigate('/')}
                        >
                            <Typography variant="h6" component="div">
                                <MenuBookIcon />BILDA
                            </Typography>
                        </IconButton>
                    </Box>
                    {username ?
                        <IconButton
                            size="large"
                            edge="end"
                            color="warning"
                            aria-label="menu"
                            sx={{ mr: 2, right: 0 }}
                            onClick={() => navigate('/settings')}
                        >
                            <SettingsIcon />
                        </IconButton> : null}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;