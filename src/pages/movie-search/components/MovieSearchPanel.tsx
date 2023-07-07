import { Box, TextField } from '@mui/material';
import { useCallback } from 'react';

type SearchPanelProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export default function SearchPanel({ searchValue, setSearchValue }: SearchPanelProps) {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  return (
    <Box sx={{ padding: { xs: 1, md: 4 } }}>
      <TextField
        fullWidth
        hiddenLabel
        variant="outlined"
        placeholder="Find movie"
        value={searchValue}
        onChange={handleOnChange}
      />
    </Box>
  );
}
