import { Box } from "@mui/material";
import CreateQuiz from "./CreateQuiz";
import Username from "./Username";
import '../utils/style.css';
import { useQuizContext } from "../utils/Context";

function StartPage() {
    const {username} = useQuizContext()

    return (
        <Box className="center">
            {username ? <CreateQuiz /> : <Username />}
        </Box>
    );
}

export default StartPage;