(this["webpackJsonpreact-aria-pg"]=this["webpackJsonpreact-aria-pg"]||[]).push([[0],{49:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var c,a,s=r(29),n=r.n(s),l=r(42),i=r(16),o=[{namespace:"aldoshin",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"andreeva",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"auth",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"clickhouse",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"default",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"dockerfile-operator-system",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"gpu-operator-resources",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"kalinina",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"khabaev",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"kube-node-lease",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"kube-public",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"kube-system",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"logging",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"monitoring",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"muryna",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"nexus",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"pogodin",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"pominov",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"security",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"smirnov",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"vendidandi",type:"dynamic",cluster:"dev1.cluster.robo.arrival.co"},{namespace:"zoons",cluster:"dev1.cluster.robo.arrival.co"}],d=(r(49),r(7)),b=r(43),u=r(14),j=r(0),O=r(15),p=r(22),v=r(1),m=r(68),h=r(70),f=r(67),y=r(5),x=r(69),g=r(2),k=O.a.ul(c||(c=Object(u.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  max-height: ","px;\n  overflow: auto;\n"])),(function(e){return e.maxHeight}));function K(e){var t=Object(j.useRef)(),r=e.listBoxRef,c=void 0===r?t:r,a=e.state,s=e.style,n=Object(x.a)(e,a,c).listBoxProps;return Object(g.jsx)(k,Object(d.a)(Object(d.a)({},n),{},{maxHeight:s.maxHeight,ref:c,children:Object(y.a)(a.collection).map((function(e){return Object(g.jsx)(R,{item:e,state:a},e.key)}))}))}var I,P=O.a.li(a||(a=Object(u.a)(["\n  font-size: 16px;\n  padding: 16px 16px;\n"]))),R=function(e){var t=e.item,r=e.state,c=Object(j.useRef)(),a=Object(x.b)({key:t.key},r,c),s=a.optionProps,n=a.isSelected,l=a.isFocused,i=a.isDisabled;return Object(g.jsx)(P,Object(d.a)(Object(d.a)({},s),{},{ref:c,isSelected:n,isFocused:l,isDisabled:i,children:t.rendered}))},S=["title","children","isOpen","onClose","style"],w=O.a.div(I||(I=Object(u.a)(["\n  background-color: #eee;\n  /* position: absolute; */\n"]))),B=Object(j.forwardRef)((function(e,t){e.title;var r=e.children,c=e.isOpen,a=e.onClose,s=e.style,n=Object(b.a)(e,S),i=Object(l.e)({onClose:a,isOpen:c,isDismissable:!0,shouldCloseOnBlur:!1},t).overlayProps,o=Object(l.d)().modalProps;return Object(g.jsx)(p.a,{restoreFocus:!0,children:Object(g.jsxs)(w,Object(d.a)(Object(d.a)({},Object(v.h)(i,o,n)),{},{style:s,ref:t,children:[r,Object(g.jsx)(l.a,{onDismiss:a})]}))})}));function C(e){var t=Object(f.a)(e),r=Object(j.useRef)(null),c=Object(j.useRef)(),a=Object(m.b)(e,t,r),s=a.labelProps,n=a.triggerProps,i=a.valueProps,o=a.menuProps,b=Object(h.a)(n,r).buttonProps,u=Object(l.f)({targetRef:r,overlayRef:c,placement:"bottom left",offset:0,isOpen:t.isOpen}).overlayProps;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",Object(d.a)(Object(d.a)({},s),{},{children:e.label})),Object(g.jsx)(m.a,{state:t,triggerRef:r,label:e.label,name:e.name}),Object(g.jsx)("button",Object(d.a)(Object(d.a)({},b),{},{ref:r,children:Object(g.jsx)("span",Object(d.a)(Object(d.a)({},i),{},{children:t.selectedItem?t.selectedItem.rendered:"Select an option"}))})),t.isOpen&&Object(g.jsx)(l.b,{children:Object(g.jsx)(B,Object(d.a)(Object(d.a)({},u),{},{ref:c,isOpen:t.isOpen,onClose:t.close,children:Object(g.jsx)(K,Object(d.a)(Object(d.a)({state:t},o),u))}))})]})}var F,A,M,D,N=r(6),_=r(11),L=r(66),H=r(9),z=r(10),E=function(){function e(t,r){Object(H.a)(this,e),this.collection=t,this.disabledKeys=r}return Object(z.a)(e,[{key:"_isKeySelectable",value:function(e){var t=this.collection.getItem(e);return"item"===(null===t||void 0===t?void 0:t.type)&&!this.disabledKeys.has(t.key)}},{key:"getKeyAbove",value:function(e){for(var t=this.collection,r=t.getKeyBefore(e);null!==r;){if(this._isKeySelectable(r))return r;r=t.getKeyBefore(r)}return null}},{key:"getKeyBelow",value:function(e){for(var t=this.collection,r=t.getKeyAfter(e);null!==r;){if(this._isKeySelectable(r))return r;r=t.getKeyAfter(r)}return null}},{key:"getFirstKey",value:function(){for(var e=this.collection,t=e.getFirstKey();null!==t;){if(this._isKeySelectable(t))return t;t=e.getKeyAfter(t)}return null}},{key:"getLastKey",value:function(){for(var e=this.collection,t=e.getLastKey();null!==t;){if(this._isKeySelectable(t))return t;t=e.getKeyBefore(t)}return null}},{key:"getKeyForSearch",value:function(){return null}}]),e}();function J(e){var t=Object(L.a)(e),r=Object(j.useRef)();console.log("state:",t);var c=Object(j.useMemo)((function(){return new E(t.collection,t.disabledKeys)}),[t.collection,t.disabledKeys]),a=Object(_.b)({keyboardDelegate:c,ref:r,selectionManager:t.selectionManager}).collectionProps;return Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a),{},{ref:r,role:"tree",children:T({nodes:t.collection,state:t})}))}function T(e){var t=e.nodes,r=e.state;return Array.from(t).map((function(e){return Object(g.jsx)(V,{node:e,state:r},e.key)}))}var q=O.a.div(F||(F=Object(u.a)(["\n  padding: 4px 0;\n"]))),G=O.a.div(A||(A=Object(u.a)(["\n  padding-left: 16px;\n  position: relative;\n\n  border-left: 1px dashed black;\n  margin-left: 8px;\n"]))),Q=O.a.div(M||(M=Object(u.a)(["\n  width: 16px;\n  height: 16px;\n  border: 1px solid;\n  position: relative;\n  margin-right: 8px;\n"]))),U=O.a.div(D||(D=Object(u.a)(["\n  display: flex;\n  padding: 4px 0;\n"])));function V(e){var t=e.node,r=e.state,c=Object(j.useRef)(),a=Object(_.c)({key:t.key,selectionManager:r.selectionManager,ref:c}).itemProps,s=Object(N.k)(Object(d.a)(Object(d.a)({},a),{},{onPress:function(){r.toggleKey(t.key)}})).pressProps,n=t.hasChildNodes&&r.expandedKeys.has(t.key),l=r.selectionManager.isSelected(t.key);return Object(g.jsxs)(q,Object(d.a)(Object(d.a)({},s),{},{"aria-expanded":t.hasChildNodes?n:null,"aria-selected":l,ref:c,role:"treeitem",children:[Object(g.jsxs)(U,{children:[t.hasChildNodes&&Object(g.jsx)(Q,{isExpanded:n}),t.rendered," (",t.level,")"]}),n&&Object(g.jsx)(G,{role:"group",children:T({nodes:t.childNodes,state:r})})]}))}var W=["One","Two","Three","Four"];function X(){return Object(g.jsx)(l.c,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{style:{marginLeft:100},children:Object(g.jsx)(C,{label:"select 1",items:W,children:o.map((function(e){return Object(g.jsx)(i.a,{children:e.namespace},e.namespace)}))})}),Object(g.jsx)("div",{style:{marginLeft:20},children:Object(g.jsxs)(J,{children:[Object(g.jsx)(i.a,{title:"Item 1",children:Object(g.jsxs)(i.a,{title:"Item 1.1",children:[Object(g.jsx)(i.a,{children:"Item 1.1.1"}),Object(g.jsx)(i.a,{children:"Item 1.1.2"}),Object(g.jsx)(i.a,{children:"Item 1.1.3"})]})}),Object(g.jsxs)(i.a,{title:"Item 2",children:[Object(g.jsxs)(i.a,{title:"Item 2.1",children:[Object(g.jsx)(i.a,{children:"Item 2.1.1"}),Object(g.jsx)(i.a,{children:"Item 2.1.2"}),Object(g.jsx)(i.a,{children:"Item 2.1.3"})]}),Object(g.jsxs)(i.a,{title:"Item 2.2",children:[Object(g.jsx)(i.a,{children:"Item 2.2.1"}),Object(g.jsx)(i.a,{children:"Item 2.2.2"}),Object(g.jsx)(i.a,{children:"Item 2.2.3"})]})]})]})})]})})}var Y=document.getElementById("root");n.a.render(Object(g.jsx)(X,{}),Y)}},[[65,1,2]]]);
//# sourceMappingURL=main.387a52cb.chunk.js.map