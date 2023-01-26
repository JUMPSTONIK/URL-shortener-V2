import { Box, useMediaQuery } from '@mui/material';
import { Button, Link } from '@mui/material';
import { NavigationLinks, NavigationButtons } from './../Contants';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Logo } from '../Components/Logo';

export const Header = () => {
    const match = useMediaQuery('(min-width: 1440px)');
    return (
        <Box component={`header`}>
            <Box
                component={`nav`}
                sx={{ display: 'flex', height: '40px', alignItems: 'center' }}
            >
                <Logo />
                <Box
                    sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}
                >
                    {NavigationLinks.map((linkName) => (
                        <Link key={linkName} href="#">
                            {linkName}
                        </Link>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: `${!match ? 'none' : 'flex'}`,
                        alignItems: 'center',
                        marginLeft: 'auto',
                    }}
                >
                    {NavigationButtons.map((buttonName) => (
                        <Button key={buttonName}>{buttonName}</Button>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: `${match ? 'none' : 'flex'}`,
                        alignItems: 'center',
                        marginLeft: 'auto',
                    }}
                >
                    <MenuIcon />
                </Box>
            </Box>
        </Box>
    );
};
