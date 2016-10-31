'use strict';

import { core, string } from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import 'metal-dropdown';
import 'metal-input-matrix';
import 'metal-progressbar';
import 'metal-slider';
import 'metal-select';
import 'metal-tooltip';

import templates from './WeStyleDemos.soy';

class WeStyleDemos extends Component {
	tooltipAlignElementChanged(event) {
		const value = event.newVal.getAttribute('alt');
		if (value) {
			this.components.tooltip.title = unescape(value);
		}
	}

	scaleValueChanged(event, payload) {
		console.log("scaleValueChanged: " + event.newVal);
	}
};

Soy.register(WeStyleDemos, templates);

export default WeStyleDemos;