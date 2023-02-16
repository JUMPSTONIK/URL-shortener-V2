import { Box, useMediaQuery } from '@mui/material';
import { LogoWhite } from '../Components/LogoWhite';
import { Sitemap } from '../Components/Sitemap';
import { SocialNetworks } from '../Components/SocialNetworks';

export const Footer = () => {
    const match = useMediaQuery('(min-width: 1024px)');
    return (
        <Box
            component={`footer`}
            sx={{
                minHeight: '310px',
                height: '100%',
                backgroundColor: '#34313D',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                padding: `${match ? '71px 11.5%' : '54px 28px 56px'}`,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: `${match ? 'row' : ' column'}`,
                    gap: `${match ? '101px' : '40px'}`,
                    textAlign: 'center',
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
