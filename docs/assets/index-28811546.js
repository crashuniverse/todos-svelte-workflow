(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function x(){}function oe(e){return e()}function W(){return Object.create(null)}function j(e){e.forEach(oe)}function ie(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function X(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function fe(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function y(){return O(" ")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Y(e,t){e.value=t??""}let D;function N(e){D=e}const S=[],Z=[],V=[],ee=[],he=Promise.resolve();let H=!1;function pe(){H||(H=!0,he.then(ce))}function K(e){V.push(e)}const B=new Set;let E=0;function ce(){if(E!==0)return;const e=D;do{try{for(;E<S.length;){const t=S[E];E++,N(t),_e(t.$$)}}catch(t){throw S.length=0,E=0,t}for(N(null),S.length=0,E=0;Z.length;)Z.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];B.has(n)||(B.add(n),n())}V.length=0}while(S.length);for(;ee.length;)ee.pop()();H=!1,B.clear(),N(e)}function _e(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const I=new Set;let me;function F(e,t){e&&e.i&&(I.delete(e),e.i(t))}function te(e,t,n,r){if(e&&e.o){if(I.has(e))return;I.add(e),me.c.push(()=>{I.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ne(e){e&&e.c()}function G(e,t,n,r){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),r||K(()=>{const u=e.$$.on_mount.map(oe).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...u):j(u),e.$$.on_mount=[]}),o.forEach(K)}function R(e,t){const n=e.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(S.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,r,l,o,u,c=[-1]){const p=D;N(e);const i=e.$$={fragment:null,ctx:[],props:o,update:x,not_equal:l,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:W(),dirty:c,skip_bound:!1,root:t.target||p.$$.root};u&&u(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(a,w,...b)=>{const v=b.length?b[0]:w;return i.ctx&&l(i.ctx[a],i.ctx[a]=v)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](v),g&&ge(e,a)),w}):[],i.update(),g=!0,j(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=de(t.target);i.fragment&&i.fragment.l(a),a.forEach(L)}else i.fragment&&i.fragment.c();t.intro&&F(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),ce()}N(p)}class Q{$destroy(){R(this,1),this.$destroy=x}$on(t,n){if(!ie(n))return x;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="/todos-svelte-workflow/assets/vite-4a748afd.svg",$e="/todos-svelte-workflow/assets/svelte-a39f39b7.svg";function ye(e){let t,n,r,l,o;return{c(){t=h("button"),n=O("count is "),r=O(e[0])},m(u,c){A(u,t,c),s(t,n),s(t,r),l||(o=T(t,"click",e[1]),l=!0)},p(u,[c]){c&1&&se(r,u[0])},i:x,o:x,d(u){u&&L(t),l=!1,o()}}}function be(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class we extends Q{constructor(t){super(),J(this,t,be,ye,z,{})}}function le(e,t,n){const r=e.slice();return r[1]=t[n],r}function re(e){let t,n=e[1]+"",r,l,o,u,c,p;function i(){return e[4](e[1])}return{c(){t=h("li"),r=O(n),l=y(),o=h("button"),o.textContent="✖",u=y(),d(o,"class","unstyled svelte-1dx1yh5"),d(t,"class","svelte-1dx1yh5")},m(g,a){A(g,t,a),s(t,r),s(t,l),s(t,o),s(t,u),c||(p=T(o,"click",i),c=!0)},p(g,a){e=g,a&1&&n!==(n=e[1]+"")&&se(r,n)},d(g){g&&L(t),c=!1,p()}}}function ke(e){let t,n,r,l,o,u,c,p,i,g,a,w,b,v=e[0],m=[];for(let f=0;f<v.length;f+=1)m[f]=re(le(e,v,f));return{c(){t=h("div"),n=h("ul");for(let f=0;f<m.length;f+=1)m[f].c();r=y(),l=h("div"),o=h("div"),o.innerHTML='<label for="place">Enter a new place</label>',u=y(),c=h("input"),p=y(),i=h("button"),g=O("Add"),d(c,"name","place"),d(c,"id","place"),d(c,"class","svelte-1dx1yh5"),i.disabled=a=e[1]===void 0,d(l,"class","places svelte-1dx1yh5")},m(f,$){A(f,t,$),s(t,n);for(let _=0;_<m.length;_+=1)m[_].m(n,null);A(f,r,$),A(f,l,$),s(l,o),s(l,u),s(l,c),Y(c,e[1]),s(l,p),s(l,i),s(i,g),w||(b=[T(c,"input",e[5]),T(i,"click",e[2])],w=!0)},p(f,[$]){if($&9){v=f[0];let _;for(_=0;_<v.length;_+=1){const C=le(f,v,_);m[_]?m[_].p(C,$):(m[_]=re(C),m[_].c(),m[_].m(n,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=v.length}$&2&&c.value!==f[1]&&Y(c,f[1]),$&2&&a!==(a=f[1]===void 0)&&(i.disabled=a)},i:x,o:x,d(f){f&&L(t),ae(m,f),f&&L(r),f&&L(l),w=!1,j(b)}}}function xe(e,t,n){let r=["Goa, India","Bali, Indonesia","Ho Chi Minh, Vietnam"],l;const o=()=>{n(0,r=r.concat(l)),n(1,l=void 0)},u=i=>{const g=r.filter(a=>a!==i);n(0,r=g)},c=i=>u(i);function p(){l=this.value,n(1,l)}return[r,l,o,u,c,p]}class Le extends Q{constructor(t){super(),J(this,t,xe,ke,z,{})}}function Ce(e){let t,n,r,l,o,u,c,p,i,g,a,w,b,v,m,f,$,_,C,U,q,P;return v=new we({}),$=new Le({}),{c(){t=h("main"),n=h("div"),r=h("a"),l=h("img"),u=y(),c=h("a"),p=h("img"),g=y(),a=h("h1"),a.textContent="Vite + Svelte",w=y(),b=h("div"),ne(v.$$.fragment),m=y(),f=h("div"),ne($.$$.fragment),_=y(),C=h("p"),C.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',U=y(),q=h("p"),q.textContent="Click on the Vite and Svelte logos to learn more",X(l.src,o=ve)||d(l,"src",o),d(l,"class","logo svelte-11cv5lq"),d(l,"alt","Vite Logo"),d(r,"href","https://vitejs.dev"),d(r,"target","_blank"),d(r,"rel","noreferrer"),X(p.src,i=$e)||d(p,"src",i),d(p,"class","logo svelte svelte-11cv5lq"),d(p,"alt","Svelte Logo"),d(c,"href","https://svelte.dev"),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(b,"class","card"),d(q,"class","read-the-docs svelte-11cv5lq")},m(k,ue){A(k,t,ue),s(t,n),s(n,r),s(r,l),s(n,u),s(n,c),s(c,p),s(t,g),s(t,a),s(t,w),s(t,b),G(v,b,null),s(t,m),s(t,f),G($,f,null),s(t,_),s(t,C),s(t,U),s(t,q),P=!0},p:x,i(k){P||(F(v.$$.fragment,k),F($.$$.fragment,k),P=!0)},o(k){te(v.$$.fragment,k),te($.$$.fragment,k),P=!1},d(k){k&&L(t),R(v),R($)}}}class Ee extends Q{constructor(t){super(),J(this,t,null,Ce,z,{})}}new Ee({target:document.getElementById("app")});
