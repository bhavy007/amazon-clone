(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(25),i=c.n(s),r=(c(48),c(38)),o=c(13),l=(c(49),c(50),c(40)),j=c.n(l),d=c(41),u=c.n(d),m=c(20),h=c(2),b=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(h.jsx)(b.Provider,{value:Object(a.useReducer)(t,c),children:n})},p=function(){return Object(a.useContext)(b)},g=c(31),x=(g.a.initializeApp({apiKey:"AIzaSyDMVxAZXeLeEYPvH6lLD0i2ekG_kbNVC_8",authDomain:"clone-7dee2.firebaseapp.com",projectId:"clone-7dee2",storageBucket:"clone-7dee2.appspot.com",messagingSenderId:"42458118057",appId:"1:42458118057:web:5d75dbf39b136291dc36b8",measurementId:"G-F5RDG2LBKC"}).firestore(),g.a.auth());var _=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,n=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"header_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(h.jsxs)("div",{className:"header_search",children:[Object(h.jsx)("input",{className:"header_searchInput",type:"text"}),Object(h.jsx)(j.a,{className:"header_searchIcon"})]}),Object(h.jsxs)("div",{className:"header_nav",children:[Object(h.jsx)(m.b,{to:!n&&"./login",children:Object(h.jsxs)("div",{onClick:function(){n&&x.signOut()},className:"header_option",children:[Object(h.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",n?null===n||void 0===n?void 0:n.email:"Guest"]}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]})]}),Object(h.jsx)(m.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header_optionBasket",children:[Object(h.jsx)("span",{className:"header_optionLineTwo header_basketCount",children:null===a||void 0===a?void 0:a.length}),Object(h.jsx)(u.a,{className:"header_shoppingBasket"})]})})]})};c(62),c(63);var v=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product_info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product_price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:n})]}),Object(h.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{className:"product_image",src:a,alt:"product_image"}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:n,rating:s}})},className:"product_button",children:"Add to Basket"})]})};var f=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)("img",{className:"home_image",src:"https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg",alt:"home-img"}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{title:"2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey",price:1029.99,image:"https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg",rating:5}),Object(h.jsx)(v,{title:"New Apple Watch Series 6 (GPS + Cellular, 44mm) - Product(RED) - Aluminium Case with Product(RED) - Sport Band\n",price:279.99,image:"https://m.media-amazon.com/images/I/812m5ITIUjL._AC_UY218_.jpg",rating:5})]}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(v,{title:"New Apple iPhone 12 Pro Max (256GB) - Gold",price:1279,image:"https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_UY218_.jpg",rating:5}),Object(h.jsx)(v,{title:"Samsung S21 Ultra 5G with Snapdragon 888 (Phantom Black, 12GB RAM, 256GB Storage)",price:1179,image:"https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_UY218_.jpg",rating:5}),Object(h.jsx)(v,{title:"OnePlus 9 Pro 5G (Morning Mist, 12GB RAM, 256GB Storage)",price:899,image:"https://m.media-amazon.com/images/I/61LvUvbZGlL._AC_UY218_.jpg",rating:5})]}),Object(h.jsx)("div",{className:"home_row",children:Object(h.jsx)(v,{title:"Samsung 190 cm (75 inches) 8K Ultra HD Smart QLED TV QA75Q900RBKXXL (Black) (2019 Model)",price:5099,image:"https://m.media-amazon.com/images/I/91cFq-Y9NLL._AC_UY218_.jpg",rating:5})})]})})},N=c(10);c(64),c(65);var k=function(e){var t=e.id,c=e.image,a=e.title,n=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct_image",src:c}),Object(h.jsxs)("div",{className:"checkoutProduct_info",children:[Object(h.jsx)("p",{className:"checkoutProduct_title",children:a}),Object(h.jsxs)("p",{className:"checkoutProduct_price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:n})]}),Object(h.jsx)("div",{className:"checkoutProduct_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))}),Object(h.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},className:"checkoutProduct_info_button",children:"Remove from Basket"})]})]})},S=(c(66),c(42)),A=c.n(S),C=c(32),B=c(22),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(C.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product (id: ${action.id}) as its not in basket"),Object(B.a)(Object(B.a)({},e),{},{basket:a});case"SET_USER":return Object(B.a)(Object(B.a)({},e),{},{user:t.user});default:return e}};var I=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(A.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",Object(h.jsx)("strong",{children:null===c||void 0===c?void 0:c.length})," ",1===(null===c||void 0===c?void 0:c.length)?"item":"items","): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal_gift",children:[Object(h.jsx)("input",{className:"subtotal_giftInput",type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:P(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{className:"subtotal_button",children:"Proceed to Checkout"})]})};var w=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,n=c.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout_left",children:[Object(h.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492688_.jpg",alt:"cardOffer"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello ",null===n||void 0===n?void 0:n.email]}),Object(h.jsx)("h2",{className:"checkout_title",children:"Your Shopping Basket"}),a.map((function(e){return Object(h.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout_right",children:Object(h.jsx)(I,{})})]})};c(68);var L=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(N.f)("");return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"})}),Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{onChange:function(e){return n(e.target.value)},value:c,type:"text"}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},value:r,type:"password"}),Object(h.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),x.signInWithEmailAndPassword(c,r).then((function(e){j.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By continuing, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice."}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),x.createUserWithEmailAndPassword(c,r).then((function(e){e&&j.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Create your Amazon Account"})]})]})};var y=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){console.log("The user is >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(m.a,{children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{path:"/login",children:Object(h.jsx)(L,{})}),Object(h.jsxs)(N.a,{path:"/checkout",children:[Object(h.jsx)(_,{}),Object(h.jsx)(w,{})]}),Object(h.jsxs)(N.a,{path:"/",children:[Object(h.jsx)(_,{}),Object(h.jsx)(f,{})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:E,children:Object(h.jsx)(y,{})})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.69cc0a04.chunk.js.map