import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import "../utils/style.css";

export default function BadGate() {
    const { quizActive } = useQuizContext()
    const BRouterlocation = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    function errorMessage() {
        if (BRouterlocation.pathname === '/quiz' && !quizActive) {
            setError('Du har inget aktivt quiz.')
        } else {
            setError('404: Något gick fel.')
        }
    }

    function home() {
        navigate('/')
        window.location.reload();
    }

    useEffect(() => {
        errorMessage();
    }, [BRouterlocation])

    return (
        <Box className="centerColumn">
            <Typography variant="h5">
                {error}
            </Typography>
            <Button color="warning" onClick={() => home()}> Gå tillbaka</Button >
        </Box >
    );
}