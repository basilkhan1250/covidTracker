import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import Search from '@mui/icons-material/Search';


export default function FootNav(screenConfig) {
    // console.log(screenConfig)
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{
            position: "sticky",
            bottom: 0,
            right: 0,
            left: 0,
        }}>
            <BottomNavigation
                showLabels
                value={screenConfig[0]}
                onChange={(event, newValue) => {
                    console.log(newValue)
                    screenConfig.screenConfig[1](newValue);
                }}
            >
                <BottomNavigationAction label="All Countries" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Search Country" icon={<Search />} />
            </BottomNavigation>
        </Box>
    );
}
