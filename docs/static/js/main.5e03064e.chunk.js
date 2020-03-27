(this.webpackJsonpsoulfinder=this.webpackJsonpsoulfinder||[]).push([[0],{19:function(e,t,a){e.exports=a(41)},24:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=(a(24),a(2)),c=a(8);var s=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"left"},"Made with \ud83e\udd0d and React"),r.a.createElement("div",{className:"right"},r.a.createElement("a",{id:"github",className:"social",href:"https://github.com/KyzaGitHub/SoulFinder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./github.png",alt:"GitHub"})),r.a.createElement("a",{id:"discord",className:"social",href:"https://discord.gg/c9ESSur",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./discord.svg",alt:"Discord"}))))},u=a(3),m=a(9),d=a(6),f=a(7),y=a(12);var p=Object(i.a)((function(e){return r.a.createElement(c.Spring,{to:{backgroundColor:e.fairySoulSelected===e.fairySoulIndex?"rgba(0, 50, 100, 0.4)":"rgba(0, 0, 0, 0)",paddingLeft:e.fairySoulSelected===e.fairySoulIndex?"40px":"20px"}},(function(t){return r.a.createElement("div",{style:t,className:"navigation-item clickable".concat(e.fairySoulSelected===e.fairySoulIndex?" navigation-selected":""),onClick:function(){e.setFairySoul(e.fairySoulIndex)}},r.a.createElement("span",null,e.fairySoulName))}))}));var h=Object(i.a)((function(e){var t=[r.a.createElement("div",{id:"home",className:"navigation-item clickable",onClick:function(){l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},"Home")].concat(Object(y.a)(e.fairySouls.map((function(t,a){return r.a.createElement(p,{key:a,fairySoulName:t,setFairySoul:e.setFairySoul,fairySoulIndex:a,fairySoulSelected:e.fairySoulIndex})}))));return r.a.createElement(c.Spring,{from:{transform:"translateX(-100%)",opacity:0},to:{transform:"translateX(0)",opacity:1}},(function(e){return r.a.createElement("div",{style:e,id:"navigation"},r.a.createElement(c.Trail,{config:{tension:170,friction:18},items:t,from:{transform:"translateX(-100%)",opacity:0},to:{transform:"translateX(0)",opacity:1}},(function(e){return function(t){return r.a.createElement("div",{style:t},e)}})))}))}));var S=Object(i.a)((function(e){return e.fairySoulData?r.a.createElement(c.Spring,{config:{tension:170,friction:18},from:{transform:"translateY(10%)",opacity:0},to:{transform:"translateY(0)",opacity:1}},(function(t){return r.a.createElement("div",{style:t,className:"card soul"},r.a.createElement("h1",null,e.fairySoulName),e.fairySoulData.description?r.a.createElement("p",null,e.fairySoulData.description):"",r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},"Coordinates (X Y Z)"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.fairySoulData.coords.x),r.a.createElement("td",null,e.fairySoulData.coords.y),r.a.createElement("td",null,e.fairySoulData.coords.z)))),e.fairySoulData.items?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:e.fairySoulData.items.length},"One Item Needed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,e.fairySoulData.items.map((function(e,t){return r.a.createElement("td",{key:t},e)}))))):"",e.fairySoulData.video?r.a.createElement("iframe",{title:"YouTube",src:"https://www.youtube-nocookie.com/embed/".concat(e.fairySoulData.video,"?controls=0&autoplay=1&color=white&disablekb=1&loop=1&fs=0&modestbranding=1&showinfo=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.a.createElement("h2",null,"Video coming soon..."))})):""})),E=a(5),g=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).setFairySoul=function(e){n.setState({fairySoulIndex:e}),n.setState({fairySoulName:Object.keys(E[n.props.islandName])[e]}),n.setState({fairySoulData:E[n.props.islandName][Object.keys(E[n.props.islandName])[e]]})},n.state={fairySoulIndex:0},n.state.fairySoulName=Object.keys(E[n.props.islandName])[n.state.fairySoulIndex],n.state.fairySoulCount=Object.keys(E[n.props.islandName]).length,n.state.fairySoulData=E[n.props.islandName][n.state.fairySoulName],n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"souls"},r.a.createElement(h,{setFairySoul:this.setFairySoul,fairySouls:Object.keys(E[this.props.islandName]),fairySoulIndex:this.state.fairySoulIndex,fairySoulCount:this.props.fairySoulCount,fairySoulName:this.state.fairySoulName}),r.a.createElement(S,{fairySoulName:this.state.fairySoulName,fairySoulData:this.state.fairySoulData}))}}]),a}(r.a.Component);var b=Object(i.a)((function(e){return r.a.createElement("div",{className:"card island clickable",onClick:function(){l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{islandName:e.islandName,fairySouls:e.fairySouls}),r.a.createElement(s,null)),document.getElementById("root"))}},r.a.createElement("h1",null,e.islandName),r.a.createElement("img",{src:"./".concat(e.islandName.toLowerCase().replaceAll(" ","-"),".png"),alt:e.islandName+" Image"}))}));var v=Object(i.a)((function(){var e=Object.keys(E).map((function(e,t){return r.a.createElement(b,{key:t,islandName:e,fairySouls:E[e]})}));return r.a.createElement("div",{id:"islands"},r.a.createElement(c.Trail,{items:e,from:{transform:"translateY(-5%)",opacity:0},to:{transform:"translateY(0)",opacity:1}},(function(e){return function(t){return r.a.createElement("div",{style:t},e)}})))}));a(40);String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var N=Object(i.a)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(s,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('{"The Hub":{"The Bank":{"coords":{"x":0,"y":0,"z":0},"items":["Grappling Hook","Ender Pearl"],"description":"Near the top of the gold pile on top of the bank."},"The Mayor\'s House":{"coords":{"x":0,"y":0,"z":0},"description":"Behind the flames in the fireplace."}},"The Barn":{"East Aqueduct":{"coords":{"x":182,"y":99,"z":-235},"description":"In the East Aqueduct."},"Windmill 1":{"coords":{"x":96,"y":96,"z":-287},"items":["Ender Pearl"],"description":"On the 3rd floor of the Windmill."},"Windmill 2":{"coords":{"x":99,"y":112,"z":-274},"items":["Ender Pearl"],"description":"On the sail of the Windmill."},"Chimney":{"coords":{"x":96,"y":96,"z":-287},"items":["Grappling Hook","Ender Pearl"],"description":"Next to the front chimney on top of the barn."},"East Mountains":{"coords":{"x":183,"y":99,"z":-304},"description":"Behind the east mountains."},"West Mountains":{"coords":{"x":157,"y":23,"z":-202},"description":"Inside the water coming from the west mountain."},"The Root":{"coords":{"x":157,"y":23,"z":-202},"description":"At the lowest point of root at the south of the island."}},"Mushroom Desert":{},"Gold Mine":{},"Deep Caverns":{},"Spider\'s Den":{},"Blazing Fortress":{},"The End":{},"The Park":{},"Jerry\'s Workshop":{}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.5e03064e.chunk.js.map