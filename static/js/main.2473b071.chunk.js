(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,a,t){e.exports=t(332)},329:function(e,a,t){},332:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(37),m=t.n(r),c=t(104),o=t.n(c),u=t(149),E=t(150),i=t(151),s=t(167),C=t(152),d=t(168),g=t(345),h=t(338),p=t(347),b=t(346),y=t(341),w=t(331),v=t(344),x=t(340),f=t(343),k=t(148),A=t(147),R=t(342),S=t(339),D=t(349),G=t(337),I=t(348),M=(t(186),t(21));t.n(M).a.Icon.Default.imagePath="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";var O={h1:{marginTop:"3em"},h2:{margin:"4em 0em 2em"},h3:{marginTop:"2em",padding:"2em 0em"},last:{marginBottom:"300px"}},j=function(e){function a(){var e;return Object(E.a)(this,a),(e=Object(s.a)(this,Object(C.a)(a).call(this))).state={lat:51.505,lng:-.09,zoom:13},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var a,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://script.google.com/macros/s/AKfycbyzNqxPtInjD8kDqZiD_kVr9MavY655S8oPR-uixuafnG-9YkU/exec");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return l.a.createElement("div",null,l.a.createElement(S.a,{center:e,zoom:this.state.zoom},l.a.createElement(D.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(G.a,{position:e},l.a.createElement(I.a,null,"A pretty CSS3 popup. ",l.a.createElement("br",null)," Easily customizable."))),l.a.createElement(g.a,{as:"h1",content:"Responsive UI Examples",style:O.h1,textAlign:"center"}),l.a.createElement(g.a,{as:"h2",content:"Basic Responsive",style:O.h2,textAlign:"center"}),l.a.createElement(g.a,{as:"h3",textAlign:"center",style:O.h3,content:"Container"}),l.a.createElement(h.a,null,l.a.createElement(p.a.Group,null,l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Text Container",style:O.h3,textAlign:"center"}),l.a.createElement(h.a,{text:!0},l.a.createElement(p.a.Group,null,l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"),l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Stackable Grid",textAlign:"center",style:O.h3}),l.a.createElement(b.a,{columns:2,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Row,{columns:3},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Column,{width:10},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{width:6},l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Doubling Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:3,doubling:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Doubling Stackable Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:3,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Nested Stackable Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:2},l.a.createElement(b.a.Column,null,l.a.createElement(b.a,{columns:2,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")))),l.a.createElement(b.a.Column,null,l.a.createElement(b.a,{columns:3,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))))),l.a.createElement(g.a,{as:"h3",content:"Stackable Grid Container",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{container:!0,columns:2,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Doubling Grid Container",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{container:!0,columns:3,doubling:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Doubling Stackable Grid Container",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{container:!0,columns:3,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h2",content:"Device Adjustment",style:O.h2,textAlign:"center"}),l.a.createElement(g.a,{as:"h3",content:"Device Column Width",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,null,l.a.createElement(b.a.Column,{computer:3,mobile:6,tablet:9},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{width:4},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{computer:9,mobile:6,tablet:3},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{computer:9,mobile:6,tablet:3},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{width:4},l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,{computer:3,mobile:6,tablet:9},l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Device Visibility",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:4},l.a.createElement(b.a.Column,{only:"widescreen",widescreen:10},l.a.createElement(p.a,null,"Widescreen")),l.a.createElement(b.a.Column,{only:"widescreen",widescreen:6},l.a.createElement(p.a,null,"Widescreen")),l.a.createElement(b.a.Column,{only:"large screen",largeScreen:6},l.a.createElement(p.a,null,"Large Screen")),l.a.createElement(b.a.Column,{only:"large screen",largeScreen:10},l.a.createElement(p.a,null,"Large Screen")),l.a.createElement(b.a.Column,{only:"mobile tablet",mobile:8,tablet:8},l.a.createElement(p.a,null,"Tablet and Mobile")),l.a.createElement(b.a.Column,{only:"mobile tablet",mobile:8,tablet:8},l.a.createElement(p.a,null,"Tablet and Mobile")),l.a.createElement(b.a.Column,{only:"mobile",mobile:16},l.a.createElement(p.a,null,"Mobile")),l.a.createElement(b.a.Row,{only:"computer",columns:2},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Computer and Up")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Computer and Up"))),l.a.createElement(b.a.Column,{only:"tablet"},l.a.createElement(p.a,null,"Tablet Only Content")),l.a.createElement(b.a.Column,{only:"tablet"},l.a.createElement(p.a,null,"Tablet Only Content")),l.a.createElement(b.a.Column,{only:"tablet"},l.a.createElement(p.a,null,"Tablet Only Content")),l.a.createElement(b.a.Column,{only:"tablet"},l.a.createElement(p.a,null,"Tablet Only Content"))),l.a.createElement(g.a,{as:"h2",content:"Responsive Grid with Variations",style:O.h2,textAlign:"center"}),l.a.createElement(g.a,{as:"h3",content:"Stackable Divided Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:2,container:!0,divided:!0,stackable:!0},l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")))),l.a.createElement(g.a,{as:"h3",content:"Stackable Vertically Divided Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:2,container:!0,divided:"vertically",stackable:!0},l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")))),l.a.createElement(g.a,{as:"h3",content:"Celled Stackable Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{celled:!0,container:!0,stackable:!0},l.a.createElement(b.a.Row,{columns:2},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,{columns:3},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a.Row,{columns:2},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")))),l.a.createElement(g.a,{as:"h3",content:"Consecutive Doubling Stackable Grid",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:3,container:!0,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(b.a,{columns:3,container:!0,doubling:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Grid Container",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{columns:3,container:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h1",content:"Responsive Elements",style:O.h1,textAlign:"center"}),l.a.createElement(g.a,{as:"h3",content:"Responsive Vertical Divider",style:O.h3,textAlign:"center"}),l.a.createElement(b.a,{container:!0,columns:2,divided:!0,relaxed:!0,stackable:!0},l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content")),l.a.createElement(b.a.Column,null,l.a.createElement(p.a,null,"Content"))),l.a.createElement(g.a,{as:"h3",content:"Responsive Table",style:O.h3,textAlign:"center"}),l.a.createElement(h.a,null,l.a.createElement(y.a,{celled:!0},l.a.createElement(y.a.Header,null,l.a.createElement(y.a.Row,null,l.a.createElement(y.a.HeaderCell,null,"Employee"),l.a.createElement(y.a.HeaderCell,null,"Correct Guesses"))),l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Cell,null,l.a.createElement(g.a,{as:"h4",image:!0},l.a.createElement(w.a,{rounded:!0,size:"mini",src:"/images/wireframe/square-image.png"}),l.a.createElement(g.a.Content,null,"Lena",l.a.createElement(g.a.Subheader,null,"Human Resources")))),l.a.createElement(y.a.Cell,null,"22")),l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Cell,null,l.a.createElement(g.a,{as:"h4",image:!0},l.a.createElement(w.a,{rounded:!0,size:"mini",src:"/images/wireframe/square-image.png"}),l.a.createElement(g.a.Content,null,"Matthew",l.a.createElement(g.a.Subheader,null,"Fabric Design")))),l.a.createElement(y.a.Cell,null,"15")),l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Cell,null,l.a.createElement(g.a,{as:"h4",image:!0},l.a.createElement(w.a,{rounded:!0,size:"mini",src:"/images/wireframe/square-image.png"}),l.a.createElement(g.a.Content,null,"Lindsay",l.a.createElement(g.a.Subheader,null,"Entertainment")))),l.a.createElement(y.a.Cell,null,"12")),l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Cell,null,l.a.createElement(g.a,{as:"h4",image:!0},l.a.createElement(w.a,{rounded:!0,size:"mini",src:"/images/wireframe/square-image.png"}),l.a.createElement(g.a.Content,null,"Mark",l.a.createElement(g.a.Subheader,null,"Executive")))),l.a.createElement(y.a.Cell,null,"11"))))),l.a.createElement(g.a,{as:"h3",content:"Responsive Menu",style:O.h3,textAlign:"center"}),l.a.createElement(h.a,null,l.a.createElement(v.a,{stackable:!0},l.a.createElement(v.a.Item,null,l.a.createElement("img",{src:"/logo.png"})),l.a.createElement(v.a.Item,null,"Features"),l.a.createElement(v.a.Item,null,"Testimonials"),l.a.createElement(v.a.Item,null,"Sign-in"))),l.a.createElement(g.a,{as:"h3",content:"Responsive Item",style:O.h3,textAlign:"center"}),l.a.createElement(h.a,null,l.a.createElement(x.a.Group,{divided:!0},l.a.createElement(x.a,null,l.a.createElement(x.a.Image,{src:"/images/wireframe/image.png"}),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Header,{as:"a"},"Content Header"),l.a.createElement(x.a.Meta,null,l.a.createElement("span",null,"Date"),l.a.createElement("span",null,"Category")),l.a.createElement(x.a.Description,null,"A description which may flow for several lines and give context to the content."),l.a.createElement(x.a.Extra,null,l.a.createElement(w.a,{avatar:!0,circular:!0,src:"/images/wireframe/square-image.png"}),"Username"))),l.a.createElement(x.a,null,l.a.createElement(x.a.Image,{src:"/images/wireframe/image.png"}),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Header,{as:"a"},"Content Header"),l.a.createElement(x.a.Meta,null,l.a.createElement("span",null,"Date"),l.a.createElement("span",null,"Category")),l.a.createElement(x.a.Description,null,"A description which may flow for several lines and give context to the content."),l.a.createElement(x.a.Extra,null,l.a.createElement(f.a,{floated:"right",primary:!0},"Primary",l.a.createElement(k.a,{name:"chevron right"})),l.a.createElement(A.a,null,"Limited")))),l.a.createElement(x.a,null,l.a.createElement(x.a.Image,{src:"/images/wireframe/image.png"}),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Header,{as:"a"},"Content Header"),l.a.createElement(x.a.Meta,null,l.a.createElement("span",null,"Date"),l.a.createElement("span",null,"Category")),l.a.createElement(x.a.Description,null,"A description which may flow for several lines and give context to the content."),l.a.createElement(x.a.Extra,null,l.a.createElement(f.a,{primary:!0,floated:"right"},"Primary",l.a.createElement(k.a,{name:"chevron right"}))))))),l.a.createElement(g.a,{as:"h3",content:"Responsive Steps",style:O.h3,textAlign:"center"}),l.a.createElement(h.a,{style:O.last},l.a.createElement(R.a.Group,{fluid:!0},l.a.createElement(R.a,{icon:"plane",title:"Shipping",description:"Choose your shipping options"}),l.a.createElement(R.a,{active:!0,icon:"dollar",title:"Billing",description:"Enter billing information"}),l.a.createElement(R.a,{disabled:!0,icon:"info circle",title:"Confirm Order",description:"Verify order details"}))))}}]),a}(n.Component);t(326),t(329),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[179,2,1]]]);
//# sourceMappingURL=main.2473b071.chunk.js.map