import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuizContext } from '../utils/Context';


function CategorySelect() {
    const { selectedCategories, setSelectedCategories, categories } = useQuizContext()

    const handleChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const {
            target: { value },
        } = event;
        setSelectedCategories(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Box>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel
                    color="warning"
                    id="demo-multiple-chip-label">
                    Välj kategorier
                </InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    multiple
                    color="warning"
                    required
                    value={selectedCategories}
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
                    {categories.map((category) => (
                        <MenuItem
                            key={category}
                            value={category}
                        >
                            {category}
                        </MenuItem>
                    ))}
                </Select>
                {selectedCategories.length > 0 ? <Button
                    variant='outlined'
                    color="warning"
                    onClick={() =>
                        setSelectedCategories([])}
                >
                    Töm val
                </Button>
                    :
                    <Button
                        variant='outlined'
                        disabled
                        >
                        Töm val
                    </Button>}
            </FormControl>
        </Box>
    );
}

export default CategorySelect;