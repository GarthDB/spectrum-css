(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9yOl":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/id",function(){var t=n("bNgo");return{page:t.default||t}}])},bNgo:function(t,e,n){"use strict";n.r(e);var l=n("o0o1"),a=n.n(l),r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),y=n("a7VT"),m=n("Tit0"),u=n("O40h"),c=n("q1tI"),p=n.n(c),s=(n("i8i4"),n("nOHt")),d=n("SskB"),b=n.n(d),f=n("TSYQ"),g=n.n(f),h=p.a.createElement;var v=function(t){function e(t){return Object(r.a)(this,e),Object(i.a)(this,Object(y.a)(e).call(this,t))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t="no examples";return this.props.pageData.hasOwnProperty("examples")&&(t=this.props.pageData.examples.map(function(t){return h("div",{key:t.slug},h("h3",null,t.name),h("pre",null,h("code",null,t.markup)),h("div",{dangerouslySetInnerHTML:{__html:t.markup}}))})),h("div",null,h("div",null,h("div",{className:g()("afg-container-fluid",b.a.mainContainer)},h("h1",null,this.props.pageData.name),h("p",null,this.props.pageData.description),h("div",null,h("h2",null,"Examples"),t))))}}],[{key:"getInitialProps",value:function(){var t=Object(u.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"production",t.abrupt("return",{node_env:"production"});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}]),e}(p.a.Component);v.getInitialProps=function(){var t=Object(u.a)(a.a.mark(function t(e){var l,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.query.id,t.next=3,n("fLtd")("./".concat(l,".yml"));case 3:return r=t.sent,t.abrupt("return",{pageData:r.default});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.default=Object(s.withRouter)(v)},fLtd:function(t,e,n){var l={"./accordion.yml":["N55u",8],"./actionbar.yml":["RZ88",9],"./actionbutton.yml":["LUz5",10],"./actionmenu.yml":["YQsB",11],"./alert.yml":["tObm",12],"./asset.yml":["8UPm",13],"./assetlist.yml":["00My",14],"./avatar.yml":["pzik",15],"./banner.yml":["s6yJ",16],"./barloader.yml":["inr8",17],"./breadcrumb.yml":["Vdly",18],"./button-cta.yml":["z4DL",19],"./button-over-background.yml":["e7gD",20],"./button-primary.yml":["0e8c",21],"./button-secondary.yml":["vdpJ",22],"./button-warning.yml":["AT+i",23],"./buttongroup.yml":["AwJ2",24],"./calendar.yml":["rCvV",25],"./card-asset.yml":["ozAp",26],"./card-gallery.yml":["8MqA",27],"./card.yml":["yE7n",28],"./checkbox.yml":["gjy9",29],"./circleloader.yml":["Jjse",30],"./clearbutton.yml":["xT3F",31],"./coachmark.yml":["7A8H",32],"./combobox.yml":["B6u2",33],"./cyclebutton.yml":["WRUx",34],"./datepicker.yml":["Tfq+",35],"./decoratedtextfield.yml":["g4Zx",36],"./dial.yml":["DhpZ",37],"./dialog.yml":["Fz7W",38],"./dropdown.yml":["E3NY",39],"./dropindicator.yml":["bMzs",40],"./dropzone.yml":["B+89",41],"./fieldgroup.yml":["HE/j",42],"./fieldlabel.yml":["QIkl",43],"./form.yml":["bXed",44],"./illustratedmessage.yml":["fwSd",45],"./label.yml":["nvuP",46],"./link.yml":["LSX4",47],"./logicbutton.yml":["6Byw",48],"./menu.yml":["doH9",49],"./meter.yml":["wvhf",50],"./miller.yml":["cVtO",51],"./page.yml":["r3yX",52],"./pagination-button-style.yml":["S5Ym",53],"./pagination-explicit.yml":["q4e+",54],"./pagination-listing.yml":["1C4V",55],"./popover.yml":["PwO+",56],"./quickaction.yml":["F3G5",57],"./radio.yml":["19mh",58],"./rating.yml":["Hobc",59],"./rule.yml":["HMV8",60],"./search.yml":["ZLTR",61],"./searchwithin.yml":["Rg1D",62],"./sidenav.yml":["a5x+",63],"./slider.yml":["rpH/",64],"./splitbutton.yml":["g/2+",65],"./splitview.yml":["x+vK",66],"./statuslight.yml":["Z27D",67],"./steplist.yml":["xAFO",68],"./stepper.yml":["yBut",69],"./table.yml":["+/dc",70],"./tabs.yml":["BAq6",71],"./tags.yml":["0E6f",72],"./textarea.yml":["/yr1",73],"./textfield.yml":["M+I1",74],"./toast.yml":["ShWK",75],"./toggle.yml":["3G8X",76],"./tool.yml":["VTDL",77],"./tooltip.yml":["UpOF",78],"./treeview.yml":["2yK9",79],"./typography-deprecated.yml":["YyMU",80],"./typography-international.yml":["VQsb",81],"./typography.yml":["p7Y6",82],"./well.yml":["kafv",83]};function a(t){if(!n.o(l,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=l[t],a=e[0];return n.e(e[1]).then(function(){return n.t(a,7)})}a.keys=function(){return Object.keys(l)},a.id="fLtd",t.exports=a}},[["9yOl",1,0]]]);