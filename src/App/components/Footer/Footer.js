import React from "react";
import PropTypes from "prop-types";

import classes from "./footer.module.scss";


const Footer = (props) => <footer
    data-test="footerComponent"
    className={[classes.footer, "card-footer", "footer", "text-center"].join(" ")}
>  &copy; Victor Orlyk</footer>;

Footer.propTypes = {};
export default Footer;
