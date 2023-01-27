import { buttonType } from '../types/buttonType';

export const NavigationLinks = ['Features', 'Pricing', 'Resources'];
export const NavigationLinksStylesDesk = {
    color: '#9E9AA8',
    textDecoration: 'none',
};
export const NavigationLinksStylesMobile = {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
};
export const NavigationButtonsStyles = ({
    textColor,
    backgroundColor,
    width,
}: buttonType) => ({
    width,
    color: textColor,
    textTransform: 'none',
    backgroundColor: backgroundColor,
    borderRadius: '5rem',
    padding: '0.5rem 1rem',
    textAlign: 'center',
});
