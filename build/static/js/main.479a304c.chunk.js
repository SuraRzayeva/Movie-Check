(this["webpackJsonpmovie-night"]=this["webpackJsonpmovie-night"]||[]).push([[0],{21:function(n,e,t){n.exports=t.p+"static/media/SRLogo.5db18709.png"},22:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},26:function(n,e,t){n.exports=t(40)},40:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(19),c=t.n(i),o=t(4),l=t(21),m=t.n(l),s=t(22),p=t.n(s),u=t(1),d=t(2);function f(){var n=Object(u.a)(["\n  width: 100px;\n  margin-top: 20px;\n  float: right;\n  @media screen and (max-width: 500px) {\n    width: 90px;\n    margin-top: 5px;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(u.a)(["\n  height: 50px;\n  margin: 15px 0 0 15px;\n  @media screen and (max-width: 500px) {\n    display: inline-block;\n    height: 40px;\n    margin-top: 0px;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n  background: #1c1c1c;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  .header-content {\n    max-width: 1280px;\n    min-height: 120px;\n    padding: 20px 0px;\n    margin: 0 auto;\n    box-sizing: border-box;\n\n    @media screen and (max-width: 500px) {\n      max-width: 1280px;\n      min-height: 0px;\n    }\n  }\n"]);return g=function(){return n},n}var b=d.b.div(g()),h=d.b.img(x()),v=d.b.img(f()),E=function(){return r.a.createElement(b,null,r.a.createElement("div",{className:"header-content"},r.a.createElement(o.a,{to:"/"},r.a.createElement(h,{src:m.a,alt:""})),r.a.createElement(v,{src:p.a,alt:""})))},w=t(3),j="https://api.themoviedb.org/3/",k="c6d64194dbb865e9021dfc7c4ef89ee6",O="http://image.tmdb.org/t/p/",y="".concat(j,"search/movie?api_key=").concat(k,"&query="),z="".concat(j,"movie/popular?api_key=").concat(k);function N(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(100px, 1fr));\n  grid-gap: 40px;\n  position: relative;\n\n  .grid-element {\n    animation: animateGrid 0.5s;\n  }\n\n  @keyframes animateGrid {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 375px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return N=function(){return n},n}function S(){var n=Object(u.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  h1 {\n    font-size: 42px;\n    text-transform: uppercase;\n    color: #1c1c1c;\n    text-align: center;\n    margin: 30px 0 30px 0;\n\n    @media screen and (max-width: 768px) {\n      font-size: 22px;\n    }\n  }\n"]);return S=function(){return n},n}var _=d.b.div(S()),I=d.b.div(N()),R=function(n){var e=n.header,t=n.children;return r.a.createElement(_,null,r.a.createElement("h1",null," ",e),r.a.createElement(I,null,t))};function M(){var n=Object(u.a)(["\n  background: ",";\n  background-size: 100%, cover !important;\n  background-position: center, center !important;\n  width: 100%;\n  height: 650px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  .heroimage-content {\n    max-width: 150px;\n    padding: 20px;\n    margin: 0 auto;\n  }\n\n  .hero-wrapper {\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    margin-right: 20px;\n    min-height: 100px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n    padding-left: 50px;\n    text-align: center;\n\n    .hero-text {\n      h1 {\n        font-size: 48px;\n        color: #fff;\n\n        @media screen and (max-width: 720px) {\n          font-size: 38px;\n          color: #fff;\n        }\n      }\n\n      p {\n        font-size: 20px;\n        line-height: 30px;\n        color: #fff;\n\n        @media screen and (max-width: 720px) {\n          font-size: 14px;\n          line-height: 20px;\n          color: #fff;\n        }\n      }\n\n      @media screen and (max-width: 720px) {\n        max-width: 100%;\n      }\n    }\n  }\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return M=function(){return n},n}var J=d.b.div(M(),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), #1c1c1c")})),P=function(n){var e=n.image,t=n.title,a=n.description;return r.a.createElement(J,{image:e},r.a.createElement("div",{className:"hero-wrapper"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a))))};function D(){var n=Object(u.a)(["\n  background: #1c1c1c;\n  width: 20%;\n  min-width: 200px;\n  height: 60px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 40px;\n  font-size: 20px;\n  max-width: 1280px;\n  display: block;\n  margin: 20px auto;\n  padding: 0 20px;\n  outline: none;\n  border-style: none;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return D=function(){return n},n}var F=d.b.button(D()),T=function(n){var e=n.text,t=n.callback;return r.a.createElement(F,{onClick:t,type:"button"}," ",e," ")};function C(){var n=Object(u.a)(["\n  img {\n    width: 100%;\n    height: auto;\n    /* max-height: 350px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\n    /* @media screen and (max-width: 1024px) {\n      height: 300px;\n    }\n\n    @media screen and (max-width: 768px) {\n      height: 350px;\n    }\n\n    @media screen and (max-width: 600px) {\n      max-height: 300px;\n    }\n\n    @media screen and (max-width: 375px) {\n      max-height: 450px;\n    } */\n  }\n\n  .clickable {\n    cursor: pointer;\n\n    :hover {\n      transform: scale(1.05);\n      opacity: 0.8;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n    }\n  }\n"]);return C=function(){return n},n}var L=d.b.div(C()),B=function(n){var e=n.image,t=n.clickable,a=n.movieId;return r.a.createElement(L,null,t?r.a.createElement(o.a,{to:"/".concat(a)},r.a.createElement("img",{src:e,className:"clickable",alt:""})):r.a.createElement("img",{src:e,alt:""}))};function G(){var n=Object(u.a)(["\n  max-width: 1280px;\n  width: 100%;\n  height: 55px;\n  background: #353535;\n  margin: 0 auto;\n  border-radius: 40px;\n  position: relative;\n  color: #fff;\n\n  .fa-search {\n    position: absolute;\n    left: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #fff;\n    z-index: 1000;\n  }\n\n  input {\n    font-size: 18px;\n    letter-spacing: 1px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: #fff;\n    box-sizing: border-box;\n\n    :focus {\n      outline: none;\n    }\n\n    :focus::placeholder {\n      opacity: 0;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 15px;\n    }\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n  width: 100%;\n  height: 105px;\n  background: #1c1c1c;\n  padding: 25px 20px 0px 20px;\n  box-sizing: border-box;\n  color: #fff;\n"]);return H=function(){return n},n}var A=d.b.div(H()),U=d.b.div(G()),q=t(7),W=t.n(q),X=function(n){var e=n.callback,t=Object(a.useState)(""),i=Object(w.a)(t,2),c=i[0],o=i[1],l=Object(a.useRef)(null);return r.a.createElement(A,null,r.a.createElement(U,null,r.a.createElement("input",{onChange:function(n){var t=n.target.value;clearTimeout(l.current),o(t),l.current=setTimeout((function(){e(t)}),500)},value:c,type:"text",placeholder:"Search the movie on your mind..."}),r.a.createElement(W.a,{className:"fa-search",name:"search"})))};function Y(){var n=Object(u.a)(["\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #000;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return Y=function(){return n},n}var K=d.b.div(Y()),Q=function(){return r.a.createElement(K,null)},V=t(8),Z=t.n(V),$=t(14),nn=t(9),en=t(13),tn=t(5),an=t.n(tn),rn=function(){var n=Object(a.useState)(""),e=Object(w.a)(n,2),t=e[0],i=e[1],c=function(n){var e=Object(a.useState)({movies:[]}),t=Object(w.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)(!1),o=Object(w.a)(c,2),l=o[0],m=o[1],s=Object(a.useState)(!1),p=Object(w.a)(s,2),u=p[0],d=p[1],f=function(){var n=Object(en.a)(Z.a.mark((function n(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),t=e.search("page"),n.prev=2,n.next=5,fetch(e);case 5:return n.next=7,n.sent.json();case 7:a=n.sent,i((function(n){return Object(nn.a)(Object(nn.a)({},n),{},{movies:-1!==t?[].concat(Object($.a)(n.movies),Object($.a)(a.results)):Object($.a)(a.results),heroImage:n.heroImage||a.results[0],currentPage:a.page,totalPages:a.total_pages})})),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),d(!0),m(!1);case 15:m(!1);case 16:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){sessionStorage.homeState?(i(JSON.parse(sessionStorage.homeState)),m(!1)):f("".concat(z))}),[]),Object(a.useEffect)((function(){n||sessionStorage.setItem("homeState",JSON.stringify(r))}),[n,r]),[{state:r,loading:l,error:u},f]}(t),o=Object(w.a)(c,2),l=o[0],m=l.state,s=m.movies,p=m.currentPage,u=m.totalPages,d=m.heroImage,f=l.loading,x=l.error,g=o[1];return s[0]||x?x&&!s?r.a.createElement("div",null," Something went wrong. "):r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(P,{image:"".concat(O).concat("w1280").concat(d.backdrop_path),title:d.original_title,description:d.overview}),r.a.createElement(X,{callback:function(n){var e=n?y+n:z;i(n),g(e)}}),r.a.createElement(R,{header:t?"Search Result":"Popular Movies"},s.map((function(n){return r.a.createElement(B,{key:n.id,clickable:!0,image:n.poster_path?"".concat(O).concat("w500").concat(n.poster_path):an.a,movieId:n.id,movieName:n.original_title})}))),f&&r.a.createElement(Q,null),p<u&&!f&&r.a.createElement(T,{text:"Load More",callback:function(){var n="".concat(y).concat(t,"&page=").concat(p+1),e="".concat(z,"&page=").concat(p+1);g(t?n:e)}})):r.a.createElement(Q,null)};function cn(){var n=Object(u.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Raleway", sans-serif;\n    user-select: none;\n    background: #f5f5f5;\n  }\n\n\n']);return cn=function(){return n},n}var on=Object(d.a)(cn());function ln(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background: #353535;\n  color: #fff;\n\n  .navigation-content {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 20px;\n    width: 100%;\n\n    p {\n      font-size: 22px;\n      float: left;\n      color: #fff;\n      padding-right: 10px;\n      text-decoration: none;\n\n      @media screen and (max-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n"]);return ln=function(){return n},n}var mn=d.b.div(ln()),sn=function(n){var e=n.movie;return r.a.createElement(mn,null,r.a.createElement("div",{className:"navigation-content"},r.a.createElement(o.a,{to:"/"},r.a.createElement("p",null," HOME ")),r.a.createElement("p",null," | "),r.a.createElement("p",null," ",e," ")))};function pn(){var n=Object(u.a)(["\n  background: ",";\n  background-size: cover !important;\n  background-position: center !important;\n  width: 100%;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  animation: animateMovieinfo 1s;\n\n  .movieinfo-content {\n    max-width: 1280px;\n    min-height: 450px;\n    margin: 0 auto;\n    background: rgb(0, 0, 0, 0.7);\n    border-radius: 20px;\n    position: relative;\n  }\n\n  .movieinfo-thumb {\n    width: 300px;\n    float: left;\n\n    @media screen and (max-width: 768px) {\n      width: 100% !important;\n    }\n  }\n\n  .movieinfo-text {\n    padding: 40px;\n    color: #fff;\n    overflow: hidden;\n\n    h1 {\n      font-size: 48px;\n      margin: 0;\n\n      @media screen and (max-width: 1000px) {\n        font-size: 32px !important;\n      }\n    }\n\n    h3 {\n      font-size: 16px;\n      letter-spacing: 1px;\n\n      margin-top: 30px;\n    }\n\n    p {\n      font-size: 16px;\n      line-height: 26px;\n    }\n  }\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .rating {\n    font-size: 8px;\n    letter-spacing: 2px;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 600;\n    border-radius: 50%;\n    margin-top: 15px;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n      margin-top: 20px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    min-height: 600px;\n    height: auto;\n  }\n\n  @keyframes animateMovieinfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return pn=function(){return n},n}var un=d.b.div(pn(),(function(n){return n.backdrop?"url('".concat(O).concat("w1280").concat(n.backdrop,"')"):"#000"})),dn=function(n){var e=n.movie;return r.a.createElement(un,{backdrop:e.backdrop_path},r.a.createElement("div",{className:"movieinfo-content"},r.a.createElement("div",{className:"movieinfo-thumb"},r.a.createElement(B,{image:e.poster_path?"".concat(O).concat("w500").concat(e.poster_path):an.a,clickable:!1})),r.a.createElement("div",{className:"movieinfo-text"},r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.overview),r.a.createElement("div",{className:"rating-director"},r.a.createElement("div",null,r.a.createElement("h3",{className:"rating"},"IMDB RATING"),r.a.createElement("div",{className:"score"}," ",e.vote_average)),r.a.createElement("div",{className:"director"},r.a.createElement("h3",null," DIRECTOR ",e.directors.length>1?"S":null),e.directors.map((function(n){return r.a.createElement("p",{key:n.credit_id},n.name)})))))))},fn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)};function xn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background: #1c1c1c;\n  padding: 20px;\n  box-sizing: border-box;\n\n  font-size: 20px;\n\n  .movieinfobar-content {\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .movieinfobar-content-col {\n    width: 33.33%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n\n  .movieinfobar-info {\n    padding: 0 0 0 20px;\n    float: left;\n  }\n\n  .fa-time,\n  .fa-revenue {\n    float: left;\n  }\n\n  .fa-budget {\n    float: left;\n  }\n\n  @media screen and (max-width: 768px) {\n    .fa-time,\n    .fa-revenue,\n    .fa-budget {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 425px) {\n    font-size: 14px;\n  }\n"]);return xn=function(){return n},n}var gn=d.b.div(xn()),bn=function(n){var e=n.time,t=n.budget,a=n.revenue;return r.a.createElement(gn,null,r.a.createElement("div",{className:"movieinfobar-content"},r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(W.a,{className:"fa-time",name:"clock-o"}),r.a.createElement("span",{className:"movieinfobar-info"},"Running time ",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(W.a,{className:"fa-budget",name:"money"}),r.a.createElement("span",{className:"movieinfobar-info"},"Budget ",fn(t))),r.a.createElement("div",{className:"movieinfobar-content-col"},r.a.createElement(W.a,{className:"fa-revenue",name:"ticket"}),r.a.createElement("span",{className:"movieinfobar-info"},"Revenue ",fn(a)))))};function hn(){var n=Object(u.a)(["\n  color: #fff;\n  background: #1c1c1c;\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n  transition: 0.5s all ease;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  :hover {\n    transform: scale(1.05);\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n\n  .actor-name {\n    display: block;\n    font-size: 18px;\n    margin: 10px 0 0 0;\n  }\n\n  .actor-character {\n    display: block;\n    font-size: 16px;\n    margin: 0 0 10px 0;\n  }\n"]);return hn=function(){return n},n}var vn=d.b.div(hn()),En=function(n){var e=n.actor;return r.a.createElement(vn,null,r.a.createElement("img",{src:e.profile_path?"".concat(O).concat("w500").concat(e.profile_path):an.a,alt:""}),r.a.createElement("span",{className:"actor-name"},e.name),r.a.createElement("span",{className:"actor-character"},e.character))},wn=function(n){var e=function(n){var e=Object(a.useState)({}),t=Object(w.a)(e,2),r=t[0],i=t[1],c=Object(a.useState)(!0),o=Object(w.a)(c,2),l=o[0],m=o[1],s=Object(a.useState)(!1),p=Object(w.a)(s,2),u=p[0],d=p[1],f=Object(a.useCallback)(Object(en.a)(Z.a.mark((function e(){var t,a,r,c,o;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,t="".concat(j,"movie/").concat(n,"?api_key=").concat(k),e.next=5,fetch(t);case 5:return e.next=7,e.sent.json();case 7:return a=e.sent,r="".concat(j,"movie/").concat(n,"/credits?api_key=").concat(k),e.next=11,fetch(r);case 11:return e.next=13,e.sent.json();case 13:c=e.sent,o=c.crew.filter((function(n){return"Director"===n.job})),i(Object(nn.a)(Object(nn.a)({},a),{},{actors:c.cast,directors:o})),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),d(!0),m(!1);case 22:m(!1);case 23:case"end":return e.stop()}}),e,null,[[1,18]])}))),[n]);return Object(a.useEffect)((function(){localStorage[n]?(i(JSON.parse(localStorage[n])),m(!1)):f()}),[f,n]),Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[n,r]),[r,l,u]}(n.movieId),t=Object(w.a)(e,3),i=t[0],c=t[1];return t[2]?r.a.createElement("div",null," Something went wrong :( "):c?r.a.createElement(Q,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(sn,{movie:i.original_title}),r.a.createElement(dn,{movie:i}),r.a.createElement(bn,{time:i.runtime,budget:i.budget,revenue:i.revenue}),r.a.createElement(R,{header:"Actors"},i.actors.map((function(n){return r.a.createElement(En,{actor:n,key:n.credit_id})}))))},jn=function(){return r.a.createElement("div",null," Whoooooops... Looks like you're lost! ")},kn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(o.b,null,r.a.createElement(rn,{path:"/"}),r.a.createElement(wn,{path:"/:movieId"}),r.a.createElement(jn,{default:!0})),r.a.createElement(on,null))};c.a.render(r.a.createElement(kn,null),document.getElementById("root"))},5:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"}},[[26,1,2]]]);
//# sourceMappingURL=main.479a304c.chunk.js.map