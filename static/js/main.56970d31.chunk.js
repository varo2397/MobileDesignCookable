(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),l=a.n(i),r=(a(12),a(1)),c=a(2),o=a(4),m=a(3);function u(e){return function(t){Object(o.a)(n,t);var a=Object(m.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={isMobile:!1},t.onChange=function(e){t.setState({isMobile:e.matches})},t.subscription=function(){},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({isMobile:window.screen.width<=780}),this.subscription=window.matchMedia("(max-width: 780px)"),this.subscription.addListener(this.onChange)}},{key:"componentWillUnmount",value:function(){this.subscription.removeListener(this.onChange)}},{key:"render",value:function(){return s.a.createElement(e,Object.assign({},this.props,{isMobile:this.state.isMobile}))}}]),n}(e)}function d(e){return function(t){Object(o.a)(n,t);var a=Object(m.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={isPortrait:!1},t.onChange=function(e){t.setState({isPortrait:e.matches})},t.subscription=function(){},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({isPortrait:window.screen.width<=window.screen.height}),this.subscription=window.matchMedia("(orientation: portrait)"),this.subscription.addListener(this.onChange)}},{key:"componentWillUnmount",value:function(){this.subscription.removeListener(this.onChange)}},{key:"render",value:function(){return s.a.createElement(e,Object.assign({},this.props,{isPortrait:this.state.isPortrait}))}}]),n}(e)}var p=d(u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.author,n=e.isMobile,i=e.toggleOptinsBar,l=e.showIcon,r=e.isPortrait;return s.a.createElement("div",{className:"row margin-header"},s.a.createElement("div",{className:"col-md-12 col-sm-12 title-text d-flex flex-row justify-content-between"},s.a.createElement("p",{className:"text-white font-weight-bold"},t," ",s.a.createElement("span",{className:"font-italic font-weight-light"},a)),n&&l&&!r?s.a.createElement("div",{className:"center-icon active-icon",onClick:i,style:{borderStyle:"none"}},s.a.createElement("i",{className:"fal fa-lightbulb-on"})):null))}}]),a}(n.Component))),h=d(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleOptinsBar,a=void 0===t?function(){}:t,n=e.isPortrait;return s.a.createElement("div",{className:"row ".concat(n?"justify-content-center pt-4":"justify-content-end align-items-end"," ")},s.a.createElement("div",{className:" justify-content-start align-items-end flex-column"},s.a.createElement("div",{className:" bg-history text-center padding-optins margin-optins optins-bar",style:{maxWidth:n?"100%":""}},s.a.createElement("div",{className:"relative margin-text-optins"},s.a.createElement("div",{className:"center-icon active-icon absolute",onClick:a},s.a.createElement("i",{className:"fa fa-lightbulb-on"})),s.a.createElement("p",{className:"text-white text-left  optins-text"},s.a.createElement("span",{className:"font-weight-bold main-text-optins"},"WATCH "),"or",s.a.createElement("span",{className:"font-weight-bold main-text-optins"}," LISTEN"))),s.a.createElement("div",{className:"relative  margin-text-optins"},s.a.createElement("div",{className:"center-icon absolute "},s.a.createElement("i",{className:"fa fa-volume-up fa-lg"})),s.a.createElement("p",{className:"text-white text-left  font-italic optins-text",id:"example"},"Set the time to 20 minutes")),s.a.createElement("div",{className:"relative "},s.a.createElement("div",{className:"center-icon absolute "},s.a.createElement("i",{className:"fa fa-video fa-lg"})),s.a.createElement("p",{className:"text-white text-left font-italic optins-text"},"Show me a video about Grace and Wings"))),s.a.createElement("div",{className:"d-flex flex-row  optins-bar",style:{padding:0,maxWidth:n?"100%":""}},s.a.createElement("div",{className:"book-bottom-left"}),s.a.createElement("div",{className:"book-bottom-right"}))))}}]),a}(n.Component)),f=u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showOptinsBar:!1},e.toggleOptinsBar=function(t){t.stopPropagation(),e.setState({showOptinsBar:!e.state.showOptinsBar})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.isMobile;return s.a.createElement(n.Fragment,null,s.a.createElement(p,{name:"Crispiest Juiciest Oven Baked Wings",author:"- by Grace Choi",toggleOptinsBar:this.toggleOptinsBar,showIcon:!this.state.showOptinsBar}),e?this.state.showOptinsBar?s.a.createElement(h,{toggleOptinsBar:this.toggleOptinsBar}):null:s.a.createElement(h,null))}}]),a}(n.Component)),v=u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.showNavigation,i="\n        Line the sheet tray with the parchment.\n        Place wings on parchment.\n        Season both sides withsalt mix and pepper.\n        Arrange wings skin side down.\n        Let wings dry uncovered for an hour(or up to overnight in the fridge).\n        ";return s.a.createElement("div",{className:"row fixed-bottom gradient-bottom padding-footer ",style:{bottom:"-15px"}},s.a.createElement("div",{className:"col-md-12 col-sm-12 ".concat(t?"d-flex flex-row justify-content-between":"")},t?s.a.createElement(n.Fragment,null,s.a.createElement(g,null,s.a.createElement(E,{showNavigation:a,instructionsText:i,instructionsTitle:"MISE EN PLACE",instructionsStep:"- Gather materials"}))):s.a.createElement(n.Fragment,null,s.a.createElement(E,{instructionsText:i,instructionsTitle:"MISE EN PLACE",instructionsStep:"- Gather materials"}),s.a.createElement(g,null))))}}]),a}(n.Component)),E=d(u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.instructionsText,i=e.instructionsTitle,l=e.instructionsStep,r=e.showNavigation,c=e.isPortrait;return s.a.createElement(n.Fragment,null,t?r||c?s.a.createElement("div",{className:"d-flex flex-row w-100 pb-4"},s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"10%"}},s.a.createElement("p",{className:"text-white progress-text"},"WARM UP"),s.a.createElement("div",{className:"progress-default progress-done"})),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"20%"}},s.a.createElement("p",{className:"text-white align-self-center progress-text"},s.a.createElement("i",{className:"fas fa-chevron-double-down current-step-icon-details"})),s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("div",{className:"progress-default progress-process"}),s.a.createElement("div",{className:"progress-missing"}))),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},s.a.createElement("p",{className:"text-white progress-text"},"COOK"),s.a.createElement("div",{className:"progress-default"})),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},s.a.createElement("p",{className:"text-white progress-text"},"BAKE"),s.a.createElement("div",{className:"progress-default"})),s.a.createElement("div",{className:"d-flex flex-column",style:{width:"10%"}},s.a.createElement("p",{className:"text-white progress-text"},"SERVE"),s.a.createElement("div",{className:"progress-default"}))):s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("p",{className:"text-white instructional-title"},i," \xa0",s.a.createElement("span",null,l))),s.a.createElement("p",{className:"text-white font-weight-light instructional-text"},a)):s.a.createElement("div",{className:"row justify-content-space-evenly margin-progress"},s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"10%"}},s.a.createElement("div",{className:"absolute  overflow-auto col-lg-4 col-md-5 col-sm-4  step-details-container"},s.a.createElement("div",{className:"step-details col-md-12 col-sm-12 col-6 padding-instructional"},s.a.createElement("p",{className:"text-white instructional-title"},i," \xa0",s.a.createElement("span",null,l)),s.a.createElement("p",{className:"text-white font-weight-light instructional-text"},a))),s.a.createElement("p",{className:"text-white progress-text"},"WARM UP"),s.a.createElement("div",{className:"progress-default progress-done"})),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"20%"}},s.a.createElement("p",{className:"text-white align-self-center progress-text"},s.a.createElement("i",{className:"fas fa-chevron-double-down current-step-icon-details"})),s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("div",{className:"progress-default progress-process"}),s.a.createElement("div",{className:"progress-missing"}))),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},s.a.createElement("p",{className:"text-white progress-text"},"COOK"),s.a.createElement("div",{className:"progress-default"})),s.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},s.a.createElement("p",{className:"text-white progress-text"},"BAKE"),s.a.createElement("div",{className:"progress-default"})),s.a.createElement("div",{className:"d-flex flex-column",style:{width:"10%"}},s.a.createElement("p",{className:"text-white progress-text"},"SERVE"),s.a.createElement("div",{className:"progress-default"}))))}}]),a}(n.Component))),g=u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.children;return s.a.createElement("div",{className:t?"pb-4 w-100":"row pb-4 d-flex justify-content-space-between"},t?s.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center w-100"},a):s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"d-flex flex-row w-50 align-items-center"},s.a.createElement("p",null,s.a.createElement("i",{className:"fa fa-chevron-left text-white bottom-text"})),s.a.createElement("p",{className:"pl-2 bottom-text"},"PREVIEW VIDEO")),s.a.createElement("div",{className:"d-flex flex-row w-50 justify-content-end align-items-center"},s.a.createElement("p",{className:"pr-2 bottom-text",id:"showPopUp"},"GATHER INGREDIENTS"),s.a.createElement("p",null,s.a.createElement("i",{className:"fa fa-chevron-right text-white bottom-text"})))))}}]),a}(n.Component)),w=u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"absolute d-flex flex-row",style:{width:"100vw",height:"100vh",backgroundColor:"transparent !important",zIndex:1e3}},s.a.createElement("div",{className:"h-100 w-50 d-flex flex-row justify-content-end align-items-center text-white pr-5"},s.a.createElement("span",{className:"pr-4"},"PREVIEW VIDEO"),s.a.createElement("i",{class:"far fa-angle-left",style:{fontSize:40}})),s.a.createElement("div",{className:"h-100 w-50 d-flex flex-row justify-content-start align-items-center text-white pl-5"},s.a.createElement("i",{class:"far fa-angle-right",style:{fontSize:40}}),s.a.createElement("span",{className:"pl-4"},"PREVIEW VIDEO")))}}]),a}(n.Component)),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.instructionsTitle,a=void 0===t?"MISE EN PLACE":t,n=e.instructionsStep,i=void 0===n?"- Gather materials":n,l=e.instructionsText,r=void 0===l?"\n            Line the sheet tray with the parchment.\n            Place wings on parchment.\n            Season both sides withsalt mix and pepper.\n            Arrange wings skin side down.\n            Let wings dry uncovered for an hour(or up to overnight in the fridge).\n            ":l,c=e.name,o=void 0===c?"Crispiest Juiciest Oven Baked Wings":c,m=e.author,u=void 0===m?"- by Grace Choi":m;return s.a.createElement("div",{className:"w-100",style:{backgroundColor:"black",height:"100vh",overflowY:"scroll"}},s.a.createElement("div",{className:"relative"},s.a.createElement("div",{className:"gradient-top",style:{height:"20%",backgroundImage:"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.01))"}}),s.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,src:"/MobileDesignCookable/Beer_Pour_Videvo.mp4",style:{width:"100vw",height:"30vh",objectFit:"fill"}}),s.a.createElement("div",{className:"absolute",style:{top:0,left:10}},s.a.createElement(p,{name:o,author:u})),s.a.createElement("div",{className:"absolute gradient-bottom",style:{bottom:0,height:"20%",width:"100%"}})),s.a.createElement("div",{className:"w-100 pl-2 pr-2"},s.a.createElement(E,null)),s.a.createElement("div",{className:"d-flex flex-column pl-2 pr-2"},s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("p",{className:"text-white instructional-title"},a," \xa0",s.a.createElement("span",null,i))),s.a.createElement("p",{className:"text-white font-weight-light instructional-text"},r)),s.a.createElement("div",{className:"w-100 pl-4 pr-4"},s.a.createElement(h,null)))}}]),a}(n.Component),x=d(u(function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showNavigation:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.isMobile,i=t.isPortrait;return console.log(i),s.a.createElement(n.Fragment,null,i?s.a.createElement(b,null):s.a.createElement("span",null,this.state.showNavigation&&a?s.a.createElement(w,null):null,s.a.createElement("div",{className:"video-bg-wrapper"},s.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,src:"/MobileDesignCookable/Beer_Pour_Videvo.mp4",className:"video-bg"})),s.a.createElement("div",{className:"h-100 w-100 absolute ".concat(a&&this.state.showNavigation?"show-navigation-mobile":""),onClick:function(){e.setState({showNavigation:!0},(function(){setTimeout((function(){return e.setState({showNavigation:!1})}),3e3)}))}},s.a.createElement("div",{className:"gradient-top"}),s.a.createElement("div",{className:"container-fluid d-flex flex-grow-1 flex-column"},s.a.createElement(f,null),s.a.createElement(v,{showNavigation:this.state.showNavigation})))))}}]),a}(n.Component)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.56970d31.chunk.js.map