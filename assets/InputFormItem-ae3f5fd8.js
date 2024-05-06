import{F as De,G as we,H as Tr,I as qe,J as ur,y as ar,E as Ye,r as d,K as Br,P,j as X}from"./index-101b4caa.js";const lt={generic(e){return De().label(e)},string(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean(e,r){return Tr().default(!1).label(e)},relationToOne(e,r){r=r||{};let t=De().nullable(!0).label(e).transform((s,a)=>a?a.id:null);return r.required&&(t=t.required()),t},stringArray(e,r){r=r||{};let t=qe().compact().ensure().of(we().transform((s,a)=>a===""?null:s).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany(e,r){r=r||{};let t=qe().nullable(!0).label(e).transform((s,a)=>!a||!a.length?[]:a.map(c=>c.id));return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer(e,r){r=r||{};let t=ur().transform((s,a)=>a===""?null:s).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images(e,r){r=r||{};let t=qe().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files(e,r){r=r||{};let t=qe().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).label(e).nullable(!0).oneOf([null,...r.options||[]]);return r.required&&(t=t.required(ar("validation.string.selected"))),t},email(e,r){r=r||{};let t=we().transform((s,a)=>a===""?null:s).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal(e,r){r=r||{};let t=ur().transform((s,a)=>a===""?null:s).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime(e,r){r=r||{};let t=De().nullable(!0).label(e).transform((s,a)=>s?Ye(a,"YYYY-MM-DD HH:mm").toISOString():null);return r.required&&(t=t.required()),t},date(e,r){r=r||{};let t=De().nullable(!0).label(e).test("is-date",ar("validation.mixed.default"),s=>s?Ye(s,"YYYY-MM-DD").isValid():!0).transform(s=>s?Ye(s).format("YYYY-MM-DD"):null);return r.required&&(t=t.required()),t}};var he=e=>e instanceof HTMLElement;const le={BLUR:"blur",CHANGE:"change",INPUT:"input"},ee={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},pr="select",Ne="undefined",J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};function $r({ref:e},r,t){he(e)&&t&&(e.addEventListener(r?le.CHANGE:le.INPUT,t),e.addEventListener(le.BLUR,t))}var H=e=>e==null;const vr=e=>typeof e=="object";var Y=e=>!H(e)&&!Array.isArray(e)&&vr(e)&&!(e instanceof Date),Ee=e=>/^\w*$/.test(e),re=e=>e.filter(Boolean),gr=e=>re(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function j(e,r,t){let s=-1;const a=Ee(r)?[r]:gr(r),c=a.length,l=c-1;for(;++s<c;){const y=a[s];let o=t;if(s!==l){const O=e[y];o=Y(O)||Array.isArray(O)?O:isNaN(+a[s+1])?{}:[]}e[y]=o,e=e[y]}return e}var Le=(e,r={})=>{for(const t in e)Ee(t)?r[t]=e[t]:j(r,t,e[t]);return r},L=e=>e===void 0,v=(e={},r,t)=>{const s=re(r.split(/[,[\].]+?/)).reduce((a,c)=>H(a)?a:a[c],e);return L(s)||s===e?L(e[r])?t:e[r]:s},Yr=(e,r)=>{for(const t in e)if(v(r,t)){const s=e[t];if(s){if(s.ref.focus&&L(s.ref.focus()))break;if(s.options){s.options[0].ref.focus();break}}}},cr=(e,r)=>{he(e)&&e.removeEventListener&&(e.removeEventListener(le.INPUT,r),e.removeEventListener(le.CHANGE,r),e.removeEventListener(le.BLUR,r))};const lr={isValid:!1,value:""};var Or=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:r,lr):lr,_r=e=>[...e].filter(({selected:r})=>r).map(({value:r})=>r),Ce=e=>e.type==="radio",xr=e=>e.type==="file",oe=e=>e.type==="checkbox",Vr=e=>e.type===`${pr}-multiple`;const or={value:!1,isValid:!1},fr={value:!0,isValid:!0};var Ar=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(c=>c&&c.ref.checked).map(({ref:{value:c}})=>c);return{value:a,isValid:!!a.length}}const{checked:r,value:t,attributes:s}=e[0].ref;return r?s&&!L(s.value)?L(t)||t===""?fr:{value:t,isValid:!0}:fr:or}return or};function ce(e,r,t,s){const a=e.current[r];if(a){const{ref:{value:c,disabled:l},ref:y,valueAsNumber:o,valueAsDate:O,setValueAs:I}=a;return l&&s?void 0:xr(y)?y.files:Ce(y)?Or(a.options).value:Vr(y)?_r(y.options):oe(y)?Ar(a.options).value:o?+c:O?y.valueAsDate:I?I(c):c}if(t)return v(t.current,r)}function ke(e){return e?!(e instanceof HTMLElement)||e.nodeType===Node.DOCUMENT_NODE?!1:ke(e.parentNode):!0}var E=e=>Y(e)&&!Object.keys(e).length,ze=e=>typeof e=="boolean";function Wr(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=L(e)?s++:e[r[s++]];return e}function $(e,r){const t=Ee(r)?[r]:gr(r),s=t.length==1?e:Wr(e,t),a=t[t.length-1];let c;s&&delete s[a];for(let l=0;l<t.slice(0,-1).length;l++){let y=-1,o;const O=t.slice(0,-(l+1)),I=O.length-1;for(l>0&&(c=e);++y<O.length;){const D=O[y];o=o?o[D]:e[D],I===y&&(Y(o)&&E(o)||Array.isArray(o)&&!o.filter(w=>Y(w)&&!E(w)||ze(w)).length)&&(c?delete c[D]:delete e[D]),c=o}}return e}const dr=(e,r)=>e&&e.ref===r;function Hr(e,r,t,s,a,c){const{ref:l,ref:{name:y}}=t,o=e.current[y];if(!a){const O=ce(e,y,s);!L(O)&&j(s.current,y,O)}if(!l.type||!o){delete e.current[y];return}Ce(l)||oe(l)?Array.isArray(o.options)&&o.options.length?(re(o.options).forEach((O={},I)=>{(ke(O.ref)&&dr(O,O.ref)||c)&&(cr(O.ref,r),$(o.options,`[${I}]`))}),o.options&&!re(o.options).length&&delete e.current[y]):delete e.current[y]:(ke(l)&&dr(o,l)||c)&&(cr(l,r),delete e.current[y])}var te=e=>H(e)||!vr(e);function Ke(e,r){if(te(e)||te(r))return r;for(const t in r){const s=e[t],a=r[t];try{e[t]=Y(s)&&Y(a)||Array.isArray(s)&&Array.isArray(a)?Ke(s,a):a}catch{}}return e}function He(e,r,t,s,a){let c=-1;for(;++c<e.length;){for(const l in e[c])Array.isArray(e[c][l])?(!t[c]&&(t[c]={}),t[c][l]=[],He(e[c][l],v(r[c]||{},l,[]),t[c][l],t[c],l)):v(r[c]||{},l)===e[c][l]?j(t[c]||{},l):t[c]=Object.assign(Object.assign({},t[c]),{[l]:!0});s&&!t.length&&delete s[a]}return t}var Gr=(e,r,t)=>Ke(He(e,r,t),He(r,e,t)),K=e=>typeof e=="string",_e=(e,r,t,s,a)=>{const c={};for(const l in e.current)(L(a)||(K(a)?l.startsWith(a):Array.isArray(a)&&a.find(y=>l.startsWith(y))))&&(c[l]=ce(e,l,void 0,s));return t?Le(c):Ke(r,Le(c))};function ae(e,r,t){if(te(e)||te(r)||e instanceof Date||r instanceof Date)return e===r;if(!d.isValidElement(e)){const s=Object.keys(e),a=Object.keys(r);if(s.length!==a.length)return!1;for(const c of s){const l=e[c];if(!(t&&c==="ref")){const y=r[c];if((Y(l)||Array.isArray(l))&&(Y(y)||Array.isArray(y))?!ae(l,y,t):l!==y)return!1}}}return!0}var zr=({errors:e,name:r,error:t,validFields:s,fieldsWithValidation:a})=>{const c=L(t),l=v(e,r);return c&&!!l||!c&&!ae(l,t,!0)||c&&v(a,r)&&!v(s,r)},Rr=e=>e instanceof RegExp,ye=e=>Y(e)&&!Rr(e)?e:{value:e,message:""},Er=e=>typeof e=="function",Ge=e=>K(e)||d.isValidElement(e);function mr(e,r,t="validate"){if(Ge(e)||ze(e)&&!e)return{type:t,message:Ge(e)?e:"",ref:r}}var Kr=(e,r,t,s,a)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[s]:a||!0})}):{},Me=async(e,r,{ref:t,ref:{value:s},options:a,required:c,maxLength:l,minLength:y,min:o,max:O,pattern:I,validate:D},w)=>{const B=t.name,x={},q=Ce(t),C=oe(t),ne=q||C,G=s==="",N=Kr.bind(null,B,r,x),A=(R,V,g,k=J.maxLength,T=J.minLength)=>{const U=R?V:g;x[B]=Object.assign({type:R?k:T,message:U,ref:t},N(R?k:T,U))};if(c&&(!q&&!C&&(G||H(s))||ze(s)&&!s||C&&!Ar(a).isValid||q&&!Or(a).isValid)){const{value:R,message:V}=Ge(c)?{value:!!c,message:c}:ye(c);if(R&&(x[B]=Object.assign({type:J.required,message:V,ref:ne?((e.current[B].options||[])[0]||{}).ref:t},N(J.required,V)),!r))return x}if((!H(o)||!H(O))&&s!==""){let R,V;const g=ye(O),k=ye(o);if(isNaN(s)){const T=t.valueAsDate||new Date(s);K(g.value)&&(R=T>new Date(g.value)),K(k.value)&&(V=T<new Date(k.value))}else{const T=t.valueAsNumber||parseFloat(s);H(g.value)||(R=T>g.value),H(k.value)||(V=T<k.value)}if((R||V)&&(A(!!R,g.message,k.message,J.max,J.min),!r))return x}if(K(s)&&!G&&(l||y)){const R=ye(l),V=ye(y),g=!H(R.value)&&s.length>R.value,k=!H(V.value)&&s.length<V.value;if((g||k)&&(A(g,R.message,V.message),!r))return x}if(K(s)&&I&&!G){const{value:R,message:V}=ye(I);if(Rr(R)&&!R.test(s)&&(x[B]=Object.assign({type:J.pattern,message:V,ref:t},N(J.pattern,V)),!r))return x}if(D){const R=ce(e,B,w),V=ne&&a?a[0].ref:t;if(Er(D)){const g=await D(R),k=mr(g,V);if(k&&(x[B]=Object.assign(Object.assign({},k),N(J.validate,k.message)),!r))return x}else if(Y(D)){let g={};for(const[k,T]of Object.entries(D)){if(!E(g)&&!r)break;const U=await T(R),pe=mr(U,V,k);pe&&(g=Object.assign(Object.assign({},pe),N(k,pe.message)),r&&(x[B]=g))}if(!E(g)&&(x[B]=Object.assign({ref:V},g),!r))return x}}return x};const Je=(e,r,t=[])=>{for(const s in r){const a=e+(Y(r)?`.${s}`:`[${s}]`);te(r[s])?t.push(a):Je(a,r[s],t)}return t};var yr=(e,r,t,s,a)=>{let c;return t.add(r),E(e)||(c=v(e,r),(Y(c)||Array.isArray(c))&&Je(r,c).forEach(l=>t.add(l))),L(c)?a?s:v(s,r):c},Jr=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:s,isReValidateOnBlur:a,isReValidateOnChange:c,isBlurEvent:l,isSubmitted:y,isOnAll:o})=>o?!1:!y&&t?!(s||l):(y?a:e)?!l:(y?c:r)?l:!0,We=e=>e.substring(0,e.indexOf("["));const Ur=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var Qr=(e,r)=>[...e].some(t=>Ur(r,t)),Xr=e=>e.type===`${pr}-one`;function Zr(e,r){const t=new MutationObserver(()=>{for(const s of Object.values(e.current))if(s&&s.options)for(const a of s.options)a&&a.ref&&ke(a.ref)&&r(s);else s&&ke(s.ref)&&r(s)});return t.observe(window.document,{childList:!0,subtree:!0}),t}var be=typeof window!==Ne&&typeof document!==Ne;function Z(e){let r;if(te(e)||be&&(e instanceof File||he(e)))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,Z(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const t in e)r[t]=Z(e[t]);return r}var br=e=>({isOnSubmit:!e||e===ee.onSubmit,isOnBlur:e===ee.onBlur,isOnChange:e===ee.onChange,isOnAll:e===ee.all,isOnTouch:e===ee.onTouched}),hr=e=>Ce(e)||oe(e);const et=typeof window===Ne,ue=be?"Proxy"in window:typeof Proxy!==Ne;function ot({mode:e=ee.onSubmit,reValidateMode:r=ee.onChange,resolver:t,context:s,defaultValues:a={},shouldFocusError:c=!0,shouldUnregister:l=!0,criteriaMode:y}={}){const o=d.useRef({}),O=d.useRef({}),I=d.useRef({}),D=d.useRef(new Set),w=d.useRef({}),B=d.useRef({}),x=d.useRef({}),q=d.useRef({}),C=d.useRef(a),ne=d.useRef(!1),G=d.useRef(!1),N=d.useRef(),A=d.useRef({}),R=d.useRef({}),V=d.useRef(s),g=d.useRef(t),k=d.useRef(new Set),T=d.useRef(br(e)),{isOnSubmit:U,isOnTouch:pe}=T.current,_=y===ee.all,[fe,Cr]=d.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!U,errors:{}}),M=d.useRef({isDirty:!ue,dirtyFields:!ue,touched:!ue||pe,isValidating:!ue,isSubmitting:!ue,isValid:!ue}),f=d.useRef(fe),ve=d.useRef(),{isOnBlur:Qe,isOnChange:Xe}=d.useRef(br(r)).current;V.current=s,g.current=t,f.current=fe,A.current=l?{}:E(A.current)?Z(a):A.current;const F=d.useCallback((n={})=>{ne.current||(f.current=Object.assign(Object.assign({},f.current),n),Cr(f.current))},[]),Ze=()=>M.current.isValidating&&F({isValidating:!0}),ge=d.useCallback((n,u,i=!1,h={},b)=>{let m=i||zr({errors:f.current.errors,error:u,name:n,validFields:q.current,fieldsWithValidation:x.current});const p=v(f.current.errors,n);u?($(q.current,n),m=m||!p||!ae(p,u,!0),j(f.current.errors,n,u)):((v(x.current,n)||g.current)&&(j(q.current,n,!0),m=m||p),$(f.current.errors,n)),(m&&!H(i)||!E(h)||M.current.isValidating)&&F(Object.assign(Object.assign(Object.assign({},h),g.current?{isValid:!!b}:{}),{isValidating:!1}))},[]),Oe=d.useCallback((n,u)=>{const{ref:i,options:h}=o.current[n],b=be&&he(i)&&H(u)?"":u;Ce(i)?(h||[]).forEach(({ref:m})=>m.checked=m.value===b):xr(i)&&!K(b)?i.files=b:Vr(i)?[...i.options].forEach(m=>m.selected=b.includes(m.value)):oe(i)&&h?h.length>1?h.forEach(({ref:m})=>m.checked=Array.isArray(b)?!!b.find(p=>p===m.value):b===m.value):h[0].ref.checked=!!b:i.value=b},[]),Ie=d.useCallback((n,u)=>{if(M.current.isDirty){const i=de();return n&&u&&j(i,n,u),!ae(i,C.current)}return!1},[]),xe=d.useCallback((n,u=!0)=>{if(M.current.isDirty||M.current.dirtyFields){const i=!ae(v(C.current,n),ce(o,n,A)),h=v(f.current.dirtyFields,n),b=f.current.isDirty;i?j(f.current.dirtyFields,n,!0):$(f.current.dirtyFields,n);const m={isDirty:Ie(),dirtyFields:f.current.dirtyFields},p=M.current.isDirty&&b!==m.isDirty||M.current.dirtyFields&&h!==v(f.current.dirtyFields,n);return p&&u&&F(m),p?m:{}}return{}},[]),Pe=d.useCallback(async(n,u)=>{const i=(await Me(o,_,o.current[n],A))[n];return ge(n,i,u),L(i)},[ge,_]),er=d.useCallback(async n=>{const{errors:u}=await g.current(de(),V.current,_),i=f.current.isValid;if(Array.isArray(n)){const h=n.map(b=>{const m=v(u,b);return m?j(f.current.errors,b,m):$(f.current.errors,b),!m}).every(Boolean);return F({isValid:E(u),isValidating:!1}),h}else{const h=v(u,n);return ge(n,h,i!==E(u),{},E(u)),!h}},[ge,_]),Ve=d.useCallback(async n=>{const u=n||Object.keys(o.current);if(Ze(),g.current)return er(u);if(Array.isArray(u)){!n&&(f.current.errors={});const i=await Promise.all(u.map(async h=>await Pe(h,null)));return F({isValidating:!1}),i.every(Boolean)}return await Pe(u)},[er,Pe]),rr=d.useCallback((n,u,{shouldDirty:i,shouldValidate:h})=>{const b={};j(b,n,u);for(const m of Je(n,u))o.current[m]&&(Oe(m,v(b,m)),i&&xe(m),h&&Ve(m))},[Ve,Oe,xe]),tr=d.useCallback((n,u,i)=>{if(!l&&!te(u)&&j(A.current,n,Object.assign({},u)),o.current[n])Oe(n,u),i.shouldDirty&&xe(n),i.shouldValidate&&Ve(n);else if(!te(u)&&(rr(n,u,i),k.current.has(n))){const h=We(n)||n;j(O.current,n,u),R.current[h]({[h]:v(O.current,h)}),(M.current.isDirty||M.current.dirtyFields)&&i.shouldDirty&&(j(f.current.dirtyFields,n,Gr(u,v(C.current,n,[]),v(f.current.dirtyFields,n,[]))),F({isDirty:!ae(Object.assign(Object.assign({},de()),{[n]:u}),C.current)}))}!l&&j(A.current,n,u)},[xe,Oe,rr]),nr=n=>G.current||D.current.has(n)||D.current.has((n.match(/\w+/)||[])[0]),Ae=n=>{let u=!0;if(!E(w.current))for(const i in w.current)(!n||!w.current[i].size||w.current[i].has(n)||w.current[i].has(We(n)))&&(B.current[i](),u=!1);return u};function jr(n,u,i){tr(n,u,i||{}),nr(n)&&F(),Ae(n)}N.current=N.current?N.current:async({type:n,target:u})=>{let i=u.name;const h=o.current[i];let b,m;if(h){const p=n===le.BLUR,W=Jr(Object.assign({isBlurEvent:p,isReValidateOnChange:Xe,isReValidateOnBlur:Qe,isTouched:!!v(f.current.touched,i),isSubmitted:f.current.isSubmitted},T.current));let z=xe(i,!1),me=!E(z)||!p&&nr(i);if(p&&!v(f.current.touched,i)&&M.current.touched&&(j(f.current.touched,i,!0),z=Object.assign(Object.assign({},z),{touched:f.current.touched})),!l&&oe(u)&&j(A.current,i,ce(o,i)),W)return!p&&Ae(i),(!E(z)||me&&E(z))&&F(z);if(Ze(),g.current){const{errors:S}=await g.current(de(),V.current,_),Re=f.current.isValid;if(b=v(S,i),oe(u)&&!b&&g.current){const Q=We(i),se=v(S,Q,{});se.type&&se.message&&(b=se),Q&&(se||v(f.current.errors,Q))&&(i=Q)}m=E(S),Re!==m&&(me=!0)}else b=(await Me(o,_,h,A))[i];!p&&Ae(i),ge(i,b,me,z,m)}};function sr(n){if(!l){let u=Z(n);for(const i of k.current)Ee(i)&&!u[i]&&(u=Object.assign(Object.assign({},u),{[i]:[]}));return u}return n}function de(n){if(K(n))return ce(o,n,A);if(Array.isArray(n)){const u={};for(const i of n)j(u,i,ce(o,i,A));return u}return sr(_e(o,Z(A.current),l))}const je=d.useCallback(async(n={})=>{const{errors:u}=await g.current(Object.assign(Object.assign({},de()),n),V.current,_),i=E(u);f.current.isValid!==i&&F({isValid:i})},[_]),Fe=d.useCallback((n,u)=>Hr(o,N.current,n,A,l,u),[l]),Te=d.useCallback(n=>{if(G.current)F();else{for(const u of D.current)if(u.startsWith(n)){F();break}Ae(n)}},[]),Se=d.useCallback((n,u)=>{n&&(Fe(n,u),l&&!re(n.options||[]).length&&($(q.current,n.ref.name),$(x.current,n.ref.name),$(f.current.errors,n.ref.name),j(f.current.dirtyFields,n.ref.name,!0),F({isDirty:Ie()}),M.current.isValid&&g.current&&je(),Te(n.ref.name)))},[je,Fe]);function Fr(n){n&&(Array.isArray(n)?n:[n]).forEach(u=>o.current[u]&&Ee(u)?delete f.current.errors[u]:$(f.current.errors,u)),F({errors:n?f.current.errors:{}})}function Sr(n,u){const i=(o.current[n]||{}).ref;j(f.current.errors,n,Object.assign(Object.assign({},u),{ref:i})),F({isValid:!1}),u.shouldFocus&&i&&i.focus&&i.focus()}const Be=d.useCallback((n,u,i)=>{const h=i?w.current[i]:D.current;let b=_e(o,Z(A.current),l,!1,n);if(K(n)){if(k.current.has(n)){const p=v(I.current,n,[]);b=!p.length||p.length!==re(v(b,n,[])).length?I.current:b}return yr(b,n,h,L(v(C.current,n))?u:v(C.current,n),!0)}const m=L(u)?C.current:u;return Array.isArray(n)?n.reduce((p,W)=>Object.assign(Object.assign({},p),{[W]:yr(b,W,h,m)}),{}):(G.current=L(i),Le(!E(b)&&b||m))},[]);function Dr(n,u){return Be(n,u)}function wr(n){for(const u of Array.isArray(n)?n:[n])Se(o.current[u],!0)}function $e(n,u={}){const{name:i,type:h,value:b}=n,m=Object.assign({ref:n},u),p=o.current,W=hr(n),z=Qr(k.current,i),me=ie=>be&&(!he(n)||ie===n);let S=p[i],Re=!0,Q;if(S&&(W?Array.isArray(S.options)&&re(S.options).find(ie=>b===ie.ref.value&&me(ie.ref)):me(S.ref))){p[i]=Object.assign(Object.assign({},S),u);return}h?S=W?Object.assign({options:[...re(S&&S.options||[]),{ref:n}],ref:{type:h,name:i}},u):Object.assign({},m):S=m,p[i]=S;const se=L(v(A.current,i));(!E(C.current)||!se)&&(Q=v(se?C.current:A.current,i),Re=L(Q),!Re&&!z&&Oe(i,Q)),E(u)||(j(x.current,i,!0),!U&&M.current.isValid&&Me(o,_,S,A).then(ie=>{const Pr=f.current.isValid;E(ie)?j(q.current,i,!0):$(q.current,i),Pr!==E(ie)&&F()})),z&&Re||!z&&$(f.current.dirtyFields,i),h&&$r(W&&S.options?S.options[S.options.length-1]:S,W||Xr(n),N.current)}function qr(n,u){if(!et)if(K(n))$e({name:n},u);else if(Y(n)&&"name"in n)$e(n,u);else return i=>i&&$e(i,n)}const Mr=d.useCallback((n,u)=>async i=>{i&&i.preventDefault&&(i.preventDefault(),i.persist());let h={},b=sr(_e(o,Z(A.current),l,!0));M.current.isSubmitting&&F({isSubmitting:!0});try{if(g.current){const{errors:m,values:p}=await g.current(b,V.current,_);f.current.errors=h=m,b=p}else for(const m of Object.values(o.current))if(m){const{name:p}=m.ref,W=await Me(o,_,m,A);W[p]?(j(h,p,W[p]),$(q.current,p)):v(x.current,p)&&($(f.current.errors,p),j(q.current,p,!0))}E(h)&&Object.keys(f.current.errors).every(m=>m in o.current)?(F({errors:{},isSubmitting:!0}),await n(b,i)):(f.current.errors=Object.assign(Object.assign({},f.current.errors),h),u&&await u(f.current.errors,i),c&&Yr(o.current,f.current.errors))}finally{f.current.isSubmitting=!1,F({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:E(f.current.errors),submitCount:f.current.submitCount+1})}},[c,_]),Nr=({errors:n,isDirty:u,isSubmitted:i,touched:h,isValid:b,submitCount:m,dirtyFields:p})=>{b||(q.current={},x.current={}),O.current={},D.current=new Set,G.current=!1,F({submitCount:m?f.current.submitCount:0,isDirty:u?f.current.isDirty:!1,isSubmitted:i?f.current.isSubmitted:!1,isValid:b?f.current.isValid:!1,dirtyFields:p?f.current.dirtyFields:{},touched:h?f.current.touched:{},errors:n?f.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Lr=(n,u={})=>{if(be){for(const i of Object.values(o.current))if(i){const{ref:h,options:b}=i,m=hr(h)&&Array.isArray(b)?b[0].ref:h;if(he(m))try{m.closest("form").reset();break}catch{}}}o.current={},C.current=Object.assign({},n||C.current),n&&Ae(""),Object.values(R.current).forEach(i=>Er(i)&&i()),A.current=l?{}:Z(n||C.current),Nr(u)};d.useEffect(()=>{t&&M.current.isValid&&je(),ve.current=ve.current||!be?ve.current:Zr(o,Se)},[Se,C.current]),d.useEffect(()=>()=>{ve.current&&ve.current.disconnect(),ne.current=!0,Object.values(o.current).forEach(n=>Se(n,!0))},[]),!t&&M.current.isValid&&(fe.isValid=ae(q.current,x.current)&&E(f.current.errors));const ir={trigger:Ve,setValue:d.useCallback(jr,[tr,Ve]),getValues:d.useCallback(de,[]),register:d.useCallback(qr,[C.current]),unregister:d.useCallback(wr,[]),formState:ue?new Proxy(fe,{get:(n,u)=>{if(u in n)return M.current[u]=!0,n[u]}}):fe},Ir=d.useMemo(()=>Object.assign({isFormDirty:Ie,updateWatchedValue:Te,shouldUnregister:l,updateFormState:F,removeFieldEventListener:Fe,watchInternal:Be,mode:T.current,reValidateMode:{isReValidateOnBlur:Qe,isReValidateOnChange:Xe},validateResolver:t?je:void 0,fieldsRef:o,resetFieldArrayFunctionRef:R,useWatchFieldsRef:w,useWatchRenderFunctionsRef:B,fieldArrayDefaultValuesRef:O,validFieldsRef:q,fieldsWithValidationRef:x,fieldArrayNamesRef:k,readFormStateRef:M,formStateRef:f,defaultValuesRef:C,shallowFieldsStateRef:A,fieldArrayValuesRef:I},ir),[C.current,Te,l,Fe,Be]);return Object.assign({watch:Dr,control:Ir,handleSubmit:Mr,reset:d.useCallback(Lr,[]),clearErrors:d.useCallback(Fr,[]),setError:d.useCallback(Sr,[]),errors:fe.errors},ir)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function rt(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t}const Ue=d.createContext(null);Ue.displayName="RHFContext";const tt=()=>d.useContext(Ue),ft=e=>{var{children:r}=e,t=rt(e,["children"]);return d.createElement(Ue.Provider,{value:Object.assign({},t)},r)},nt=(e,r)=>Array.isArray(e.inner)&&e.inner.length?e.inner.reduce((t,{path:s,message:a,type:c})=>{const l=t[s]&&t[s].types||{},y=s||c;return Object.assign(Object.assign({},t),y?{[y]:Object.assign(Object.assign({},t[y]||{message:a,type:c}),r?{types:Object.assign(Object.assign({},l),{[c]:l[c]?[...[].concat(l[c]),a]:a})}:{})}:{})},{}):{[e.path]:{message:e.message,type:e.type}},st=(e,r={abortEarly:!1})=>async(t,s,a=!1)=>{try{return r.context,{values:await e.validate(t,Object.assign(Object.assign({},r),{context:s})),errors:{}}}catch(c){const l=nt(c,a);return{values:{},errors:Le(l)}}},it=Object.freeze(Object.defineProperty({__proto__:null,yupResolver:st},Symbol.toStringTag,{value:"Module"})),ut=Br(it);var dt=ut;class at{static errorMessage(r,t,s,a,c=null){var y;if(c)return c;if(!a&&!s[r])return null;const l=t[r];return((y=l==null?void 0:l[0])==null?void 0:y.message)||(l==null?void 0:l.message)||l||null}}function kr(e){const{label:r,description:t,name:s,hint:a,type:c,placeholder:l,autoFocus:y,autoComplete:o,required:O,externalErrorMessage:I,disabled:D,endAdornment:w,className:B}=e,{register:x,errors:q,formState:{touched:C,isSubmitted:ne}}=tt(),G=at.errorMessage(s,q,C,ne,I);return X.jsxs("div",{className:"form-group",children:[X.jsxs("div",{className:w?"input-group":"",children:[!!r&&X.jsx("label",{className:`col-form-label ${O?"required":null}`,htmlFor:s,children:r}),t,X.jsx("input",{className:`${e.className} ${G?"__danger":""}`,id:s,name:s,type:c,ref:x,onChange:N=>{e.onChange&&e.onChange(N.target.value)},onBlur:N=>{e.onBlur&&e.onBlur(N)},placeholder:l||void 0,autoFocus:y||void 0,autoComplete:o||void 0,disabled:D}),w&&X.jsx("div",{className:"input-group-append",children:X.jsx("span",{className:"input-group-text",children:w})})]}),X.jsx("div",{className:"invalid-feedback",children:G}),!!a&&X.jsx("small",{className:"form-text text-muted",children:a})]})}kr.defaultProps={type:"text",required:!1};kr.propTypes={name:P.string.isRequired,required:P.bool,type:P.string,label:P.string,description:P.string,hint:P.string,autoFocus:P.bool,disabled:P.bool,prefix:P.string,placeholder:P.string,autoComplete:P.string,externalErrorMessage:P.string,endAdornment:P.any,onChange:P.any,className:P.string};export{ft as F,kr as I,dt as a,ot as u,lt as y};
