"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[727],{7727:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var o={component:"App_component__1of+-"},a="Form_form__e1yzW",r="Form_input__contacts__D-Aj2",i="Form_input__item__pD4nd",c="Form_input__btn__I1vLX",l=n(9434),s=n(826),d=function(e){return e.todo.contacts},u=function(e){return e.todo.filter},p=function(e){return e.todo.contacts.isLoading},v=function(e){return e.todo.contacts.error},h=n(2419),m=n(9952),f=n(3229),x=n(6151),b=n(184),g=[],S=function(){var e=(0,l.v9)(d).items,t=(0,l.I0)();return(0,b.jsx)("form",{onSubmit:function(n){n.preventDefault();var o=n.target.name.value,a=n.target.number.value;e.find((function(e){return e.name===o}))?(alert("".concat(o," is already existing")),n.target.name.value=""):(g={name:o,number:a},t((0,s.uK)(g)),n.target.name.value=n.target.number.value="")},className:a,children:(0,b.jsxs)("div",{className:r,children:[(0,b.jsxs)("label",{className:i,children:[(0,b.jsxs)("p",{children:[(0,b.jsx)(m.Z,{fontSize:"small"})," Name"]}),(0,b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("label",{className:i,children:[(0,b.jsxs)("p",{children:[(0,b.jsx)(f.Z,{fontSize:"small"})," Phone"]}),(0,b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)(x.Z,{variant:"outlined",startIcon:(0,b.jsx)(h.Z,{}),type:"submit",className:c,children:"Add contact"})]})})},Z=n(1833),y="Filter_filter__vxThR",z="Filter_label__vEd1E",C="Filter_input__N7T3z",_=function(){var e=(0,l.I0)();return(0,b.jsx)("div",{className:y,children:(0,b.jsxs)("label",{className:z,children:["Find contacts by name",(0,b.jsx)("input",{type:"text",onChange:function(t){var n=t.target.value;e((0,Z.T)(n))},className:C})]})})},j=n(2791),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},k="Contacts_contact__OJvRd",I="Contacts_btn__rNftF",N="Contacts_contact_item__UDACC",R=n(7247),F=n(8619),M=n(4942),P=n(3366),E=n(7462),L=n(8182),A=n(2466),B=n(4419),T=n(1217),W=(0,n(4046).ZP)(),V=n(7078),O=n(8519),D=n(5080),q=n(1184),H=n(5682),G=["component","direction","spacing","divider","children","className","useFlexGap"],$=(0,D.Z)(),U=W("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function J(e){return(0,V.Z)({props:e,name:"MuiStack",defaultTheme:$})}function K(e,t){var n=j.Children.toArray(e).filter(Boolean);return n.reduce((function(e,o,a){return e.push(o),a<n.length-1&&e.push(j.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var X=function(e){var t=e.ownerState,n=e.theme,o=(0,E.Z)({display:"flex",flexDirection:"column"},(0,q.k9)({theme:n},(0,q.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,H.hB)(n),r=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),i=(0,q.P$)({values:t.direction,base:r}),c=(0,q.P$)({values:t.spacing,base:r});"object"===typeof i&&Object.keys(i).forEach((function(e,t,n){if(!i[e]){var o=t>0?i[n[t-1]]:"column";i[e]=o}}));o=(0,A.Z)(o,(0,q.k9)({theme:n},c,(function(e,n){return t.useFlexGap?{gap:(0,H.NA)(a,e)}:{"& > :not(style) + :not(style)":(0,M.Z)({margin:0},"margin".concat((o=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,H.NA)(a,e))};var o})))}return o=(0,q.dt)(n.breakpoints,o)};var Q=n(6934),Y=n(1402),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?U:t,o=e.useThemeProps,a=void 0===o?J:o,r=e.componentName,i=void 0===r?"MuiStack":r,c=n(X),l=j.forwardRef((function(e,t){var n=a(e),o=(0,O.Z)(n),r=o.component,l=void 0===r?"div":r,s=o.direction,d=void 0===s?"column":s,u=o.spacing,p=void 0===u?0:u,v=o.divider,h=o.children,m=o.className,f=o.useFlexGap,x=void 0!==f&&f,g=(0,P.Z)(o,G),S={direction:d,spacing:p,useFlexGap:x},Z=(0,B.Z)({root:["root"]},(function(e){return(0,T.Z)(i,e)}),{});return(0,b.jsx)(c,(0,E.Z)({as:l,ownerState:S,ref:t,className:(0,L.Z)(Z.root,m)},g,{children:v?K(h,v):h}))}));return l}({createStyledComponent:(0,Q.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,Y.Z)({props:e,name:"MuiStack"})}}),te=ee,ne=function(e){var t=e.id,n=e.name,o=e.number,a=(0,l.I0)();return(0,b.jsxs)("li",{id:t,className:N,children:[(0,b.jsx)("p",{children:(0,b.jsx)(F.Z,{color:"pink"})}),n,": ",(0,b.jsx)("b",{children:o}),(0,b.jsx)(te,{direction:"row",spacing:2,children:(0,b.jsx)(x.Z,{variant:"outlined",startIcon:(0,b.jsx)(R.Z,{}),type:"text",className:I,onClick:function(){return a((0,s.GK)(t))},children:"Delete"})})]},w)},oe=n(7593),ae=function(){var e=(0,l.I0)(),t=(0,l.v9)(d).items,n=(0,l.v9)(u),o=(0,l.v9)(p),a=(0,l.v9)(v);(0,j.useEffect)((function(){e((0,s.yF)())}),[e]);var r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,b.jsx)("div",{children:o?(0,b.jsx)(oe.a,{}):null!==a?a:0!==r.length?(0,b.jsx)("ul",{className:k,children:r.map((function(e){var t=e.id,n=e.name,o=e.number;return(0,b.jsx)(ne,{name:n,id:t,number:o},t)}))}):""===n?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u043f\u0443\u0441\u0442\u0456. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438!!!":"\u0417\u0431\u0456\u0433\u0456\u0432 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})};function re(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:o.component,children:[(0,b.jsx)("h1",{children:"Phonebook"}),(0,b.jsx)(S,{}),(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(_,{}),(0,b.jsx)(ae,{})]})})}},9952:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=i},2419:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},8619:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");t.Z=i},7247:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},3229:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),r=n(184),i=(0,a.default)((0,r.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone");t.Z=i},6151:function(e,t,n){n.d(t,{Z:function(){return j}});var o=n(4942),a=n(3366),r=n(7462),i=n(2791),c=n(8182),l=n(5735),s=n(4419),d=n(2065),u=n(6934),p=n(1402),v=n(335),h=n(4036),m=n(5878),f=n(1217);function x(e){return(0,f.Z)("MuiButton",e)}var b=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=i.createContext({}),S=n(184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,h.Z)(n.color))],t["size".concat((0,h.Z)(n.size))],t["".concat(n.variant,"Size").concat((0,h.Z)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,a,i=e.theme,c=e.ownerState,l="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],s="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(t,"&.".concat(b.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(t,"&.".concat(b.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:l,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(t,"&.".concat(b.focusVisible),{boxShadow:"none"}),(0,o.Z)(t,"&:active",{boxShadow:"none"}),(0,o.Z)(t,"&.".concat(b.disabled),{boxShadow:"none"}),t)})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t))})),_=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(n.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))})),j=i.forwardRef((function(e,t){var n=i.useContext(g),o=(0,l.Z)(n,e),d=(0,p.Z)({props:o,name:"MuiButton"}),u=d.children,v=d.color,m=void 0===v?"primary":v,f=d.component,b=void 0===f?"button":f,y=d.className,j=d.disabled,w=void 0!==j&&j,k=d.disableElevation,I=void 0!==k&&k,N=d.disableFocusRipple,R=void 0!==N&&N,F=d.endIcon,M=d.focusVisibleClassName,P=d.fullWidth,E=void 0!==P&&P,L=d.size,A=void 0===L?"medium":L,B=d.startIcon,T=d.type,W=d.variant,V=void 0===W?"text":W,O=(0,a.Z)(d,Z),D=(0,r.Z)({},d,{color:m,component:b,disabled:w,disableElevation:I,disableFocusRipple:R,fullWidth:E,size:A,type:T,variant:V}),q=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,a=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(a)),"".concat(i,"Size").concat((0,h.Z)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(a))],endIcon:["endIcon","iconSize".concat((0,h.Z)(a))]},d=(0,s.Z)(l,x,c);return(0,r.Z)({},c,d)}(D),H=B&&(0,S.jsx)(C,{className:q.startIcon,ownerState:D,children:B}),G=F&&(0,S.jsx)(_,{className:q.endIcon,ownerState:D,children:F});return(0,S.jsxs)(z,(0,r.Z)({ownerState:D,className:(0,c.Z)(n.className,q.root,y),component:b,disabled:w,focusRipple:!R,focusVisibleClassName:(0,c.Z)(q.focusVisible,M),ref:t,type:T},O,{classes:q,children:[H,u,G]}))}))}}]);
//# sourceMappingURL=727.31408998.chunk.js.map