import{g as i,u as S,b as p,s as y}from"./showToast-BWW-6vYL.js";/* empty css             */let f=i();const q=(o,r)=>{let t=1;const a=f.find(e=>e.currCardId===o);return a&&(t=t*a.currTargetingCardProdQuant),t};let C=document.querySelector(".total_bill_val"),T=document.querySelector(".tax_value"),h=document.querySelector(".final_price_val");const _=()=>{let o=i(),r=0;if(o.length){let t=o.reduce((a,e)=>{let l=e.currTargetingCardProdPrice||0;return a+l},r);C.innerText=t,T.innerText=30,h.innerText=30+t}},L=o=>{let t=i().filter(e=>e.currCardId!=o);localStorage.setItem("eachCardDetail",JSON.stringify(t));let a=document.querySelector(`#card${o}`);a&&a.remove(),S(t),_()},P=(o,r,t,a)=>{let e=1,l=0,n=document.querySelector(`#card${r}`),s=n.querySelector(".cart_actual_price"),c=n.querySelector(".add_to_cart_quant"),u=i(),d=u.find(m=>m.currCardId===r);d?(e=d.currTargetingCardProdQuant,l=d.currTargetingCardProdPrice):(l=a,a=a),o.target.classList.contains("product_inc")&&(t>e?(e+=1,l=e*a):e===t&&(e=t)),o.target.classList.contains("product_dec")&&e>1&&(e-=1),l=a*e;let g={currCardId:r,currTargetingCardProdPrice:l,currTargetingCardProdQuant:e};g=u.map(m=>m.currCardId===r?g:m),localStorage.setItem("eachCardDetail",JSON.stringify(g)),s.innerText=l,c.innerText=e,_()};let x=document.querySelector(".add_to_card_template_outer"),D=document.querySelector(".add_to_cart_template"),v=i();const F=()=>{p.filter(r=>v.some(t=>t.currCardId===r.productId)).forEach(r=>{const{productId:t,productCategory:a,productName:e,productStock:l,productPrice:n,img:s}=r;let c=document.importNode(D.content,!0);c.querySelector(".category_cart").textContent=a,c.querySelector("#image_cart").src=s,c.querySelector("#cardValue").setAttribute("id",`card${t}`),c.querySelector(".card_heading_cart").textContent=e;let u=q(t);c.querySelector(".add_to_cart_quant").textContent=u,c.querySelector(".actual_price").textContent=n*u,c.querySelector(".add_to_cart_btn_cart").addEventListener("click",d=>{console.log(d.target),L(t)}),c.querySelector("#quantity_btns_cart").addEventListener("click",d=>{P(d,t,l,n)}),c.querySelector("#add_to_cart_btn").addEventListener("click",d=>{y(d,e)}),x.append(c)})};F();_();
