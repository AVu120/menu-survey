(this["webpackJsonpmenu-survey"]=this["webpackJsonpmenu-survey"]||[]).push([[0],{11:function(e,t,n){e.exports={rating_holder:"StarRatingScale_rating_holder__1fTtU",rating_bar:"StarRatingScale_rating_bar__1bLrH",rating_icon:"StarRatingScale_rating_icon__1-61W",rotate:"StarRatingScale_rotate__36h8l"}},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(19),r=n.n(s),i=(n(27),n(28),n(2)),o={"fried-rice":"Fried Rice",noodles:"Noodles",pancakes:"Pancakes"},_=n(1),l=function(){var e=Object(i.f)();return Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Select your item:"}),Object(_.jsxs)("select",{onChange:function(t){return e.push("/survey/".concat(t.target.value))},children:[Object(_.jsx)("option",{selected:!0,disabled:!0,style:{display:"none"}}),Object.keys(o).map((function(e){return Object(_.jsx)("option",{value:e,children:o[e]},"menu-item-".concat(e))}))]})]})},u=n(12),b=n(9),j=n.n(b),m=function(e){var t=e.selectedEmoticon;return Object(_.jsxs)("div",{className:j.a.face,children:[Object(_.jsx)("div",{className:j.a.left_eye}),Object(_.jsx)("div",{className:j.a.mouth,children:Object(_.jsx)("div",{className:j.a[t]})}),Object(_.jsx)("div",{className:j.a.right_eye})]})},d=n(21),v=n.n(d),h=n(22),y=n.n(h),O=n(11),f=n.n(O),x=function(e){var t=e.selectedRating,n=e.starCount,c=e.hoverRating,a=e.onClick,s=e.onMouseOver,r=e.onMouseLeave;return Object(_.jsx)("div",{className:f.a.rating_holder,children:Object(_.jsx)("div",{className:f.a.rating_bar,children:Array(n).fill(null).map((function(e,n){return Object(_.jsx)("div",{className:"".concat(f.a.rating_icon," ").concat(t>=n+1||c>=n+1?"".concat(f.a.rotate):""),onClick:function(){return a(n+1)},onMouseOver:function(){return s(n+1)},onMouseLeave:r,children:t>=n+1||c>=n+1?Object(_.jsx)(v.a,{}):Object(_.jsx)(y.a,{})},n+1)}))})})},p=n(7),S=n.n(p),g=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(u.a)(s,2),o=r[0],l=r[1],b=Object(c.useState)(!1),j=Object(u.a)(b,2),d=j[0],v=j[1],h=Object(i.f)(),y={1:"shock",2:"sad",3:"flat",4:"smile",5:"happy"};return Object(_.jsxs)("div",{className:"".concat(S.a.Survey," ").concat(S.a[y[o]||"smile"]),children:[Object(_.jsx)(m,{selectedEmoticon:y[o]||"smile"}),d?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:S.a.survey_submitted_label,children:["Thank you!",Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),"Your feedback has been submitted."]}),Object(_.jsx)("button",{type:"button",className:S.a.button,onClick:function(){return h.push("/")},children:"Return to menu"})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:S.a.rate_meal_label,children:"Rate your meal"}),Object(_.jsx)(x,{starCount:5,hoverRating:n,selectedRating:o,onClick:function(e){l(e)},onMouseOver:function(e){a(e)},onMouseLeave:function(e){a(e)}}),o>0&&Object(_.jsxs)("div",{className:S.a.submit_form,children:[Object(_.jsx)("div",{className:S.a.comment_input_label,children:"Leave a comment (optional)?"}),Object(_.jsx)("textarea",{rows:4,cols:50,className:S.a.comment_input}),Object(_.jsx)("button",{type:"button",className:S.a.button,onClick:function(){return v(!d)},children:"Submit feedback"})]})]})]})},k=n(15);var N=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(k.a,{children:Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{exact:!0,path:"/survey/:item",children:Object(_.jsx)(g,{})}),Object(_.jsx)(i.a,{path:"/",children:Object(_.jsx)(l,{})})]})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(N,{})}),document.getElementById("root")),E()},7:function(e,t,n){e.exports={Survey:"Survey_Survey__27M8K",shock:"Survey_shock__1_o0K",sad:"Survey_sad__kfH3K",flat:"Survey_flat__XeK-z",smile:"Survey_smile__2g5Sn",happy:"Survey_happy__E8Dx-",label:"Survey_label__Y3aH2",rate_meal_label:"Survey_rate_meal_label__1VWwj Survey_label__Y3aH2",comment_input_label:"Survey_comment_input_label__1E_jv Survey_label__Y3aH2",survey_submitted_label:"Survey_survey_submitted_label__1fnLP Survey_label__Y3aH2",comment_input:"Survey_comment_input__2J5cM",submit_form:"Survey_submit_form__194nb",review_form:"Survey_review_form___nxMi",button:"Survey_button__uwtK7"}},9:function(e,t,n){e.exports={face:"Emoticon_face__3uGxY",eye:"Emoticon_eye__11TGG",left_eye:"Emoticon_left_eye__23D8Q Emoticon_eye__11TGG",right_eye:"Emoticon_right_eye__3jxU- Emoticon_eye__11TGG",mouth:"Emoticon_mouth__1wDri",shock:"Emoticon_shock__198mU",sad:"Emoticon_sad__2hsz-",flat:"Emoticon_flat__3sp-l",smile:"Emoticon_smile__OYnCI",happy:"Emoticon_happy__3IoIC"}}},[[35,1,2]]]);
//# sourceMappingURL=main.0e9f96b3.chunk.js.map