(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),s=a.n(c);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(1),o=a.n(l),i=a(4),u=a(3),m=a(2);function d(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),r=0;r<a.length;r++){var n=a[r].trim();if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}return t}var f=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var r,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="http://127.0.0.1:8000/api/".concat(a),e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.endpoint,r="http://127.0.0.1:8000/api/".concat(a),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r,n,c,s,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.endpoint,r=t.payload,n="http://127.0.0.1:8000/api/".concat(a),c=d("csrftoken"),s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":c},body:JSON.stringify(r)},e.next=6,fetch(n,s);case 6:return l=e.sent,e.next=9,l.json();case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.handleTweetCreate,a=Object(r.useState)(""),c=Object(u.a)(a,2),s=c[0],l=c[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0===s.trim().length?alert("Tweet cannot be blank"):t(s),l("")}},n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{name:"",className:"form-control",id:"",rows:"4",value:s,onChange:function(e){return l(e.target.value)}}),n.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Tweet"})))},h=function(e){var t=e.tweet,a=e.requestUserId,r=e.handleLike,c="h5 text-secondary";t.liked_by.includes(parseInt(a,10))&&(c="h5 text-primary");return n.a.createElement("div",{className:"card mb-4"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.author.username),n.a.createElement("div",{className:""},n.a.createElement("p",{className:"card-text"},t.content)),n.a.createElement("span",{className:"mr-2"},"".concat(t.liked_by.length)),n.a.createElement("span",{className:"".concat(c," mr-2 clickable"),onClick:function(){return r(t.id)}},n.a.createElement("i",{className:"fa fa-thumbs-up"})),n.a.createElement("button",{className:"btn btn-sm btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View"),n.a.createElement("small",{className:"float-right"},t.timestamp)))},b=function(e){var t=e.tweetList,a=e.refetch,r=e.requestUserId,c=Object(m.a)(p,{onSuccess:a}),s=Object(u.a)(c,1)[0],l=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="tweets/".concat(t,"/like/"),e.prev=1,e.next=4,s({endpoint:a});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("tweet like error");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),d=t.map((function(e){return n.a.createElement(h,{key:e.id,tweet:e,handleLike:l,requestUserId:r})}));return n.a.createElement("div",{className:""},d)},w=function(e){var t=e.requestUserId,a=e.tweetId,r=Object(m.b)(["tweetItem","tweets/".concat(a,"/")],f),c=r.data,s=r.refetch,l=r.status,d=Object(m.a)(p,{onSuccess:s}),v=Object(u.a)(d,1)[0],E=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="tweets/".concat(t,"/like/"),e.prev=1,e.next=4,v({endpoint:a});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("tweet like error");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();if("loading"===l)return n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading"));if("error"===l)return n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again"));if("success"===l){if("not found"===c.error_message)return n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error 404 : Not Found"));var h="h5 text-secondary";return c.liked_by.includes(parseInt(t,10))&&(h="h5 text-primary"),n.a.createElement("div",{className:"card mb-4"},n.a.createElement("div",{className:"card-header clickable",onClick:function(){return e=c.author.username,void(window.location.href="/".concat(e));var e}},c.author.username),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},c.content),n.a.createElement("span",{className:"mr-2"},"".concat(c.liked_by.length)),n.a.createElement("span",{className:"".concat(h," mr-2 clickable"),onClick:function(){return E(c.id)}},n.a.createElement("i",{className:"fa fa-thumbs-up"})),n.a.createElement("small",{className:"float-right"},c.timestamp)))}},N=function(e){var t=e.handleProfileSidebarLink,a=e.userProfile,r=e.requestUserId,c=e.userProfileRefetch,s=Object(m.a)(p,{onSuccess:function(){c()}}),l=Object(u.a)(s,1)[0],d=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="accounts/".concat(t,"/follow/"),e.next=3,l({endpoint:a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="btn-primary",v="Follow";a.user.id===parseInt(r,10)?f="d-none":a.followers.includes(parseInt(r,10))&&(f="btn-danger",v="Unfollow");return n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile-header"},n.a.createElement("div",{className:"profile-usertitle"},n.a.createElement("div",{className:"profile-user-full-name"},"".concat(a.user.first_name," ").concat(a.user.last_name)),n.a.createElement("div",{className:"profile-user-username"},"@".concat(a.user.username))),n.a.createElement("div",{className:"profile-userbuttons"},n.a.createElement("button",{className:"btn btn-sm ".concat(f),onClick:function(){return d(a.user.username)}},"".concat(v))),n.a.createElement("div",{className:"profile-user-bio"},"".concat(a.bio))),n.a.createElement("div",{className:"profile-usermenu"},n.a.createElement("ul",null,n.a.createElement("li",{id:"profile-tweets-list",className:"active",onClick:function(){return t("tweets")}},"Tweets (".concat(a.tweet_count,")")),n.a.createElement("li",{id:"profile-followers-list",onClick:function(){return t("followers")}},"Followers (".concat(a.follower_count,")")),n.a.createElement("li",{id:"profile-following-list",onClick:function(){return t("following")}},"Following (".concat(a.following_count,")")))))},g=function(e){return n.a.createElement("div",{className:"scroller"},e.children)},x=function(e){var t=e.profileUsername,a=e.requestUserId,r=Object(m.b)(["userTweetList","accounts/".concat(t,"/tweets/")],f),c=r.data,s=r.status,l=r.refetch;return"loading"===s?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading")):"error"===s?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again")):"success"===s?"not found"===c.error_message?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error 404 : Not Found")):n.a.createElement(b,{tweetList:c,refetch:l,requestUserId:a}):void 0},k=function(e){var t=e.profile,a=e.requestUserId,r=e.refetch,c=e.userProfileRefetch,s=Object(m.a)(p,{onSuccess:function(){r(),c()}}),l=Object(u.a)(s,1)[0],d=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="accounts/".concat(t,"/follow/"),e.next=3,l({endpoint:a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="btn-primary",v="Follow";t.user.id===parseInt(a,10)?f="d-none":t.followers.includes(parseInt(a,10))&&(f="btn-danger",v="Unfollow");return n.a.createElement("div",{className:"profile-card mb-3"},n.a.createElement("div",{className:"profile-card-header"},n.a.createElement("div",{className:"profile-card-usertitle"},n.a.createElement("div",{className:"profile-card-user-full-name"},"".concat(t.user.first_name," ").concat(t.user.last_name)),n.a.createElement("div",{className:"profile-card-user-username"},"@".concat(t.user.username))),n.a.createElement("button",{className:"profile-card-userbutton btn ".concat(f),onClick:function(){return d(t.user.username)}},"".concat(v))),n.a.createElement("div",{className:"profile-card-user-bio"},"".concat(t.bio)))},y=function(e){var t=e.userProfileList,a=e.requestUserId,r=e.refetch,c=e.userProfileRefetch,s=t.map((function(e){return n.a.createElement(k,{key:e.id,profile:e,requestUserId:a,refetch:r,userProfileRefetch:c})}));return n.a.createElement(n.a.Fragment,null,s)},I=function(e){var t=e.profileUsername,a=e.requestUserId,r=e.userProfileRefetch,c=Object(m.b)(["followerList","accounts/".concat(t,"/followers/")],f),s=c.data,l=c.status,o=c.refetch;return"loading"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading")):"error"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again")):"success"===l?"not found"===s.error_message?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error 404 : Not Found")):n.a.createElement(y,{userProfileList:s,requestUserId:a,refetch:o,userProfileRefetch:r}):void 0},j=function(e){var t=e.profileUsername,a=e.requestUserId,r=e.userProfileRefetch,c=Object(m.b)(["followingList","accounts/".concat(t,"/following/")],f),s=c.data,l=c.status,o=c.refetch;return"loading"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading")):"error"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again")):"success"===l?n.a.createElement(y,{userProfileList:s,requestUserId:a,refetch:o,userProfileRefetch:r}):void 0},O=document.getElementById("tweet-list");if(O){var U=n.a.createElement((function(e){var t=e.requestUserId,a=Object(m.b)(["tweetListState","tweets/"],f),r=a.data,c=a.status,s=a.refetch,l=Object(m.a)(v,{onSuccess:s}),d=Object(u.a)(l,1)[0],p=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"tweets/create/",a={content:t},e.prev=2,e.next=5,d({endpoint:"tweets/create/",payload:a});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("tweet create error");case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return"loading"===c?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading")):"error"===c?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again")):"success"===c?"not found"===r.error_message?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error 404 : Not Found")):n.a.createElement("div",{className:"col-12 col-md-5 offset-md-2"},n.a.createElement(n.a.Fragment,null,t&&n.a.createElement(E,{handleTweetCreate:p})),n.a.createElement(n.a.Fragment,null,n.a.createElement(b,Object.assign({tweetList:r,refetch:s},e)))):void 0}),O.dataset);s.a.render(U,O)}var L=document.getElementById("tweet-detail");if(L){var q=n.a.createElement((function(e){return n.a.createElement("div",{className:"col-12 col-md-5 offset-md-2"},n.a.createElement(w,e))}),L.dataset);s.a.render(q,L)}var P=document.getElementById("user-profile");if(P){var _=n.a.createElement((function(e){var t=e.profileUsername,a=e.requestUserId,c=Object(m.b)(["userDetailState","accounts/".concat(t,"/")],f),s=c.data,l=c.status,o=c.refetch,i=Object(r.useState)("tweets"),d=Object(u.a)(i,2),p=d[0],v=d[1],E=["tweets","followers","following"];return"loading"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Loading")):"error"===l?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error. Try Again")):"success"===l?"not found"===s.error_message?n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,"Error 404 : Not Found")):n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"fixed-div"},n.a.createElement(g,null,n.a.createElement(N,{userProfile:s,handleProfileSidebarLink:function(e){v(e),E.forEach((function(e){document.getElementById("profile-".concat(e,"-list")).classList.remove("active")})),document.getElementById("profile-".concat(e,"-list")).classList.add("active")},requestUserId:a,userProfileRefetch:o}))),n.a.createElement("div",{className:"col-10 col-md-6 mx-auto mt-5"},"tweets"===p&&n.a.createElement(x,{profileUsername:t,requestUserId:a}),"followers"===p&&n.a.createElement(I,{profileUsername:t,requestUserId:a,userProfileRefetch:o}),"following"===p&&n.a.createElement(j,{profileUsername:t,requestUserId:a,userProfileRefetch:o})))):void 0}),P.dataset);s.a.render(_,P)}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a1efb517.chunk.js.map