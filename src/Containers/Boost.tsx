import { Box, Typography, useMediaQuery } from '@mui/material';
import { BgBoostMobile } from '../Components/BgBoostMobile';
import { BgBoostDesktop } from '../Components/BgBoostDesktop';
import { PrimaryButton } from '../Components/PrimaryButton';

export const Boost = () => {
    const match = useMediaQuery('(min-width: 1024px)');
    return (
        <Box component={`section`}
            sx={{
                position: 'relative',
                backgroundColor: '#3A3054',
                height: `${match ? '250px' : '300px'}`,
                width: '100%',
                zIndex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: `${!match ? '16px' : '32px'}`,
            }}
        >
            {match ? <BgBoostDesktop /> : <BgBoostMobile />}
            <Typography sx={{
                fontSize: `${!match ?'28px' : '40px'}`,
                color: '#fff', fontWeight: '700'}}>
                    Boost your links today
                    </Typography>
            <PrimaryButton/>
        </Box>
    );
};
