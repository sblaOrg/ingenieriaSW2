webpackJsonp([25],{1692:function(e,t,n){"use strict";function a(){return o.a.createElement("div",{id:"licenses-page",className:"page page-limited"},o.a.createElement(l.a,{title:n.i(u.translate)("property.category.licenses")}),p,f)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=n(0),o=n.n(r),i=n(22),l=n.n(i),c=n(2185),s=n(2187),u=n(2),p=o.a.createElement(c.a,null),f=o.a.createElement(s.a,null)},2181:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(55),s=n.n(c),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=l.a.createElement("i",{className:"js-modal-spinner spinner spacer-right"}),m=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={loading:!1,modalOpen:!1},o.closeModal=function(){return o.setState({modalOpen:!1})},o.handleSubmit=function(e){if(e.preventDefault(),o.textarea){var t=o.textarea.value;o.setState({loading:!0}),o.props.onChange(t).then(function(){return o.setState({loading:!1,modalOpen:!1})},function(){return o.setState({loading:!1})})}},o.handleCancelClick=function(e){e.preventDefault(),o.closeModal()},i=n,r(o,i)}return o(t,e),p(t,[{key:"onClick",value:function(e){e.preventDefault(),e.target.blur(),this.setState({modalOpen:!0})}},{key:"render",value:function(){var e=this,t=this.props.license,a=t.name||t.key;return l.a.createElement("button",{className:"js-change",onClick:function(t){return e.onClick(t)}},n.i(u.translate)("update_verb"),this.state.modalOpen&&l.a.createElement(s.a,{isOpen:!0,contentLabel:"license update",className:"modal",overlayClassName:"modal-overlay",onRequestClose:this.closeModal},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"modal-head"},l.a.createElement("h2",null,n.i(u.translateWithParameters)("licenses.update_license_for_x",a))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("label",{htmlFor:"license-input"},n.i(u.translate)("licenses.license_input_label")),l.a.createElement("textarea",{autoFocus:!0,className:"width-100 spacer-top",ref:function(t){return e.textarea=t},rows:"7",id:"license-input",defaultValue:t.value}),l.a.createElement("div",{className:"spacer-top note"},n.i(u.translate)("licenses.license_input_note"))),l.a.createElement("div",{className:"modal-foot"},this.state.loading&&f,l.a.createElement("button",{className:"js-modal-submit",disabled:this.state.loading},n.i(u.translate)("save")),l.a.createElement("a",{href:"#",className:"js-modal-close",onClick:this.handleCancelClick},n.i(u.translate)("cancel"))))))}}]),t}(l.a.PureComponent);m.propTypes={license:l.a.PropTypes.object.isRequired,onChange:l.a.PropTypes.func.isRequired},t.a=m},2182:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(3),s=n.n(c),u=n(2184),p=n(2181),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.handleSet=function(e){return o.props.setLicense(o.props.license.key,e)},i=n,r(o,i)}return o(t,e),f(t,[{key:"render",value:function(){var e=this.props.license;return l.a.createElement("tr",{className:"js-license","data-license-key":e.key},l.a.createElement("td",{className:"text-middle"},l.a.createElement(u.a,{license:e})),l.a.createElement("td",{className:"js-product text-middle"},l.a.createElement("div",{className:e.invalidProduct?"text-danger":null},e.name||e.key)),l.a.createElement("td",{className:"js-organization text-middle"},e.organization),l.a.createElement("td",{className:"js-expiration text-middle"},null!=e.expiration&&l.a.createElement("div",{className:e.invalidExpiration?"text-danger":null},s()(e.expiration).format("LL"))),l.a.createElement("td",{className:"js-type text-middle"},e.type),l.a.createElement("td",{className:"js-server-id text-middle"},l.a.createElement("div",{className:e.invalidServerId?"text-danger":null},e.serverId)),l.a.createElement("td",{className:"text-right"},l.a.createElement(p.a,{license:e,onChange:this.handleSet})))}}]),t}(l.a.PureComponent);m.propTypes={license:l.a.PropTypes.object.isRequired,setLicense:l.a.PropTypes.func.isRequired},t.a=m},2183:function(e,t,n){"use strict";var a=n(8),r=(n.n(a),n(2182)),o=n(667),i=n(7),l=function(e,t){return{license:n.i(i.getSettingsAppLicenseByKey)(e,t.licenseKey)}};t.a=n.i(a.connect)(l,{setLicense:o.c})(r.a)},2184:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(691),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=l.a.createElement("i",{className:"icon-alert-error"}),p=l.a.createElement("i",{className:"icon-check"}),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props.license;return null==e.value?null:n.i(c.a)(e)?u:p}}]),t}(l.a.PureComponent);f.propTypes={license:l.a.PropTypes.object.isRequired},t.a=f},2185:function(e,t,n){"use strict";function a(){return o.a.createElement("header",{className:"page-header"},o.a.createElement("h1",{className:"page-title"},n.i(i.translate)("property.category.licenses")),o.a.createElement("div",{className:"page-description",dangerouslySetInnerHTML:{__html:n.i(i.translate)("property.category.licenses.description")}}))}t.a=a;var r=n(0),o=n.n(r),i=n(2)},2186:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),c=n(2183),s=n(2),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=l.a.createElement("th",{width:40}," "),f=l.a.createElement("th",{width:80}," "),m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.fetchLicenses().catch(function(){})}},{key:"render",value:function(){return l.a.createElement("table",{className:"data zebra zebra-hover",style:{tableLayout:"fixed"}},l.a.createElement("thead",null,l.a.createElement("tr",null,p,l.a.createElement("th",null,n.i(s.translate)("licenses.list.product")),l.a.createElement("th",{width:150},n.i(s.translate)("licenses.list.organization")),l.a.createElement("th",{width:150},n.i(s.translate)("licenses.list.expiration")),l.a.createElement("th",{width:150},n.i(s.translate)("licenses.list.type")),l.a.createElement("th",{width:150},n.i(s.translate)("licenses.list.server")),f)),l.a.createElement("tbody",null,this.props.licenses.map(function(e){return l.a.createElement(c.a,{key:e,licenseKey:e})})))}}]),t}(l.a.PureComponent);m.propTypes={licenses:l.a.PropTypes.array.isRequired,fetchLicenses:l.a.PropTypes.func.isRequired},t.a=m},2187:function(e,t,n){"use strict";var a=n(8),r=(n.n(a),n(2186)),o=n(667),i=n(7),l=function(e){return{licenses:n.i(i.getSettingsAppAllLicenseKeys)(e)}};t.a=n.i(a.connect)(l,{fetchLicenses:o.b})(r.a)}});
//# sourceMappingURL=25.0ebcbcc6.chunk.js.map