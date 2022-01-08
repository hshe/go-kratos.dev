"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[473],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),g=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=g(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=g(t),u=i,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},656:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return p},default:function(){return s}});var n=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],l={id:"logging",title:"Logging",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,g={unversionedId:"component/middleware/logging",id:"component/middleware/logging",title:"Logging",description:"Logging middleware is used to print the details of requests received or initiated by the service.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/04-logging.md",sourceDirName:"component/middleware",slug:"/component/middleware/logging",permalink:"/en/docs/component/middleware/logging",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/04-logging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"logging",title:"Logging",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Circuit Breaker",permalink:"/en/docs/component/middleware/circuitbreaker"},next:{title:"Metrics",permalink:"/en/docs/component/middleware/metrics"}},p=[{value:"Usage",id:"usage",children:[{value:"gRPC server",id:"grpc-server",children:[],level:4},{value:"gRPC client",id:"grpc-client",children:[],level:4},{value:"HTTP client",id:"http-client",children:[],level:4},{value:"grpc-server",id:"grpc-server-1",children:[],level:4}],level:3}],d={toc:p};function s(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logging middleware is used to print the details of requests received or initiated by the service."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"grpc-server"},"gRPC server"),(0,o.kt)("p",null,"By passing ",(0,o.kt)("inlineCode",{parentName:"p"},"logging.Server()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.ServerOption"),", Kratos will print detailed request information every time a gRPC request is received."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"logger := log.DefaultLogger\nvar opts = []grpc.ServerOption{\n    grpc.Middleware(\n        logging.Server(logger),\n    ),\n}\nsrv := grpc.NewServer(opts...)\n")),(0,o.kt)("h4",{id:"grpc-client"},"gRPC client"),(0,o.kt)("p",null,"By passing ",(0,o.kt)("inlineCode",{parentName:"p"},"logging.Client()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc.WithMiddleware"),", Kratos will print detailed request information every time a grpc request is initiated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"logger := log.DefaultLogger\nvar opts = []http.ServerOption{\n    http.Middleware(\n        logging.Server(logger),\n    ),\n}\nsrv := http.NewServer(opts...)\n")),(0,o.kt)("h4",{id:"http-client"},"HTTP client"),(0,o.kt)("p",null,"By passing ",(0,o.kt)("inlineCode",{parentName:"p"},"logging.Client()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"http.WithMiddleware"),", Kratos will print detailed request information every time an Http request is initiated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'logger := log.DefaultLogger\nconn, err := http.NewClient(\n    context.Background(),\n    http.WithMiddleware(\n        logging.Client(logger),\n    ),\n    http.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,o.kt)("p",null,"The Logging middleware only prints ",(0,o.kt)("inlineCode",{parentName:"p"},"trace_id")," in the server and does not collect data."),(0,o.kt)("h4",{id:"grpc-server-1"},"grpc-server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// internal/server/grpc.go\n\nexporter, err := stdouttrace.New(stdouttrace.WithWriter(ioutil.Discard))\nif err != nil {\n    fmt.Printf("creating stdout exporter: %v", err)\n    panic(err)\n}\n\ntp := tracesdk.NewTracerProvider(\n    tracesdk.WithBatcher(exporter),\n    tracesdk.WithResource(resource.NewSchemaless(\n        semconv.ServiceNameKey.String(Name)),\n    )\n)\n\nvar opts = []grpc.ServerOption{\n  grpc.Middleware(\n    tracing.Server(tracing.WithTracerProvider(tp)),\n  ),\n}\n\nsrv := grpc.NewServer(opts...)\n')),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"trace_id")," field to the output log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// cmd/project_name/main.go\n\nlogger := log.With(\n  log.NewStdLogger(os.Stdout),\n  "ts", log.DefaultTimestamp,\n  "caller", log.DefaultCaller,\n  "service.id", id,\n  "service.name", Name,\n  "service.version", Version,\n  "trace_id", log.TraceID(),\n  "span_id", log.SpanID(),\n)\n')),(0,o.kt)("p",null,"Log ",(0,o.kt)("inlineCode",{parentName:"p"},"trace_id")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'log.WithContext(ctx).Errorf("Field created: %s", err)\n')))}s.isMDXComponent=!0}}]);