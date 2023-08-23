"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[356],{15554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(86940),r=a(696),i=a.n(r),l=a(67627),o=a(92574),c=a(59728),s=a(34927),m=a(70218),d=a(77068);function u(e){var t=e.physicalItems,a=e.digitalItems,n=e.giftCertificates,r=e.customItems;return t.length+a.length+n.length+(r||[]).length}var p=a(87356);const h=(0,a(93363).Z)((function(){return l.createElement("svg",{fill:"none",height:"37",viewBox:"0 0 38 37",width:"38",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M38 18.5C38 28.7173 29.7173 37 19.5 37C9.28273 37 1 28.7173 1 18.5C1 8.28273 9.28273 0 19.5 0C29.7173 0 38 8.28273 38 18.5Z",fill:"#F3F3F3"}),l.createElement("path",{clipRule:"evenodd",d:"M24.6671 24.6674L12.9998 13.0002L14.4141 11.5859L26.0813 23.2532L24.6671 24.6674Z",fill:"black",fillRule:"evenodd"}),l.createElement("path",{clipRule:"evenodd",d:"M25.6674 13.0004L14.0002 24.6676L12.5859 23.2534L24.2532 11.5862L25.6674 13.0004Z",fill:"black",fillRule:"evenodd"}))}));var C=a(67106),y=a(46004),E=a(19984),f=a(9607),g=a(61005);const v=(0,l.memo)((function(e){var t=e.items,a=e.shopperCurrencyCode,n=e.storeCurrencyCode,r=e.amountWithCurrency,i=(0,d.Z)(t),c=a!==n,s=1===i?"cart.item":"cart.items";return l.createElement(l.Fragment,null,i," ",l.createElement(o.Z,{id:s})," | ",r," ",c&&l.createElement("span",null,"(",a,")"))}));var Z=a(65228),b=a(71282),k=a(48527),I=a(54701),L=a(50041),N=a(47112),x=function(e){var t,a=e.onRequestClose,n=e.headerLink,r=e.subHeaderText;return e.isUpdatedCartSummayModal?((0,l.isValidElement)(n)&&(t=(0,l.cloneElement)(n,{className:"modal-header-link cart-modal-link test"})),l.createElement(l.Fragment,null,null!=t?t:n,l.createElement(f.Z,{additionalClassName:"cart-modal-title"},l.createElement("div",null,l.createElement(o.Z,{id:"cart.cart_heading"}),l.createElement("div",{className:"cart-heading-subheader"},r))),l.createElement("a",{className:"cart-modal-close",href:"#",onClick:(0,C.Z)(a)},l.createElement("span",{className:"is-srOnly"},l.createElement(o.Z,{id:"common.close_action"})),l.createElement(h,null)))):l.createElement(l.Fragment,null,l.createElement("a",{className:"cart-modal-close",href:"#",onClick:(0,C.Z)(a)},l.createElement("span",{className:"is-srOnly"},l.createElement(o.Z,{id:"common.close_action"})),l.createElement(y.Z,null)),l.createElement(f.Z,{additionalClassName:"cart-modal-title"},l.createElement(o.Z,{id:"cart.cart_heading"})),n)};const _=function(e){var t=e.additionalLineItems,a=(e.children,e.isTaxIncluded),r=e.isUpdatedCartSummayModal,i=void 0!==r&&r,s=e.taxes,m=e.onRequestClose,d=e.onAfterOpen,u=e.storeCurrency,h=e.shopperCurrency,y=e.isOpen,f=e.headerLink,_=e.lineItems,A=e.total,w=(0,n.__rest)(e,["additionalLineItems","children","isTaxIncluded","isUpdatedCartSummayModal","taxes","onRequestClose","onAfterOpen","storeCurrency","shopperCurrency","isOpen","headerLink","lineItems","total"]),O=(0,l.useMemo)((function(){return(0,N.Z)(_)}),[_]),S=a&&s&&s.length>0,R=l.createElement(v,{amountWithCurrency:l.createElement(c.Z,{amount:A}),items:_,shopperCurrencyCode:h.code,storeCurrencyCode:u.code}),z=i&&(0,g.Z)()&&l.createElement(p.ZP,{className:"cart-modal-continue","data-test":"manage-instrument-cancel-button",onClick:(0,C.Z)(m)},l.createElement(o.Z,{id:"cart.return_to_checkout"}));return l.createElement(E.Z,{additionalBodyClassName:"cart-modal-body optimizedCheckout-orderSummary",additionalHeaderClassName:"cart-modal-header optimizedCheckout-orderSummary".concat(i?" with-continue-button":""),additionalModalClassName:i?"optimizedCheckout-cart-modal":"",footer:z,header:x({headerLink:f,subHeaderText:R,isUpdatedCartSummayModal:i,onRequestClose:m}),isOpen:y,onAfterOpen:d,onRequestClose:m},l.createElement(k.Z,null,l.createElement(Z.Z,{displayLineItemsCount:!i,items:O})),l.createElement(k.Z,null,l.createElement(I.Z,(0,n.__assign)({isTaxIncluded:a,taxes:s},w)),t),l.createElement(k.Z,null,l.createElement(L.Z,{orderAmount:A,shopperCurrencyCode:h.code,storeCurrencyCode:u.code})),S&&l.createElement(k.Z,null,l.createElement("h5",{className:"cart-taxItem cart-taxItem--subtotal optimizedCheckout-contentPrimary","data-test":"tax-text"},l.createElement(o.Z,{id:"tax.inclusive_label"})),(s||[]).map((function(e,t){return l.createElement(b.Z,{amount:e.amount,key:t,label:e.name,testId:"cart-taxes"})}))))};const A=(0,l.memo)((function(e){var t=e.additionalLineItems,a=e.coupons,r=e.discountAmount,p=e.giftCertificates,h=e.handlingAmount,C=e.headerLink,y=e.isTaxIncluded,E=e.isUpdatedCartSummayModal,f=e.lineItems,g=e.onRemovedCoupon,v=e.onRemovedGiftCertificate,Z=e.shippingAmount,b=e.shopperCurrency,k=e.storeCreditAmount,I=e.giftWrappingAmount,L=e.storeCurrency,N=e.subtotalAmount,x=e.taxes,A=e.total,w=e.fees,O=(0,l.useCallback)((function(e){return l.createElement(_,(0,n.__assign)({},e,{additionalLineItems:t,coupons:a,discountAmount:r,fees:w,giftCertificates:p,giftWrappingAmount:I,handlingAmount:h,headerLink:C,isTaxIncluded:y,isUpdatedCartSummayModal:E,lineItems:f,onRemovedCoupon:g,onRemovedGiftCertificate:v,shippingAmount:Z,shopperCurrency:b,storeCreditAmount:k,storeCurrency:L,subtotalAmount:N,taxes:x,total:A}))}),[t,a,r,p,h,C,y,f,g,v,I,Z,b,k,L,N,x,A,w]);return l.createElement(m.Z,{modal:O},(function(e){var t=e.onClick,a=e.onKeyPress;return l.createElement("div",{className:"cartDrawer optimizedCheckout-orderSummary",onClick:t,onKeyPress:a,tabIndex:0},l.createElement("figure",{className:i()("cartDrawer-figure",{"cartDrawer-figure--stack":u(f)>1})},l.createElement("div",{className:"cartDrawer-imageWrapper"},function(e){var t=e.physicalItems[0]||e.digitalItems[0];if(t&&t.imageUrl)return l.createElement("img",{alt:t.name,"data-test":"cart-item-image",src:t.imageUrl});if(e.giftCertificates.length)return l.createElement(s.Z,null)}(f))),l.createElement("div",{className:"cartDrawer-body"},l.createElement("h3",{className:"cartDrawer-items optimizedCheckout-headingPrimary"},l.createElement(o.Z,{data:{count:(0,d.Z)(f)},id:"cart.item_count_text"})),l.createElement("a",null,l.createElement(o.Z,{id:"cart.show_details_action"}))),l.createElement("div",{className:"cartDrawer-actions"},l.createElement("h3",{className:"cartDrawer-total optimizedCheckout-headingPrimary"},l.createElement(c.Z,{amount:A}))))}))}))},70218:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(86940),r=a(67627);const i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:!1},t.canHandleEvent=!1,t.handleOpen=function(){t.canHandleEvent&&t.setState({isOpen:!0})},t.handleClose=function(){t.canHandleEvent&&t.setState({isOpen:!1})},t.handleKeyOpen=function(e){"Enter"===e.key&&t.handleOpen()},t}return(0,n.__extends)(t,e),t.prototype.componentDidMount=function(){this.canHandleEvent=!0},t.prototype.componentWillUnmount=function(){this.canHandleEvent=!1},t.prototype.render=function(){var e=this.props,t=e.children,a=e.modal,n=this.state.isOpen;return r.createElement(r.Fragment,null,t({onClick:this.handleOpen,onKeyPress:this.handleKeyOpen}),a({isOpen:n,onRequestClose:this.handleClose}))},t}(r.Component)},87356:(e,t,a)=>{a.d(t,{Wu:()=>n,ZP:()=>m,qE:()=>r});var n,r,i=a(86940),l=a(696),o=a.n(l),c=a(67627);function s(e){var t=e.className,a=e.isFullWidth,i=e.isLoading,l=e.size,c=e.variant;return o()("button",t,{"button--primary":c===n.Primary},{"button--tertiary":c===n.Secondary},{"button--action":c===n.Action},{"button--small":l===r.Small},{"button--tiny":l===r.Tiny},{"button--large":l===r.Large},{"button--slab":a},{"optimizedCheckout-buttonPrimary":c===n.Primary||c===n.Action},{"optimizedCheckout-buttonSecondary":c===n.Secondary},{"is-loading":i})}!function(e){e.Primary="primary",e.Secondary="secondary",e.Action="action"}(n||(n={})),function(e){e.Small="small",e.Tiny="tiny",e.Large="large"}(r||(r={}));const m=function(e){var t=e.children,a=e.className,n=e.disabled,r=e.isFullWidth,l=e.isLoading,o=e.size,m=e.testId,d=e.type,u=e.variant,p=(0,i.__rest)(e,["children","className","disabled","isFullWidth","isLoading","size","testId","type","variant"]);return c.createElement("button",(0,i.__assign)({},p,{className:s({className:a,isFullWidth:r,isLoading:l,size:o,variant:u}),"data-test":m,disabled:n||l,type:d||"button"}),t)}}}]);
//# sourceMappingURL=order-summary-drawer-4f7b5e78.js.map