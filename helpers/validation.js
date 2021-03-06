// VALIDATE EMAIL USING REGEX
export const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

// VALIDATE WEBSITE USING REGEX
export const validateWebsite = (website) => {
	const re = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
	return re.test(String(website));
};

// VALIDATE PHONE USING REGEX
export const validatePhone = (phone) => {
	const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
	return re.test(String(phone));
};

// NOT EMPTY - CONVERSION OF BOOLEAN
export const notEmpty = (value) => !!value;

//CONVERT A STRING TO LINK
export const stringToLink = (string) => string.toLowerCase().replace(/ /g, '-');
