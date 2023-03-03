"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[675],{5911:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(1883),r=a(7294),n=a(498),s=a(7660);const m=e=>{let{icon:t,className:a=""}=e;const l=s.$s[t].icon;return r.createElement(l,{className:a})},c=e=>{let{data:t,className:a=""}=e;return r.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+a},t.map((e=>{var t;let[a,l]=e,n=(null===(t=s.$s[a])||void 0===t?void 0:t.url)+"/"+l;return(/^(?:https?:\/\/)/.test(l)||/^mailto:/.test(l))&&(n=l),r.createElement("li",{key:a},r.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},r.createElement(m,{className:"site-link",icon:a})))})))};var i=(0,r.memo)(c);const o=e=>{let{bio:t,name:a,initial:s,avatar:{normal:m,className:c="h-32 w-32"},sns:o,className:d="",yamlId:u}=e;return r.createElement("div",{className:d+" flex flex-wrap space-x-0 sm:space-x-8"},r.createElement("div",{className:"w-full sm:w-auto text-center"},r.createElement(n.Z,{className:"mb-4 "+c,initial:s,image:m})),r.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},r.createElement("h3",{className:"leading-tight md:leading-tight"},a,u&&r.createElement(l.rU,{to:"/authors/@"+u,className:"site-link mx-2"},r.createElement("small",null,"@",u))),r.createElement("p",{className:"text-base"},t),r.createElement(i,{className:"max-w-lg text-xl my-0",data:o})))};var d=(0,r.memo)(o)},498:function(e,t,a){var l=a(7294),r=a(8032);const n=e=>{let{image:t,initial:a,className:n=""}=e;const s=(0,r.c)(t);return s?l.createElement(r.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+n,image:s,alt:""}):l.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+n,"data-initial":a})};t.Z=(0,l.memo)(n)},9586:function(e,t,a){var l=a(7294),r=a(1883);const n=e=>{let{categories:t,className:a}=e;return t&&t.length?l.createElement("div",{className:"flex flex-wrap gap-3 "+a},t.map(((e,t)=>l.createElement(r.rU,{className:"site-tag block",key:t,to:"/categories/"+e},e)))):l.createElement(l.Fragment,null)};t.Z=(0,l.memo)(n)},9554:function(e,t,a){var l=a(7294),r=a(1883);const n=e=>{let{pageInfo:{currentPage:t,hasNextPage:a,hasPreviousPage:n,pageCount:s},path:m}=e;const c=e=>t==e+1?"pagination-item active":"pagination-item";return l.createElement("ul",{className:"pagination text-center"},n?l.createElement("li",{className:"pagination-item"},l.createElement(r.rU,{to:"/"+m+"/"+(t-1)},"Prev")):null,Array.from({length:s}).map(((e,t)=>l.createElement("li",{key:t+1,className:c(t)},l.createElement(r.rU,{to:"/"+m+"/"+(t+1)},t+1)))),a?l.createElement("li",{className:"pagination-item"},l.createElement(r.rU,{to:"/"+m+"/"+(t+1)},"Next")):null)};t.Z=(0,l.memo)(n)},197:function(e,t,a){var l=a(7294);const r=e=>{let{timeToRead:t,date:a,className:r=""}=e;return l.createElement("span",{className:"text-gray-500 "+r},a," • ",Math.round(t)," min read")};t.Z=(0,l.memo)(r)},8188:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(1883),n=a(8032),s=a(9586),m=a(197);const c=e=>{let{title:t,description:a,date:c,categories:i,hero:o,timeToRead:d,slug:u}=e;const g=(0,n.c)(null==o?void 0:o.normal);return l.createElement("div",{className:"panel"},l.createElement(r.rU,{to:u},g?l.createElement("div",{className:"panel-image"},l.createElement(n.G,{image:g,alt:""})):null,l.createElement("h3",null,t)),l.createElement("p",{className:"panel-content"},a),l.createElement(s.Z,{categories:i}),l.createElement("br",null),l.createElement("span",{className:"panel-footer"},l.createElement(m.Z,{timeToRead:d,date:c})))};var i=(0,l.memo)(c);const o=e=>{let{posts:t,className:a=""}=e;return l.createElement("div",{className:a},t.map((e=>{let{id:t,timeToRead:a,frontmatter:{categories:r,date:n,description:s,hero:m,title:c},fields:{slug:o}}=e;return l.createElement(i,{key:t,title:c,description:s,date:n,categories:r,hero:m,slug:o,timeToRead:a})})))};var d=(0,l.memo)(o)},6979:function(e,t,a){a.r(t);var l=a(7294),r=a(5916),n=a(9554),s=a(5911),m=a(8188),c=a(5648);t.default=e=>{let{data:{allMdx:{nodes:t,pageInfo:a},authorsYaml:{bio:i,name:o,initial:d,avatar:u,sns:g}},pageContext:{authorId:E}}=e;const{siteUrl:p}=(0,c.$W)();return l.createElement(r.Z,{pageUrl:p+"/authors/@"+E,pageTitle:"Posts of "+o},l.createElement(s.Z,{className:"mb-24 p-8 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mx-auto max-w-2xl",bio:i,name:o,initial:d,avatar:u,sns:g}),l.createElement(m.Z,{posts:t,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),l.createElement("div",{className:"my-24"},l.createElement(n.Z,{pageInfo:a,path:"authors/@"+E})))}}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-templates-author-posts-index-tsx-c39d3c82975ea71248a2.js.map