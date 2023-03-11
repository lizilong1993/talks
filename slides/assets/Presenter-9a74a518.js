import{o as d,f as k,g as e,B as S,C as D,v as h,d as M,i as B,a as P,D as y,x as v,E as H,h as t,_ as z,G as I,H as R,c as C,b as A,I as $,J as E,K as L,L as q,M as F,N as O,O as U,P as W,Q as Z,m as u,t as j,n as x,R as N,S as V,p as G,T as J,U as w,V as K,F as Q,w as X,W as Y,X as ee,q as T,Y as te,Z as se,$ as oe,a0 as le,k as ne,a1 as ae,a2 as ie,a3 as re,a4 as ce}from"./index-1a29caa2.js";import{N as ue}from"./NoteDisplay-eb50f4fa.js";import de from"./DrawingControls-9bb71fd4.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(l,a){return d(),k("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(l,a){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/talks/slides/assets/logo-title-horizontal-96c3c915.png";function be(){const l=S(Date.now()),a=D({interval:1e3}),_=h(()=>{const s=(a.value-l.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){l.value=a.value}return{timer:_,resetTimer:m}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const a=l;B(P);const _=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=h(()=>{var s,n,o;return(o=(n=(s=y.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.noteHTML});return(s,n)=>(d(),v(ue,{class:H(a.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),$e=z(Ce,[["__file","/home/runner/work/slidev_template/slidev_template/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(ae("data-v-62249bea"),l=l(),ie(),l),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(l){B(P);const a=S();I(),R(a);const _=C.titleTemplate.replace("%s",C.title||"Slidev");A({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=be(),n=S([]),o=h(()=>$.value<E.value?{route:y.value,clicks:$.value+1}:L.value?{route:q.value,clicks:0}:null);return F(()=>{const b=a.value.querySelector("#slide-content"),r=O(U()),g=W();Z(()=>{if(!g.value||Y.value||!ee.value)return;const c=b.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(i<0||i>100||p<0||p>100))return{x:i,y:p}},c=>{X.cursor=c})}),(b,r)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,j(t(m)),1)]),e("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(te,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(T))},[t(o)?(d(),v(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var i;return[u(t(oe),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:H(t(se)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),ze],4),e("div",De,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(re,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(le)-1)/(t(ne)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>J(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const Fe=z(Ae,[["__scopeId","data-v-62249bea"],["__file","/home/runner/work/slidev_template/slidev_template/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Fe as default};
