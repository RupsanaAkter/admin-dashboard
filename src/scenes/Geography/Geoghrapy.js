import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import Header from '../../components/Header/Header';
import GeographyChart from '../../components/GeograpyChart/GeographyChart';

const Geoghrapy = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
        <Header title="Geography" subtitle="Simple Geography Chart" />
  
        <Box
          height="75vh"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    );
};

export default Geoghrapy;