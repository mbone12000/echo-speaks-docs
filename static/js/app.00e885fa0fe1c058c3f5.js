webpackJsonp([2],{101:function(e,t){e.exports={appName:"Echo Speaks",headerNavigation:[{name:"Home",path:"/docs"},{name:"FAQ",path:"/docs/faq"},{name:"Donate",path:"/docs/donate"}],landingPage:"/docs",topics:["home"],pages:[{route:"/docs",name:"Documentation",description:"this is the info page",icon:"address-book",children:[{route:"/getStarted",name:"Get Started",description:"installation and configuration instructions",icon:"play",topics:["started","instructions","setup","configuration"],children:[{route:"/appRequirements",name:"Requirements",description:"what's needed to make this all work!",icon:"star",topics:["requirements"],markdown:"/static/markdown/getstarted/Requirements.md"},{route:"/appInstall",name:"Install Method",description:"select an install method",icon:"plus-square",topics:["process"],children:[{route:"/autoInstall",name:"Community Installer",description:"Automate the install",icon:"magic",topics:["install","auto"],markdown:"/static/markdown/getstarted/code_install/Auto_Install.md"},{route:"/githubInstall",name:"IDE (GitHub) Install",description:"use IDE integration",icon:["fab","github"],topics:["install","github"],markdown:"/static/markdown/getstarted/code_install/GithubIDE_Install.md"},{route:"/manualInstall",name:"Manual Install",description:"install the code manually",icon:"sort-numeric-down",topics:["install","manual"],markdown:"/static/markdown/getstarted/code_install/Manual_Install.md"}]},{route:"/appConfig",name:"Configure Application",description:"configure the smartapp installation",icon:"wrench",topics:["configuration"],markdown:"/static/markdown/getstarted/AppConfig.md"}]},{route:"/devices",name:"Device Support",description:"models supported and their attributes, commands.",topics:["attributes","commands","devices"],icon:"thumbs-up",children:[{route:"/devicesSupported",name:"Supported Devices",description:"Confirm devices supported",icon:"thumbs-up",topics:["process"],markdown:"/static/markdown/process/SupportedDevices.md"},{route:"/deviceAttributes",name:"Available Device Attributes",description:"All of the device attributes that are available",icon:"project-diagram",topics:["attributes"],markdown:"/static/markdown/devicesupport/DeviceAttributes.md"},{route:"/deviceCommands",name:"Available Device Commands",description:"All of the device commands that are available",icon:"project-diagram",topics:["commands"],markdown:"/static/markdown/devicesupport/DeviceCommands.md"}]},{route:"/troubleshoot",name:"Troubleshooting",description:"help with common issues.",topics:["issues","trouble","errors"],icon:"stethoscope",children:[{route:"/commonErrors",name:"Common Errors",description:"solutions to common issues",icon:"exclamation-circle",topics:["errors","issues"],markdown:"/static/markdown/troubleshooting/CommonErrors.md"},{route:"/removeServer",name:"Remove Server",description:"heroku server removal",icon:"trash-alt",topics:["server","remove","delete"],markdown:"/static/markdown/troubleshooting/RemoveServer.md"},{route:"/redeployServer",name:"Redeploy Server",description:"redeploy heroku server",icon:"wind",topics:["server","deploy"],markdown:"/static/markdown/troubleshooting/RedeployServer.md"}]},{route:"/faq",name:"FAQs",description:"frequently asked questions are covered here",topics:[],icon:"question-circle",markdown:"/static/markdown/FAQ.md"},{route:"/donate",name:"Donate",description:"want to donate for all of the work involved",topics:[],icon:"donate",markdown:"/static/markdown/Donations.md"},{route:"/whatsNew",name:"Whats new ?",description:"recent announcements, news, latest and greatest",icon:"bullhorn",topics:["news"],markdown:"/static/markdown/whatsnew/Current.md"}]}]}},120:function(e,t,n){"use strict";var s=n(51),a=n(121),r=n(27),o=r(s.a,a.a,!1,null,null,null);t.a=o.exports},121:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__brand"},[n("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[n("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),n("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),n("b",[e._v("Documentation")])])]),e._v(" "),e.isVisible||e.isDesktop?n("nav",{staticClass:"nav"},[n("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[n("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),n("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return n("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n        ")])}),1)]):e._e()])},a=[],r={render:s,staticRenderFns:a};t.a=r},122:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),n("main",[n("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[n("div",{staticClass:"nav__search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?n("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[n("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),n("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),n("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?n("div",{staticClass:"container"},[e.searchResults.length?n("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):n("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),n("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,s){return n("li",{key:s,staticClass:"result"},[n("header",{staticClass:"result__header"},[n("router-link",{attrs:{to:t.path}},[n("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,s){return n("span",{key:s,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.searchTopic(t)},click:function(n){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}),0)]):n("router-view")],1)],1)},a=[],r={render:s,staticRenderFns:a};t.a=r},123:function(e,t,n){"use strict";var s=n(30),a=n(124),r=n(16);s.a.use(a.a),t.a=new a.a({routes:r.a.getRoutingConfig()})},16:function(e,t,n){"use strict";function s(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var n=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:n}),e.component=p,null!=t&&(e.path=t.path+e.route);var a=[];if(e.children)for(var r in e.children){var o=e.children[r];a.push({name:o.name,description:o.description,path:e.path+o.route,icon:o.icon,bgColor:o.bgColor,owner:o.owner,topics:o.topics}),s(o,e)}e.meta={tiles:a.length>0?a:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},m[e.path]=e.meta}function a(e){var t=JSON.parse(c()(e.pages));for(var n in t){s(t[n],null)}return t.push({path:"/",redirect:e.landingPage}),t}var r=n(74),o=n.n(r),i=n(99),c=n.n(i),u=n(101),l=n.n(u),d=n(57),h=n.n(d),p=function(){return n.e(0).then(n.bind(null,131))},m={};t.a={getMetaById:function(e){return m[e]},getRoutingConfig:function(){return a(this.getBaseConfig())},getBaseConfig:function(){return l.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new o.a(function(e,t){var n=window.location.pathname,s=n.substring(0,n.length-1)+"/static/content.json";h.a.get(s).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},32:function(e,t,n){"use strict";var s=n(53),a=n.n(s),r=n(16),o=n(120);t.a={name:"app",data:function(){return{baseUrl:"https://tonesto7.github.io/echo-speaks-docs/#",isNavOpen:!1,tocItems:r.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:o.a},created:function(){var e=this;r.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var n=a()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:n}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var n=(e.topics||[]).map(function(e){return e.toLowerCase()}),s=!1,a=0;a<n.length;a++)n[a].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(s=!0);return s}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var s=this.$route.query;delete s.search,this.$router.push({query:s}),this.reset()}},searchTopic:function(e){var t="topic:"+e,n=a()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:n})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var n=window.location.href;if(n.indexOf("?")>-1){var s=n.substring(n.indexOf("?")+1),a=JSON.parse('{"'+decodeURIComponent(s.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');a&&a.search&&(this.searchKeywords=a.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,n){"use strict";var s=n(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:s.a.getBaseConfig().appName,list:s.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(30),a=n(61),r=n(123),o=n(125),i=n.n(o),c=n(52),u=n(126),l=n(127),d=n(128);s.a.use(i.a),c.c.add(d.l,d._32,d._13,d.Z,d._12,d._37,d.N,d.I,d.J,d._17,d.W,d._19,d._36,d.D,d.C,d._30,d._27,d.Q,d.B,d._16,d._1,d.v,d.V,d._8,d.j,d._34,d._5,d.c,d.q,d.R,d._35,d.T,d.G,d.s,d._20,d.f,d.H,d._26,d.w,d.a,d.e,d.z,d.n,d.y,d._14,d.S,d._40,d.t,d._4,d.E,d.U,d._29,d._28,d._6,d.X,d.g,d._15,d._25,d.x,d._7,d._18,d.p,d.K,d._11,d._0,d.h,d._33,d.d,d.k,d.u,d.m,d.P,d.i,d.L,d.b,d.O,d._9,d._24,d._3,d._39,d.r,d.o,d.M,d.Y,d._21,d.F,d.A,d._22,d._2,d._23,l.a,l.b,d._10,d._31,d._38);var h=function(e,t,n){n=n||"...";var s=document.createElement("div");s.innerHTML=e;var a=s.textContent;return a.length>t?a.slice(0,t)+n:a};s.a.filter("truncate",h),s.a.component("font-awesome-icon",u.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,render:function(e){return e(a.a)}})},61:function(e,t,n){"use strict";function s(e){n(62)}var a=n(32),r=n(122),o=n(27),i=s,c=o(a.a,r.a,!1,i,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.00e885fa0fe1c058c3f5.js.map