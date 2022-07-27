import CloseIcon from '@mui/icons-material/Close';
import { Box, SxProps, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateQuestion() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Button color='warning' variant="outlined" onClick={handleClickOpen}>
                Skapa personliga frågor
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Din fråga
                        </Typography>
                        <Button autoFocus color="warning" onClick={handleClose}>
                            Spara
                        </Button>
                    </Toolbar>
                </AppBar>
                <TextField 
                sx={textFieldStyle}
                rows={3}
                ></TextField>
                <TextField 
                sx={textFieldStyle}
                rows={3}
                ></TextField>
                <TextField 
                sx={textFieldStyle}
                rows={3}
                ></TextField>
            </Dialog>
        </Box>
    );
}

const textFieldStyle: SxProps = {
    fontFamily: 'Fanwood Text',
}