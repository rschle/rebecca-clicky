(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Joyce Byers",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/d/df/Joyce_%28S3%29.png/revision/latest/scale-to-width-down/620?cb=20190705190931"},{id:2,name:"Jim Hopper",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/c/c6/ST3_Jim_Hopper_portrait.jpg/revision/latest/scale-to-width-down/619?cb=20190703002805"},{id:3,name:"Mike Wheeler",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f0/Mike_Wheeler_S3.png/revision/latest?cb=20190708051731"},{id:4,name:"Eleven",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f1/Eleven_S03_portrait.png/revision/latest?cb=20190722075442"},{id:5,name:"Will Byers",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/9/96/Will_S3.png/revision/latest/scale-to-width-down/569?cb=20190704211311"},{id:6,name:"Lucas Sinclair",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/2/26/Lucas_S3.png/revision/latest?cb=20190708051440"},{id:7,name:"Dustin Henderson",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/7/7b/Dustin_S3.png/revision/latest?cb=20190708052048"},{id:8,name:"Nancy Wheeler",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/2/22/Nancy_S3.png/revision/latest?cb=20190704211903"},{id:9,name:"Jonathan Wheeler",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/8/8e/Jonathan_S3.png/revision/latest?cb=20190709171439"},{id:10,name:"Steve Harrington",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/8/8b/ST3_Steve_Harrington_portrait.jpg/revision/latest/scale-to-width-down/620?cb=20190321055351"},{id:11,name:"Max Mayfield",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/4/41/6496D145-7DEC-4C23-BB62-0059C0A1A72E.jpeg/revision/latest/scale-to-width-down/620?cb=20190709215216"},{id:12,name:"Robin Buckley",image:"https://vignette.wikia.nocookie.net/strangerthings8338/images/f/fc/Robin_S3.png/revision/latest/scale-to-width-down/620?cb=20190409051202"}]},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),s=a.n(r),c=(a(15),a(3)),o=a(4),l=a(7),g=a(5),m=a(8);a(16);var d=function(e){return i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"card",onClick:e.clickCharacter},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("p",null,e.name," ",i.a.createElement("i",{className:"fas fa-ice-cream"})))))};a(17);var h=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("p",{className:"navbar-brand"},"Stranger Clicks"),i.a.createElement("p",{className:"nav-item col text-right"},"Score: ",e.score)))},v=a(6);a(18);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={cards:v,score:0,clicked:[]},a.clickCharacter=function(e){if(a.state.cards.sort(function(){return Math.random()-.5}),-1===a.state.clicked.indexOf(e)){var t=a.state.score+1;a.state.clicked.push(e),a.setState({clicked:a.state.clicked,score:t})}else a.setState({score:0,clicked:[]}),alert("You lose!")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(h,{score:this.state.score}),i.a.createElement("div",{className:"row"},this.state.cards.map(function(t){return i.a.createElement(d,{clickCharacter:e.clickCharacter,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.01b6846f.chunk.js.map