import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/icons components

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const AboutPartners = () => {
	const classes = useStyles();
	const LOGOS = [
		{ name: 'METS Ignited', href: 'https://metsignited.org/', logo: require('assets/img/partners/mets.png') },
		{ name: 'System Health Lab', href: 'https://systemhealthlab.com/', logo: require('assets/img/partners/shl.png') },
		{ name: 'University of Western Australia', href: 'https://www.uwa.edu.au/', logo: require('assets/img/partners/uwa.png') },
		{ name: 'BHP', href: 'https://www.bhp.com/', logo: require('assets/img/partners/bhp.png') },
		{ name: 'Core Innovation Hub', href: 'https://www.corehub.com.au/', logo: require('assets/img/partners/core.png') },
	];
	return (
		<Fragment>
			<GridContainer justify='center' alignItems='center'>
				{LOGOS.map(({ name, href, logo }, index) => (
					<GridItem key={index} xs={6} style={{ textAlign: 'center' }}>
						<a href={href}>
							<img src={logo} alt={name} className={classes.partnersLogo} />
						</a>
					</GridItem>
				))}
			</GridContainer>
		</Fragment>
	);
};

export default AboutPartners;
