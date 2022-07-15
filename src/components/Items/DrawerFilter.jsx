import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import subAndSuperContext from "../../Contexts/subAndsuperContext";
import DevicesIcon from '@mui/icons-material/Devices';
import PetsIcon from '@mui/icons-material/Pets';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faDog } from '@fortawesome/fontawesome-free-solid';
import StyleIcon from '@mui/icons-material/Style';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';


const DrawerFilter = () => {
    const {
        SetSubCat,
        SetSuperCat,
    } = useContext(subAndSuperContext);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const handleSuperClick = (event) => {
        event.preventDefault();
        const superCategory = event.target.innerText;
        SetSuperCat(superCategory);
    }

    const handleSubClick = (event) => {
        event.preventDefault();
        const supCategory = event.target.innerText;
        SetSubCat(supCategory);
    }

    const supCategoriesList = () => {
        return <>
            <ListItem key={'Tablets'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <TabletMacIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Tablets'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Mobiles'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Mobiles'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Laptops'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Laptops'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Birds'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faDove} />
                    </ListItemIcon>
                    <ListItemText primary={'Birds'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Cats'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <PetsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Cats'} />
                </ListItemButton>
            </ListItem>


            <ListItem key={'Dogs'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <PetsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dogs'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Personal cards and papers'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <RecentActorsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Personal cards and papers'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Wallets'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <AccountBalanceWalletIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Wallets'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Glasses'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <FontAwesomeIcon icon="fa-solid fa-glasses" />
                    </ListItemIcon>
                    <ListItemText primary={'Glasses'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Money'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Money'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Bags'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <BusinessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Bags'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Accessories'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <EarbudsBatteryIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Accessories'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Other'} disablePadding>
                <ListItemButton onClick={handleSubClick}>
                    <ListItemIcon>
                        <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Other'} />
                </ListItemButton>
            </ListItem>
        </>
    }

    const superCategoriesList = () => {
        return <>
            <ListItem key={'Electronics'} disablePadding>
                <ListItemButton onClick={handleSuperClick}>
                    <ListItemIcon>
                        <DevicesIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Electronics'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Animals'} disablePadding>
                <ListItemButton onClick={handleSuperClick}>
                    <ListItemIcon>
                        <PetsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Animals'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Belongings'} disablePadding>
                <ListItemButton onClick={handleSuperClick}>
                    <ListItemIcon>
                        <AccountBalanceWalletIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Belongings'} />
                </ListItemButton>
            </ListItem>

            <ListItem key={'Other'} disablePadding>
                <ListItemButton onClick={handleSuperClick}>
                    <ListItemIcon>
                        <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Other'} />
                </ListItemButton>
            </ListItem>
        </>
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {superCategoriesList()}
            </List>
            <Divider />
            <List>
                {supCategoriesList()}
            </List>
        </Box>
    );

    return (
        <div style={{textAlign:"center"}}>
            {['☰ Filters'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default DrawerFilter;