(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__XjU41",label:"Filter_label__1A11C",input:"Filter_input__LchWi"}},13:function(t,e,n){t.exports={container:"Container_container__2kbiK"}},22:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__2P4wC",label:"ContactForm_label__2XmB1",input:"ContactForm_input__aTzwJ",button:"ContactForm_button__1OUSa"}},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(12),s=n.n(i),o=(n(21),n(22),n(15)),l=n(6),u=n(7),b=n(9),m=n(8),d=n(2),h=n.n(d),j=n(13),p=n.n(j),f=function(t){var e=t.children;return Object(a.jsx)("div",{className:p.a.container,children:e})},_=function(t){var e=t.title,n=t.level,c="h".concat(void 0===n?1:n);return Object(a.jsx)(c,{children:e})},C=n(14),O=n(3),v=n.n(O),x=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:v.a.label,htmlFor:this.nameInputId,children:[" ","Name"," "]}),Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId}),Object(a.jsxs)("label",{className:v.a.label,htmlFor:this.numberInputId,children:[" ","Number"," "]}),Object(a.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId}),Object(a.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),g=n(4),I=n.n(g),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:I.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:I.a.listItem,children:[Object(a.jsxs)("p",{className:I.a.text,children:[c," : ",r]}),Object(a.jsx)("button",{className:I.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(10),F=n.n(y),S=h.a.generate(),w=function(t){var e=t.name,n=t.onChange;return Object(a.jsxs)("div",{className:F.a.filterWrapper,children:[Object(a.jsx)("label",{className:F.a.label,htmlFor:S,children:"Find contacts by name"}),Object(a.jsx)("input",{className:F.a.input,type:"text",value:e,onChange:n,id:S})]})},L=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:h.a.generate(),name:e,number:n};t.state.contacts.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):""===a.name?alert("Please enter your name"):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)(_,{title:"Phonebook",level:1}),Object(a.jsx)(x,{onSubmit:this.addContact}),Object(a.jsx)(_,{title:"Contacts",level:2}),Object(a.jsx)(w,{value:t,onChange:this.changeFilter}),Object(a.jsx)(N,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactList:"ContactsList_contactList__2ZeDc",listItem:"ContactsList_listItem__ntPcY",text:"ContactsList_text__XFdg8",button:"ContactsList_button__1pFpV"}}},[[31,1,2]]]);
//# sourceMappingURL=main.69ce4b53.chunk.js.map