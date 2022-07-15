import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useQuizContext } from "../utils/Context";
import useLocalStorage from "../utils/Hook";
import "../utils/style.css"

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
        <form className="centerColumn" onSubmit={saveName}>
            <TextField
                label="Användarnamn"
                variant="standard"
                autoComplete="off"
                value={nameState}
                required
                onChange={(e) => { setNameState(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        saveName()
                    }
                }} />
            <Button type="submit">Acceptera användarnamn</Button>
        </form>
    );
}

export default Username;