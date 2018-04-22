// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
	giant: 1170,
	desktop: 992,
	tablet: 768,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
	const emSize = sizes[label] / 16;
	accumulator[label] = (...args) => css`
		@media (min-width: ${emSize}em) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});