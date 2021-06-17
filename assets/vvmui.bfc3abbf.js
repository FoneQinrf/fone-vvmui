var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,a=(e,a)=>{for(var s in a||(a={}))l.call(a,s)&&n(e,s,a[s]);if(t)for(var s of t(a))o.call(a,s)&&n(e,s,a[s]);return e};import{d as s,h as c,c as i,o as r,i as u,j as d,u as p,r as v,F as m,b as h,k as f,t as g,l as y,m as b,n as k,T as C,q as w,s as x,v as S,x as T,y as $,z as V,A as B,B as _,C as E,D as O,E as A,G as I,H as N}from"./vendor.82c32546.js";let P;!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(t){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((t,a)=>{const s=new URL(e,o);if(self[l].moduleMap[s])return t(self[l].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${l}.moduleMap['${s}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),n(i)},onload(){t(self[l].moduleMap[s]),n(i)}});document.head.appendChild(i)})),self[l].moduleMap={}}}("/fone-vvmui/assets/");const L={},z=function(e,l){if(!l)return e();if(void 0===P){const e=document.createElement("link").relList;P=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(l.map((e=>{if(e in L)return;L[e]=!0;const l=e.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=l?"stylesheet":P,l||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),l?new Promise(((e,l)=>{o.addEventListener("load",e),o.addEventListener("error",l)})):void 0}))).then((()=>e()))};var F=s({name:"Icon",emits:["click"],setup:(e,{emit:l})=>({style:c((()=>({fontSize:`${e.size}px`,width:`${e.size}px`,height:`${e.size}px`,color:e.color}))),click:()=>{l("click")}}),props:{name:String,size:{type:Number,default:18},color:{type:String}}});F.render=function(e,l,t,o,n,a){return r(),i("i",{onClick:l[1]||(l[1]=(...l)=>e.click&&e.click(...l)),class:["vvm-iconfont","vvm-icon","vvm-ignore",e.name],style:e.style},null,6)};let j={$toast:{duration:1e3},size:"",popup:{teleport:"body"}};const U=()=>j;var M=s({name:"Button",emits:["click"],setup(e,{emit:l}){const t=u(e.loading),{size:o}=U(),n=c((()=>t.value||e.disabled)),a=p();d((()=>e.loading),(e=>{t.value=e}));return{clasess:c((()=>({"vvm-button":!0,[`vvm-button--${e.type}`]:e.type,"vvm-button--text":e.text,"vvm-button--plain":e.plain,"vvm-button--round":e.round,[`vvm-button--${o||e.size}`]:o||e.size,"vvm-button--disabled":n.value,"vvm-button--loading":t.value}))),currentDisabled:n,currentLoading:t,startLoading:()=>{t.value=!0},endLoading:()=>{t.value=!1},click:t=>{n.value||(e.to&&a&&a[e.replace?"replace":"push"]({path:e.to,query:e.query}),e.url&&(e.replace?window.location.replace(e.url):window.location.href=e.url),l("click",t))}}},components:{Icon:F},props:{type:{type:String,default:"default"},text:Boolean,plain:Boolean,round:Boolean,size:{type:String,default:"normal"},disabled:Boolean,loading:Boolean,loadingText:{type:String,default:"加载中.."},to:String,url:String,replace:Boolean,query:Object}});const q={key:1,class:"text"};M.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("button",{disabled:e.currentDisabled,onClick:l[1]||(l[1]=(...l)=>e.click&&e.click(...l)),class:e.clasess},[e.currentLoading?(r(),i(m,{key:0},[h(s,{class:"vvm-loading",name:"iconloading"}),f(g(e.loadingText),1)],64)):(r(),i("div",q,[y(e.$slots,"default")]))],10,["disabled"])};var R=s({name:"Card",setup(){}});const G={class:"vvm-card"};R.render=function(e,l,t,o,n,a){return r(),i("div",G,[y(e.$slots,"default")])};var D=s({name:"CellGroup",setup(){}});const Y={class:"vvm-cell-group"};D.render=function(e,l,t,o,n,a){return r(),i("div",Y,[y(e.$slots,"default")])};var H=s({name:"Cell",components:{Icon:F},emits:["click"],setup(e,{emit:l,slots:t}){const o=c((()=>e.content||t.default)),n=c((()=>({"vvm-cell--top":!0,"vvm-cell--line":o.value}))),a=p();return{clasess:n,click:()=>{e.to&&a&&(console.log(e.to),a[e.replace?"replace":"push"]({path:e.to,query:e.query})),e.url&&(e.replace?window.location.replace(e.url):window.location.href=e.url),l("click",e.query)},status:o}},props:{title:String,value:String,content:String,arrow:Boolean,arrowIcon:{type:String,default:"iconarrow-right-bold"},to:String,url:String,replace:Boolean,query:{type:Object}}});const K={class:"vvm-cell--title vvm-ellipsis"},W={class:"vvm-cell--value"},J={key:0,class:"vvm-cell--content"};H.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("div",{onClick:l[1]||(l[1]=(...l)=>e.click&&e.click(...l)),class:"vvm-cell"},[h("div",{class:e.clasess},[h("div",K,[y(e.$slots,"title",{},(()=>[f(g(e.title),1)]))]),h("div",W,[h("span",null,g(e.value),1),e.arrow||e.to||e.url?(r(),i(s,{key:0,name:e.arrowIcon},null,8,["name"])):b("",!0)])],2),e.status?(r(),i("div",J,[y(e.$slots,"default",{},(()=>[f(g(e.content),1)]))])):b("",!0)])};const Q={success:"iconselect-bold",warning:"iconwarning-circle-fill",error:"iconclose",loading:"iconloading"};var X=s({name:"Toast",components:{Icon:F},setup(e){const l=u(!1);let t=null;const{$toast:o}=U();k((()=>{l.value=!0,n()}));const n=()=>{"loading"!==e.type&&(t=setTimeout((()=>{l.value=!1,t=null}),o.duration||e.duration))},a=c((()=>`vvm-toast--body --${e.type}`)),s=c((()=>e.icon?e.icon:Q[e.type||""]));return{close:()=>{e.onClose&&e.onClose()},show:n,status:l,tiemr:t,calsess:a,iconName:s}},props:{duration:{type:Number,default:1e3},msg:String,onClose:{type:Function,default:()=>{}},type:String,icon:String}});const Z={key:0,class:"vvm-toast--icon"},ee={class:"vvm-toast--info"};X.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i(m,null,[h(C,{name:"vvm-fade",onAfterLeave:e.close},{default:x((()=>[e.status?(r(),i("div",{key:0,class:e.calsess},["info"!==e.type?(r(),i("div",Z,[h("span",null,[h(s,{class:"loading"===e.type?"vvm-loading":"",name:e.iconName,size:40,color:"#fff"},null,8,["class","name"])])])):b("",!0),h("div",ee,g(e.msg),1)],2)):b("",!0)])),_:1},8,["onAfterLeave"]),"loading"===e.type?(r(),i("div",{key:0,class:"vvm-toast--loading",onMousewheel:l[1]||(l[1]=w((()=>{}),["prevent"])),onTouchmove:l[2]||(l[2]=w((()=>{}),["prevent"]))},null,32)):b("",!0)],64)};const le=Object.prototype.toString,te=e=>"[object String]"===le.call(e),oe=(e,l)=>{return t=e,"[object Array]"!==le.call(t)?console.error("传入非数组"):e.includes(l);var t},ne=(...e)=>Object.assign({},...e),ae=s(X);let se=null,ce=null;const ie=()=>{se&&ce&&(document.body.removeChild(ce),se=null,ce=null)},re=e=>{const l=document.createElement("div");l.className=e.className?`vvm-toast ${e.className}`:"vvm-toast";const t=h(ae,e);return S(t,l),ce=l,se=t.component.props,document.body.appendChild(l),se},ue=()=>{window||console.error("不能在服务端使用window")},de={className:""},pe={info:(e="提示消息",l={})=>(ue(),ie(),re(ne(de,l,{msg:e,type:"info"}))),success:(e="成功",l={})=>(ue(),ie(),re(ne(de,l,{msg:e,type:"success"}))),error:(e="失败",l={})=>(ue(),ie(),re(ne(de,l,{msg:e,type:"error"}))),warning:(e="警告",l={})=>(ue(),ie(),re(ne(de,l,{msg:e,type:"warning"}))),loading:(e="",l={})=>(ue(),ie(),re(ne(de,l,{msg:e,type:"loading"}))),close:()=>{ue(),ie()}};var ve=a({name:"Toast",install(e){e.config.globalProperties.$toast=pe}},pe),me=s({name:"Input",components:{Icon:F},emits:["change","blur","focus","update:modelValue"],setup:(e,{emit:l})=>({blur:t=>{if(!e.disabled){const e=t.target;l("blur",e.value),l("update:modelValue",e.value)}},change:t=>{if(!e.disabled){const e=t.target;l("update:modelValue",e.value),l("change",e.value)}},focus:t=>{if(!e.disabled){const o=t.target;l("focus",o.value),l("update:modelValue",o.value);const n=e.scrollTarget?document.querySelector(e.scrollTarget):document.body;n.scrollTop=n.scrollTop}},classes:c((()=>({"vvm-input":!0,"vvm-input--disabled":e.disabled,[`vvm-input--${e.textAlign}`]:e.textAlign})))}),props:{placeholder:{type:String,default:"请输入内容"},disabled:Boolean,type:{type:String,default:"text"},modelValue:[String,Number],maxLength:Number,icon:String,unity:String,scrollTarget:String,readonly:Boolean,pattern:RegExp,textAlign:{type:String,default:"right"},name:String}});const he={key:0,class:"vvm-input--icon"},fe={key:1,class:"vvm-input--unity"};me.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("div",{class:e.classes},[e.icon?(r(),i("div",he,[h(s,{name:e.icon},null,8,["name"])])):b("",!0),h("input",{class:"vvm-input--text",type:e.type,value:e.modelValue,maxlength:e.maxLength,readonly:e.readonly,placeholder:e.placeholder,disabled:e.disabled,pattern:e.pattern,name:e.name,onBlur:l[1]||(l[1]=(...l)=>e.blur&&e.blur(...l)),onInput:l[2]||(l[2]=(...l)=>e.change&&e.change(...l)),onFocus:l[3]||(l[3]=(...l)=>e.focus&&e.focus(...l))},null,40,["type","value","maxlength","readonly","placeholder","disabled","pattern","name"]),e.unity?(r(),i("div",fe,[y(e.$slots,"default",{},(()=>[f(g(e.unity),1)]))])):b("",!0)],2)};var ge=s({name:"Form",setup(){}});const ye={class:"vvm-form"};ge.render=function(e,l,t,o,n,a){return r(),i("form",ye,[y(e.$slots,"default")])};var be=s({name:"FormItem",setup:e=>({classes:c((()=>({"vvm-formitem":!0,"vvm-formitem--inline":e.inline})))}),props:{label:String,inline:{type:Boolean,default:!0},type:{type:String}}});const ke={key:0,class:"vvm-formitem--label"},Ce={class:"vvm-formitem--body"};be.render=function(e,l,t,o,n,a){return r(),i("div",{class:e.classes},[e.label?(r(),i("div",ke,g(e.label),1)):b("",!0),h("div",Ce,[y(e.$slots,"default")])],2)};var we=s({name:"Popup",emits:["update:show","open","close"],setup(e,{emit:l}){const{popup:t}=U(),o=c((()=>e.show&&e.overlay)),n=c((()=>`vvm-slide-${e.position}`)),a=c((()=>({"vvm-popup":!0,[`vvm-popup--${e.position}`]:e.position}))),s=c((()=>e.teleport||t.teleport));return T((()=>{l("update:show",!1)})),$((()=>{l("update:show",!1)})),{click:()=>{e.onClickOverlay&&l("update:show",!1)},onOpened:()=>{l("open")},onClosed:()=>{setTimeout((()=>{l("close")}),400)},isOverlay:o,transitionName:n,classes:a,toTeleport:s}},props:{teleport:{type:[String,Element]},show:Boolean,overlay:{type:Boolean,default:!0},position:{type:String,default:"center"},isScroll:{type:Boolean,default:!0},onClickOverlay:{type:Boolean,default:!0},isTeleport:{type:Boolean,default:!1}}});we.render=function(e,l,t,o,n,a){return r(),i(V,{to:e.toTeleport,disabled:e.isTeleport},[e.isScroll?(r(),i(C,{key:0,name:"vvm-fade"},{default:x((()=>[e.isOverlay?(r(),i("div",{key:0,onMousewheel:l[1]||(l[1]=w((()=>{}),["prevent"])),onTouchmove:l[2]||(l[2]=w((()=>{}),["prevent"])),onClick:l[3]||(l[3]=w(((...l)=>e.click&&e.click(...l)),["stop"])),class:"vvm-popup--overlay"},null,32)):b("",!0)])),_:1})):(r(),i(C,{key:1,name:"vvm-fade"},{default:x((()=>[e.isOverlay?(r(),i("div",{key:0,onClick:l[4]||(l[4]=w(((...l)=>e.click&&e.click(...l)),["stop"])),class:"vvm-popup--overlay"})):b("",!0)])),_:1})),h(C,{name:e.transitionName,onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:x((()=>[e.show?(r(),i("div",{key:0,class:e.classes},[y(e.$slots,"default")],2)):b("",!0)])),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])};var xe=s({name:"ActionSheet",components:{Input:me,Popup:we},emits:["choose","open","close","cancel","update:modelValue"],setup(e,{emit:l}){const t=u(!1),o=u(e.modelValue),n=u(!1),a=()=>{t.value=!0,n.value=!0},s=()=>{l("close"),e.onCancel(),e.Element&&document.body.removeChild(e.Element)};k((()=>{e.show&&a()})),d((()=>e.show),(e=>{e?a():s()})),d((()=>e.modelValue),(e=>{o.value=e}));const i=c((()=>(l,t)=>({"vvm-actionsheet--ladel":!0,"vvm-hairline-bottom":l+1<e.data.length,"--select":t.value===o.value,"--select--active":o.value===t.value,"vvm-actionsheet--ladel--disabled":t.disabled}))),r=c((()=>{const{label:l}=((e,l,t="")=>t?e.find((e=>e[t]===l))||{}:e.find((e=>e===l)))(e.data,o.value,"value");return l})),p=c((()=>({"vvm-actionsheet--buttom":!0})));return{click:()=>{!e.disabled&&e.data.length>0&&(t.value=!0)},showStatus:t,close:s,itemClass:i,label:r,choose:n=>{n.disabled||(t.value=!1,o.value=n.value,l("choose",n.value,n),l("update:modelValue",n.value),e.onConfirm(n.value,n))},open:()=>{l("open")},cancel:()=>{t.value=!1,l("cancel"),e.onCancel(),e.Element&&document.body.removeChild(e.Element)},classButtom:p,confirm:confirm,show:a,createApi:n,currentValue:o}},props:{modelValue:{type:[String,Number],default:""},data:{type:Array,default:()=>[]},placeholder:{type:String,default:"请选择内容"},disabled:Boolean,isCancel:Boolean,cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"},textAlign:{type:String,default:"right"},onClickOverlay:{type:Boolean,default:!0},onCancel:{type:Function,default:()=>{}},onConfirm:{type:Function,default:()=>{}},teleport:[String,Element],show:Boolean,Element:Element}});const Se={class:"vvm-actionsheet--content"};xe.render=function(e,l,t,o,n,a){const s=v("Input"),c=v("Popup");return r(),i("div",{class:"vvm-actionsheet",onClick:l[4]||(l[4]=w(((...l)=>e.click&&e.click(...l)),["stop"]))},[e.createApi?b("",!0):(r(),i(s,{key:0,placeholder:e.placeholder,textAlign:e.textAlign,disabled:e.disabled,modelValue:e.label,"onUpdate:modelValue":l[1]||(l[1]=l=>e.label=l),readonly:""},null,8,["placeholder","textAlign","disabled","modelValue"])),h(c,{onOpen:e.open,onClose:e.close,onClickOverlay:e.onClickOverlay,show:e.showStatus,"onUpdate:show":l[3]||(l[3]=l=>e.showStatus=l),position:"bottom",teleport:e.teleport,isTeleport:!!e.teleport},{default:x((()=>[h("div",Se,[(r(!0),i(m,null,B(e.data,((l,t)=>(r(),i("div",{class:e.itemClass(t,l),onClick:w((t=>e.choose(l)),["stop"])},g(l.label),11,["onClick"])))),256)),e.isCancel?(r(),i("div",{key:0,class:e.classButtom},[e.isCancel?(r(),i("p",{key:0,class:"vvm-actionsheet--cancel",onClick:l[2]||(l[2]=w(((...l)=>e.cancel&&e.cancel(...l)),["stop"]))},g(e.cancelText),1)):b("",!0)],2)):b("",!0)])])),_:1},8,["onOpen","onClose","onClickOverlay","show","teleport","isTeleport"])])};const Te=s(xe);let $e=null;xe.show=e=>((e={})=>{const l=document.createElement("div");l.className=e.className||"vvm-actionsheet--wrp",document.body.appendChild(l);const t=h(Te,ne(e,{teleport:l,show:!0,Element:l}));return S(t,l),$e=t,$e.cancel=()=>{ne($e.component.props,{show:!1})},$e})(e),xe.cancel=()=>{$e&&ne($e.component.props,{show:!1})};var Ve=s({name:"Radio",components:{Icon:F},emits:["change","update:modelValue"],setup(e,{emit:l,slots:t}){const o=u(e.modelValue),n=_("change",null),a=_("radioProps",{}),s=c((()=>void 0!==n)),i=c((()=>e.label||t.default)),r=c((()=>({"vvm-radio":!0,[`--${v.value}`]:v.value,"--disabled":p.value,"--text-theme":m.value&&d.value}))),d=c((()=>s.value?a.currentValue===e.label:o.value||0===o.value)),p=c((()=>e.disabled||a.disabled)),v=c((()=>e.type||a.type||"default")),m=c((()=>e.textTheme||a.textTheme));return{classes:r,change:t=>{if(p.value)return;if(n)return void n(e.label);if(e.modelValue)return;const{checked:a}=t.target;o.value=a,l("change",o.value),l("update:modelValue",o.value)},active:d,parent:s,currentValue:o,isDisabled:p,showLabel:i}},props:{label:String,name:String,icon:{type:String,default:"iconradiobuttonselect"},type:{type:String},modelValue:[Number,Boolean,String],disabled:Boolean,textTheme:Boolean}});const Be={class:"vvm-radio--icon vvm-ignore"},_e={key:0,class:"vvm-radio--label"};Ve.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("label",{onClick:l[2]||(l[2]=(...l)=>e.change&&e.change(...l)),class:e.classes},[h("span",Be,[h(C,{name:"vvm-slide-center"},{default:x((()=>[E(h(s,{name:e.icon,class:"--radio-icon",size:24},null,8,["name"]),[[O,e.active]])])),_:1})]),e.showLabel?(r(),i("span",_e,[y(e.$slots,"default",{},(()=>[f(g(e.label),1)]))])):b("",!0),e.parent?b("",!0):E((r(),i("input",{key:1,type:"radio",name:e.name,value:e.currentValue,onChange:l[1]||(l[1]=(...l)=>e.change&&e.change(...l)),disabled:e.isDisabled},null,40,["name","value","disabled"])),[[O,!1]])],2)};var Ee=s({name:"RadioGroup",emits:["change","update:modelValue"],setup(e,{emit:l}){const t=u(e.modelValue),o=A(a({currentValue:t},e)),n=c((()=>({"vvm-radiogroup":!0,"--inline":e.inline})));return I("radioProps",o),I("change",(e=>{t.value=e,l("change",t.value),l("update:modelValue",t.value)})),{classes:n}},props:{inline:{type:Boolean,default:!0},modelValue:[Number,String],disabled:Boolean,type:{type:String},textTheme:Boolean}});Ee.render=function(e,l,t,o,n,a){return r(),i("div",{class:e.classes},[y(e.$slots,"default")],2)};const Oe={msg:{type:[String,Function],default:""},title:{type:[String,Function],default:"标题"},onClickOverlay:{type:Boolean,default:!1},show:Boolean,showTitle:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!1},showConfirm:{type:Boolean,default:!0},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"},onConfirmClose:{type:Boolean,default:!1},onCancelClose:{type:Boolean,default:!0},teleport:{type:[String,Element]}};var Ae=s({name:"Dialog",components:{Popup:we,Button:M},emits:["update","close","cancel","confirm","update:show"],props:Oe,setup(e,{emit:l}){const t=u(!1);k((()=>{t.value=e.show})),d((()=>e.show),(e=>{t.value=e}));const o=e=>{l("update",e),l("update:show",e)},n=c((()=>({"vvm-dialog--body":!0,"--none-title":!e.showCancel&&!e.showConfirm})));return{show:t,update:o,classes:n,close:()=>{l("close"),o(!1)},onCancel:()=>{e.onCancelClose&&(t.value=!1),l("cancel"),o(!1)},onConfirm:()=>{e.onConfirmClose&&(t.value=!1),l("confirm"),o(!1)}}}});const Ie={class:"vvm-dialog"},Ne={key:0,class:"vvm-dialog--title"},Pe={class:"vvm-dialog--content"},Le={key:1,class:"vvm-dialog--button vvm-hairline-top"};Ae.render=function(e,l,t,o,n,a){const s=v("Button"),c=v("Popup");return r(),i(V,{to:e.teleport,disabled:!e.teleport},[h("div",Ie,[h(c,{"onUpdate:show":[e.update,l[1]||(l[1]=l=>e.show=l)],onClose:e.close,show:e.show,onClickOverlay:e.onClickOverlay,isTeleport:!0},{default:x((()=>[h("div",{class:e.classes},[e.showTitle?(r(),i("div",Ne,[y(e.$slots,"title",{},(()=>[f(g(e.title),1)]))])):b("",!0),h("div",Pe,[y(e.$slots,"default",{},(()=>[f(g(e.msg),1)]))]),e.showCancel||e.showConfirm?(r(),i("div",Le,[e.showCancel?(r(),i(s,{key:0,text:"",size:"large",onClick:e.onCancel,class:e.showCancel&&e.showConfirm?"vvm-hairline-right --dialog-cancel":""},{default:x((()=>[f(g(e.cancelText),1)])),_:1},8,["onClick","class"])):b("",!0),e.showConfirm?(r(),i(s,{key:1,class:"--dialog-confirm",onClick:e.onConfirm,text:"",size:"large"},{default:x((()=>[f(g(e.confirmText),1)])),_:1},8,["onClick"])):b("",!0)])):b("",!0)],2)])),_:3},8,["onUpdate:show","onClose","show","onClickOverlay"])])],8,["to","disabled"])};let ze=null,Fe=null;const je=()=>s({setup(e){const l=u(!1);k((()=>{l.value=!0,ze&&(ze.close=()=>{l.value=!1})}));const t=()=>{e.onCancel()},o=()=>{e.onConfirm()},n=()=>{l.value=!1,document.body.removeChild(Fe),ze=null,Fe=null,e.onClose()},a={default:te(e.msg)?e.msg:e.msg(),title:te(e.title)?e.title:e.title()};return()=>{const{msg:s,confirmText:c,onConfirmClose:i,onCancelClose:r,title:u,teleport:d,onClickOverlay:p,showTitle:v,showButton:m,showCancel:f,showConfirm:g,cancelText:y}=e;return h(Ae,N({show:l.value,msg:s,title:u,teleport:d,onClickOverlay:p,showTitle:v,showButton:m,showCancel:f,showConfirm:g,cancelText:y,confirmText:c,onConfirmClose:i,onCancelClose:r},{onClose:n,onCancel:t,onConfirm:o}),a)}},props:ne(Ae.props,{onConfirm:{type:Function,default:()=>{}},onCancel:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}}})});Ae.alert=(e={})=>{if(!ze)return(e=>{Fe=document.createElement("div"),Fe.className="vvm-dialog--wrp";const l=h(je(),ne({teleport:Fe},a({},e)));ze=l,S(l,Fe),document.body.appendChild(Fe)})(e),ze};var Ue=s({name:"ScrollCard",emits:["scroll"],setup(e,{emit:l}){const t=u(0);return{style:c((()=>({backgroundColor:e.color||"#3778E1",width:`${t.value}%`}))),scroll:e=>{const{children:o}=e.target,n=(e=>{let l=0;return e&&(l=e.clientHeight),l})(e.target),a=o[0].offsetHeight-n;const s=(e=>e.scrollTop)(e.target);t.value=s/a*100,l("scroll",t.value)}}},props:{color:String}});const Me={class:"vvm-scrollcard vvm-ignore"},qe={class:"vvm-scrollcard--wrp vvm-ignore"},Re={class:"vvm-scrollcard--slot"};Ue.render=function(e,l,t,o,n,a){return r(),i("div",Me,[h("div",qe,[h("div",{style:e.style,class:"vvm-scrollcard--progressbar vvm-ignore"},null,4)]),h("div",{onScroll:l[1]||(l[1]=(...l)=>e.scroll&&e.scroll(...l)),class:"vvm-scrollcard--body vvm-scrollbar"},[h("div",Re,[y(e.$slots,"default")])],32)])};var Ge=s({name:"Checkbox",emits:["change","update:modelValue"],components:{Icon:F},setup(e,{emit:l,slots:t}){const o=u(e.modelValue),n=_("change",null),a=_("CheckboxGroupProps",{}),s=c((()=>e.type||a.type||"default")),i=c((()=>e.disabled||a.disabled)),r=c((()=>e.textTheme||a.textTheme)),d=c((()=>e.label||t.default)),p=c((()=>({"vvm-checkbox":!0,[`--${s.value}`]:s.value,"--disabled":i.value,"--text-theme":r.value&&v.value}))),v=c((()=>n?oe(a.currentValue,e.label):o.value));return{classes:p,active:v,click:()=>{if(i.value)return;const t=!o.value;n?n(e.label):(o.value=t,l("update:modelValue",t),l("change",t))},showLabel:d}},props:{label:String,icon:{type:String,default:"iconroundcheckfill"},type:{type:String},modelValue:Boolean,disabled:Boolean,textTheme:Boolean}});const De={class:"vvm-checkbox--icon vvm-ignore"},Ye={key:0,class:"vvm-checkbox--label"};Ge.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("label",{class:e.classes,onClick:l[1]||(l[1]=(...l)=>e.click&&e.click(...l))},[h("span",De,[h(C,{name:"vvm-slide-center"},{default:x((()=>[E(h(s,{name:e.icon,class:"--checkbox-icon",size:24},null,8,["name"]),[[O,e.active]])])),_:1})]),e.showLabel?(r(),i("span",Ye,[y(e.$slots,"default",{},(()=>[f(g(e.label),1)]))])):b("",!0)],2)};var He=s({name:"CheckboxGroup",emits:["change","update:modelValue"],setup(e,{emit:l}){const t=u(e.modelValue||[]),o=A(a({currentValue:t},e)),n=c((()=>({"vvm-checkboxgroup":!0,"--inline":e.inline})));return I("CheckboxGroupProps",o),I("change",(o=>{e.disabled||(oe(t.value,o)?t.value=t.value.filter((e=>e!==o)):t.value.push(o),l("update:modelValue",t.value),l("change",t.value))})),{classes:n,currentValue:t}},props:{inline:{type:Boolean,default:!0},modelValue:Array,disabled:Boolean,type:{type:String},textTheme:Boolean}});He.render=function(e,l,t,o,n,a){return r(),i("div",{class:e.classes},[y(e.$slots,"default")],2)};var Ke={mounted(e,l){"string"==typeof l.value?(e.$value=l.value,e.$callback=null):(e.$value=l.value.text,e.$callback=l.value.callback),e.handler=()=>{if(!e.$value)return void console.log("无复制内容");const l=document.createElement("textarea");l.readOnly="readonly",l.style.position="absolute",l.style.left="-9999px",l.value=e.$value,document.body.appendChild(l),l.select();if(document.execCommand("Copy")){if(e.$callback&&"function"==typeof e.$callback)return void e.$callback();ve.info("复制成功")}document.body.removeChild(l)},e.addEventListener("click",e.handler)},updated(e,l){"string"==typeof l.value?(e.$value=l.value,e.$callback=null):(e.$value=l.value.text,e.$callback=l.value.callback)},unmounted(e){e.removeEventListener("click",e.handler)}},We=s({name:"Switch",emits:["update:modelValue","change"],setup(e,{emit:l}){const t=u(e.modelValue),o=_("form-emit",(()=>{})),n=c((()=>({"vvm-switch":!0,[`--${e.type}`]:e.type,"--active":t.value}))),a=c((()=>({backgroundColor:t.value?e.color:""}))),s=c((()=>({border:t.value?`1px solid ${e.color}`:""}))),i=c((()=>({"vvm-switch--radius":!0,"--active":t.value,"--close":!t.value}))),r=c((()=>({"vvm-switch--text":!0,"--active":t.value,"--close":!t.value})));return{radiusClass:i,isText:c((()=>e.activeText||e.closeText)),style:a,click:()=>{e.disabled||(t.value=!t.value,l("update:modelValue",t.value),l("change",t.value),o("change",t.value))},classes:n,currentValue:t,radiusStyle:s,textClass:r}},props:{type:{type:String,default:"default"},modelValue:Boolean,color:String,disabled:Boolean,activeText:String,closeText:String}});const Je={key:0,class:"vvm-switch--disabled"};We.render=function(e,l,t,o,n,a){return r(),i("label",{onClick:l[1]||(l[1]=(...l)=>e.click&&e.click(...l)),style:e.style,class:e.classes},[h("span",{class:e.radiusClass,style:e.radiusStyle},null,6),e.disabled?(r(),i("span",Je)):b("",!0),e.isText?(r(),i("span",{key:1,class:e.textClass},g(e.currentValue?e.activeText:e.closeText),3)):b("",!0)],6)};const Qe=(e,l)=>Math.min(Math.max(e,l[0]),l[1]);var Xe=s({name:"Picker",emits:["change"],setup(e,{emit:l}){const t=A({startY:0,offset:0,startOffset:0,index:e.index,count:7,state:!0}),o=c((()=>({height:t.count*e.height+"px"}))),n=c((()=>({height:t.count*e.height+"px",transform:`translateY(${t.offset}px)`}))),a=c((()=>({height:`${e.height}px`}))),s=c((()=>t.count*e.height/2-e.height/2)),i=c((()=>({height:`${s.value}px`}))),r=()=>{const l=t.count/2;t.index>=e.columns.length?t.offset=(l+.5-e.columns.length)*e.height:t.offset=(l-.5-t.index)*e.height},u=()=>{if(t.offset!==t.startOffset){t.state=!1;const l=Qe(Math.round((-t.offset+s.value)/e.height),[0,e.columns.length-1]);p(l)}},p=e=>{t.state=t.index!==e,t.index=e,r()};return k((()=>{r()})),d((()=>e.index),(e=>{t.index=e,r()})),{style:o,itemStyle:a,maskHeight:i,onTouchcancel:()=>{u()},onTouchstart:e=>{t.startY=e.touches[0].clientY,t.startOffset=t.offset},onTouchmove:l=>{const o=1.08*((l.clientY||l.touches[0].clientY)-t.startY),n=-(t.count*e.height+e.height),a=e.height*t.count-s.value+e.height;t.offset=Qe(t.startOffset+o,[n,a])},onTouchend:u,touchStyle:n,onTransitionend:()=>{t.state&&l("change",t.index,e.columns[t.index],e.groupKey)}}},props:{columns:{type:Array,default:()=>[]},height:{type:Number,default:36},index:{type:Number,default:0},label:{type:String,default:"label"},groupKey:Number}});Xe.render=function(e,l,t,o,n,a){return r(),i("div",{class:"vvm-picker",style:e.style},[h("div",{class:"vvm-picker__wrp",onTouchstart:l[1]||(l[1]=(...l)=>e.onTouchstart&&e.onTouchstart(...l)),onTouchmove:l[2]||(l[2]=w(((...l)=>e.onTouchmove&&e.onTouchmove(...l)),["prevent"])),onTouchend:l[3]||(l[3]=(...l)=>e.onTouchend&&e.onTouchend(...l)),onTouchcancel:l[4]||(l[4]=(...l)=>e.onTouchcancel&&e.onTouchcancel(...l)),onTransitionend:l[5]||(l[5]=(...l)=>e.onTransitionend&&e.onTransitionend(...l))},[h("div",{class:"vvm-picker__scroll",style:e.touchStyle},[(r(!0),i(m,null,B(e.columns,((l,t)=>(r(),i("p",{key:t,style:e.itemStyle,class:"vvm-picker__item vvm-ellipsis"},g(l[e.label]),5)))),128))],4),h("div",{style:e.maskHeight,class:"vvm-picker__mask --top vvm-hairline-bottom"},null,4),h("div",{style:e.maskHeight,class:"vvm-picker__mask --bottom vvm-hairline-top"},null,4)],32)],4)};const Ze=(e=[],l,t=[])=>{const o=[];return o.push(e),function e(l=[],n){const a=t[n-1];l[a]&&l[a].children&&(o.push(l[a].children),e(l[a].children,n+=1))}(e,1),o[l]},el=(e=[],l=[])=>e.map(((e,t)=>e[l[t]])),ll=s({name:"PickerGroup",components:{Popup:we,Picker:Xe,Input:me},emits:["change","update:modelValue","confirm","cancel","open","close"],setup(e,{emit:l}){const t=u(!1),o=u(e.modelValue||[]),n=u([]),a=u(""),s=()=>{e.disabled||(t.value=!0)},i=c((()=>(l,t)=>Ze(e.columns,l,t)||[])),r=c((()=>(o.value.length>0||(o.value=((e=[])=>{const l=[];if(e.length>0){const t=((e=[])=>{let l=0;return function e(t=[]){t.length>0&&(l+=1,e(t[0].children))}(e),l})(e);for(let e=0;e<t;e++)l.push(0)}return l})(e.columns)),o.value))),p=c((()=>{const l=[];for(let t=0;t<r.value.length;t++)l.push(Ze(e.columns,t,r.value));return l})),v=c((()=>0!==e.modelValue.length&&0!==e.columns.length?h():"")),m=c((()=>!e.Element)),h=()=>((e=[])=>{const l=[];return e.forEach((e=>{l.push(e.label)})),l})(el(p.value,r.value)).toString().replace(/,/g,` ${e.rangeSeparator} `);return k((()=>{a.value=v.value,ll.cancel=()=>{t.value=!1},e.Element&&s()})),d((()=>e.modelValue),(e=>{o.value=e})),d((()=>v.value),(e=>{a.value=e})),d((()=>n.value),(()=>{a.value=h()})),{open:()=>{l("open")},close:()=>{l("close"),e.onClose(),e.Element&&document.body.removeChild(e.Element)},click:s,showStatus:t,columns:i,count:r,change:(t,n,a)=>{o.value[a]=t;for(let e=a+1;e<o.value.length;e++)o.value[e]=0;l("change",t,n,a),e.onChange(t,n,a)},currentValue:o,chooseValue:v,confirm:()=>{t.value=!1,n.value=el(p.value,r.value),l("update:modelValue",o.value),l("confirm",o.value,n.value),e.onConfirm(o.value,n.value)},cancel:()=>{t.value=!1,l("cancel"),e.onCancel()},createApi:m,chooseText:a}},props:{columns:{type:Array,default:()=>[]},label:{type:String,default:"label"},modelValue:{type:Array,default:()=>[]},placeholder:{type:String,default:"请选择"},disabled:Boolean,textAlign:String,onClickOverlay:Boolean,teleport:{type:[String,Element],default:"body"},rangeSeparator:{type:String,default:"/"},show:Boolean,Element:Element,onClose:{type:Function,default:()=>{}},onCancel:{type:Function,default:()=>{}},onConfirm:{type:Function,default:()=>{}},onChange:{type:Function,default:()=>{}},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"}}}),tl={class:"vvm-picker-group__body"},ol={class:"vvm-picker-group__top"},nl={class:"vvm-picker-group__columns"};ll.render=function(e,l,t,o,n,a){const s=v("Input"),c=v("Picker"),u=v("Popup");return r(),i("div",{class:"vvm-picker-group",onClick:l[5]||(l[5]=w(((...l)=>e.click&&e.click(...l)),["stop"]))},[e.createApi?(r(),i(s,{key:0,placeholder:e.placeholder,textAlign:e.textAlign,disabled:e.disabled,modelValue:e.chooseText,"onUpdate:modelValue":l[1]||(l[1]=l=>e.chooseText=l),readonly:""},null,8,["placeholder","textAlign","disabled","modelValue"])):b("",!0),h(u,{onClickOverlay:e.onClickOverlay,show:e.showStatus,"onUpdate:show":l[4]||(l[4]=l=>e.showStatus=l),position:"bottom",teleport:e.teleport,isTeleport:!e.teleport,onOpen:e.open,onClose:e.close},{default:x((()=>[h("div",tl,[h("div",ol,[h("span",{onClick:l[2]||(l[2]=w(((...l)=>e.cancel&&e.cancel(...l)),["stop"])),class:"vvm-picker-group__btu __cancel"},g(e.cancelText),1),h("span",{onClick:l[3]||(l[3]=w(((...l)=>e.confirm&&e.confirm(...l)),["stop"])),class:"vvm-picker-group__btu __confirm"},g(e.confirmText),1)]),h("div",nl,[(r(!0),i(m,null,B(e.count,((l,t)=>(r(),i(c,{key:t,"group-key":t,columns:e.columns(t,e.count),label:e.label,index:l,onChange:e.change},null,8,["group-key","columns","label","index","onChange"])))),128))])])])),_:1},8,["onClickOverlay","show","teleport","isTeleport","onOpen","onClose"])])};const al=s(ll);class sl{constructor(e={}){this.container=document.createElement("div"),this.container.className=e.className||"vvm-picker-group__wrp",document.body.appendChild(this.container);const l=h(al,ne(e,{teleport:this.container,Element:this.container}));return S(l,this.container),this.App=l,this.App.cancel=()=>{this.App.type.cancel()},this.App}}ll.show=e=>new sl(e);var cl=s({name:"Rate",emits:["change","update:modelValue"],setup(e,{emit:l}){const t=u(e.modelValue),o=c((()=>e=>t.value>=e)),n=c((()=>({width:`${e.size}px`,height:`${e.size}px`}))),a=c((()=>e.disabled)),s=c((()=>a.value?"#84849A":e.activeColor));return d((()=>e.modelValue),(e=>{t.value=e})),{active:o,change:e=>{a.value||(t.value>0&&e===t.value?t.value=e-1:t.value=e,l("update:modelValue",t.value),l("change",t.value))},style:n,disabled:a,activeColor:s}},components:{Icon:F},props:{count:{type:Number,default:5},modelValue:Number,activeIcon:{type:String,default:"iconpingfenxingxing"},defaultIcon:{type:String,default:"iconpingfenxingxing"},activeColor:{type:String,default:"#3778E1"},defaultColor:{type:String,default:"#E0E0EB"},size:{type:Number,default:26},disabled:Boolean}});const il={class:"vvm-rate"},rl={key:0,class:"vvm-rate__activeIcon"},ul={class:"vvm-rate__defaultIcon"};cl.render=function(e,l,t,o,n,a){const s=v("Icon");return r(),i("div",il,[(r(!0),i(m,null,B(e.count,(l=>(r(),i("div",{class:"vvm-rate__icon",style:e.style,onClick:t=>e.change(l)},[h(C,{name:"vvm-slide-center"},{default:x((()=>[e.active(l)?(r(),i("label",rl,[h(s,{size:e.size,name:e.activeIcon,color:e.activeColor},null,8,["size","name","color"])])):b("",!0)])),_:2},1024),h("label",ul,[h(s,{size:e.size,name:e.defaultIcon,color:e.defaultColor},null,8,["size","name","color"])])],12,["onClick"])))),256))])};class dl{constructor(e){var l;n(this,"symbol"!=typeof(l="app")?l+"":l,{}),this.container=document.createElement("div"),this.container.className=e.className||"vvm-notify",document.body.appendChild(this.container);const t=h((o=this.app,s({setup(e){const l=u(!1),t=u(44);let n=null;k((()=>{l.value=!0,o&&(o.cancel=()=>{l.value=!1}),n=setTimeout((()=>{l.value=!1,clearTimeout(n),n=null}),e.duration)}));const a=c((()=>({height:`${t.value}px`}))),s=c((()=>({"vvm-notify__body":!0,[`__${e.type}`]:e.type}))),i=()=>{e.onClose(),window&&document.body.removeChild(e.teleport)};return()=>h(C,{name:"vvm-slide-top",onAfterLeave:i},{default:()=>[l.value?h("div",{class:s.value,style:a.value},[e.msg]):null]})},props:{teleport:Element,msg:String,type:{type:String,default:"default"},duration:{type:Number,default:1500},onClose:{type:Function,default:()=>{}}}})),ne({teleport:this.container},a({},e)));var o;return ne(this.app,t),S(t,this.container),this.app}}function pl(e,l={}){const t=ne({msg:e},l);if(window){return new dl(t)}}pl.prototype.name="Notify";var vl={install:function(e,l){e.config.globalProperties.$VVMUI=l,e.config.globalProperties.$ActionSheet=xe,e.config.globalProperties.$Dialog=Ae,e.config.globalProperties.$PickerGroup=ll,e.config.globalProperties.$Notify=pl,e.config.globalProperties.$Toast=ve,((e={})=>{Object.assign(j,e)})(l),e.directive("copy",Ke),[Ue,Ae,Ve,Ee,M,R,F,D,H,me,ge,be,xe,we,Ge,He,We,Xe,ll,cl].forEach((l=>{l.install?e.use(l):l.name&&e.component(l.name,l)}))},version:"vvmui-3x-3.0.0-beta.10"};export{ll as A,ve as T,z as _,xe as a,Ae as b,me as c,pl as i,vl as v};