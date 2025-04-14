import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Mosaicstyles from '../styles/mosaicstyles.module.css';

export default function homepage (props) {

    return (
        <div>
            <Box border={0} sx={{ borderBottom:0, mt:7, width: "100%", display: 'flex', flexwrap: 'wrap'}}>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "10%"}}></Box>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "60%"}}><Typography variant="h4">Welcome to your <span style={{color: '#2027C5'}}>Dashboard</span></Typography></Box>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "20%"}}><Button sx={{backgroundColor:'#F1F3FF',color:'black',border:'3px solid #2027C5', borderRadius: '25px', mt:1, mr:2}} variant="contained">Scan medicine</Button></Box>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "10%"}}></Box>

            </Box>

            <Box border={0} sx={{ borderBottom:0, mt:6, width: "100%", display: 'flex', flexwrap: 'wrap'}}>
                <Box sx={{mb:2 ,ml:5, width: "10%"}}></Box>
                <Box sx={{mb:2 ,ml:5, width: "80%", display: 'flex', flexwrap: 'wrap'}}>
                    <Card sx={{color:'#2027C5',width:'20%', border: 3, borderRadius:'30px', mr:5}}>
                    <Box sx={{mt:2, ml:3}}>
                    <Typography variant="h5">Total medicinces</Typography>
                    </Box>
                    <Box sx={{mt:5, ml:3, mb:2}}>
                    <Typography variant="h5">4230</Typography>
                    </Box>
                    </Card>

                    <Card sx={{color:'#2027C5',width:'20%', border: 3, borderRadius:'30px', mr:5}}>
                    <Box sx={{mt:2, ml:3}}>
                    <Typography variant="h5">Damaged stock</Typography>
                    </Box>
                    <Box sx={{mt:5, ml:3, mb:2}}>
                    <Typography variant="h5">23</Typography>
                    </Box>
                    </Card>

                    <Card sx={{color:'#2027C5',width:'20%', border: 3, borderRadius:'30px', mr:5}}>
                    <Box sx={{mt:2, ml:3}}>
                    <Typography variant="h5">Expiring soon</Typography>
                    </Box>
                    <Box sx={{mt:5, ml:3, mb:2}}>
                    <Typography variant="h5">1</Typography>
                    </Box>
                    </Card>

                    <Card sx={{color:'#2027C5',width:'20%', border: 3, borderRadius:'30px', mr:5}}>
                    <Box sx={{mt:2, ml:3}}>
                    <Typography variant="h5">Warnings</Typography>
                    </Box>
                    <Box sx={{mt:5, ml:3, mb:2}}>
                    <Typography variant="h5">0</Typography>
                    </Box>
                    </Card>
                </Box>
            <Box sx={{mb:2 ,ml:5, width: "10%"}}></Box>

            </Box>

            <Box border={0} sx={{ borderBottom:0, mt:2, width: "100%", display: 'flex', flexwrap: 'wrap'}}>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "10%"}}></Box>
                <Box border={0} sx={{mb:2 ,ml:5, mt:2, width: "60%"}}>
                    <Box sx={{mt:8}}><Typography variant="h4">Recent <span style={{color: '#2027C5'}}>Activity</span></Typography></Box>
                    <Box sx={{mt:8}}><Typography variant="h5">Aspirin</Typography> <Typography variant="h7" sx={{color: '#637387'}}>+12 units, 12/2/2025</Typography></Box>
                    <Box sx={{mt:8}}><Typography variant="h5">Loratadine</Typography> <Typography variant="h7" sx={{color: '#637387'}}>-2 units, 8/2/2025</Typography></Box>
                    <Box sx={{mt:8}}><Typography variant="h5">Acetaminophine</Typography><Typography variant="h7" sx={{color: '#637387'}}>-4 units, 12/2/2025</Typography></Box>
                    <Box sx={{mt:8}}><Typography variant="h5">Ibuprofen</Typography> <Typography variant="h7" sx={{color: '#637387'}}>Stock verification, 21/1/2025</Typography></Box>
                </Box>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "20%"}}></Box>
                <Box sx={{mb:2 ,ml:5, mt:2, width: "10%"}}></Box>

            </Box>
        </div>
    );

}