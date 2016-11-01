/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from WeStyleDemos.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WeStyleDemos.
 * @public
 */

goog.module('WeStyleDemos.incrementaldom');

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

var $templateAlias7 = Soy.getTemplate('Dropdown.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('InputMatrix.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ProgressBar.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('Select.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('Sidebar.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('Slider.incrementaldom', 'render');

var $templateAlias6 = Soy.getTemplate('Tooltip.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'content');
    $templateAlias1(null, null, opt_ijData);
    ie_open('div', null, null,
        'class', 'sidebar-offset');
      ie_open('div', null, null,
          'class', 'container-hybrid-half');
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'content-header');
            ie_open('div', null, null,
                'class', 'header-title');
              itext('Metal Components + WeStyle');
            ie_close('div');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-dropdown',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Dropdowns');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-5');
              $dropdownSettings(null, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-5');
              $dropdownFilter(null, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-5');
              $dropdownConfirmation({title: 'Delete Variable', subtitle: 'Are your sure you want do delete this variable?'}, null, opt_ijData);
            ie_close('div');
          ie_close('section');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-progressbar',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('ProgressBar');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias2({barClass: 'progress-bar-success', min: 0, max: 5, value: 3}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias2({barClass: 'progress-bar-info', min: 0, max: 5, value: 4}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias2({barClass: 'progress-bar-warning', min: 0, max: 5, value: 1}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias2({barClass: 'progress-bar-danger', min: 0, max: 5, value: 2}, null, opt_ijData);
            ie_close('div');
          ie_close('section');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-select',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Select');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias3({arrowClass: 'icon-16-arrow-down-short', buttonClass: 'btn btn-default btn-block', hiddenInputName: 'browser', items: ['Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Opera'], ref: 'browserSelector', values: ['chrome', 'safari', 'firefox', 'internet-explorer', 'opera'], selectedIndex: 0}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              var item1__soy50 = function() {
                ie_open('img', null, null,
                    'src', 'https://avatars.githubusercontent.com/u/19154228?v=3',
                    'width', '24',
                    'height', '24');
                ie_close('img');
                itext(' ygorcosta');
              };
              var item2__soy52 = function() {
                ie_open('img', null, null,
                    'src', 'https://avatars.githubusercontent.com/u/10002920?v=3',
                    'width', '24',
                    'height', '24');
                ie_close('img');
                itext(' wedeploy');
              };
              $templateAlias3({arrowClass: 'icon-16-arrow-down-short', buttonClass: 'btn btn-default btn-block', hiddenInputName: 'githubUser', items: [item1__soy50, item2__soy52], ref: 'githubRepository', values: ['1', '2'], selectedIndex: 0}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              var selectDown1__soy63 = function() {
                ie_open('span', null, null,
                    'class', 'none');
                  ie_open('span', null, null,
                      'class', 'avatar avatar-white avatar-squared');
                    ie_void('span', null, null,
                        'class', 'icon-16-house');
                  ie_close('span');
                  itext('none');
                ie_close('span');
              };
              var selectDown2__soy65 = function() {
                ie_open('img', null, null,
                    'src', 'http://api.dashboard.wedeploy.com/static/registry/wedeploy-hosting/icon.png',
                    'width', '36',
                    'height', '36');
                ie_close('img');
                itext('images');
              };
              $templateAlias3({elementClasses: 'select-large', arrowClass: 'icon-16-arrow-down-short', buttonClass: 'btn btn-default btn-block', hiddenInputName: 'githubUser', items: [selectDown1__soy63, selectDown2__soy65], ref: 'homeContainer', values: ['1', '2'], selectedIndex: 0}, null, opt_ijData);
            ie_close('div');
          ie_close('section');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-tooltip',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Tooltip');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-4');
              ie_open('h3', null, null,
                  'class', 'content-body-title top-2b');
                itext('Home Service');
                ie_void('span', null, null,
                    'class', 'icon-12-info show-tooltip icon-info',
                    'alt', 'Select the service that will respond to requests made on project main domain.');
              ie_close('h3');
            ie_close('div');
          ie_close('section');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-tooltip',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Slider');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias4({elementClasses: 'hidden-xs hidden-sm', events: {valueChanged: opt_data.scaleValueChanged}, max: 5, value: 1}, null, opt_ijData);
            ie_close('div');
          ie_close('section');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'content-body');
          ie_open('section', null, null,
              'id', 'section-tooltip',
              'class', 'row');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Input Matrix - 1 fiedl');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias5({fieldsConfig: [{label: '', name: 'customDomains', placeholder: 'myproject.com', isArray: true, maxLength: 263, autocomplete: 'off'}]}, null, opt_ijData);
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              ie_open('h3', null, null,
                  'class', 'content-body-title');
                itext('Input Matrix - 2 fiedls');
              ie_close('h3');
            ie_close('div');
            ie_open('div', null, null,
                'class', 'col-xs-16');
              $templateAlias5({elementClasses: 'input-matrix--inline', fieldsConfig: [{label: '', name: 'key', placeholder: 'Key', isArray: true, maxLength: 255, autocomplete: false}, {label: '', name: 'value', placeholder: 'Value', isArray: true, maxLength: 255, autocomplete: false}]}, null, opt_ijData);
            ie_close('div');
          ie_close('section');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('div');
  $templateAlias6({elementClasses: 'fade', events: {alignElementChanged: opt_data.tooltipAlignElementChanged}, ref: 'tooltip', selector: '.show-tooltip', visible: false}, null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'WeStyleDemos.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $dropdownSettings(opt_data, opt_ignored, opt_ijData) {
  var param98 = function() {
    ie_void('button', null, null,
        'class', 'btn-icon icon-16-ellipsis',
        'data-onclick', 'toggle',
        'type', 'button');
  };
  var param100 = function() {
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        ie_void('span', null, null,
            'class', 'icon-12-spinner-double-arrow');
        itext('Restart Service');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-increase');
        itext('Scale Containers');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        ie_void('span', null, null,
            'class', 'icon-12-overlap');
        itext('Copy Service URL');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        ie_void('span', null, null,
            'class', 'icon-12-house');
        itext('Set as Home Service');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        ie_void('span', null, null,
            'class', 'icon-12-trash');
        itext('Delete Service');
      ie_close('a');
    ie_close('li');
  };
  $templateAlias7({elementClasses: 'dropdown-settings', header: param98, body: param100}, null, opt_ijData);
}
exports.dropdownSettings = $dropdownSettings;
if (goog.DEBUG) {
  $dropdownSettings.soyTemplateName = 'WeStyleDemos.dropdownSettings';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $dropdownFilter(opt_data, opt_ignored, opt_ijData) {
  var param105 = function() {
    ie_open('button', null, null,
        'class', 'btn btn-default',
        'data-onclick', 'toggle',
        'type', 'button');
      itext('Alphanumeric');
      ie_void('span', null, null,
          'class', 'icon-12-arrow-down-short');
    ie_close('button');
  };
  var param107 = function() {
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        itext('Last Activity');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        itext('Newest');
      ie_close('a');
    ie_close('li');
    ie_open('li');
      ie_open('a', null, null,
          'href', 'javascript:;');
        itext('Alphanumeric');
      ie_close('a');
    ie_close('li');
  };
  $templateAlias7({elementClasses: 'dropdown-filter', header: param105, body: param107}, null, opt_ijData);
}
exports.dropdownFilter = $dropdownFilter;
if (goog.DEBUG) {
  $dropdownFilter.soyTemplateName = 'WeStyleDemos.dropdownFilter';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $dropdownConfirmation(opt_data, opt_ignored, opt_ijData) {
  var param112 = function() {
    ie_open('button', null, null,
        'class', 'btn btn-default',
        'data-onclick', 'toggle',
        'type', 'button');
      ie_void('span', null, null,
          'class', 'icon-12-trash');
    ie_close('button');
  };
  var param114 = function() {
    ie_open('h3');
      var dyn0 = opt_data.title;
      if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
    ie_close('h3');
    ie_open('p');
      var dyn1 = opt_data.subtitle;
      if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
    ie_close('p');
    ie_open('button', null, null,
        'class', 'btn btn-default');
      itext('Cancel');
    ie_close('button');
    ie_open('button', null, null,
        'class', 'btn btn-danger');
      itext('Delete');
    ie_close('button');
  };
  $templateAlias7({elementClasses: 'dropdown-confirmation', header: param112, body: param114}, null, opt_ijData);
}
exports.dropdownConfirmation = $dropdownConfirmation;
if (goog.DEBUG) {
  $dropdownConfirmation.soyTemplateName = 'WeStyleDemos.dropdownConfirmation';
}

exports.render.params = ["scaleValueChanged","tooltipAlignElementChanged"];
exports.render.types = {"scaleValueChanged":"any","tooltipAlignElementChanged":"any"};
exports.dropdownSettings.params = [];
exports.dropdownSettings.types = {};
exports.dropdownFilter.params = [];
exports.dropdownFilter.types = {};
exports.dropdownConfirmation.params = ["title","subtitle"];
exports.dropdownConfirmation.types = {"title":"any","subtitle":"any"};
templates = exports;
return exports;

});

class WeStyleDemos extends Component {}
Soy.register(WeStyleDemos, templates);
export { WeStyleDemos, templates };
export default templates;
/* jshint ignore:end */
