import * as React from 'react';
import { NextPage } from 'next';

// ** mui
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

// ** Layout

import ListVerticalLayout from './ListVerticalLayout';

// ** Components
import IconifyIcon from 'src/components/Icon';



const drawerWidth: number = 240;

type Tprops = {
    open: boolean,
    toggleDrawer: () => void,
}



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const VerticalLayout: NextPage<Tprops> = ({ open, toggleDrawer }) => {

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <IconifyIcon icon='mingcute:left-line' />
                </IconButton>
            </Toolbar>
            <Divider />
            <ListVerticalLayout />
        </Drawer>

    );
}

export default VerticalLayout