import { TextField } from "@mui/material";
import { useState } from "react";
import { useQuizContext } from "../utils/Context";
import useLocalStorage from "../utils/Hook";

function Username() {
    const [nameState, setNameState] = useState("");
    const [name, setName] = useLocalStorage<string>("name", "");
    const { getName } = useQuizContext()

    function saveName() {
        setName(nameState)
        setNameState("")
        getName()
    }

    return (
        <TextField
            label="Username"
            variant="standard"
            autoComplete="off"
            value={nameState}
            onChange={(e) => { setNameState(e.target.value) }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    saveName()
                }
            }} />
    );
}

export default Username;