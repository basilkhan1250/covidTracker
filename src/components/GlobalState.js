import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import './custom.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GlobalState() {
    const [globalData, setGlobalData] = useState([]);

    useEffect(() => {
        async function FetchingApi() {
            try {
                const response = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
                const result = await response.json();
                setGlobalData(result);
            }
            catch (error) {
                console.error(error);
            }
        }
        FetchingApi();
    }, [globalData]);

    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: 1000,
            margin: "0 auto",
            padding: 5,
        }}>
            <table>
                <tr>
                    <th>Country</th>
                    <th>Infected</th>
                </tr>
                {globalData.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.country}</td>
                            <td>{data.infected}</td>
                        </tr>
                    )
                })}
            </table>
        </Box>
    )
}
