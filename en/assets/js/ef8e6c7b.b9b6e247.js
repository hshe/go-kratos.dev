"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9365],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={id:"metadata",title:"Metadata",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,d={unversionedId:"component/metadata",id:"component/metadata",title:"Metadata",description:"Microservices interact through HTTP and gRPC API, so the service architecture needs to be used for uniform Metadata transport.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/06-metadata.md",sourceDirName:"component",slug:"/component/metadata",permalink:"/en/docs/component/metadata",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/06-metadata.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"metadata",title:"Metadata",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Logger",permalink:"/en/docs/component/log"},next:{title:"Metrics",permalink:"/en/docs/component/metrics"}},u=[{value:"Default Metadata Convention",id:"default-metadata-convention",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Configuration",id:"configuration",children:[],level:4},{value:"Get metadata value",id:"get-metadata-value",children:[],level:4},{value:"Set metadata",id:"set-metadata",children:[],level:4}],level:3}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Microservices interact through HTTP and gRPC API, so the service architecture needs to be used for uniform Metadata transport.\nCurrently, you could also carry a Metadata pass in gRPC, The metadata will be put into HTTP Header, and then upstream will receive the corresponding Metadata Information.\nSo it's also designed to be delivered via HTTP Header, first wrapped in a key/value structure in a framework through a metadata package, and then carried to Transport Header."),(0,o.kt)("h3",{id:"default-metadata-convention"},"Default Metadata Convention"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x-md-global-xxx\uff0cwill be transported globally, e.g. mirror/color/criticality"),(0,o.kt)("li",{parentName:"ul"},"x-md-local-xxx\uff0cwill be transported locally, e.g. caller")),(0,o.kt)("p",null,"You could also set your custom key prefix in  middleware/metadata for constant metadata."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"First, the middleware/metadata plug-in should be configured to client/server, and then you can customize the transport key prefix, or the metadata constant, such as caller.\nFinally, it can be configured or obtained through ",(0,o.kt)("inlineCode",{parentName:"p"},"NewClientContext")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FromServerContext")," in the metadata package."),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/tree/main/examples/metadata\n\n// Register the metadata middleware to gRPC or HTTP\'s server or client\n\n// server\ngrpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        metadata.Server(),\n    ),\n)\nhttpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        metadata.Server(),\n    ),\n)\n\n// client\nconn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("127.0.0.1:9000"),\n    grpc.WithMiddleware(\n        metadata.Client(),\n    ),\n)\n')),(0,o.kt)("h4",{id:"get-metadata-value"},"Get metadata value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if md, ok := metadata.FromServerContext(ctx); ok {\n    extra = md.Get("x-md-global-extra")\n}\n')),(0,o.kt)("h4",{id:"set-metadata"},"Set metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ctx = metadata.AppendToClientContext(ctx, "x-md-global-extra", "2233")\n')))}p.isMDXComponent=!0}}]);