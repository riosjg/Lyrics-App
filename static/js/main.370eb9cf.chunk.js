(this.webpackJsonplyrics=this.webpackJsonplyrics||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),l=a.n(c),s=(a(23),a(4)),o=a.n(s),m=a(17),i=a(2),u=a(5),d=a.n(u),f=a(3),E=a(6),b=function(e){var t=e.setLyricSearch,a=Object(r.useState)({artist:"",song:""}),c=Object(i.a)(a,2),l=c[0],s=c[1],o=Object(r.useState)(!1),m=Object(i.a)(o,2),u=m[0],d=m[1],b=l.artist,p=l.song,h=function(e){s(Object(E.a)(Object(E.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"bg-info"},u?n.a.createElement("p",{className:"alert alert-danger text-center p-2"},"Every field must be completed."):null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==p.trim()?(d(!1),t(l)):d(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2"},n.a.createElement("fieldset",null,n.a.createElement("legend",{className:"text-center"},"Lyrics Finder"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Artist"),n.a.createElement("input",{onChange:h,type:"text",className:"form-control",name:"artist",placeholder:"Artist's name",value:b}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Song"),n.a.createElement("input",{onChange:h,type:"text",className:"form-control",name:"song",placeholder:"Song's name",value:p})))),n.a.createElement("button",{type:"submit",className:"btn btn-primary float-right"},"Search"))))))},p=function(e){var t=e.lyric;return 0===t.length?null:n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Lyrics"),n.a.createElement("p",{className:"lyric"},t))},h=function(e){var t=e.info;if(0===Object.keys(t).length)return null;var a=t.strArtistThumb,r=t.strGenre,c=t.strBiographyEN;return n.a.createElement("div",{className:"card border-light"},n.a.createElement("div",{className:"card-header bg-primary text-light font-weight-bold"},"Artist's information"),n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:a,alt:"Artist's Logo"}),n.a.createElement("p",{className:"card-text"},"Genre: ",r),n.a.createElement("h2",{className:"card-text"},"Biography: "),n.a.createElement("p",{className:"card-text"},c),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://".concat(t.strFacebook),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{href:"https://".concat(t.strTwitter),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"".concat(t.strLastFMChart),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-lastfm"})))))};var g=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),u=s[0],f=s[1],E=Object(r.useState)({}),g=Object(i.a)(E,2),v=g[0],N=g[1];return Object(r.useEffect)((function(){0!==Object.keys(a).length&&function(){var e=Object(m.a)(o.a.mark((function e(){var t,r,n,c,l,s,m,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artist,r=a.song,n="https://api.lyrics.ovh/v1/".concat(t,"/").concat(r),c="https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=5,Promise.all([d()(n),d()(c)]);case 5:l=e.sent,s=Object(i.a)(l,2),m=s[0],u=s[1],f(m.data.lyrics),N(u.data.artists[0]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,v]),n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{setLyricSearch:c}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(h,{info:v})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(p,{lyric:u})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.370eb9cf.chunk.js.map