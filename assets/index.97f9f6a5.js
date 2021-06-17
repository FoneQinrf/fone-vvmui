import{r as l,c as n,b as s,o as t,s as u,k as a}from"./vendor.82c32546.js";const o={class:"markdown-body"},r=s("h1",null,"Notify 消息通知",-1),e=s("hr",null,null,-1),c=s("h3",null,"引入",-1),d=s("pre",null,[s("code",{class:"hljs Javascript"},[s("span",{class:"copy",value:"import { Notify } from 'vvmui';\n\nNotify('消息');\n"},"复制代码"),s("span",{class:"hljs-keyword"},"import"),a(" { Notify } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vvmui'"),a(";\n\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(");\n")])],-1),i=s("h2",null,"代码演示",-1),p=s("h3",null,"使用方式",-1),h=s("pre",null,[s("code",{class:"hljs Javascript"},[s("span",{class:"copy",value:"\nNotify('消息');\n\n"},"复制代码"),a("\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(");\n\n")])],-1),y=s("br",null,null,-1),f=s("h3",null,"type类型",-1),j=s("pre",null,[s("code",{class:"hljs Javascript"},[s("span",{class:"copy",value:"Notify('消息', { type: 'default' });\nNotify('消息', { type: 'success' });\nNotify('消息', { type: 'warning' });\nNotify('消息', { type: 'error' });\n"},"复制代码"),a("Notify("),s("span",{class:"hljs-string"},"'消息'"),a(", { "),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'default'"),a(" });\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(", { "),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'success'"),a(" });\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(", { "),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'warning'"),a(" });\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(", { "),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'error'"),a(" });\n")])],-1),N=s("br",null,null,-1),g=s("h3",null,"自定义延迟关闭时间",-1),v=s("pre",null,[s("code",{class:"hljs Javascript"},[s("span",{class:"copy",value:"\nNotify('消息', { duration: 3000 });\n\n"},"复制代码"),a("\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(", { "),s("span",{class:"hljs-attr"},"duration"),a(": "),s("span",{class:"hljs-number"},"3000"),a(" });\n\n")])],-1),b=s("br",null,null,-1),m=s("h3",null,"关闭回调",-1),_=s("pre",null,[s("code",{class:"hljs Javascript"},[s("span",{class:"copy",value:"\nNotify('消息', {\n  onClose: () => {\n    Toast.info('Notify已关闭');\n  }\n});\n\n"},"复制代码"),a("\nNotify("),s("span",{class:"hljs-string"},"'消息'"),a(", {\n  "),s("span",{class:"hljs-attr"},"onClose"),a(": "),s("span",{class:"hljs-function"},"() =>"),a(" {\n    Toast.info("),s("span",{class:"hljs-string"},"'Notify已关闭'"),a(");\n  }\n});\n\n")])],-1),w=s("h2",null,"API",-1),J=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"方法"),s("th",null,"说明"),s("th",null,"参数"),s("th",null,"返回值")])]),s("tbody",null,[s("tr",null,[s("td",null,"Notify"),s("td",null,"提示"),s("td",null,[s("code",null,"msg"),a(),s("code",null,"options")]),s("td",null,[s("code",null,"Notify"),a("实例")])])])],-1),k=s("br",null,null,-1),C=s("br",null,null,-1),x=s("h3",null,"Options",-1),S=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"参数"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"可选值"),s("th",null,"默认值")])]),s("tbody",null,[s("tr",null,[s("td",null,"type"),s("td",null,[s("code",null,"Notify"),a("类型")]),s("td",null,"String"),s("td",null,[s("code",null,"default"),a(),s("code",null,"success"),a(),s("code",null,"warning"),a(),s("code",null,"error")]),s("td",null,"default")]),s("tr",null,[s("td",null,"duration"),s("td",null,"延迟关闭的时间（ms）"),s("td",null,"Number"),s("td",null,"-"),s("td",null,"1000")]),s("tr",null,[s("td",null,"className"),s("td",null,"自定义类名"),s("td",null,"String"),s("td",null,"-"),s("td",null,"-")]),s("tr",null,[s("td",null,"onClose"),s("td",null,"关闭时的回调"),s("td",null,"Function"),s("td",null,"-"),s("td",null,"-")])])],-1),T=s("br",null,null,-1),A=s("h3",null,"更新日志",-1),F=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"版本"),s("th",null,"类型"),s("th",null,"内容")])])],-1),I={expose:[],setup:a=>(a,I)=>{const O=l("Card");return t(),n("div",o,[r,e,s(O,null,{default:u((()=>[c,d])),_:1}),i,s(O,null,{default:u((()=>[p,h])),_:1}),y,s(O,null,{default:u((()=>[f,j])),_:1}),N,s(O,null,{default:u((()=>[g,v])),_:1}),b,s(O,null,{default:u((()=>[m,_])),_:1}),w,s(O,null,{default:u((()=>[J])),_:1}),k,C,s(O,null,{default:u((()=>[x,S])),_:1}),T,s(O,null,{default:u((()=>[A,F])),_:1})])}};export default I;