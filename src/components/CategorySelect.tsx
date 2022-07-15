import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { categories } from '../utils/QuestionData';


function CategorySelect() {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Box>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Välj kategorier</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    {categories.map((categoryArr) => (
                        <MenuItem
                            key={categoryArr[0].toString()}
                            value={categoryArr[0].toString()}
                        >
                            {categoryArr[0].toString()}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CategorySelect;