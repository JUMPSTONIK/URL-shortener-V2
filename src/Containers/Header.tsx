import {
    Box,
    Fade,
    Menu,
    MenuItem,
    useMediaQuery,
    IconButton,
    Divider,
} from '@mui/material';
import { Button, Link } from '@mui/material';
import {
    NavigationLinks,
    NavigationLinksStylesDesk,
    NavigationLinksStylesMobile,
    NavigationButtonsStyles,
    menuItemStyles,
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

    const match = useMediaQuery('(min-width: 1024px)');
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
                                display: 'flex',
                                gap: '26px',
                                marginLeft: 'auto',
                            }}
                        >
                            <Button
                                sx={NavigationButtonsStyles({
                                    textColor: '#9E9AA8',
                                    backgroundColor: '',
                                    height: '',
                                    width: '',
                                    radius: '5rem',
                                    padding: '0.5rem 1rem',
                                    fontSize: '1.5rem',
                                })}
                            >
                                Login
                            </Button>
                            <Button
                                // disableRipple
                                style={{ backgroundColor: '#2BD0D0' }}
                                sx={NavigationButtonsStyles({
                                    textColor: '#fff',
                                    backgroundColor: '#2BD0D0',
                                    height: '40px',
                                    width: '105px',
                                    radius: '5rem',
                                    padding: '',
                                    fontSize: '1.5rem',
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
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            sx={{
                                '& .MuiMenu-paper': {
                                    backgroundColor: '#3A3054',
                                    width: '100%',
                                },
                            }}
                        >
                            {NavigationLinks.map((linkName) => (
                                <MenuItem
                                    key={linkName}
                                    onClick={handleClose}
                                    sx={menuItemStyles}
                                >
                                    <Link
                                        href="#"
                                        sx={NavigationLinksStylesMobile}
                                    >
                                        {linkName}
                                    </Link>
                                </MenuItem>
                            ))}
                            <Divider />
                            <MenuItem onClick={handleClose} sx={menuItemStyles}>
                                <Button
                                    sx={NavigationButtonsStyles({
                                        textColor: '#fff',
                                        backgroundColor: '',
                                        height: '',
                                        width: '90%',
                                        radius: '5rem',
                                        padding: '0.8rem 1rem',
                                        fontSize: '1.8rem',
                                    })}
                                >
                                    Login
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={menuItemStyles}>
                                <Button
                                    style={{ backgroundColor: '#2BD0D0' }}
                                    sx={NavigationButtonsStyles({
                                        textColor: '#fff',
                                        backgroundColor: '#2BD0D0',
                                        height: '',
                                        width: '90%',
                                        radius: '5rem',
                                        padding: '0.8rem 1rem',
                                        fontSize: '1.8rem',
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
