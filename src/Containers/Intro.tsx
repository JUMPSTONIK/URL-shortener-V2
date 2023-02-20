import { Box, Typography, useMediaQuery } from '@mui/material';
import { IllustrationWorking } from '../Components/IllustrationWorking';
import { PrimaryButton } from '../Components/PrimaryButton';

export const Intro = () => {
    const match = useMediaQuery('(min-width: 1024px)');
    return (
        <Box
            component={`section`}
            sx={{
                display: 'flex',
                flexDirection: `${!match ? 'column' : 'row-reverse'}`,
                alignItems: `${match ? 'end' : 'center'}`,
                justifyContent: 'center',
                padding: `${match && ' 0 0 20px 11.5%'}`,
                marginTop: `${match ? '78px':'23px'}`,
                overflow: 'hidden'
            }}
        >
            <IllustrationWorking
                translateX={'0'}
                width={`${match ? '733' : '327'}`}
                height={`${match ? '482' : '270'}`}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: `${match ? 'start':'center'}`,
                    width: `${!match ? '327px':'564px'}`
                }}
            >
                <Typography component={`h1`}
                sx={{color: '#34313D',
                fontWeight: '700',
                lineHeight: `${!match ? '48px' : '90px'}`,
                fontSize:  `${!match ? '42px': '80px'}`,
                textAlign: `${!match ? 'center' : 'left'}`}}>
                    More than just shorter links
                </Typography>
                <Typography sx={{color: '#9E9AA8',
                fontWeight: '500',
                margin: `15px 0 32px`,
                lineHeight: `${!match ? '30px' : '36px'}`,
                 fontSize: `${!match ? '18px' : '22px'}`,
                 textAlign: `${!match ? 'center' : 'left'}`}}>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </Typography>
                <PrimaryButton/>
            </Box>
        </Box>
    );
};
