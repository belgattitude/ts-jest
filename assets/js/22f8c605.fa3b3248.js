"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4448],{4137:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,s(s({ref:e},u),{},{components:r})):n.createElement(m,s({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8159:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(4137)),s=["components"],a={id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},c=void 0,p={unversionedId:"introduction",id:"version-27.1/introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",source:"@site/versioned_docs/version-27.1/introduction.md",sourceDirName:".",slug:"/",permalink:"/ts-jest/docs/27.1/",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/introduction.md",tags:[],version:"27.1",frontMatter:{id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},sidebar:"version-27.1-docs",next:{title:"Processing flow",permalink:"/ts-jest/docs/27.1/processing"}},u={},l=[],d={toc:l};function f(t){var e=t.components,r=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," is a Jest ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/next/code-transformation#writing-custom-transformers"},"transformer")," with source map support that lets you use Jest to test projects written in TypeScript."),(0,i.kt)("p",null,"It supports all features of TypeScript including type-checking. ",(0,i.kt)("a",{parentName:"p",href:"babel7-or-ts"},"Read more about Babel7 + ",(0,i.kt)("inlineCode",{parentName:"a"},"preset-typescript")," ",(0,i.kt)("strong",{parentName:"a"},"vs")," TypeScript (and ",(0,i.kt)("inlineCode",{parentName:"a"},"ts-jest"),")"),"."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"We are not doing semantic versioning and ",(0,i.kt)("inlineCode",{parentName:"p"},"23.10")," is a re-write, run ",(0,i.kt)("inlineCode",{parentName:"p"},'npm i -D ts-jest@"<23.10.0"')," to go back to the previous version")))}f.isMDXComponent=!0}}]);