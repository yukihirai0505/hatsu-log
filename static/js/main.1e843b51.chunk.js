(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){e.exports=n(292)},290:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),c=n.n(o),i=n(43),s=n.n(i),u=n(63),l=n(64),m=n(65),p=n(78),h=n(66),f=n(80),g=n(302),d=n(299),b=n(301),v=n(303),w=n(300),j=n(304),k=(n(169),n(13)),y=n.n(k),x=function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).call(this,e))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noopener noreferrer"},this.props.text)}}]),t}(a.Component);y.a.Icon.Default.imagePath="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";var O={h1:{marginTop:"3em"},h2:{margin:"4em 0em 2em"},h3:{marginTop:"2em",padding:"2em 0em"},last:{marginBottom:"300px"}},E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={info:[]},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbyzNqxPtInjD8kDqZiD_kVr9MavY655S8oPR-uixuafnG-9YkU/exec");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({info:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.info;return r.a.createElement("div",null,r.a.createElement(g.a,{as:"h1",content:"Hatsu Log",style:O.h1,textAlign:"center"}),r.a.createElement(d.a,null,r.a.createElement(b.a,{center:[35.6455172,139.7118403],zoom:12},r.a.createElement(v.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.map(function(e){return e.stores&&e.stores.map(function(t,n){return r.a.createElement(w.a,{key:n,position:[t.lat,t.lng]},r.a.createElement(j.a,null,r.a.createElement(x,{href:e.tweetLink,text:t.name})))})}))))}}]),t}(a.Component);n(287),n(290),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,2,1]]]);
//# sourceMappingURL=main.1e843b51.chunk.js.map