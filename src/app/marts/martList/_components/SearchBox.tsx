import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <InputBase
        sx={{ 
          ml: 1,
          flex: 1,
          '& .MuiInputBase-input': {
            borderRadius: '16px',
            padding: '14px 24px',
            transition: 'all 0.3s ease',
            '&:focus': {
              boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)'
            }
          }
        }}
        placeholder="店舗名で検索"
        inputProps={{ 
          'aria-label': 'search stores',
          style: {
            borderRadius: '12px',
          }
        }}
      />
      <IconButton 
        type="button" 
        sx={{
          p: '12px',
          color: 'white',
          backgroundColor: 'primary.main',
          borderRadius: '16px',
          marginLeft: '8px',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'scale(1.05)'
          },
          transition: 'all 0.2s ease'
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}
