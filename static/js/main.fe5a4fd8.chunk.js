(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),i=t(13),o=function(e){return{type:"UPDATE_GAME",payload:e}},d=function(e){return{type:"TOGGLE_DIALOG",payload:e}},m=(t(97),t(125)),s=t(128),u=t(43),g=t(129),p=Object(i.b)()((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{style:{flex:1}},"Scoreboard"),r.a.createElement(g.a,{color:"inherit",edge:"end",onClick:function(){e.dispatch(d("newGameDialog"))}},"New"))),r.a.createElement(s.a,null))})),E=t(130),f=function(){return r.a.createElement("footer",null,r.a.createElement(E.a,null,r.a.createElement(u.a,{align:"center",color:"textSecondary",display:"block",variant:"overline"},"\xa9 2020"," ",2020===(new Date).getFullYear()?null:" - ".concat((new Date).getFullYear()," "),"David Andrews"))," ")},y=t(166),h=t(131),b=t(132),D=Object(i.b)((function(e){return{games:e.games}}))((function(e){return r.a.createElement(y.a,{mt:3},e.games&&e.games.length>0?r.a.createElement(h.a,{container:!0,spacing:2},e.games.map((function(e){return r.a.createElement(b.a,{in:!0,key:e.id},r.a.createElement(h.a,{item:!0,key:e.id,xs:12,md:6,lg:4},r.a.createElement(Y,{key:e.id,gameData:e})))}))):r.a.createElement(u.a,null,"You currently don't have any saved scoreboards..."),r.a.createElement(le,null))})),w=function(){return r.a.createElement(E.a,null,r.a.createElement(D,null))},v=t(7),O=t(133),j=t(134),_=t(135),C=t(136),L=t(137),k=t(138),I=t(169),P=t(141),T=t(143),G=t(147),A=t(142),M=t(144),S=t(145),N=t(146),x=t(19),W=t.n(x),Y=Object(i.b)((function(e){return{games:e.games}}))((function(e){var a=function(a){var t;switch(a.currentTarget.id){case"action-area":case"open":return e.dispatch({type:"LOAD_GAME",payload:e.gameData}),e.dispatch(d("viewerDialog"));case"delete":return t=e.games.filter((function(a){return a.id===e.gameData.id?null:a})),e.dispatch(o(t));case"toggle-lock":return t=e.games.map((function(a){return a.id===e.gameData.id?Object(v.a)({},a,{in_progress:!a.in_progress,date_modified:new Date}):a})),e.dispatch(o(t));default:return"Something else was clicked"}};return r.a.createElement(O.a,{raised:!0},r.a.createElement(j.a,{onClick:a,id:"action-area"},r.a.createElement(_.a,null,r.a.createElement(u.a,{variant:"h5",align:"center"},e.gameData.title),r.a.createElement(u.a,{variant:"subtitle2",align:"center",color:"textSecondary",gutterBottom:!0},e.gameData.description),r.a.createElement(C.a,null,r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Date created",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(A.a,null))),r.a.createElement(T.a,null,"Created on ",W()().diff(W()(e.gameData.date_created),"days")<365?W()(e.gameData.date_created).format("Do MMMM"):W()(e.gameData.date_created).format("Do MMMM YYYY"))),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Last update",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(M.a,null))),r.a.createElement(T.a,null,"Updated ",W()(e.gameData.date_modified).fromNow())),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Number of players",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(S.a,null))),r.a.createElement(T.a,null,e.gameData.players.length,e.gameData.players.length>1?" players":" player")),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:e.gameData.in_progress?"Current leader":"Winner",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(N.a,null))),r.a.createElement(T.a,null,function(){for(var a=[e.gameData.players[0]],t=1;t<e.gameData.players.length;t++)if(e.gameData.players[t].score>a[0].score)a=[e.gameData.players[t]];else{if(e.gameData.players[t].score!==a[0].score)continue;a=a.concat([e.gameData.players[t]])}switch(a.length){case 1:return e.gameData.in_progress?"".concat(a[0].name," is winning"):"".concat(a[0].name," won");case e.gameData.players.length:return e.gameData.in_progress?"Nobody is winning":"Nobody won";case 2:return e.gameData.in_progress?"".concat(a[0].name," and ").concat(a[1].name," are winning"):"".concat(a[0].name," and ").concat(a[1].name," won");case 3:return e.gameData.in_progress?"".concat(a[0].name,", ").concat(a[1].name," and ").concat(a[2].name," are winning"):"".concat(a[0].name,", ").concat(a[1].name," and ").concat(a[2].name," won");default:return e.gameData.in_progress?"The lead is tied ".concat(a.length," ways"):"The game was tied ".concat(a.length," ways")}}())),r.a.createElement(L.a,null)))),r.a.createElement(G.a,null,r.a.createElement(g.a,{id:"open",variant:"outlined",color:"primary",onClick:a},"Open"),r.a.createElement(g.a,{id:"delete",variant:"outlined",color:"secondary",onClick:a},"Delete"),r.a.createElement("span",{style:{flex:1}}),r.a.createElement(I.a,{title:e.gameData.in_progress?"Finish game":"Resume game",placement:"left",arrow:!0},r.a.createElement(g.a,{id:"toggle-lock",variant:e.gameData.in_progress?"outlined":"contained",onClick:a},e.gameData.in_progress?"In progress":"Finished"))))})),U=t(27),B=t(170),F=t(164),R=t(167),V=t(149),J=t(150),$=t(36),K=t.n($),z={id:K()(),title:"",description:"",players:2,showErr:!1,err:""},q=Object(i.b)((function(e){return{isOpen:e.viewerDialog,gameLoaded:e.gameLoadedInViewer,games:e.games}}))((function(e){var a=Object(n.useState)(z),t=Object(U.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){c(e.gameLoaded)}),[e.gameLoaded]),Object(n.useEffect)((function(){e.games.length>0&&c(e.games.reduce((function(a,t){return t.id===e.gameLoaded.id?t:a})))}),[e.games]);var i=function(){if(e.gameLoaded.title!==l.title||e.gameLoaded.description!==l.description){var a=e.games.map((function(a){return a.id===e.gameLoaded.id?Object(v.a)({},a,{title:l.title,description:l.description,date_modified:new Date}):a}));e.dispatch(o(a))}},p=function(e){var a=e.currentTarget;switch(a.id){case"title":return void(a.value.length<30&&c(Object(v.a)({},l,{title:a.value})));case"description":return void(a.value.length<60&&c(Object(v.a)({},l,{description:a.value})));default:return l}},f=function(){i()},b=function(a){switch(a.currentTarget.id){case"back":return i(),e.dispatch(d("viewerDialog"));case"add-player":return e.dispatch(d("addPlayerDialog"));case"resume-game":case"finish-game":var t=e.games.map((function(a){return a.id===e.gameLoaded.id?Object(v.a)({},a,{in_progress:!a.in_progress,date_modified:new Date}):a}));return e.dispatch(o(t));default:return}};return r.a.createElement(B.a,{fullScreen:!0,open:e.isOpen},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{style:{flex:1}},"Scoreboard"),r.a.createElement(g.a,{color:"inherit",edge:"end",onClick:b,id:"back"},"Back"))),r.a.createElement(s.a,null),r.a.createElement(Z,null),r.a.createElement(ee,null),r.a.createElement(y.a,{mt:3},r.a.createElement(E.a,null,r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,md:5},r.a.createElement(y.a,null,r.a.createElement(F.a,{fullWidth:!0,multiline:!0,InputProps:{style:{fontSize:"3rem"},disableUnderline:!0},placeholder:"Title",value:l.title,onChange:p,onBlur:f,id:"title"})),r.a.createElement(y.a,{mt:1},r.a.createElement(F.a,{fullWidth:!0,value:l.description,onChange:p,onBlur:f,id:"description",multiline:!0,InputProps:{disableUnderline:!0},placeholder:"Description"})),r.a.createElement(R.a,{variant:"filled",icon:l.in_progress?r.a.createElement(V.a,null):r.a.createElement(J.a,null),color:l.in_progress?"success":"error"},l.in_progress?"This game is in progress":"This game has finished"),r.a.createElement(Ee,{gameData:l}),r.a.createElement(y.a,{align:"center",display:"flex",justifyContent:"space-between",mt:2},r.a.createElement(g.a,{color:"primary",onClick:b,id:"add-player"},"Add new player"),l.in_progress?r.a.createElement(g.a,{color:"secondary",onClick:b,id:"finish-game"},"Finish Game"):r.a.createElement(g.a,{color:"secondary",onClick:b,id:"resume-game"},"Resume Game"))),r.a.createElement(h.a,{item:!0,xs:12,md:7},r.a.createElement(pe,{gameData:l}))))))})),H=t(151),Q=t(152),X=t(153),Z=Object(i.b)((function(e){return{isOpen:e.editPlayerDialog,playerLoaded:e.playerLoadedInEdit,games:e.games}}))((function(e){var a=Object(n.useState)({name:"",score:"0"}),t=Object(U.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){var a=e.games.reduce((function(a,t){return t.id===e.playerLoaded.gameId?t:a})).players.reduce((function(a,t){return t.id===e.playerLoaded.playerId?t:a}));c(Object(v.a)({},l,{name:a.name,score:a.score}))}),[e.playerLoaded]);var i=function(e){var a=e.currentTarget;switch(a.id){case"name":return c(Object(v.a)({},l,{name:a.value}));case"score":return c(Object(v.a)({},l,{score:a.value}));default:return}},m=function(e){switch(e.currentTarget.id){case"score":return void(l.score.toString().match(/^[1-9][0-9]*$/g)||c(Object(v.a)({},l,{score:"0"})));case"name":return void(""===l.name&&c(Object(v.a)({},l,{name:"New player"})));default:return}},s=function(a){var t;switch(a.currentTarget.id){case"cancel":return e.dispatch(d("editPlayerDialog"));case"delete":return t=e.games.map((function(a){return a.id===e.playerLoaded.gameId?Object(v.a)({},a,{players:a.players.filter((function(a){return a.id===e.playerLoaded.playerId?null:a})),date_modified:new Date}):a})),e.dispatch(o(t)),e.dispatch(d("editPlayerDialog"));case"update":return t=e.games.map((function(a){return a.id===e.playerLoaded.gameId?Object(v.a)({},a,{players:a.players.map((function(a){return a.id===e.playerLoaded.playerId?Object(v.a)({},a,{name:l.name,score:parseInt(l.score)}):a})).sort((function(e,a){return e.score<a.score?1:-1})),date_modified:new Date}):a})),e.dispatch(o(t)),e.dispatch(d("editPlayerDialog"));default:return}};return r.a.createElement(B.a,{open:e.isOpen,onClose:function(){return e.dispatch(d("editPlayerDialog"))},maxWidth:"sm"},r.a.createElement(H.a,null,"Edit Player"),r.a.createElement(Q.a,null,r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:10},r.a.createElement(F.a,{id:"name",label:"Name",onChange:i,onBlur:m,autoFocus:!0,fullWidth:!0,value:l.name})),r.a.createElement(h.a,{item:!0,xs:12,sm:2},r.a.createElement(F.a,{id:"score",label:"Score",onChange:i,onBlur:m,fullWidth:!0,value:l.score})))),r.a.createElement(X.a,null,r.a.createElement(g.a,{color:"inherit",onClick:s,id:"cancel"},"Cancel"),r.a.createElement(g.a,{color:"secondary",onClick:s,id:"delete"},"Delete"),r.a.createElement(g.a,{color:"primary",onClick:s,id:"update"},"Update")))})),ee=Object(i.b)((function(e){return{isOpen:e.addPlayerDialog,games:e.games,gameLoaded:e.gameLoadedInViewer}}))((function(e){var a=Object(n.useState)({name:"New Player",score:"0"}),t=Object(U.a)(a,2),l=t[0],c=t[1],i=function(e){var a=e.currentTarget;switch(a.id){case"name":return c(Object(v.a)({},l,{name:a.value}));case"score":return c(Object(v.a)({},l,{score:a.value}));default:return}},m=function(e){switch(e.currentTarget.id){case"score":return void(l.score.match(/^[1-9][0-9]?$/g)||c(Object(v.a)({},l,{score:"0"})));case"name":return void(""===l.name&&c(Object(v.a)({},l,{name:"New player"})));default:return}},s=function(a){switch(a.currentTarget.id){case"cancel":return e.dispatch(d("addPlayerDialog"));case"add":var t={id:K()(),name:l.name,score:parseInt(l.score)},n=e.games.map((function(a){if(e.gameLoaded.id===a.id){var n=a.players.concat([t]).slice().sort((function(e,a){return e.score<a.score?1:-1}));return Object(v.a)({},a,{players:n,date_modified:new Date})}return a}));return e.dispatch(o(n)),e.dispatch(d("addPlayerDialog"));default:return}};return r.a.createElement(B.a,{open:e.isOpen,onClose:function(){return e.dispatch(d("addPlayerDialog"))},maxWidth:"sm"},r.a.createElement(H.a,null,"Add New Player"),r.a.createElement(Q.a,null,r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:10},r.a.createElement(F.a,{id:"name",label:"Name",value:l.name,onChange:i,onBlur:m,autoFocus:!0,fullWidth:!0})),r.a.createElement(h.a,{item:!0,xs:12,sm:2},r.a.createElement(F.a,{id:"score",label:"Score",value:l.score,onChange:i,onBlur:m,fullWidth:!0,style:{WebkitAppearance:"none"}})))),r.a.createElement(X.a,null,r.a.createElement(g.a,{color:"inherit",onClick:s,id:"cancel"},"Cancel"),r.a.createElement(g.a,{color:"primary",onClick:s,id:"add"},"Add")))})),ae=t(154),te=t(148),ne=t(155),re=t(156),le=Object(i.b)((function(e){return{games:e.games,newGameDialog:e.newGameDialog}}))((function(e){var a=Object(n.useState)(z),t=Object(U.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){e.newGameDialog&&c(z)}),[e.newGameDialog]),Object(n.useEffect)((function(){setTimeout((function(){c(Object(v.a)({},l,{showErr:!1,err:""}))}),4e3)}),[l.showErr]);var i=function(e){var a=e.currentTarget;switch(a.id){case"title":return a.value.length<30?c(Object(v.a)({},l,{title:a.value})):void 0;case"description":return a.value.length<60?c(Object(v.a)({},l,{description:a.value})):void 0;case"players":return a.value.match(/^[1-9]?\d?$/g)?c(Object(v.a)({},l,{players:a.value})):void 0;default:return l}},m=function(a){switch(a.currentTarget.id){case"incPlayers":return l.players<98?c(Object(v.a)({},l,{players:parseInt(l.players)+1})):void 0;case"decPlayers":return l.players>2?c(Object(v.a)({},l,{players:parseInt(l.players)-1})):void 0;case"cancel":return e.dispatch(d("newGameDialog"));case"create":if(0===l.title.length)return c(Object(v.a)({},l,{showErr:!0,err:"Please supply a title"}));if(0===l.description.length)return c(Object(v.a)({},l,{showErr:!0,err:"Please supply a description"}));var t={id:l.id,title:l.title,description:l.description,players:function(e){for(var a=[],t=0;t<e;t++)a.push({id:K()(),name:"Player ".concat(t+1),score:0});return a}(l.players),date_created:new Date,date_modified:new Date,in_progress:!0},n=e.games.concat([t]);return e.dispatch(o(n)),e.dispatch(d("newGameDialog"));default:return}};return r.a.createElement(B.a,{maxWidth:"sm",open:e.newGameDialog,onClose:function(){return e.dispatch(d("newGameDialog"))}},r.a.createElement(H.a,null,"Create New Scoreboard"),r.a.createElement(Q.a,null,l.showErr?r.a.createElement(b.a,{in:!0},r.a.createElement(R.a,{severity:"error"},l.err)):null,r.a.createElement(F.a,{label:"Title",id:"title",fullWidth:!0,margin:"dense",onChange:i,value:l.title}),r.a.createElement(F.a,{label:"Description",id:"description",fullWidth:!0,margin:"normal",onChange:i,value:l.description}),r.a.createElement(F.a,{label:"No. of players",id:"players",value:l.players,onChange:i,onBlur:function(e){if(!e.currentTarget.value.match(/^[1-9]\d?$/g))return c(Object(v.a)({},l,{players:2}))},style:{width:"9rem"},margin:"normal",InputProps:{disableUnderline:!0,endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(te.a,{id:"decPlayers",onClick:m},r.a.createElement(ne.a,null)),r.a.createElement(te.a,{id:"incPlayers",onClick:m},r.a.createElement(re.a,null)))}})),r.a.createElement(X.a,null,r.a.createElement(g.a,{id:"cancel",onClick:m},"Cancel"),r.a.createElement(g.a,{id:"create",onClick:m,color:"primary"},"Create")))})),ce=t(157),ie=t(74),oe=t(158),de=t(159),me=t(160),se=t(161),ue=t(162),ge=t(163),pe=function(e){return r.a.createElement(ce.a,{component:ie.a},r.a.createElement(oe.a,null,r.a.createElement(de.a,null,r.a.createElement(me.a,null,r.a.createElement(se.a,{width:"10%"},"Pos."),r.a.createElement(se.a,{width:"50%"},"Name"),r.a.createElement(se.a,{width:"30%",align:"right"},"Score"),r.a.createElement(se.a,{width:"5%",align:"center",padding:"none"},r.a.createElement(y.a,{mt:1},r.a.createElement(ue.a,null,r.a.createElement(ne.a,null)))),r.a.createElement(se.a,{width:"5%",align:"center",padding:"none"},r.a.createElement(y.a,{mt:1},r.a.createElement(ue.a,null,r.a.createElement(re.a,null)))))),r.a.createElement(ge.a,null,"object"===typeof e.gameData.players?e.gameData.players.map((function(a,t){return r.a.createElement(fe,{key:a.id,position:(n=t,n>0&&e.gameData.players[n].score===e.gameData.players[n-1].score?null:n+1),name:a.name,score:a.score,id:a.id,inProgress:e.gameData.in_progress});var n})):null)))},Ee=function(e){return r.a.createElement(C.a,null,r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Date created",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(A.a,null))),r.a.createElement(T.a,null,"Created on ",W()().diff(W()(e.gameData.date_created),"days")<365?W()(e.gameData.date_created).format("Do MMMM"):W()(e.gameData.date_created).format("Do MMMM YYYY"))),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Last update",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(M.a,null))),r.a.createElement(T.a,null,"Updated ",W()(e.gameData.date_modified).fromNow())),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:"Number of players",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(S.a,null))),r.a.createElement(T.a,null,e.gameData.players.length,e.gameData.players.length>1?" players":" player")),r.a.createElement(L.a,null),r.a.createElement(k.a,null,r.a.createElement(I.a,{title:e.gameData.in_progress?"Current leader":"Winner",placement:"left"},r.a.createElement(P.a,{edge:"start"},r.a.createElement(N.a,null))),r.a.createElement(T.a,null,function(e,a){if("object"===typeof e){for(var t=[e[0]],n=1;n<e.length;n++)if(e[n].score>t[0].score)t=[e[n]];else{if(e[n].score!==t[0].score)continue;t=t.concat([e[n]])}switch(t.length){case 1:return"".concat(t[0].name,a?" is winning":" won");case e.length:return a?"Nobody is winning":"Nobody won";case 2:return a?"".concat(t[0].name," and ").concat(t[1].name," are winning"):"".concat(t[0].name," and ").concat(t[1].name," won");case 3:return a?"".concat(t[0].name,", ").concat(t[1].name," and ").concat(t[2].name," are winning"):"".concat(t[0].name,", ").concat(t[1].name," and ").concat(t[2].name," won");default:return a?"The lead is tied ".concat(t.length," ways"):"The game was tied ".concat(t.length," ways")}}}(e.gameData.players,e.gameData.in_progress))),r.a.createElement(L.a,null))},fe=Object(i.b)((function(e){return{gameLoaded:e.gameLoadedInViewer,games:e.games}}))((function(e){var a=function(a){var t,n,r;if(e.inProgress)switch(a.currentTarget.id){case"inc-score":return t=e.games.map((function(a){return a.id===e.gameLoaded.id?Object(v.a)({},a,{players:a.players.map((function(a){return a.id===e.id?Object(v.a)({},a,{score:a.score+1}):a})).sort((function(e,a){return e.score<a.score?1:-1})),date_modified:new Date}):a})),e.dispatch(o(t));case"dec-score":return t=e.games.map((function(a){return a.id===e.gameLoaded.id?Object(v.a)({},a,{players:a.players.map((function(a){return a.id===e.id?Object(v.a)({},a,{score:a.score-1}):a})).sort((function(e,a){return e.score<a.score?1:-1})),date_modified:new Date}):a})),e.dispatch(o(t));default:return e.dispatch((n=e.gameLoaded.id,r=e.id,{type:"LOAD_PLAYER",payload:{gameId:n,playerId:r}})),e.dispatch(d("editPlayerDialog"))}};return r.a.createElement(me.a,{hover:!0,key:e.id,id:e.id},r.a.createElement(se.a,{tabIndex:"0",onKeyUp:function(e){return"Enter"===e.key?a(e):null},id:"pos_".concat(e.id),onClick:a},e.position),r.a.createElement(se.a,{tabIndex:"0",onKeyUp:function(e){return"Enter"===e.key?a(e):null},id:"nam_".concat(e.id),onClick:a},e.name),r.a.createElement(se.a,{tabIndex:"0",onKeyUp:function(e){return"Enter"===e.key?a(e):null},id:"sco_".concat(e.id),onClick:a,align:"right"},e.score),r.a.createElement(se.a,{align:"center",padding:"none"},r.a.createElement(te.a,{onClick:a,id:"dec-score"},r.a.createElement(ne.a,null))),r.a.createElement(se.a,{align:"center",padding:"none"},r.a.createElement(te.a,{onClick:a,id:"inc-score"},r.a.createElement(re.a,null))))}));var ye=Object(i.b)((function(e){return{games:e.games}}))((function(e){return Object(n.useEffect)((function(){var a=localStorage.getItem("daves_scorecard_app");a&&e.dispatch({type:"GET_GAMES",payload:JSON.parse(a)})}),[]),Object(n.useEffect)((function(){localStorage.setItem("daves_scorecard_app",JSON.stringify(e.games))}),[e.games]),r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(p,null),r.a.createElement(w,null),r.a.createElement(f,null))})),he=t(49),be=t(54),De={games:[],gameLoadedInViewer:z,playerLoadedInEdit:{gameId:"",playerId:""},viewerDialog:!1,newGameDialog:!1,addPlayerDialog:!1,editPlayerDialog:!1},we=Object(he.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DIALOG":return Object(v.a)({},e,Object(be.a)({},a.payload,!e[a.payload]));case"GET_GAMES":case"CREATE_NEW_GAME":case"UPDATE_GAME":return Object(v.a)({},e,{games:a.payload});case"LOAD_GAME":return Object(v.a)({},e,{gameLoadedInViewer:a.payload});case"LOAD_PLAYER":return Object(v.a)({},e,{playerLoadedInEdit:a.payload});default:return e}}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:we},r.a.createElement(ye,null))),document.getElementById("root"))},88:function(e,a,t){e.exports=t(100)},97:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.fe5a4fd8.chunk.js.map