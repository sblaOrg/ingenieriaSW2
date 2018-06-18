webpackJsonp([41],{1693:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(8),n=(a.n(r),a(2188)),i=a(26);t.default=a.i(r.connect)(function(){return{}},{addGlobalErrorMessage:i.c,closeAllGlobalMessages:i.e})(n.a)},2188:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(0),l=a.n(s),o=a(22),c=a.n(o),d=a(2),u=a(330),p=a(38),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=l.a.createElement("i",{className:"spinner"}),v=l.a.createElement("em",{className:"mandatory"},"*"),h=l.a.createElement("em",{className:"mandatory"},"*"),g=function(e){function t(){var e,a,i,s;r(this,t);for(var l=arguments.length,o=Array(l),c=0;c<l;c++)o[c]=arguments[c];return a=i=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={loading:!0,organization:"",ip:"",validIpAddresses:[]},s=a,n(i,s)}return i(t,e),m(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchServerId()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"handleError",value:function(e){var t=this;this.setState({loading:!1}),a.i(p.a)(e).then(function(e){return t.props.addGlobalErrorMessage(e)})}},{key:"fetchServerId",value:function(){var e=this;this.setState({loading:!0}),a.i(u.d)().then(function(t){e.mounted&&e.setState(Object.assign({},t,{loading:!1}))}).catch(function(t){return e.handleError(t)})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),this.props.closeAllGlobalMessages(),a.i(u.e)(this.state.organization,this.state.ip).then(function(e){t.mounted&&t.setState({serverId:e.serverId,invalidServerId:!1,loading:!1})}).catch(function(e){return t.handleError(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"server-id-page",className:"page page-limited"},l.a.createElement(c.a,{title:a.i(d.translate)("property.category.server_id")}),l.a.createElement("header",{className:"page-header"},l.a.createElement("h1",{className:"page-title"},a.i(d.translate)("property.category.server_id")),this.state.loading&&f,l.a.createElement("div",{className:"page-description"},a.i(d.translate)("server_id_configuration.information"))),null!=this.state.serverId&&l.a.createElement("div",{className:this.state.invalidServerId?"panel panel-danger":"panel"},"Server ID:",l.a.createElement("input",{id:"server-id-result",className:"spacer-left input-large input-clear input-code",type:"text",readOnly:!0,value:this.state.serverId}),!!this.state.invalidServerId&&l.a.createElement("span",{className:"spacer-left"},a.i(d.translate)("server_id_configuration.bad_key"))),l.a.createElement("div",{className:"panel"},l.a.createElement("form",{id:"server-id-form",onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"modal-field"},l.a.createElement("label",{htmlFor:"server-id-organization"},a.i(d.translate)("server_id_configuration.organisation.title"),v),l.a.createElement("input",{id:"server-id-organization",type:"text",required:!0,value:this.state.organization,disabled:this.state.loading,onChange:function(t){return e.setState({organization:t.target.value})}}),l.a.createElement("div",{className:"modal-field-description"},a.i(d.translate)("server_id_configuration.organisation.desc"),". ",a.i(d.translate)("server_id_configuration.organisation.pattern"))),l.a.createElement("div",{className:"modal-field"},l.a.createElement("label",{htmlFor:"server-id-ip"},a.i(d.translate)("server_id_configuration.ip.title"),h),l.a.createElement("input",{id:"server-id-ip",type:"text",required:!0,value:this.state.ip,disabled:this.state.loading,onChange:function(t){return e.setState({ip:t.target.value})}}),l.a.createElement("div",{className:"modal-field-description"},a.i(d.translate)("server_id_configuration.ip.desc"),l.a.createElement("ul",{className:"list-styled"},this.state.validIpAddresses.map(function(e){return l.a.createElement("li",{key:e,className:"little-spacer-top"},e)})))),l.a.createElement("div",{className:"modal-field"},l.a.createElement("button",{disabled:this.state.loading},a.i(d.translate)("server_id_configuration.generate_button"))))))}}]),t}(l.a.PureComponent);g.propTypes={addGlobalErrorMessage:l.a.PropTypes.func.isRequired,closeAllGlobalMessages:l.a.PropTypes.func.isRequired},t.a=g}});
//# sourceMappingURL=41.90eb6755.chunk.js.map