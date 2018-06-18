webpackJsonp([30,1],{168:function(n,e,t){"use strict";function r(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=t(0),u=t.n(l),p=t(8),s=(t.n(p),t(9)),f=t(7),c=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),d=function(n){var e=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.customOrganizations,o=e.router,i=r(e,["customOrganizations","router"]);return t?(o.replace("/not_found"),null):u.a.createElement(n,i)}}]),t}(u.a.PureComponent);e.displayName="forSingleOrganization("+n.displayName+")}";var l=function(n){return{customOrganizations:t.i(f.areThereCustomOrganizations)(n)}};return t.i(p.connect)(l)(t.i(s.withRouter)(e))};e.default=d},1683:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(8),o=(t.n(r),t(2132)),i=t(7),a=t(86),l=function(n,e){return{currentUser:t.i(i.getCurrentUser)(n),languages:t.i(i.getLanguages)(n),organization:e.params.organizationKey?t.i(i.getOrganizationByKey)(n,e.params.organizationKey):null}},u=function(n){return{onRequestFail:function(e){return t.i(a.a)(n)(e)}}};e.default=t.i(r.connect)(l,u)(o.a)},2132:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function i(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var a=t(0),l=t.n(a),u=t(639),p=t(324),s=t(2),f=t(347),c=t(2317),d=(t.n(c),function(){function n(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),y=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),g=l.a.createElement("i",{className:"spinner"}),h=function(n){function e(){var n,i,a,l;r(this,e);for(var u=arguments.length,s=Array(u),f=0;f<u;f++)s[f]=arguments[f];return i=a=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),a.state={loading:!0},a.updateProfiles=function(){return a.fetchProfiles().then(function(n){a.mounted&&a.setState({profiles:t.i(p.g)(n)})})},l=i,o(a,l)}return i(e,n),y(e,[{key:"componentWillMount",value:function(){var n=document.querySelector("html");n&&n.classList.add("dashboard-page")}},{key:"componentDidMount",value:function(){this.mounted=!0,this.loadData()}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var n=document.querySelector("html");n&&n.classList.remove("dashboard-page")}},{key:"fetchProfiles",value:function(){var n=this.props.organization,e=n?{organization:n.key}:{};return t.i(u.a)(e)}},{key:"loadData",value:function(){var n=this;this.setState({loading:!0}),Promise.all([t.i(u.q)(),this.fetchProfiles()]).then(function(e){if(n.mounted){var r=d(e,2),o=r[0],i=r[1];n.setState({exporters:o,profiles:t.i(p.g)(i),loading:!1})}})}},{key:"renderChild",value:function(){if(this.state.loading)return g;var n=this.props.organization,e=Object.values(this.props.languages),t=n?n.canAdmin:this.props.currentUser.permissions.global.includes("profileadmin");return l.a.cloneElement(this.props.children,{profiles:this.state.profiles,languages:e,exporters:this.state.exporters,updateProfiles:this.updateProfiles,onRequestFail:this.props.onRequestFail,organization:n?n.key:null,canAdmin:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"page page-limited"},l.a.createElement(f.a,{title:t.i(s.translate)("quality_profiles.page"),organization:this.props.organization}),this.renderChild())}}]),e}(l.a.PureComponent);e.a=h},2263:function(n,e,t){e=n.exports=t(36)(void 0),e.push([n.i,".quality-profile-box {\n  padding: 20px;\n  border: 1px solid #e6e6e6;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.quality-profiles-table {\n  margin-top: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.quality-profiles-table-name {}\n\n.quality-profiles-table-inheritance {\n  width: 280px;\n}\n\n.quality-profiles-table-projects,\n.quality-profiles-table-rules,\n.quality-profiles-table-date {\n  min-width: 90px;\n}\n\n.quality-profiles-list-header {\n  line-height: 24px;\n  padding: 5px 10px;\n  border-bottom: 1px solid #e6e6e6;\n}\n\n.quality-profile-grid {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.quality-profile-grid-left {\n  width: 340px;\n  flex-shrink: 0;\n}\n\n.quality-profile-grid-right {\n  flex-grow: 1;\n  margin-left: 20px;\n}\n\n.quality-profile-rules,\n.quality-profile-projects,\n.quality-profile-inheritance,\n.quality-profile-evolution {\n  border: 1px solid #e6e6e6;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.quality-profile-evolution {\n  padding: 20px;\n}\n\n.quality-profile-projects,\n.quality-profile-inheritance {\n  padding: 15px 20px 20px;\n}\n\n.quality-profile-rules {\n  min-height: 182px;\n}\n\n.quality-profile-rules > header {\n  padding: 15px 20px;\n}\n\n.quality-profile-rules-distribution {\n  margin-bottom: 20px;\n  padding: 5px 20px 0;\n}\n\n.quality-profile-rules-deprecated {\n  padding: 15px 20px;\n  background-color: #f2dede;\n}\n\n.quality-profile-rules-sonarway-missing {\n  padding: 15px 20px;\n  background-color: #fcf8e3;\n}\n\n.quality-profile-exporters {\n  margin-top: 20px;\n}\n\n.quality-profile-evolution {\n  display: flex;\n  margin-top: 20px;\n}\n\n.quality-profile-evolution > div {\n  width: 50%;\n  text-align: center;\n}\n\n.quality-profile-projects {\n  margin-top: 20px;\n}\n\n.quality-profile-inheritance {}\n\n.quality-profile-not-found {\n  padding-top: 100px;\n  text-align: center;\n}\n\n.quality-profiles-evolution {\n  padding-top: 55px;\n}\n\n.quality-profiles-evolution-deprecated {\n  margin-bottom: 20px;\n  border-color: #ebccd1;\n  background-color: #f2dede;\n}\n\n.quality-profiles-evolution-stagnant {\n  margin-bottom: 20px;\n  border-color: #faebcc;\n  background-color: #fcf8e3;\n}\n\n.quality-profiles-evolution-rules {\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n}\n\n.quality-profile-comparison-table {\n  table-layout: fixed;\n}\n",""])},2317:function(n,e,t){var r=t(2263);"string"==typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(37)(r,o);r.locals&&(n.exports=r.locals)}});
//# sourceMappingURL=30.af2986de.chunk.js.map