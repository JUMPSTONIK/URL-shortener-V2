import {
    Box,
    Fade,
    Menu,
    MenuItem,
    useMediaQuery,
    IconButton,
    Typography,
    Divider,
} from '@mui/material';
import { Button, Link } from '@mui/material';
import {
    NavigationLinks,
    NavigationLinksStylesDesk,
    NavigationLinksStylesMobile,
    NavigationButtonsStyles,
} from '../Constants/Variables';
import { Menu as MenuIcon } from '@mui/icons-material';
import { LogoBlack } from '../Components/LogoBlack';
import { useState } from 'react';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const match = useMediaQuery('(min-width: 678px)');
    return (
        <Box
            component={`header`}
            sx={{ padding: `${match ? '48px 11.5% 0' : '40px 28px 0'}` }}
        >
            <Box
                component={`nav`}
                sx={{ display: 'flex', height: '40px', alignItems: 'center' }}
            >
                <LogoBlack />
                {match ? (
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '28px',
                                alignItems: 'center',
                                marginLeft: '36px',
                            }}
                        >
                            {NavigationLinks.map((linkName) => (
                                <Link
                                    key={linkName}
                                    href="#"
                                    sx={NavigationLinksStylesDesk}
                                >
                                    {linkName}
                                </Link>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                alignItems: 'center',
                                marginLeft: 'auto',
                            }}
                        >
                            <Button
                                sx={NavigationButtonsStyles({
                                    textColor: '#9E9AA8',
                                    backgroundColor: '',
                                    width: '',
                                })}
                            >
                                Login
                            </Button>
                            <Button
                                sx={NavigationButtonsStyles({
                                    textColor: '#fff',
                                    backgroundColor: '#2BD0D0',
                                    width: '',
                                })}
                            >
                                Sign up
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Box
                        sx={{
                            alignItems: 'center',
                            marginLeft: 'auto',
                        }}
                    >
                        <IconButton onClick={handleClick}>
                            <MenuIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            sx={{
                                '& .MuiMenu-paper': {
                                    backgroundColor: '#4B3F6B',
                                    width: '90%',
                                },
                            }}
                        >
                            {NavigationLinks.map((linkName) => (
                                <MenuItem
                                    key={linkName}
                                    onClick={handleClose}
                                    sx={NavigationLinksStylesMobile}
                                >
                                    <Typography>{linkName}</Typography>
                                </MenuItem>
                            ))}
                            <Divider />
                            <MenuItem
                                onClick={handleClose}
                                sx={NavigationLinksStylesMobile}
                            >
                                <Button
                                    sx={NavigationButtonsStyles({
                                        textColor: '#fff',
                                        backgroundColor: '',
                                        width: '90%',
                                    })}
                                >
                                    Login
                                </Button>
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}
                                sx={NavigationLinksStylesMobile}
                            >
                                <Button
                                    sx={NavigationButtonsStyles({
                                        textColor: '#fff',
                                        backgroundColor: '#2BD0D0',
                                        width: '90%',
                                    })}
                                >
                                    Sign up
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
