webpackJsonp([0],{176:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n.n(i),o=n(22),u=n.n(o),c=n(8),p=(n.n(c),n(2210)),d=n(7),h=n(2),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),g=function(t){function e(){return a(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),f(e,[{key:"componentDidMount",value:function(){this.stop=n.i(p.a)(this.refs.container,this.props.updateCenterActive)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{title:n.i(h.translate)("update_center.page")}),r.a.createElement("div",{ref:"container"}))}}]),e}(r.a.PureComponent),m=function(t){return{updateCenterActive:(n.i(d.getSettingValue)(t,"sonar.updatecenter.activate")||{}).value}};e.default=n.i(c.connect)(m)(g)},1808:function(t,e,n){"use strict";var a=n(30),s=n(1849),l=n.n(s),i=n(1848),r=n.n(i),o=n(656),u=a.a.extend({template:l.a,restartingTemplate:r.a,initialize:function(){this.restarting=!1},getTemplate:function(){return this.restarting?this.restartingTemplate:this.template},onFormSubmit:function(){a.a.prototype.onFormSubmit.apply(this,arguments),this.restarting=!0,this.render(),n.i(o.a)().then(function(){document.location.reload()})}});e.a=u},1848:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<form id="restart-server-form">\n  <div class="modal-head">\n    <h2>Restart Server</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <p class="spacer-top spacer-bottom text-center">\n      Server is restarting. This page will be automatically refreshed.\n    </p>\n    <p class="big-spacer-top spacer-bottom text-center">\n      <i class="spinner"></i>\n    </p>\n  </div>\n</form>\n'},useData:!0})},1849:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<form id="restart-server-form">\n  <div class="modal-head">\n    <h2>Restart Server</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <p class="spacer-top spacer-bottom">\n      Are you sure you want to restart the server?\n    </p>\n  </div>\n  <div class="modal-foot">\n    <button id="restart-server-submit">Restart</button>\n    <a href="#" class="js-modal-close" id="restart-server-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},1912:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,s,l){var i,r=this.escapeExpression,o=this.lambda;return'    <span class="js-plugin-changelog-version badge badge-warning spacer-right" data-toggle="tooltip"\n          title="'+r(a(n(1)).call(t,"update_center.status",null!=t?t.status:t,{name:"t",hash:{},data:l}))+'">'+r(o(null!=(i=null!=t?t.release:t)?i.version:i,t))+"</span>\n"},3:function(t,e,n,a){var s,l=this.lambda;return'    <span class="js-plugin-changelog-version badge badge-success spacer-right">'+(0,this.escapeExpression)(l(null!=(s=null!=t?t.release:t)?s.version:s,t))+"</span>\n"},5:function(t,e,n,a){var s,l=this.lambda;return'    <a class="js-plugin-changelog-link" href="'+(0,this.escapeExpression)(l(null!=(s=null!=t?t.release:t)?s.changeLogUrl:s,t))+'" target="_blank">Release Notes</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,s,l){var i,r=this.escapeExpression,o=this.lambda,u='<div class="little-spacer-bottom">\n';return i=a(n(59)).call(t,null!=t?t.status:t,"COMPATIBLE",{name:"notEq",hash:{},fn:this.program(1,l),inverse:this.program(3,l),data:l}),null!=i&&(u+=i),u+='  <span class="js-plugin-changelog-date note spacer-right">'+r(a(n(328)).call(t,null!=(i=null!=t?t.release:t)?i.date:i,{name:"d",hash:{},data:l}))+"</span>\n",i=e.if.call(t,null!=(i=null!=t?t.release:t)?i.changeLogUrl:i,{name:"if",hash:{},fn:this.program(5,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+='</div>\n<div class="js-plugin-changelog-description">',i=o(null!=(i=null!=t?t.release:t)?i.description:i,t),null!=i&&(u+=i),u+"</div>\n"},useData:!0})},2207:function(t,e,n){"use strict";var a=n(13),s=n.n(a);e.a=s.a.Controller.extend({initialize:function(t){this.collection=t.collection,this.state=t.state},showInstalled:function(){this.state.set({section:"installed"}),this.collection.fetchInstalled()},showUpdates:function(){this.state.set({section:"updates"}),this.collection.fetchUpdates()},showAvailable:function(){this.state.set({section:"available"}),this.collection.fetchAvailable()},showSystemUpgrades:function(){this.state.set({section:"system"}),this.collection.fetchSystemUpgrades()}})},2208:function(t,e,n){"use strict";var a=n(13),s=n.n(a),l=n(2284),i=n.n(l);e.a=s.a.ItemView.extend({template:i.a,collectionEvents:{all:"render"},serializeData:function(){return Object.assign({},s.a.ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.where({_hidden:!1}).length})}})},2209:function(t,e,n){"use strict";var a=n(13),s=n.n(a),l=n(2285),i=n.n(l),r=n(1808);e.a=s.a.ItemView.extend({template:i.a,collectionEvents:{all:"render"},events:{"click .js-restart":"restart","click .js-cancel-all":"cancelAll"},restart:function(){(new r.a).render()},cancelAll:function(){this.collection.cancelAll()},serializeData:function(){return Object.assign({},s.a.ItemView.prototype.serializeData.apply(this,arguments),{installing:this.collection._installedCount,updating:this.collection._updatedCount,uninstalling:this.collection._uninstalledCount})}})},2210:function(t,e,n){"use strict";var a=n(17),s=n.n(a),l=n(13),i=n.n(l),r=n(2211),o=n(2209),u=n(2218),c=n(2213),p=n(2208),d=n(2207),h=n(2217),f=n(2216),g=new i.a.Application,m=function(t){var e=t.el,n=t.updateCenterActive;this.state=new s.a.Model({updateCenterActive:n}),this.layout=new r.a({el:e}),this.layout.render(),this.plugins=new f.a,this.controller=new d.a({collection:this.plugins,state:this.state}),this.router=new h.a({controller:this.controller}),this.headerView=new o.a({collection:this.plugins}),this.layout.headerRegion.show(this.headerView),this.searchView=new u.a({collection:this.plugins,router:this.router,state:this.state}),this.layout.searchRegion.show(this.searchView),this.searchView.focusSearch(),this.listView=new c.a({collection:this.plugins}),this.layout.listRegion.show(this.listView),this.footerView=new p.a({collection:this.plugins}),this.layout.footerRegion.show(this.footerView),s.a.history.start({pushState:!0,root:window.baseUrl+"/updatecenter"})};g.on("start",function(t){return m.call(g,t)}),e.a=function(t,e){return g.start({el:t,updateCenterActive:e}),function(){s.a.history.stop(),g.layout.destroy()}}},2211:function(t,e,n){"use strict";var a=n(13),s=n.n(a),l=n(2286),i=n.n(l);e.a=s.a.LayoutView.extend({template:i.a,regions:{headerRegion:"#update-center-header",searchRegion:"#update-center-search",listRegion:"#update-center-plugins",footerRegion:"#update-center-footer"}})},2212:function(t,e,n){"use strict";var a=n(11),s=n.n(a),l=n(17),i=n.n(l),r=n(13),o=n.n(r),u=n(2214),c=n(2288),p=n.n(c),d=n(2290),h=n.n(d);e.a=o.a.ItemView.extend({tagName:"li",className:"panel panel-vertical",template:p.a,systemTemplate:h.a,modelEvents:{"change:_hidden":"toggleDisplay",change:"onModelChange",request:"onRequest"},events:{"click .js-changelog":"onChangelogClick","click .js-install":"install","click .js-update":"update","click .js-uninstall":"uninstall","change .js-terms":"onTermsChange","click .js-plugin-category":"onCategoryClick"},getTemplate:function(){return this.model.get("_system")?this.systemTemplate:this.template},onRender:function(){this.$el.attr("data-id",this.model.id),this.model.get("_system")&&this.$el.attr("data-system",""),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onModelChange:function(){this.model.hasChanged("_hidden")||this.render()},onChangelogClick:function(t){t.preventDefault(),t.stopPropagation(),s()("body").click();var e=s()(t.currentTarget).data("idx"),n=this.model.has("release")?this.model.toJSON():this.model.get("updates")[e];new u.a({triggerEl:s()(t.currentTarget),model:new i.a.Model(n)}).render()},onRequest:function(){this.$(".js-actions").addClass("hidden"),this.$(".js-spinner").removeClass("hidden")},toggleDisplay:function(){this.$el.toggleClass("hidden",this.model.get("_hidden"))},install:function(){this.model.install()},update:function(){this.model.update()},uninstall:function(){this.model.uninstall()},onTermsChange:function(){var t=this.$(".js-terms").is(":checked");this.$(".js-install").prop("disabled",!t)},onCategoryClick:function(t){t.preventDefault(),this.model.trigger("filter",this.model)}})},2213:function(t,e,n){"use strict";var a=n(13),s=n.n(a),l=n(2212);e.a=s.a.CollectionView.extend({tagName:"ul",childView:l.a})},2214:function(t,e,n){"use strict";var a=n(97),s=n(2287),l=n.n(s);e.a=a.a.extend({template:l.a,onRender:function(){a.a.prototype.onRender.apply(this,arguments),this.$(".bubble-popup-container").isolatedScroll(),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){a.a.prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},serializeData:function(){return Object.assign({},a.a.prototype.serializeData.apply(this,arguments),{status:this.model.get("status")||"COMPATIBLE"})}})},2215:function(t,e,n){"use strict";var a=n(17),s=n.n(a);e.a=s.a.Model.extend({idAttribute:"key",defaults:{_hidden:!1,_system:!1},_matchAttribute:function(t,e){return(this.get(t)||"").toLowerCase().includes(e.toLowerCase())},match:function(t){return this._matchAttribute("name",t)||this._matchAttribute("category",t)||this._matchAttribute("description",t)},_action:function(t){var e=this,n=Object.assign({},t,{type:"POST",data:{key:this.id},success:function(){t.success(e)},error:function(t){e.set({_status:"failed",_errors:t.responseJSON.errors})}}),a=s.a.ajax(n);return this.trigger("request",this,a),a},install:function(){return this._action({url:window.baseUrl+"/api/plugins/install",success:function(t){t.set({_status:"installing"})}})},update:function(){return this._action({url:window.baseUrl+"/api/plugins/update",success:function(t){t.set({_status:"updating"})}})},uninstall:function(){return this._action({url:window.baseUrl+"/api/plugins/uninstall",success:function(t){t.set({_status:"uninstalling"})}})}})},2216:function(t,e,n){"use strict";var a=n(11),s=n.n(a),l=n(4),i=(n.n(l),n(17)),r=n.n(i),o=n(2215),u=r.a.Collection.extend({model:o.a,comparator:function(t){return t.get("name")||""},initialize:function(){this._installedCount=0,this._updatedCount=0,this._uninstalledCount=0,this.listenTo(this,"change:_status",this.onStatusChange)},parse:function(t){var e=this;return t.plugins.map(function(t){var n=[e._getLastWithStatus(t.updates,"COMPATIBLE"),e._getLastWithStatus(t.updates,"REQUIRES_SYSTEM_UPGRADE"),e._getLastWithStatus(t.updates,"DEPS_REQUIRE_SYSTEM_UPGRADE")].filter(function(t){return t});return n=n.map(function(n){return e._extendChangelog(t.updates,n)}),Object.assign({},t,{updates:n})})},_getLastWithStatus:function(t,e){var a=n.i(l.findLastIndex)(t,function(t){return t.status===e});return-1!==a?t[a]:null},_extendChangelog:function(t,e){var n=t.indexOf(e),a=n>0?t.slice(0,n):[];return Object.assign({},e,{previousUpdates:a})},_fetchInstalled:function(){if(this._installed)return s.a.Deferred().resolve().promise();var t=this,e={type:"GET",url:window.baseUrl+"/api/plugins/installed?f=category",success:function(e){t._installed=t.parse(e)}};return r.a.ajax(e)},_fetchUpdates:function(){if(this._updates)return s.a.Deferred().resolve().promise();var t=this,e={type:"GET",url:window.baseUrl+"/api/plugins/updates",success:function(e){t._updates=t.parse(e)}};return r.a.ajax(e)},_fetchAvailable:function(){if(this._available)return s.a.Deferred().resolve().promise();var t=this,e={type:"GET",url:window.baseUrl+"/api/plugins/available",success:function(e){t._available=t.parse(e)}};return r.a.ajax(e)},_fetchPending:function(){var t=this,e={type:"GET",url:window.baseUrl+"/api/plugins/pending",success:function(e){var n=e.installing.map(function(t){return{key:t.key,_status:"installing"}}),a=e.updating.map(function(t){return{key:t.key,_status:"updating"}}),s=e.removing.map(function(t){return{key:t.key,_status:"uninstalling"}});t._installedCount=n.length,t._updatedCount=a.length,t._uninstalledCount=s.length,t._pending=new u([].concat(n,a,s)).models}};return r.a.ajax(e)},_fetchSystemUpgrades:function(){if(this._systemUpdates)return s.a.Deferred().resolve().promise();var t=this,e={type:"GET",url:window.baseUrl+"/api/system/upgrades",success:function(e){t._systemUpdates=e.upgrades.map(function(t){return Object.assign({},t,{_system:!0})})}};return r.a.ajax(e)},fetchInstalled:function(){var t=this;return s.a.when(this._fetchInstalled(),this._fetchUpdates(),this._fetchPending()).done(function(){var e=new u;e.set(t._installed),e.set(t._updates,{remove:!1}),e.set(t._pending,{add:!1,remove:!1}),t.reset(e.models)})},fetchUpdates:function(){var t=this;return s.a.when(this._fetchInstalled(),this._fetchUpdates(),this._fetchPending()).done(function(){var e=new u;e.set(t._installed),e.set(t._updates,{remove:!0}),e.set(t._pending,{add:!1,remove:!1}),t.reset(e.models)})},fetchAvailable:function(){var t=this;return s.a.when(this._fetchAvailable(),this._fetchPending()).done(function(){var e=new u;e.set(t._available),e.set(t._pending,{add:!1,remove:!1}),t.reset(e.models)})},fetchSystemUpgrades:function(){var t=this;return s.a.when(this._fetchSystemUpgrades()).done(function(){t.reset(t._systemUpdates)})},search:function(t){this.filter(function(e){e.set({_hidden:!e.match(t)})})},cancelAll:function(){var t=this,e={type:"POST",url:window.baseUrl+"/api/plugins/cancel_all",success:function(){t._installedCount=0,t._updatedCount=0,t._uninstalledCount=0,t.forEach(function(t){t.unset("_status")}),t.trigger("change")}};return r.a.ajax(e)},onStatusChange:function(t,e){"installing"===e&&this._installedCount++,"updating"===e&&this._updatedCount++,"uninstalling"===e&&this._uninstalledCount++,this.trigger("change")}});e.a=u},2217:function(t,e,n){"use strict";var a=n(17),s=n.n(a);e.a=s.a.Router.extend({routes:{"":"index",installed:"showInstalled",updates:"showUpdates",available:"showAvailable",system:"showSystemUpgrades"},initialize:function(t){this.controller=t.controller},index:function(){this.navigate("installed",{trigger:!0,replace:!0})},showInstalled:function(){this.controller.showInstalled()},showUpdates:function(){this.controller.showUpdates()},showAvailable:function(){this.controller.showAvailable()},showSystemUpgrades:function(){this.controller.showSystemUpgrades()}})},2218:function(t,e,n){"use strict";var a=n(4),s=(n.n(a),n(13)),l=n.n(s),i=n(2289),r=n.n(i);e.a=l.a.ItemView.extend({template:r.a,events:{'change [name="update-center-filter"]':"onFilterChange","submit #update-center-search-form":"onFormSubmit","search #update-center-search-query":"onKeyUp","keyup #update-center-search-query":"onKeyUp","change #update-center-search-query":"onKeyUp"},collectionEvents:{filter:"onFilter"},initialize:function(){this._bufferedValue=null,this.search=n.i(a.debounce)(this.search,50),this.listenTo(this.options.state,"change",this.render)},onRender:function(){this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFilterChange:function(){var t=this.$('[name="update-center-filter"]:checked').val();this.filter(t)},filter:function(t){this.options.router.navigate(t,{trigger:!0})},onFormSubmit:function(t){t.preventDefault(),this.debouncedOnKeyUp()},onKeyUp:function(){var t=this.getQuery();t!==this._bufferedValue&&(this._bufferedValue=this.getQuery(),this.search(t))},getQuery:function(){return this.$("#update-center-search-query").val()},search:function(t){this.collection.search(t)},focusSearch:function(){var t=this;setTimeout(function(){t.$("#update-center-search-query").focus()},0)},onFilter:function(t){var e=t.get("category");this.$("#update-center-search-query").val(e),this.search(e)},serializeData:function(){return Object.assign({},l.a.ItemView.prototype.serializeData.apply(this,arguments),{state:this.options.state.toJSON()})}})},2283:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,n,a){var s,l='\n    <div class="button-group">\n';return s=e.each.call(t,null!=t?t.updates:t,{name:"each",hash:{},fn:this.program(2,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l+'      <button class="js-uninstall button-red">Uninstall</button>\n    </div>\n\n'},2:function(t,e,s,l){var i,r="";return i=a(n(12)).call(t,null!=t?t.status:t,"COMPATIBLE",{name:"eq",hash:{},fn:this.program(3,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r},3:function(t,e,n,a){var s,l=this.lambda,i=this.escapeExpression;return'          <button class="js-update" data-verion="'+i(l(null!=(s=null!=t?t.release:t)?s.version:s,t))+'">Update to '+i(l(null!=(s=null!=t?t.release:t)?s.version:s,t))+"</button>\n"},5:function(t,e,n,a){var s,l="\n";return s=e.if.call(t,null!=t?t.termsAndConditionsUrl:t,{name:"if",hash:{},fn:this.program(6,a),inverse:this.program(8,a),data:a}),null!=s&&(l+=s),l+"\n"},6:function(t,e,n,a){var s=this.lambda,l=this.escapeExpression;return'      <p class="little-spacer-bottom">\n        <input class="js-terms" type="checkbox" name="plugin-terms" id="plugin-terms-'+l(s(null!=t?t.key:t,t))+'">\n        <label for="plugin-terms-'+l(s(null!=t?t.key:t,t))+'">\n          I accept the\n          <a class="js-plugin-terms nowrap" href="'+l(s(null!=t?t.termsAndConditionsUrl:t,t))+'" target="_blank">Terms and Conditions</a>\n        </label>\n      </p>\n      <button class="js-install" disabled>Install</button>\n'},8:function(t,e,n,a){return'      <button class="js-install">Install</button>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,l='<div class="js-actions">\n';return s=e.if.call(t,null!=t?t.version:t,{name:"if",hash:{},fn:this.program(1,a),inverse:this.program(5,a),data:a}),null!=s&&(l+=s),l+"</div>\n"},useData:!0})},2284:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,l=e.helperMissing;return'<footer class="spacer-top note text-center">\n  '+(0,this.escapeExpression)((s=null!=(s=e.total||(null!=t?t.total:t))?s:l,"function"==typeof s?s.call(t,{name:"total",hash:{},data:a}):s))+" shown\n</footer>\n"},useData:!0})},2285:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,n,a){var s,l='  <div class="js-pending panel panel-warning big-spacer-bottom">\n    <div class="display-inline-block">\n      <p>SonarQube needs to be restarted in order to</p>\n      <ul class="list-styled spacer-top">\n';return s=e.if.call(t,null!=t?t.installing:t,{name:"if",hash:{},fn:this.program(2,a),inverse:this.noop,data:a}),null!=s&&(l+=s),s=e.if.call(t,null!=t?t.updating:t,{name:"if",hash:{},fn:this.program(4,a),inverse:this.noop,data:a}),null!=s&&(l+=s),s=e.if.call(t,null!=t?t.uninstalling:t,{name:"if",hash:{},fn:this.program(6,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l+'      </ul>\n    </div>\n    <div class="pull-right">\n      <button class="js-restart">Restart</button>\n      <button class="js-cancel-all button-red">Revert</button>\n    </div>\n  </div>\n'},2:function(t,e,n,a){var s=this.lambda;return'          <li>\n            install\n            <strong class="big text-success little-spacer-left little-spacer-right">'+(0,this.escapeExpression)(s(null!=t?t.installing:t,t))+"</strong> plugins\n          </li>\n"},4:function(t,e,n,a){var s=this.lambda;return'          <li>\n            update\n            <strong class="big text-success little-spacer-left little-spacer-right">'+(0,this.escapeExpression)(s(null!=t?t.updating:t,t))+"</strong> plugins\n          </li>\n"},6:function(t,e,n,a){var s=this.lambda;return'          <li>\n            uninstall\n            <strong class="big text-danger little-spacer-left little-spacer-right">'+(0,this.escapeExpression)(s(null!=t?t.uninstalling:t,t))+"</strong> plugins\n          </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,s,l){var i,r=this.escapeExpression,o='<header class="page-header">\n  <h1 class="page-title">'+r(a(n(1)).call(t,"update_center.page",{name:"t",hash:{},data:l}))+'</h1>\n  <p class="page-description">'+r(a(n(1)).call(t,"update_center.page.description",{name:"t",hash:{},data:l}))+"</p>\n</header>\n\n";return i=a(n(223)).call(t,null!=t?t.installing:t,null!=t?t.updating:t,null!=t?t.uninstalling:t,{name:"any",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(o+=i),o},useData:!0})},2286:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){return'<div class="page">\n  <div id="update-center-header"></div>\n  <div id="update-center-search"></div>\n  <div id="update-center-plugins"></div>\n  <div id="update-center-footer"></div>\n</div>\n'},useData:!0})},2287:function(t,e,n){var a=n(5);t.exports=(a.default||a).template({1:function(t,e,a,s){var l,i='      <li class="big-spacer-bottom">\n';return l=this.invokePartial(n(1912),"        ","_update-center-plugin-changelog-entry",t,void 0,e,a,s),null!=l&&(i+=l),i+"      </li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,a,s){var l,i='<div class="bubble-popup-container">\n  <div class="bubble-popup-title">Changelog</div>\n\n  <ul class="js-plugin-changelog-list">\n';return l=e.each.call(t,null!=t?t.previousUpdates:t,{name:"each",hash:{},fn:this.program(1,s),inverse:this.noop,data:s}),null!=l&&(i+=l),i+='    <li class="spacer-bottom">\n',l=this.invokePartial(n(1912),"      ","_update-center-plugin-changelog-entry",t,void 0,e,a,s),null!=l&&(i+=l),i+'    </li>\n  </ul>\n</div>\n\n<div class="bubble-popup-arrow"></div>\n'},usePartial:!0,useData:!0})},2288:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,n,a){var s=this.lambda;return'          <a class="js-plugin-category badge spacer-left" href="#">'+(0,this.escapeExpression)(s(null!=t?t.category:t,t))+"</a>\n"},3:function(t,e,n,a){var s=this.lambda;return'          <li class="little-spacer-bottom">\n            <strong class="js-plugin-installed-version">'+(0,this.escapeExpression)(s(null!=t?t.version:t,t))+"</strong>&nbsp;installed\n          </li>\n"},5:function(t,e,n,a){var s,l='          <li class="little-spacer-bottom spacer-top">\n            <strong>Updates:</strong>\n          </li>\n';return s=e.each.call(t,null!=t?t.updates:t,{name:"each",hash:{},fn:this.program(6,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l},6:function(t,e,s,l){var i,r=this.lambda,o=this.escapeExpression,u='            <li class="little-spacer-bottom">\n              <div class="pull-left spacer-right">\n';return i=a(n(59)).call(t,null!=t?t.status:t,"COMPATIBLE",{name:"notEq",hash:{},fn:this.program(7,l),inverse:this.program(9,l),data:l}),null!=i&&(u+=i),u+='              </div>\n              <div class="overflow-hidden">\n                ',i=r(null!=(i=null!=t?t.release:t)?i.description:i,t),null!=i&&(u+=i),u+'\n                <button class="button-link js-changelog issue-rule icon-ellipsis-h" data-idx="'+o(r(l&&l.index,t))+'"></button>\n              </div>\n            </li>\n'},7:function(t,e,s,l){var i,r=this.escapeExpression,o=this.lambda;return'                  <span class="js-update-version badge badge-warning" data-toggle="tooltip"\n                        title="'+r(a(n(1)).call(t,"update_center.status",null!=t?t.status:t,{name:"t",hash:{},data:l}))+'">'+r(o(null!=(i=null!=t?t.release:t)?i.version:i,t))+"</span>\n"},9:function(t,e,n,a){var s,l=this.lambda;return'                  <span class="js-update-version badge badge-success">'+(0,this.escapeExpression)(l(null!=(s=null!=t?t.release:t)?s.version:s,t))+"</span>\n"},11:function(t,e,s,l){var i,r=this.lambda,o=this.escapeExpression,u='          <li class="little-spacer-bottom">\n            <div class="pull-left spacer-right">\n              <span class="badge badge-success">'+o(r(null!=(i=null!=t?t.release:t)?i.version:i,t))+'</span>\n            </div>\n            <div class="overflow-hidden">\n              ';return i=r(null!=(i=null!=t?t.release:t)?i.description:i,t),null!=i&&(u+=i),u+='\n              <button class="button-link js-changelog issue-rule icon-ellipsis-h" data-idx="'+o(r(l&&l.index,t))+'"></button>\n',i=a(n(126)).call(t,null!=(i=null!=t?t.update:t)?i.requires:i,{name:"notEmpty",hash:{},fn:this.program(12,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+"            </div>\n          </li>\n"},12:function(t,e,n,a){var s,l='                <p class="little-spacer-top">\n                  <strong>Installing this plugin will also install</strong>: ';return s=e.each.call(t,null!=(s=null!=t?t.update:t)?s.requires:s,{name:"each",hash:{},fn:this.program(13,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l+"\n                </p>\n"},13:function(t,e,n,a){var s=this.lambda;return" "+(0,this.escapeExpression)(s(null!=t?t.name:t,t))},15:function(t,e,n,a){var s,l='          <li class="little-spacer-bottom">\n            <ul class="list-inline">\n';return s=e.if.call(t,null!=t?t.homepageUrl:t,{name:"if",hash:{},fn:this.program(16,a),inverse:this.noop,data:a}),null!=s&&(l+=s),s=e.if.call(t,null!=t?t.issueTrackerUrl:t,{name:"if",hash:{},fn:this.program(18,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l+"            </ul>\n          </li>\n"},16:function(t,e,n,a){var s=this.lambda;return'                <li><a class="js-plugin-homepage" href="'+(0,this.escapeExpression)(s(null!=t?t.homepageUrl:t,t))+'" target="_blank">Homepage</a></li>\n'},18:function(t,e,n,a){var s=this.lambda;return'                <li><a class="js-plugin-issues" href="'+(0,this.escapeExpression)(s(null!=t?t.issueTrackerUrl:t,t))+'" target="_blank">Issue Tracker</a></li>\n'},20:function(t,e,n,a){var s=this.lambda,l=this.escapeExpression;return'          <li class="little-spacer-bottom text-limited" title="'+l(s(null!=t?t.license:t,t))+'">\n            Licensed under\n            <span class="js-plugin-license">'+l(s(null!=t?t.license:t,t))+"</span>\n          </li>\n"},22:function(t,e,n,a){var s,l='          <li class="little-spacer-bottom">\n            Developed by\n';return s=e.if.call(t,null!=t?t.organizationUrl:t,{name:"if",hash:{},fn:this.program(23,a),inverse:this.program(25,a),data:a}),null!=s&&(l+=s),l+"          </li>\n"},23:function(t,e,n,a){var s=this.lambda,l=this.escapeExpression;return'              <a class="js-plugin-organization" href="'+l(s(null!=t?t.organizationUrl:t,t))+'" target="_blank">'+l(s(null!=t?t.organizationName:t,t))+"</a>\n"},25:function(t,e,n,a){var s=this.lambda;return'              <span class="js-plugin-organization">'+(0,this.escapeExpression)(s(null!=t?t.organizationName:t,t))+"</span>\n"},27:function(t,e,n,a){return'        <p class="text-success">Install Pending</p>\n'},29:function(t,e,n,a){return'        <p class="text-success">Update Pending</p>\n'},31:function(t,e,n,a){return'        <p class="text-danger">Uninstall Pending</p>\n'},33:function(t,e,n,a){var s,l='        <span class="text-danger">\n';return s=e.each.call(t,null!=t?t._errors:t,{name:"each",hash:{},fn:this.program(34,a),inverse:this.noop,data:a}),null!=s&&(l+=s),l+"        </span>\n"},34:function(t,e,n,a){var s=this.lambda;return"            "+(0,this.escapeExpression)(s(null!=t?t.msg:t,t))+"\n"},36:function(t,e,a,s){var l,i='        <i class="js-spinner spinner hidden"></i>\n';return l=this.invokePartial(n(2283),"        ","_update-center-plugin-actions",t,void 0,e,a,s),null!=l&&(i+=l),i},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,s,l){var i,r=this.lambda,o=this.escapeExpression,u='<table class="width-100">\n  <tr>\n    <td class="text-top width-20 big-spacer-right">\n      <div>\n        <strong class="js-plugin-name">'+o(r(null!=t?t.name:t,t))+"</strong>\n";return i=e.if.call(t,null!=t?t.category:t,{name:"if",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+='      </div>\n      <div class="js-plugin-description little-spacer-top">',i=r(null!=t?t.description:t,t),null!=i&&(u+=i),u+='</div>\n    </td>\n\n    <td class="text-top big-spacer-right">\n      <ul>\n',i=e.if.call(t,null!=t?t.version:t,{name:"if",hash:{},fn:this.program(3,l),inverse:this.noop,data:l}),null!=i&&(u+=i),i=a(n(126)).call(t,null!=t?t.updates:t,{name:"notEmpty",hash:{},fn:this.program(5,l),inverse:this.noop,data:l}),null!=i&&(u+=i),i=e.if.call(t,null!=t?t.release:t,{name:"if",hash:{},fn:this.program(11,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+='      </ul>\n    </td>\n\n    <td class="text-top width-20 big-spacer-right">\n      <ul>\n',i=a(n(223)).call(t,null!=t?t.homepageUrl:t,null!=t?t.issueTrackerUrl:t,null!=t?t.termsAndConditionsUrl:t,{name:"any",hash:{},fn:this.program(15,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=e.if.call(t,null!=t?t.license:t,{name:"if",hash:{},fn:this.program(20,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=e.if.call(t,null!=t?t.organizationName:t,{name:"if",hash:{},fn:this.program(22,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+='      </ul>\n    </td>\n\n    <td class="text-top text-right width-20">\n',i=a(n(12)).call(t,null!=t?t._status:t,"installing",{name:"eq",hash:{},fn:this.program(27,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=a(n(12)).call(t,null!=t?t._status:t,"updating",{name:"eq",hash:{},fn:this.program(29,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=a(n(12)).call(t,null!=t?t._status:t,"uninstalling",{name:"eq",hash:{},fn:this.program(31,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=a(n(12)).call(t,null!=t?t._status:t,"failed",{name:"eq",hash:{},fn:this.program(33,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+="\n",i=e.unless.call(t,null!=t?t._status:t,{name:"unless",hash:{},fn:this.program(36,l),inverse:this.noop,data:l}),null!=i&&(u+=i),u+"    </td>\n  </tr>\n</table>\n"},usePartial:!0,useData:!0})},2289:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,n,a){return"checked"},3:function(t,e,n,a){return"disabled"},5:function(t,e,n,a){return'data-toggle="tooltip" title="Update Center is not activated."'},7:function(t,e,n,a){return'    <form id="update-center-search-form" class="search-box display-inline-block text-top">\n      <button id="update-center-search-submit" class="search-box-submit button-clean"><i class="icon-search"></i>\n      </button>\n      <input id="update-center-search-query" class="search-box-input" type="search" name="q" placeholder="Search"\n             maxlength="100" autocomplete="off">\n    </form>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,s,l){var i,r='<div class="panel panel-vertical bordered-bottom spacer-bottom">\n  <div class="display-inline-block text-top nowrap big-spacer-right">\n    <ul class="radio-toggle">\n      <li>\n        <input type="radio" name="update-center-filter" value="installed" id="update-center-filter-installed"\n               ';return i=a(n(12)).call(t,null!=(i=null!=t?t.state:t)?i.section:i,"installed",{name:"eq",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n        <label for="update-center-filter-installed">Installed</label>\n      </li>\n      <li>\n        <input type="radio" name="update-center-filter" value="updates" id="update-center-filter-updates"\n          ',i=a(n(12)).call(t,null!=(i=null!=t?t.state:t)?i.section:i,"updates",{name:"eq",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+=" ",i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(3,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n        <label for="update-center-filter-updates"\n          ',i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(5,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n          Updates Only\n        </label>\n      </li>\n      <li>\n        <input type="radio" name="update-center-filter" value="available" id="update-center-filter-available"\n          ',i=a(n(12)).call(t,null!=(i=null!=t?t.state:t)?i.section:i,"available",{name:"eq",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+=" ",i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(3,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n        <label for="update-center-filter-available"\n          ',i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(5,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n          Available\n        </label>\n      </li>\n    </ul>\n\n    <ul class="radio-toggle">\n      <li>\n        <input type="radio" name="update-center-filter" value="system" id="update-center-filter-system"\n          ',i=a(n(12)).call(t,null!=(i=null!=t?t.state:t)?i.section:i,"system",{name:"eq",hash:{},fn:this.program(1,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+=" ",i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(3,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+='>\n        <label for="update-center-filter-system"\n          ',i=e.unless.call(t,null!=(i=null!=t?t.state:t)?i.updateCenterActive:i,{name:"unless",hash:{},fn:this.program(5,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+=">\n          System Upgrades\n        </label>\n      </li>\n    </ul>\n  </div>\n\n",i=a(n(59)).call(t,null!=(i=null!=t?t.state:t)?i.section:i,"system",{name:"notEq",hash:{},fn:this.program(7,l),inverse:this.noop,data:l}),null!=i&&(r+=i),r+"</div>\n"},useData:!0})},2290:function(t,e,n){function a(t){return t&&(t.__esModule?t.default:t)}var s=n(5);t.exports=(s.default||s).template({1:function(t,e,n,a){var s=this.lambda;return'          <li class="little-spacer-bottom">\n            <a class="js-plugin-release-notes" href="'+(0,this.escapeExpression)(s(null!=t?t.changeLogUrl:t,t))+'" target="_blank">Release Notes</a>\n          </li>\n'},3:function(t,e,s,l){return'          <li class="little-spacer-bottom">Released: <span class="js-plugin-date">'+(0,this.escapeExpression)(a(n(328)).call(t,null!=t?t.releaseDate:t,{name:"d",hash:{},data:l}))+"</span></li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,l=this.lambda,i=this.escapeExpression,r='<table class="width-100">\n  <tr>\n    <td class="text-top thin big-spacer-right">\n      <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">\n        <g id="Layer1">\n            <path d="M52.0841,58.4777L48.8003,58.4777C48.8003,32.0551 26.9663,10.4603 0,10.4603L0,7.06778C28.7278,7.06778 52.1493,30.2719 52.1493,58.4777L52.084,58.4777L52.0841,58.4777Z" style="fill:rgb(75,159,213);fill-rule:nonzero;"/>\n            <path d="M54.3675,40.7974C50.4096,24.2044 36.97,10.2646 20.0072,5.45851L20.7684,2.7619C38.6228,7.95943 52.8453,22.5952 56.9554,40.2755L54.3675,40.7974L54.3675,40.7974L54.3675,40.7974Z" style="fill:rgb(75,159,213);fill-rule:nonzero;"/>\n            <path d="M58.0863,25.27C53.9978,16.332 47.1475,8.65532 38.5792,3.47949L39.6666,1.52228C48.561,6.87202 55.8898,15.0924 60,24.3784L58.0863,25.27L58.0863,25.27L58.0863,25.27L58.0863,25.27Z" style="fill:rgb(75,159,213);fill-rule:nonzero;"/>\n        </g>\n      </svg>\n    </td>\n\n    <td class="text-top width-20 big-spacer-right">\n      <div>\n        <strong class="js-plugin-name">SonarQube '+i(l(null!=t?t.version:t,t))+'</strong>\n        <span class="js-plugin-category badge badge-success spacer-left">System Upgrade</span>\n      </div>\n      <div class="js-plugin-description little-spacer-top">';return s=l(null!=t?t.description:t,t),null!=s&&(r+=s),r+='</div>\n\n      <ul class="big-spacer-top">\n',s=e.if.call(t,null!=t?t.changeLogUrl:t,{name:"if",hash:{},fn:this.program(1,a),inverse:this.noop,data:a}),null!=s&&(r+=s),s=e.if.call(t,null!=t?t.releaseDate:t,{name:"if",hash:{},fn:this.program(3,a),inverse:this.noop,data:a}),null!=s&&(r+=s),r+'      </ul>\n    </td>\n\n    <td class="text-top width-60">\n      <div class="pull-left spacer-right">\n        <strong>How to upgrade</strong>\n      </div>\n      <ol class="js-plugin-update-steps list-styled overflow-hidden bordered-left">\n        <li class="little-spacer-bottom">\n          Download the new SonarQube version and start it on an empty DB (the bundled H2 DB for instance).\n        </li>\n        <li class="little-spacer-bottom">\n          Install (from the update center) the plugins you want.\n        </li>\n        <li class="little-spacer-bottom">\n          Install your custom plugins (if any).\n        </li>\n        <li class="little-spacer-bottom">\n          Update the <code>conf/sonar.properties</code> file to use the relevant configurations from your old instance,\n          including the connection information for your production DB.\n        </li>\n        <li class="little-spacer-bottom">\n          Stop your old SonarQube server.\n        </li>\n        <li>\n          Restart the new SonarQube instance: you\'re done!\n        </li>\n      </ol>\n    </td>\n  </tr>\n</table>\n'},useData:!0})}});
//# sourceMappingURL=0.e0bc31dc.chunk.js.map