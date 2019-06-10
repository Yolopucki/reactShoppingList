import React from 'react';

import classes from './footer.module.scss';


const Footer = () => <footer
    data-test='footerComponent'
    className={[classes.footer, 'card-footer', 'footer', 'text-center'].join(' ')}
>  &copy; Victor Orlyk</footer>;


export default Footer;
