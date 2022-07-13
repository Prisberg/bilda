import { TextField } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "../utils/Hook";

function Username() {
    const [nameState, setNameState] = useState("");
    const [name, setName] = useLocalStorage<string>("name", "");

    return (
        <TextField
            label="Username"
            variant="standard"
            autoComplete="off"
            value={nameState}
            onChange={(e) => { setNameState(e.target.value) }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setName(nameState)
                    setNameState("")
                }
            }} />
    );
}

export default Username;