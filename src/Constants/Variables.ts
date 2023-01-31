import { buttonType } from '../types/buttonType';

export const NavigationLinks = ['Features', 'Pricing', 'Resources'];
export const NavigationLinksStylesDesk = {
    color: '#9E9AA8',
    textDecoration: 'none',
    fontSize: '1.5rem',
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
});

export const menuItemStyles = {
    display: 'flex',
    justifyContent: 'center',
};
