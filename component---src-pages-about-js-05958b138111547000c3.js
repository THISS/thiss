(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(173),l=a(174);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"About Me"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"A Little About Me")),r.a.createElement("div",{className:"col-12"},r.a.createElement("p",null,"I am currently living and working in the Okanagan of British Columbia Canada. I have found my passion and am one of the lucky ones who gets to do what they enjoy every day. I always had this craving for change and software development has effectively tamed this craving. As the more you learn the more you realise you don't know and there are just so many avenues that I am able to travel down now."),r.a.createElement("p",null,"The company I work for specialises in .NET solutions and I have been able to work on some sizable projects and have had tricky problems to solve. What happens to a front end framework when you have millions of data points on the page at once? How can we optimise this manufacturing line? This data ",r.a.createElement("strong",null,"Needs")," to be private to everyone else. No Exceptions."),r.a.createElement("p",null,"- reach out if you want to know more"))))}},169:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),l=a.n(i),o=a(40),s=a.n(o);a.d(t,"a",function(){return s.a});a(170);var c=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},170:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",subtitle:"Software Developer at Big Bear Software"}}}}},172:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),l=a.n(i),o=a(64),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},173:function(e,t,a){"use strict";var n=a(171),r=a(0),i=a.n(r),l=a(5),o=a.n(l),s=a(169),c=[{title:"Home",uri:"/"},{title:"About Me",uri:"/about"},{title:"Skills",uri:"/skills"},{title:"Blog",uri:"/blog"}],u=function(e){var t=e.siteTitle,a=e.subTitle;return i.a.createElement("header",{className:"container-fluid"},i.a.createElement("section",{className:"row"},i.a.createElement("div",{className:"col-12 pb-2"},i.a.createElement("h1",null,i.a.createElement(s.a,{to:"/"},t)),i.a.createElement("h5",null,a)),i.a.createElement("nav",{className:"col-12 d-flex flex-column"},c.map(function(e,t){return i.a.createElement("div",{className:"py-2",key:t},i.a.createElement(s.a,{to:e.uri},e.title))}),i.a.createElement("div",{className:"py-2"},i.a.createElement("a",{href:"https://github.com/THISS",target:"__blank"},"GitHub")),i.a.createElement("div",{className:"py-2"},i.a.createElement("a",{href:"https://www.linkedin.com/in/brenton-holswich/",target:"__blank"},"linkedIn")))))};u.propTypes={siteTitle:o.a.string,subTitle:o.a.string},u.defaultProps={siteTitle:"",subTitle:""};var d=u,m=(a(158),function(e){var t=e.children;return i.a.createElement(s.b,{query:"565778879",render:function(e){return i.a.createElement("div",{className:"container-fluid site-container d-flex"},i.a.createElement("div",{className:"row flex-fill"},i.a.createElement("div",{className:"d-none d-sm-block col-sm-4 position-fixed"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),i.a.createElement("div",{className:"d-sm-none d-block col-12"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),i.a.createElement("div",{className:"offset-sm-4 d-flex flex-fill"},i.a.createElement("div",{className:"d-flex flex-fill flex-column justify-content-between"},i.a.createElement("main",{className:"flex-fill d-flex"},t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})});m.propTypes={children:o.a.node.isRequired};t.a=m},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(5),o=a.n(l),s=a(176),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=e.children,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r)},o)}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",description:"A blog / place for me to deploy my thoughts and challenges as I grow in the areas of micro services, machine learning and general software development.",author:"@brentonholswich"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-05958b138111547000c3.js.map