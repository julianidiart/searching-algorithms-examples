(this["webpackJsonpsearching-algorithms-examples"]=this["webpackJsonpsearching-algorithms-examples"]||[]).push([[0],{37:function(e,n,a){e.exports=a(82)},81:function(e,n,a){},82:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(7),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(3),s=a(15),o=a(10),u=function e(n,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t>0&&r.push({index:t-1,classes:""}),t>n.length-1?r:(r.push({index:t,classes:"searching--checking"}),n[t].value===a?(r.push({index:t,classes:"searching--matched"}),r):e(n,a,++t,r))},m=function e(n,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(t>r)return c;var i=Math.floor((t+r)/2);return c.push({index:i-1,classes:"searching--checking"}),n[i-1].value===a?(c.push({index:i-1,classes:"searching--matched"}),c):n[i-1].value>a?(c.push({index:i-1,classes:""}),e(n,a,t,i-1,c)):(c.push({index:i-1,classes:""}),e(n,a,i+1,r,c))},d=Object(t.createContext)([]),h=function(e){var n=Object(t.useState)([]),a=Object(l.a)(n,2),c=a[0],i=a[1],s=Object(t.useState)(10),h=Object(l.a)(s,2),b=h[0],g=h[1],v=Object(t.useState)(!1),f=Object(l.a)(v,2),p=f[0],E=f[1],x=Object(t.useState)(!1),O=Object(l.a)(x,2),j=O[0],S=O[1],y=Object(t.useState)(1),N=Object(l.a)(y,2),C=N[0],k=N[1],w=Object(t.useState)(10),T=Object(l.a)(w,2),I=T[0],M=T[1];Object(t.useEffect)((function(){B()}),[b]),Object(t.useEffect)((function(){var e=JSON.stringify(Object(o.a)(c))===JSON.stringify(Object(o.a)(c).sort((function(e,n){return e.value-n.value})));E(e)}),[c]);var B=function(){for(var e=[],n=0;n<b;n++)e.push({id:J(),value:P(0,99),classes:""});i(e)},J=function(){function e(){return Math.random().toString(16).slice(-4)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},P=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},R=function(e){S(!0),e.forEach((function(e,n){setTimeout((function(){var n=Object(o.a)(c);if(n[e.index].classes=e.classes,void 0!==e.toIndex){var a=n[e.toIndex].value;n[e.toIndex].value=n[e.index].value,n[e.index].value=a}i(n)}),n*(500/C))})),setTimeout((function(){S(!1)}),e.length*(500/C))};return r.a.createElement(d.Provider,{value:{generateRandomNumbers:B,handleBinarySearch:function(){var e=m(c,I);console.log(e),R(e)},handleLinearSearch:function(){var e=u(c,I);R(e)},handleSort:function(){var e=Object(o.a)(c).sort((function(e,n){return e.value-n.value}));i(e)},numbers:c,onChangeQuantity:function(e){var n=e.target;+n.value>99?g(99):+n.value<2?g(2):g(+n.value)},onChangeSpeed:function(e){var n=e.target;k(n.value)},onChangeValueToSearch:function(e){var n=e.target;+n.value>99?M(99):+n.value<0||""===n.value?M(0):M(+n.value)},quantity:b,searching:j,setNumbers:i,sorted:p,speed:C,valueToSearch:I}},e.children)},b=d,g=function(){var e=Object(t.useContext)(b);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{onDragEnd:function(n){if(n.destination){var a=function(e,n,a){var t=Array.from(e),r=t.splice(n,1),c=Object(l.a)(r,1)[0];return t.splice(a,0,c),t}(e.numbers,n.source.index,n.destination.index);e.setNumbers(a)}}},r.a.createElement(s.c,{droppableId:"droppable",direction:"horizontal"},(function(n){return r.a.createElement("div",Object.assign({className:"numbers-container",ref:n.innerRef},n.droppableProps),e.numbers.map((function(e,n){return r.a.createElement(s.b,{key:e.id,draggableId:e.id,index:n},(function(n,a){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{className:e.classes}),r.a.createElement("div",{className:a.isDragging?"number number--dragging":"number"},e.value))}))})),n.placeholder)}))))},v=function(){var e=Object(t.useContext)(b);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:"button",onClick:e.generateRandomNumbers,disabled:e.searching},"Generate random numbers"),r.a.createElement("button",{className:"button",onClick:e.handleSort,disabled:e.searching},"Sort numbers")),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:"button",onClick:e.handleLinearSearch,disabled:e.searching},"Linear search"),r.a.createElement("button",{className:"button",onClick:e.handleBinarySearch,disabled:!e.sorted||e.searching},"Binary search")))},f=function(){var e=Object(t.useContext)(b);return r.a.createElement("div",{className:"buttons-container buttons-container--configuration"},r.a.createElement("div",null,"Searching for the number"),r.a.createElement("input",{className:"number",max:"99",min:"0",onChange:e.onChangeValueToSearch,step:"1",style:{width:"".concat(24*(""+e.valueToSearch).length,"px")},type:"number",value:e.valueToSearch}),r.a.createElement("div",null,"in"),r.a.createElement("input",{className:"number number--config",max:"99",min:"2",onChange:e.onChangeQuantity,step:"1",style:{width:"".concat(24*(""+e.quantity).length,"px")},type:"number",value:e.quantity}),r.a.createElement("div",null,"numbers at"),r.a.createElement("input",{className:"number number--config",disabled:e.sorting,min:"1",onChange:e.onChangeSpeed,step:"1",style:{width:"".concat(17*(""+e.speed).length,"px")},type:"number",value:e.speed}),r.a.createElement("div",null,"x speed."))},p=function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"page-container"},r.a.createElement("h1",null,"Searching Algorithms Examples"),r.a.createElement(f,null),r.a.createElement(g,null),r.a.createElement(v,null)))};a(81);i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.11a10bdf.chunk.js.map