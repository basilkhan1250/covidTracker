import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import './custom.css'
import { useCountry } from './countrycontext';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AllCountries() {

    const [globalData, setGlobalData] = useState({});
    const { country } = useCountry()
    console.log(globalData)

    const url = `https://covid-19-data.p.rapidapi.com/country?name=${country}&format=json`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '767a052b10msh1e4977cba0a378ep126701jsn51842f9dde2d',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    useEffect(() => {
        async function FetchingApi() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result)
                if (result.length > [0]) {
                    setGlobalData(result[0]);
                    console.log(result[0])
                }
                delete result[0].latitude;
                delete result[0].longitude;
                delete result[0].lastChange;
                delete result[0].lastUpdate;
            }
            catch (error) {
                console.error(error);
            }
        }
        FetchingApi();
    }, [country]);

    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: 1000,
            margin: "0 auto",
            padding: 5,
        }}>
            <Grid container spacing={2} >
                {Object.keys(globalData).map((data, index) => {
                    return (
                        <Grid item xs={12} sm={4} key={index}>
                            <Item elevation={7}>
                                <h2 className='heading' >{data.toUpperCase()}</h2>
                                <h3 id='head'>{globalData[data]}</h3>
                            </Item>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}
