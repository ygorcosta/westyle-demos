/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @public
 */

goog.module('Sidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar');
    ie_open('ul', null, null,
        'class', 'sidebar-list sidebar-list-1 toggler-collapsed');
      ie_open('li', null, null,
          'class', 'sidebar-list-header');
        ie_open('h3', null, null,
            'class', 'sidebar-list-header-title truncate');
          itext('Metal Components');
        ie_close('h3');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-dropdown');
          ie_open('span');
            itext('Dropdowns');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-progressbar');
          ie_open('span');
            itext('ProgressBars');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-select');
          ie_open('span');
            itext('Select');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-slide');
          ie_open('span');
            itext('Slide');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-toast');
          ie_open('span');
            itext('Toast');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-tooltip');
          ie_open('span');
            itext('Tooltips');
          ie_close('span');
        ie_close('a');
      ie_close('li');
      ie_open('li', null, null,
          'class', 'sidebar-item sidebar-settings-item');
        ie_open('a', null, null,
            'class', 'sidebar-link',
            'href', '#section-input-matrix');
          ie_open('span');
            itext('Input-Matrix');
          ie_close('span');
        ie_close('a');
      ie_close('li');
    ie_close('ul');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class Sidebar extends Component {}
Soy.register(Sidebar, templates);
export { Sidebar, templates };
export default templates;
/* jshint ignore:end */
