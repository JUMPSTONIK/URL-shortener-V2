import { Box, useMediaQuery } from '@mui/material';
import { LogoWhite } from '../Components/LogoWhite';
import { Sitemap } from '../Components/Sitemap';
import { SocialNetworks } from '../Components/SocialNetworks';

export const Footer = () => {
    const match = useMediaQuery('(min-width: 678px)');
    return (
        <Box
            component={`footer`}
            sx={{
                height: '310px',
                backgroundColor: '#34313D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: `${match ? '0 11.5%' : '40px 28px 0'}`,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: `${match ? 'row' : ' column'}`,
                    justifyContent: 'space-evenly',
                }}
            >
                <LogoWhite />
                <Sitemap
                    title="Features"
                    navigationPoints={[
                        'Link Shortening',
                        'Branded Links',
                        'Analytics',
                    ]}
                />
                <Sitemap
                    title="Resources"
                    navigationPoints={['Blog', 'Developers', 'Support']}
                />
                <Sitemap
                    title="Company"
                    navigationPoints={[
                        'About',
                        'Our Team',
                        'Careers',
                        'Contact',
                    ]}
                />

                <SocialNetworks />
            </Box>
        </Box>
    );
};
