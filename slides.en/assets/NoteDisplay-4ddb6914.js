import{d,i as p,a as u,f as l,E as s,g as r,t as c,o as i,_ as m}from"./index-b53d4aaa.js";const v=["innerHTML"],f=["textContent"],k=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return p(u),(o,e)=>t.noteHtml?(i(),l("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,v)):t.note?(i(),l("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,f)],2)):(i(),l("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,k)],2))}}),g=m(y,[["__file","/home/runner/work/slidev_template/slidev_template/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
