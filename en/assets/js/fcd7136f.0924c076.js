"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5747],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8433:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={id:"metrics",title:"Metrics"},s=void 0,u={unversionedId:"component/metrics",id:"component/metrics",title:"Metrics",description:"Interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/07-metrics.md",sourceDirName:"component",slug:"/component/metrics",permalink:"/en/docs/component/metrics",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/07-metrics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"metrics",title:"Metrics"},sidebar:"docs",previous:{title:"Metadata",permalink:"/en/docs/component/metadata"},next:{title:"Registry",permalink:"/en/docs/component/registry"}},l=[{value:"Interface",id:"interface",children:[],level:3},{value:"Counter",id:"counter",children:[{value:"Gauge",id:"gauge",children:[],level:4},{value:"Observer",id:"observer",children:[],level:4}],level:3},{value:"Usage",id:"usage",children:[{value:"Metrics in server",id:"metrics-in-server",children:[],level:4},{value:"Metrics in Client",id:"metrics-in-client",children:[],level:4}],level:3},{value:"References",id:"references",children:[],level:3}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"interface"},"Interface"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Counter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Gauge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Observer")," are the three major metric interface of kratos."),(0,i.kt)("h3",{id:"counter"},"Counter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"\ntype Counter interface {\n    With(lvs ...string) Counter\n    Inc()\n    Add(delta float64)\n}\n")),(0,i.kt)("p",null,"Counter is just a standard counter. It should expose ",(0,i.kt)("inlineCode",{parentName:"p"},"Inc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," method. This counter can only count the increasing. It usually used at counting the numbers of errors or QPS."),(0,i.kt)("h4",{id:"gauge"},"Gauge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Gauge interface {\n    With(lvs ...string) Gauge\n    Set(value float64)\n    Add(delta float64)\n    Sub(delta float64)\n}\n")),(0,i.kt)("p",null,"Gauge is a status indicator. It records the current status of service. The value of gauge may increase or decrease. It usually used at monitoring CPU usage or Mem usage etc."),(0,i.kt)("h4",{id:"observer"},"Observer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Observer interface {\n    With(lvs ...string) Observer\n    Observe(float64)\n}\n")),(0,i.kt)("p",null,"Observer is a kind of more complex metric. It provides more extra information for monitoring sums, quantities and percentages. It is corresponding to Prometheus'",(0,i.kt)("strong",{parentName:"p"},"Histogram")," and ",(0,i.kt)("strong",{parentName:"p"},"Summary"),". The Histogram is used for record the counts in different buckets, such as the count of requests in different latency ranges. The Histogram is efficient. Summary records the percentiles, because of extra computation, it maybe slower."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"metrics-in-server"},"Metrics in server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/go-kratos/kratos/v2/middleware"\n    kmetrics "github.com/go-kratos/prometheus/metrics"\n    "github.com/go-kratos/kratos/v2/middleware/metrics"\n    "github.com/go-kratos/kratos/v2/transport/http"\n    "github.com/prometheus/client_golang/prometheus"\n)\nfunc NewHTTPServer(c *conf.Server) *http.Server {\n    // for prometheus \n    counter := prometheus.NewCounterVec(prometheus.CounterOpts{Name: "kratos_counter"}, []string{"server", "qps"})\n    var opts = []http.ServerOption{\n        http.Middleware(\n            middleware.Chain(\n                recovery.Recovery(),\n                metrics.Server(metrics.WithRequests(kmetrics.NewCounter(counter))),\n            ),\n        ),\n    }\n\n')),(0,i.kt)("h4",{id:"metrics-in-client"},"Metrics in Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    "github.com/go-kratos/kratos/v2/middleware"\n    kmetrics "github.com/go-kratos/prometheus/metrics"\n\n    "github.com/go-kratos/kratos/v2/middleware/metrics"\n    "github.com/go-kratos/kratos/v2/transport/http"\n    "github.com/prometheus/client_golang/prometheus"\n)\nfunc useClient() {\n    counter := prometheus.NewCounterVec(prometheus.CounterOpts{Name: "kratos_counter"},\n        []string{"client", "qps"})\n    client, _ := http.NewClient(context.Background(),\n        http.WithMiddleware(metrics.Client(metrics.WithRequests(kmetrics.NewCounter(counter)))))\n    // ...\n}\n')),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/concepts/metric_types/"},"https://prometheus.io/docs/concepts/metric_types/"))))}m.isMDXComponent=!0}}]);