import { buttonType } from '../types/buttonType';
import { IconBrandRecognition } from '../Components/IconBrandRecognition';
import { IconDetailedRecords } from '../Components/IconDetailedRecords';
import { IconFullyCustomizable } from '../Components/IconFullyCustomizable';

export const NavigationLinks = ['Features', 'Pricing', 'Resources'];
export const NavigationLinksStylesDesk = {
    color: '#9E9AA8',
    textDecoration: 'none',
    fontSize: '1.5rem',
    '&:hover': { color: '#34313D' },
};
export const NavigationLinksStylesMobile = {
    fontSize: '1.8rem',
    color: '#fff',
    textDecoration: 'none',
};
export const NavigationButtonsStyles = ({
    textColor,
    backgroundColor,
    width,
    radius,
    padding,
    fontSize,
    height,
}: buttonType) => ({
    height,
    width,
    color: textColor,
    textTransform: 'none',
    backgroundColor: backgroundColor,
    borderRadius: radius,
    padding,
    fontSize,
    textAlign: 'center',
    '&:focus': {
        backgroundColor: '#9AE3E3',
    },
});

export const menuItemStyles = {
    display: 'flex',
    justifyContent: 'center',
};

export const Cards = [
    {
        media: IconBrandRecognition,
        verticalPosition: 'start',
        title: `Brand Recognition`,
        paragraph:
            'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
        media: IconDetailedRecords,
        verticalPosition: 'center',
        title: `Detailed Records`,
        paragraph:
            'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
        media: IconFullyCustomizable,
        verticalPosition: 'end',
        title: `Fully Customizable`,
        paragraph:
            'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
];
