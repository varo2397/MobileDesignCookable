(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),l=a.n(s),r=(a(12),a(1)),o=a(2),c=a(4),m=a(3);function u(e){return function(t){Object(c.a)(n,t);var a=Object(m.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={isMobile:!1},t.onChange=function(e){t.setState({isMobile:e.matches})},t.subscription=function(){},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({isMobile:window.screen.width<=780}),this.subscription=window.matchMedia("(max-width: 780px)"),this.subscription.addListener(this.onChange)}},{key:"componentWillUnmount",value:function(){this.subscription.removeListener(this.onChange)}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{isMobile:this.state.isMobile}))}}]),n}(e)}function d(e){return function(t){Object(c.a)(n,t);var a=Object(m.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).state={isPortrait:!1},t.onChange=function(e){t.setState({isPortrait:e.matches})},t.subscription=function(){},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({isPortrait:window.screen.width<=window.screen.height}),this.subscription=window.matchMedia("(orientation: portrait)"),this.subscription.addListener(this.onChange)}},{key:"componentWillUnmount",value:function(){this.subscription.removeListener(this.onChange)}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{isPortrait:this.state.isPortrait}))}}]),n}(e)}var p=d(u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.author,n=e.isMobile,s=e.toggleOptinsBar,l=e.showIcon,r=e.isPortrait;return i.a.createElement("div",{className:"row margin-header pt-2"},i.a.createElement("div",{className:"col-md-12 col-sm-12 title-text d-flex flex-row justify-content-between"},i.a.createElement("div",{className:"d-flex flex-row  "},i.a.createElement("img",{src:"/MobileDesignCookable/cookable.png",alt:"",style:{width:20,height:20,objectFit:"cover",marginRight:r?"0.5rem":"1rem",filter:"brightness(0) invert(1)"}}),i.a.createElement("p",{className:"text-white font-weight-bold flex-wrap"},t," ",i.a.createElement("span",{className:"font-italic flex-wrap font-weight-light pr-1"},a))),n&&l&&!r?i.a.createElement("div",{className:"center-icon active-icon mt-3",onClick:s,style:{borderStyle:"none"}},i.a.createElement("i",{className:"fal fa-lightbulb-on"})):null))}}]),a}(n.Component))),h=d(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleOptinsBar,a=void 0===t?function(){}:t,n=e.isPortrait;return i.a.createElement("div",{className:"row ".concat(n?"justify-content-center pt-4":"justify-content-end align-items-end"," ")},i.a.createElement("div",{className:" justify-content-start align-items-end flex-column"},i.a.createElement("div",{className:" bg-history text-center padding-optins margin-optins optins-bar",style:{maxWidth:n?"100%":""}},i.a.createElement("div",{className:"relative margin-text-optins"},i.a.createElement("div",{className:"center-icon active-icon absolute",onClick:a},i.a.createElement("i",{className:"fa fa-lightbulb-on"})),i.a.createElement("p",{className:"text-white text-left  optins-text"},i.a.createElement("span",{className:"font-weight-bold main-text-optins"},"WATCH "),"or",i.a.createElement("span",{className:"font-weight-bold main-text-optins"}," LISTEN"))),i.a.createElement("div",{className:"relative  margin-text-optins"},i.a.createElement("div",{className:"center-icon absolute "},i.a.createElement("i",{className:"fa fa-volume-up fa-lg"})),i.a.createElement("p",{className:"text-white text-left  font-italic optins-text",id:"example"},"Set the time to 20 minutes")),i.a.createElement("div",{className:"relative "},i.a.createElement("div",{className:"center-icon absolute "},i.a.createElement("i",{className:"fa fa-video fa-lg"})),i.a.createElement("p",{className:"text-white text-left font-italic optins-text"},"Show me a video about Grace and Wings"))),i.a.createElement("div",{className:"d-flex flex-row  optins-bar",style:{padding:0,maxWidth:n?"100%":""}},i.a.createElement("div",{className:"book-bottom-left"}),i.a.createElement("div",{className:"book-bottom-right"}))))}}]),a}(n.Component)),f=u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={showOptinsBar:!1},e.toggleOptinsBar=function(t){t.stopPropagation(),e.setState({showOptinsBar:!e.state.showOptinsBar})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.isMobile;return i.a.createElement(n.Fragment,null,i.a.createElement(p,{name:"Crispiest Juiciest Oven Baked Wings",author:"- by Grace Choi",toggleOptinsBar:this.toggleOptinsBar,showIcon:!this.state.showOptinsBar}),e?this.state.showOptinsBar?i.a.createElement(h,{toggleOptinsBar:this.toggleOptinsBar}):null:i.a.createElement(h,null))}}]),a}(n.Component)),g=u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.showNavigation,s="\n        Line the sheet tray with the parchment.\n        Place wings on parchment.\n        Season both sides withsalt mix and pepper.\n        Arrange wings skin side down.\n        Let wings dry uncovered for an hour(or up to overnight in the fridge).\n        ";return i.a.createElement("div",{className:"row fixed-bottom gradient-bottom padding-footer ",style:{bottom:"-15px"}},i.a.createElement("div",{className:"col-md-12 col-sm-12 ".concat(t?"d-flex flex-row justify-content-between":"")},t?i.a.createElement(n.Fragment,null,i.a.createElement(E,null,i.a.createElement(v,{showNavigation:a,instructionsText:s,instructionsTitle:"MISE EN PLACE",instructionsStep:"- Gather materials"}))):i.a.createElement(n.Fragment,null,i.a.createElement(v,{instructionsText:s,instructionsTitle:"MISE EN PLACE",instructionsStep:"- Gather materials"}),i.a.createElement(E,null))))}}]),a}(n.Component)),v=d(u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.instructionsText,s=e.instructionsTitle,l=e.instructionsStep,r=e.showNavigation,o=e.isPortrait;return i.a.createElement(n.Fragment,null,t?r||o?i.a.createElement("div",{className:"d-flex flex-row w-100 pb-4"},i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"10%"}},i.a.createElement("p",{className:"text-white progress-text"},"WARM UP"),i.a.createElement("div",{className:"progress-default progress-done"})),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"20%"}},i.a.createElement("p",{className:"text-white align-self-center progress-text",style:{marginBottom:o?-2:""}},i.a.createElement("i",{className:"fas fa-chevron-double-down current-step-icon-details"})),i.a.createElement("div",{className:"d-flex flex-row"},i.a.createElement("div",{className:"progress-default progress-process"}),i.a.createElement("div",{className:"progress-missing"}))),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},i.a.createElement("p",{className:"text-white progress-text"},"COOK"),i.a.createElement("div",{className:"progress-default"})),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},i.a.createElement("p",{className:"text-white progress-text"},"BAKE"),i.a.createElement("div",{className:"progress-default"})),i.a.createElement("div",{className:"d-flex flex-column",style:{width:"10%"}},i.a.createElement("p",{className:"text-white progress-text"},"SERVE"),i.a.createElement("div",{className:"progress-default"}))):i.a.createElement("div",{className:"d-flex flex-column"},i.a.createElement("div",{className:"d-flex flex-row"},i.a.createElement("p",{className:"text-white instructional-title"},s," \xa0",i.a.createElement("span",null,l))),i.a.createElement("p",{className:"text-white font-weight-light instructional-text"},a)):i.a.createElement("div",{className:"row justify-content-space-evenly margin-progress"},i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"10%"}},i.a.createElement("div",{className:"absolute  overflow-auto col-lg-4 col-md-5 col-sm-4  step-details-container"},i.a.createElement("div",{className:"step-details col-md-12 col-sm-12 col-6 padding-instructional"},i.a.createElement("p",{className:"text-white instructional-title"},s," \xa0",i.a.createElement("span",null,l)),i.a.createElement("p",{className:"text-white font-weight-light instructional-text"},a))),i.a.createElement("p",{className:"text-white progress-text"},"WARM UP"),i.a.createElement("div",{className:"progress-default progress-done"})),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"20%"}},i.a.createElement("p",{className:"text-white align-self-center progress-text"},i.a.createElement("i",{className:"fas fa-chevron-double-down current-step-icon-details",style:{fontSize:o?"8px":""}})),i.a.createElement("div",{className:"d-flex flex-row"},i.a.createElement("div",{className:"progress-default progress-process"}),i.a.createElement("div",{className:"progress-missing"}))),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},i.a.createElement("p",{className:"text-white progress-text"},"COOK"),i.a.createElement("div",{className:"progress-default"})),i.a.createElement("div",{className:"d-flex flex-column pr-2",style:{width:"30%"}},i.a.createElement("p",{className:"text-white progress-text"},"BAKE"),i.a.createElement("div",{className:"progress-default"})),i.a.createElement("div",{className:"d-flex flex-column",style:{width:"10%"}},i.a.createElement("p",{className:"text-white progress-text"},"SERVE"),i.a.createElement("div",{className:"progress-default"}))))}}]),a}(n.Component))),E=u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.children;return i.a.createElement("div",{className:t?"pb-4 w-100":"row pb-4 d-flex justify-content-space-between"},t?i.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center w-100"},a):i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"d-flex flex-row w-50 align-items-center"},i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-chevron-left text-white bottom-text"})),i.a.createElement("p",{className:"pl-2 bottom-text"},"PREVIEW VIDEO")),i.a.createElement("div",{className:"d-flex flex-row w-50 justify-content-end align-items-center"},i.a.createElement("p",{className:"pr-2 bottom-text",id:"showPopUp"},"GATHER INGREDIENTS"),i.a.createElement("p",null,i.a.createElement("i",{className:"fa fa-chevron-right text-white bottom-text"})))))}}]),a}(n.Component)),w=u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onClickNavigationButton=function(e){e.stopPropagation(),console.log("logic goes here")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.toggleNavigation;return i.a.createElement("div",{className:"absolute d-flex flex-row",onClick:function(){return e()},style:{width:"100vw",height:"100vh",backgroundColor:"transparent !important",zIndex:1e3}},i.a.createElement("div",{className:"h-100 w-50 d-flex flex-row justify-content-end align-items-center "},i.a.createElement("div",{className:"d-flex flex-row justify-content-end align-items-center text-white pr-5",onClick:this.onClickNavigationButton},i.a.createElement("span",{className:"pr-4"},"PREVIEW VIDEO"),i.a.createElement("i",{className:"far fa-angle-left",style:{fontSize:30}}))),i.a.createElement("div",{className:"h-100 w-50 d-flex flex-row justify-content-start align-items-center"},i.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center text-white pl-5",onClick:this.onClickNavigationButton},i.a.createElement("i",{className:"far fa-angle-right",style:{fontSize:30}}),i.a.createElement("span",{className:"pl-4"},"PREVIEW VIDEO"))))}}]),a}(n.Component)),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.instructionsTitle,a=void 0===t?"MISE EN PLACE":t,n=e.instructionsStep,s=void 0===n?"- Gather materials":n,l=e.instructionsText,r=void 0===l?"\n            Line the sheet tray with the parchment.\n            Place wings on parchment.\n            Season both sides withsalt mix and pepper.\n            Arrange wings skin side down.\n            Let wings dry uncovered for an hour(or up to overnight in the fridge).\n            ":l,o=e.name,c=void 0===o?"Crispiest Juiciest Oven Baked Wings":o,m=e.author,u=void 0===m?"- by Grace Choi":m;return i.a.createElement("div",{className:"w-100",style:{backgroundColor:"black",height:"100vh",overflowY:"scroll",overflowX:"hidden"}},i.a.createElement("div",{className:"relative"},i.a.createElement("div",{className:"gradient-top",style:{height:"20%",backgroundImage:"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.01))"}}),i.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,src:"/MobileDesignCookable/Beer_Pour_Videvo.mp4",style:{width:"100vw",height:"30vh",objectFit:"fill"}}),i.a.createElement("div",{className:"absolute",style:{top:0,left:10}},i.a.createElement(p,{name:c,author:u})),i.a.createElement("div",{className:"absolute gradient-bottom",style:{bottom:0,height:"20%",width:"100%"}})),i.a.createElement("div",{className:"w-100 pl-2 pr-2"},i.a.createElement(v,null)),i.a.createElement("div",{className:"d-flex flex-column pl-2 pr-2"},i.a.createElement("div",{className:"d-flex flex-row"},i.a.createElement("p",{className:"text-white instructional-title"},a," \xa0",i.a.createElement("span",null,s))),i.a.createElement("p",{className:"text-white font-weight-light instructional-text"},r)),i.a.createElement("div",{className:"w-100 pl-4 pr-4"},i.a.createElement(h,null)))}}]),a}(n.Component),x=d(u(function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={showNavigation:!1},e.toggleMobileNavigation=function(){e.setState({showNavigation:!e.state.showNavigation})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.isMobile,s=t.isPortrait;return console.log(s),i.a.createElement(n.Fragment,null,s?i.a.createElement(b,null):i.a.createElement("span",null,this.state.showNavigation&&a?i.a.createElement(w,{toggleNavigation:this.toggleMobileNavigation}):null,i.a.createElement("div",{className:"video-bg-wrapper"},i.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,src:"/MobileDesignCookable/Beer_Pour_Videvo.mp4",className:"video-bg"})),i.a.createElement("div",{className:"h-100 w-100 absolute ".concat(a&&this.state.showNavigation?"show-navigation-mobile":""),onClick:function(){return e.toggleMobileNavigation()}},i.a.createElement("div",{className:"gradient-top"}),i.a.createElement("div",{className:"container-fluid d-flex flex-grow-1 flex-column"},i.a.createElement(f,null),i.a.createElement(g,{showNavigation:this.state.showNavigation})))))}}]),a}(n.Component)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.efd11994.chunk.js.map