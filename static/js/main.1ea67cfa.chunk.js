(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=n(0),i=function(){return Object(s.jsx)("h2",{children:"Expense Tracker"})},o=(n(14),n(3)),j=n(8),u=n(4),l=function(e){var t=e.transaction,n=Object(c.useContext)(x).deleteTransaction,r=t.amount<0?"-":"+";return Object(s.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(s.jsxs)("span",{children:[r,"$",Math.abs(t.amount)]}),Object(s.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})},d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(u.a)(Object(u.a)({},e),{},{transactions:[t.payload].concat(Object(j.a)(e.transactions))});default:return e}},b={transactions:[]},x=Object(c.createContext)(b),O=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.jsx)(x.Provider,{value:{transactions:a.transactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance"}),Object(s.jsxs)("h1",{children:["$",e]})]})},m=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsx)("p",{className:"money plus",children:t})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsx)("p",{className:"money minus",children:n})]})]})},f=function(){var e=Object(c.useContext)(x).transactions;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"History"}),Object(s.jsx)("ul",{className:"list",children:e.map((function(e){return Object(s.jsx)(l,{transaction:e},e.id)}))})]})},p=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),j=i[0],u=i[1],l=Object(c.useContext)(x).addTransaction;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+j};l(t)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(s.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(s.jsx)("input",{type:"number",value:j,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(s.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var v=function(){return Object(s.jsxs)(O,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(h,{}),Object(s.jsx)(m,{}),Object(s.jsx)(f,{}),Object(s.jsx)(p,{})]})]})};a.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1ea67cfa.chunk.js.map