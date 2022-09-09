"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2299],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),s=(n(7294),n(4137)),i=["components"],a={id:"test-helpers",title:"Test helpers"},l=void 0,c={unversionedId:"guides/test-helpers",id:"version-26.5/guides/test-helpers",title:"Test helpers",description:"ts-jest provides some test utilities to be used in your test, related to TypeScript.",source:"@site/versioned_docs/version-26.5/guides/test-helpers.md",sourceDirName:"guides",slug:"/guides/test-helpers",permalink:"/ts-jest/docs/26.5/guides/test-helpers",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/test-helpers.md",tags:[],version:"26.5",frontMatter:{id:"test-helpers",title:"Test helpers"},sidebar:"version-26.5-docs",previous:{title:"Using with React Native",permalink:"/ts-jest/docs/26.5/guides/react-native"},next:{title:"Troubleshooting",permalink:"/ts-jest/docs/26.5/guides/troubleshooting"}},p={},u=[{value:"<code>mocked&lt;T&gt;(item: T, deep = false)</code>",id:"mockedtitem-t-deep--false",level:2},{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," provides some test utilities to be used in your test, related to TypeScript."),(0,s.kt)("h2",{id:"mockedtitem-t-deep--false"},(0,s.kt)("inlineCode",{parentName:"h2"},"mocked<T>(item: T, deep = false)")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"mocked")," test helper provides typings on your mocked modules and even their deep methods, based on the typing of its source. It makes use of the latest TypeScript feature, so you even have argument types completion in the IDE (as opposed to ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.MockInstance"),")."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," while it needs to be a function so that input type is changed, the helper itself does nothing else than returning the given input value."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nexport const foo = {\n  a: {\n    b: {\n      c: {\n        hello: (name: string) => `Hello, ${name}`,\n      },\n    },\n  },\n  name: () => 'foo',\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.spec.ts\nimport { mocked } from 'ts-jest/utils'\nimport { foo } from './foo'\njest.mock('./foo')\n\n// here the whole foo var is mocked deeply\nconst mockedFoo = mocked(foo, true)\n\ntest('deep', () => {\n  // there will be no TS error here, and you'll have completion in modern IDEs\n  mockedFoo.a.b.c.hello('me')\n  // same here\n  expect(mockedFoo.a.b.c.hello.mock.calls).toHaveLength(1)\n})\n\ntest('direct', () => {\n  foo.name()\n  // here only foo.name is mocked (or its methods if it's an object)\n  expect(mocked(foo.name).mock.calls).toHaveLength(1)\n})\n")))}m.isMDXComponent=!0}}]);