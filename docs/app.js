"use strict";
const BASE="https://lwozpuhnieqeahrisayv.supabase.co/storage/v1/object/public/";
const COMPANY="c2c178bc-1147-4ad4-85bb-18ddac10b146";
const LOGO=BASE+"logos/"+COMPANY+"/logo-1792424300152.png";
const BANNERS=[1,2,3,4,5,6,7,8].map(n=>BASE+"banners/"+COMPANY+"/banner-"+n+".jpg");
const icons={
  box:'<path d="m3 7 9-4 9 4v10l-9 4-9-4zM3 7l9 5 9-5M12 12v9"/>',
  chat:'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8z"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  arrow:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
  up:'<path d="m12 19 0-14m-6 6 6-6 6 6"/>',
  right:'<path d="m8 4 8 8-8 8"/>',
  left:'<path d="m15 4-8 8 8 8"/>',
  check:'<path d="m4 12 5 5L20 6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3 19 19 0 0 1-5.8-5.8 19 19 0 0 1-3-8.3A2 2 0 0 1 4.7 2h3a2 2 0 0 1 2 1.7l.6 3a2 2 0 0 1-.6 1.8L8.1 10a16 16 0 0 0 5.9 5.9l1.5-1.6a2 2 0 0 1 1.8-.6l3 .6a2 2 0 0 1 1.7 2z"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18"/>',
  store:'<path d="M3 10h18l-2-7H5zM5 10v11h14V10M9 21v-7h6v7"/>',
  paper:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h5"/>',
  attach:'<path d="M21 11.5 12 20a5 5 0 0 1-7-7l9.5-9.5a3.5 3.5 0 0 1 5 5L10 18a2 2 0 0 1-3-3l8-8"/>',
  moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 6-3 8-3 8h18s-3-2-3-8M10 21h4"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  map:'<path d="M3 6 9 3l6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/>',
  sparkle:'<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z"/>'
};
const icon=(name,cl="")=>'<svg class="icon '+cl+'" viewBox="0 0 24 24" aria-hidden="true">'+(icons[name]||icons.sparkle)+'</svg>';
const escapeHTML=v=>String(v==null?"":v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const fmt=n=>Math.round(n).toLocaleString("ru-RU")+" ₽";
const orderStatuses=["Принят","Макет","Печать","Готов","Выдан"];
const demoOrders=[
 {id:1,title:"Визитки Soft Touch с тиснением, 1000 шт.",status:"Печать",due:"21 октября",delivery:"Самовывоз",date:"19 октября"},
 {id:8,title:"Блокноты А5 с логотипом, 50 шт.",status:"Выдан",due:"24 сентября",delivery:"Самовывоз",date:"19 октября"},
 {id:2,title:"Листовки А5, 2000 шт.",status:"Выдан",due:"7 октября",delivery:"Самовывоз",date:"19 октября"}
];
const faq=[
 ["Какие услуги вы оказываете?","Печать визиток, листовок, баннеров, сертификатов, проектной документации, бирок, меню, блокнотов и другой полиграфии."],
 ["Можно сделать заказ срочно?","Да, возможность и срок срочного изготовления уточняются при оформлении заказа."],
 ["Какие минимальные тиражи?","Листовки офсетом — от 1000 шт., бирки с логотипом — от 500 шт., сертификаты — от 10 шт. Другой тираж можно обсудить в чате."],
 ["Когда вы работаете?","Пн–Пт 12:00–20:00, Сб 12:00–18:00. Приём заказов: 11:00–20:00."],
 ["Какие требования к макету?","Предпочтительный формат PDF или TIFF. Цветовая модель CMYK, шрифты в кривых, изображения надлежащего разрешения. Полные требования уточняйте перед печатью."],
 ["Какого размера делать макет?","Например, для визитки 90×50 мм макет с вылетами — 92×52 мм, безопасная область — 88×48 мм."],
 ["Почему нельзя перевести фотографию в кривые?","Фотография состоит из пикселей и плавных тоновых переходов; перевод в вектор может существенно ухудшить её внешний вид."],
 ["Можно просто сохранить картинку в PDF?","Да, но это само по себе не повышает качество изображения. Важно проверить разрешение, размер и цветовую модель."],
 ["Что значат растр, кривые, вылеты, DPI и CMYK?","Растр — пиксели. Кривые — векторные контуры. Вылеты — запас фона для резки. DPI — разрешение. CMYK — цветовая модель печати."],
 ["Как с вами связаться?","Телефон: +7 (938) 455-55-10. Telegram: @ArtProject23. Почта: a0-a8@yandex.ru."]
];
const data={
 section:"orders",page:"",selected:1,filter:"current",expanded:-1,
 name:"Елена",phone:"+7 (900) 000-00-00",email:"demo@example.com",theme:"dark",
 orders:demoOrders.slice(),messages:[
  {mine:true,text:"Визитки успеете к концу недели?",time:"19 окт."},
  {mine:false,text:"Елена, да — они уже в печати, будут готовы послезавтра.",time:"19 окт."}
 ],product:"cards",quantity:100,size:"90×50 мм",paper:"Мелованная 300 г/м²",duplex:false,lam:"Без ламинации",corners:false,rush:false,
 bannerMat:"Фронтлит 440 г",width:3,height:1,eyelets:false,hem:false,
 leafletQty:100,leafletPaper:"Мелованная 130 г/м²",leafletDuplex:false,
 draftComment:"",fileName:"", fileSize:0,notifications:false,placing:false,chatDraft:""
};
const root=document.getElementById("app");
function logo(){return '<img class="logo" src="'+LOGO+'" alt="Логотип Арт Проджект">'}
function topbar(extra=""){return '<div class="topbar"><div class="client-brand">'+logo()+'<div><div class="brand-small">Типография</div><div class="brand-name">Арт Проджект</div></div></div><div class="grow"></div>'+extra+'</div>'}
function btnBack(){return '<button class="round-icon back" data-action="back" aria-label="Назад">'+icon("left")+'</button>'}
function statusLabel(s){return '<span class="status '+(s==="Печать"?"print":s==="Готов"?"ready":s==="Выдан"?"issued":"")+'">'+escapeHTML(s)+'</span>'}
function progress(s){let idx=Math.max(0,orderStatuses.indexOf(s));return '<div class="progress">'+orderStatuses.map((v,i)=>'<span class="'+(i<=idx?"done":"")+'"></span>').join("")+'</div>'}
function pbtn(name,value,active){return '<button type="button" class="pill '+(active?"active":"")+'" data-action="'+name+'" data-value="'+escapeHTML(value)+'">'+escapeHTML(value)+'</button>'}
function options(label,key,opts,selected){return '<div class="calc-panel"><p class="sub">'+label+'</p><div class="calc-options">'+opts.map(x=>'<button type="button" class="'+(String(x)===String(selected)?"active":"")+'" data-action="pick" data-key="'+key+'" data-value="'+escapeHTML(x)+'">'+escapeHTML(x)+'</button>').join("")+'</div></div>'}
function toggle(label,key,val){return '<div class="calc-row"><span>'+label+'</span><button type="button" class="switch '+(val?"on":"")+'" data-action="toggle" data-key="'+key+'" aria-label="'+label+'" aria-pressed="'+!!val+'"></button></div>'}
function nav(){const tabs=[["orders","box","Заказы"],["chat","chat","Чат"],["faq","help","Вопросы"],["profile","user","Профиль"]];return '<nav class="bottom-nav" aria-label="Основное меню">'+tabs.map(([key,ic,label])=>'<button class="'+(data.section===key?"active":"")+'" data-action="tab" data-key="'+key+'" aria-label="'+label+'" aria-current="'+(data.section===key?"page":"false")+'">'+icon(ic)+'<span>'+label+'</span></button>').join("")+'</nav>'}
function ordersPage(){
 const current=data.orders.filter(x=>x.status!=="Выдан");
 const delivered=data.orders.filter(x=>x.status==="Выдан");
 const shown=data.filter==="current"?current:delivered;
 let out=topbar('<a class="round-icon" href="tel:+79384555510" aria-label="Позвонить в типографию">'+icon("phone")+'</a>');
 out+='<p class="eyebrow">Добрый день, '+escapeHTML(data.name)+'</p><h1>Ваши заказы</h1>';
 out+='<button class="click-row" data-action="calc">'+icon("paper","lg")+'<span class="grow"><b>Рассчитать стоимость</b><br><span class="sub">Визитки, баннеры, листовки А5 — цена сразу</span></span>'+icon("right")+'</button>';
 out+='<div class="banner-rail" aria-label="Баннеры с предложениями">'+BANNERS.slice(0,8).map((u,i)=>'<img loading="'+(i>3?"lazy":"eager")+'" src="'+u+'" alt="Полиграфические услуги. Баннер '+(i+1)+'">').join("")+'</div>';
 out+='<div class="pills">'+pbtn("orderFilter","current","Текущие "+current.length,data.filter==="current")+pbtn("orderFilter","delivered","Выданные "+delivered.length,data.filter==="delivered")+'</div>';
 out+='<div class="orders-wrap">'+(shown.length?shown.map(o=>orderCard(o)).join(""):'<div class="card"><p class="muted">В этой категории заказов пока нет.</p></div>')+'</div>';
 return out;
}
function orderCard(o){return '<article class="order-card">'+statusLabel(o.status)+'<button class="round-icon white order-link" data-action="details" data-id="'+o.id+'" aria-label="Открыть заказ">↗</button><div class="order-name"><div class="order-n">Заказ №'+o.id+'</div>'+escapeHTML(o.title)+'</div>'+progress(o.status)+'<div class="order-meta"><span class="meta-pill">'+icon("calendar","sm")+' до '+escapeHTML(o.due||"уточняется")+'</span><span class="meta-pill">'+icon("store","sm")+' '+escapeHTML(o.delivery)+'</span></div></article>'}
function detailPage(){
 const o=data.orders.find(x=>x.id===data.selected);if(!o)return ordersPage();
 const idx=Math.max(0,orderStatuses.indexOf(o.status));
 let out=btnBack()+'<div class="detail-card"><small>Заказ №'+o.id+'</small><h1>'+escapeHTML(o.title)+'</h1>'+progress(o.status)+statusLabel(o.status)+'</div>';
 out+='<div class="detail-summary"><div class="info-card">'+icon("calendar")+'<div class="sub">Готовность</div><b>'+escapeHTML(o.due||"Уточняется")+'</b></div><div class="info-card">'+icon("store")+'<div class="sub">Получение</div><b>'+escapeHTML(o.delivery)+'</b></div></div>';
 out+='<div class="section-label">Этапы</div><div class="timeline">'+orderStatuses.map((s,i)=>'<div class="step '+(i<idx?"completed":i===idx?"current":"")+'"><div class="step-dot">'+(i<idx?icon("check","sm"):i===idx?"●":"○")+'</div><div class="step-copy"><b>'+s+'</b>'+(i<=idx?'<small> '+(i===idx?"Сейчас":"Завершён")+'</small>':'')+'</div>'+(i===idx?'<span class="step-hint">Сейчас</span>':'')+'</div>').join("")+'</div>';
 out+='<div class="section-label">Файлы</div><div class="card"><p class="sub">Макет или фото: PDF, AI, CDR, PSD, JPG, Word или архив, до 50 МБ.</p><button class="btn" data-action="mockUpload">'+icon("attach","sm")+' Прикрепить макет</button><p class="notice">Файлы в демонстрации не загружаются на сервер.</p></div>';
 out+='<div class="card between"><div><small>'+(o.status==="Выдан"?"Заказ выдан":"Есть вопрос по заказу?")+'</small><br><b>'+(o.status==="Выдан"?"Спасибо, что с нами":"Ответим в чате")+'</b></div><button class="btn white" data-action="tab" data-key="chat">'+icon("chat","sm")+' Написать</button></div>';
 out+='<div class="section-label">Детали</div><div class="card"><div class="sub">Адрес самовывоза</div><div>Краснодар, ул. Карякина, 25 (1 цоколь)</div><div class="sub" style="margin-top:12px">Оформлен</div><div>'+escapeHTML(o.date||"Сегодня")+'</div></div>';
 return out;
}
function calculate(){
 if(data.product==="cards"){let p={50:12,100:7,200:4.5,500:2.4,1000:1.6,2000:1.2};let q=Number(data.quantity);let base=p[q]*q*(data.paper==="Дизайнерская"?2.2:data.paper==="Пластик"?6:1)*(data.duplex?1.5:1);let lamin=data.lam!=="Без ламинации"?Math.max(q*.8,300):0;let corners=data.corners?Math.max(q*.3,200):0;return {name:"Визитки "+data.size+", "+q+" шт.",base,extras:lamin+corners,total:Math.round((base+lamin+corners)*(data.rush?1.5:1))}}
 if(data.product==="banner"){let p={"Фронтлит 440 г":420,"Фронтлит 510 г":520,"Блэкаут":780,"Баннерная сетка":620};let area=Math.max(1,Number(data.width||1)*Number(data.height||1));let base=area*p[data.bannerMat];let perimeter=2*(Number(data.width||1)+Number(data.height||1));let extras=(data.eyelets?Math.ceil(perimeter/.5)*15:0)+(data.hem?perimeter*60:0);return {name:"Баннер "+data.width+"×"+data.height+" м",base,extras,total:Math.round((base+extras)*(data.rush?1.3:1))}}
 let q=Number(data.leafletQty);let prices={100:1500,500:3200,1000:4500,5000:12000};let base=prices[q]*(data.leafletPaper==="Мелованная 170 г/м²"?1.15:1)*(data.leafletDuplex?1.4:1);return{name:"Листовки А5, "+q+" шт.",base,extras:0,total:Math.round(base*(data.rush?1.5:1))};
}
function calcPage(){
 const c=calculate();
 let out=btnBack()+'<p class="eyebrow">Цена сразу, без звонков</p><h1>Расчёт стоимости</h1>';
 out+='<div class="pills" style="margin-bottom:6px">'+[["cards","Визитки"],["banner","Баннеры"],["leaflet","Листовки А5"]].map(([k,label])=>'<button class="pill '+(data.product===k?"active":"")+'" data-action="product" data-key="'+k+'">'+label+'</button>').join("")+'</div>';
 if(data.product==="cards"){
  out+=options("Размер","size",["90×50 мм","85×55 мм"],data.size);
  out+=options("Тираж, шт.","quantity",[50,100,200,500,1000,2000],data.quantity);
  out+=options("Бумага","paper",["Мелованная 300 г/м²","Дизайнерская","Пластик"],data.paper);
  out+=options("Печать","duplexPrint",["Односторонняя (4+0)","Двусторонняя (4+4)"],data.duplex?"Двусторонняя (4+4)":"Односторонняя (4+0)");
  out+=options("Ламинация","lam",["Без ламинации","Матовая","Глянцевая"],data.lam);
  out+='<div class="calc-panel">'+toggle("Скругление углов","corners",data.corners)+toggle("Срочно, +50%","rush",data.rush)+'</div>';
 }else if(data.product==="banner"){
  out+=options("Материал","bannerMat",["Фронтлит 440 г","Фронтлит 510 г","Блэкаут","Баннерная сетка"],data.bannerMat);
  out+='<div class="calc-panel"><p class="sub">Размер баннера, м</p><div class="two-cols"><label>Ширина<input name="width" type="number" value="'+data.width+'" min=".3" max="5" step=".1"></label><label>Высота<input name="height" type="number" value="'+data.height+'" min=".3" max="20" step=".1"></label></div></div>';
  out+='<div class="calc-panel">'+toggle("Люверсы по периметру","eyelets",data.eyelets)+toggle("Проклейка краёв","hem",data.hem)+toggle("Срочно, +30%","rush",data.rush)+'</div>';
 }else{
  out+=options("Тираж, шт.","leafletQty",[100,500,1000,5000],data.leafletQty);
  out+=options("Бумага","leafletPaper",["Мелованная 130 г/м²","Мелованная 170 г/м²"],data.leafletPaper);
  out+=options("Печать","leafletDuplexPrint",["Односторонняя (4+0)","Двусторонняя (4+4)"],data.leafletDuplex?"Двусторонняя (4+4)":"Односторонняя (4+0)");
  out+='<div class="calc-panel">'+toggle("Срочно, +50%","rush",data.rush)+'</div>';
 }
 out+='<div class="calc-price"><div><div class="sub">Предварительно</div><div class="amount">'+fmt(c.total)+'</div></div><button class="btn white" data-action="checkout">Оформить заказ '+icon("right","sm")+'</button></div>';
 out+='<p class="notice">Цена предварительная. Менеджер подтвердит стоимость и срок после проверки макета.</p>';
 return out;
}
function checkoutPage(){
 const c=calculate();let out=btnBack()+'<p class="eyebrow">Оформление</p><h1>Новая заявка</h1>';
 out+='<div class="card soft"><div class="sub">'+escapeHTML(c.name)+'</div><h2 style="font-size:24px;margin:7px 0">'+fmt(c.total)+'</h2><div class="breakdown"><span>Изготовление</span><strong>'+fmt(c.base)+'</strong></div><div class="breakdown"><span>Доп. работы</span><strong>'+fmt(c.extras)+'</strong></div><p class="notice">Цена окончательно подтверждается менеджером.</p></div>';
 out+='<label class="form-label" for="comment">Комментарий к заказу (необязательно)</label><textarea id="comment" name="comment" placeholder="Пожелания по заказу, когда нужен..." class="form-input">'+escapeHTML(data.draftComment)+'</textarea>';
 out+='<div class="section-label">Макет</div><div class="card"><p class="sub">Макет или фото можно передать менеджеру после оформления.</p><label class="btn" for="demo-file">'+icon("attach","sm")+' Выбрать файл</label><input id="demo-file" type="file" style="display:none" accept=".pdf,.ai,.cdr,.psd,.jpg,.jpeg,.png,.doc,.docx,.zip,.rar"><div class="notice">'+(data.fileName?"Выбран: "+escapeHTML(data.fileName):"PDF, AI, CDR, PSD, JPG, Word, архив до 50 МБ")+'</div><p class="notice">В публичной демонстрации файлы не отправляются.</p></div>';
 out+='<button class="btn white full" data-action="placeOrder">Создать демо-заказ '+icon("right","sm")+'</button>';
 return out;
}
function chatPage(){
 let out='<div class="chat-shell">'+topbar('<a href="tel:+79384555510" class="round-icon" aria-label="Позвонить">'+icon("phone")+'</a>');
 out+='<div class="chat-history" id="chat-history">'+data.messages.map(m=>'<div class="bubble '+(m.mine?"mine":"")+'">'+escapeHTML(m.text)+'<div class="bubble-time">'+escapeHTML(m.time)+'</div></div>').join("")+'</div>';
 out+='<form id="chat-form" class="chat-compose"><input id="chat-input" name="message" autocomplete="off" maxlength="2000" placeholder="Сообщение" aria-label="Сообщение" required><button class="send-btn" type="submit" aria-label="Отправить">'+icon("up")+'</button></form><p class="notice">Демонстрационный чат: сообщения видны только в этом браузере.</p></div>';
 return out;
}
function faqPage(){return '<p class="eyebrow">Помощь</p><h1>Вопросы и ответы</h1><div class="faq-list">'+faq.map(([q,a],i)=>'<div class="faq-item"><button data-action="faq" data-id="'+i+'" aria-expanded="'+(data.expanded===i)+'">'+escapeHTML(q)+icon("right","sm")+'</button>'+(data.expanded===i?'<div class="faq-answer">'+escapeHTML(a)+'</div>':"")+'</div>').join("")+'</div><div class="section-gap"><h2>Не нашли ответ?</h2><button class="click-row" data-action="tab" data-key="chat">'+icon("chat")+'<span class="grow">Написать в чат</span>'+icon("right")+'</button></div><button class="click-row" data-action="about">'+icon("store")+'<span class="grow">О типографии</span>'+icon("right")+'</button>'}
function profilePage(){
 let out='<p class="eyebrow">Аккаунт</p><h1>Профиль</h1><div class="profile-mini"><div class="avatar">'+escapeHTML(data.name.slice(0,2)).toUpperCase()+'</div><div><b>'+escapeHTML(data.name)+'</b><div class="sub">'+escapeHTML(data.email)+'</div></div></div>';
 out+='<div class="profile-grid"><section><h3>Личные данные</h3><form id="profile-form" class="card soft"><label class="form-label" for="my-name">Имя</label><input id="my-name" name="name" value="'+escapeHTML(data.name)+'" required maxlength="40"><label class="form-label" for="my-phone">Телефон</label><input id="my-phone" name="phone" value="'+escapeHTML(data.phone)+'"><button class="btn white full" type="submit" style="margin-top:15px">Сохранить</button></form></section>';
 out+='<section><h3>Уведомления и тема</h3><div class="profile-block"><div class="round-icon">'+icon("bell")+'</div><div class="grow"><b>Уведомления</b><div class="sub">Включить в демоверсии</div></div><button class="switch '+(data.notifications?"on":"")+'" data-action="toggle" data-key="notifications" aria-label="Уведомления"></button></div><button class="profile-block" data-action="theme"><span class="round-icon">'+icon("moon")+'</span><span class="grow">Тема оформления</span><b class="sub">'+(data.theme==="dark"?"Тёмная":"Светлая")+'</b></button><h3 style="margin-top:23px">Ещё</h3><button class="profile-block" data-action="about">'+icon("store")+'<span class="grow">О типографии «Арт Проджект»</span>'+icon("right")+'</button></section></div>';
 return out;
}
function aboutPage(){
 return btnBack()+'<div class="card" style="text-align:center;padding:24px">'+('<img class="logo lg" src="'+LOGO+'" alt="Арт Проджект">')+'<h1 style="font-size:22px;margin:9px 0 3px">Арт Проджект</h1><p class="sub">Краснодар, ул. Карякина, 25 (1 цоколь)</p></div><h2 class="section-label">Контакты</h2>'+
 '<a class="click-row" href="tel:+79384555510">'+icon("phone")+'<span class="grow">+7 (938) 455-55-10</span>'+icon("right")+'</a>'+
 '<a class="click-row" style="margin-top:8px" href="mailto:a0-a8@yandex.ru">'+icon("paper")+'<span class="grow">a0-a8@yandex.ru</span>'+icon("right")+'</a>'+
 '<a class="click-row" style="margin-top:8px" href="https://t.me/ArtProject23" target="_blank" rel="noreferrer">'+icon("chat")+'<span class="grow">@ArtProject23</span>'+icon("right")+'</a>'+
 '<div class="card"><h2>Режим работы</h2><p>Пн–Пт: 12:00–20:00<br>Сб: 12:00–18:00<br>Приём заказов: 11:00–20:00</p></div>';
}
function render(){
 document.documentElement.dataset.theme=data.theme;
 const content=data.page==="detail"?detailPage():data.page==="calc"?calcPage():data.page==="checkout"?checkoutPage():data.page==="about"?aboutPage():({orders:ordersPage,chat:chatPage,faq:faqPage,profile:profilePage}[data.section]||ordersPage)();
 root.innerHTML=content+nav();
 if(data.section==="chat"&&!data.page){let h=document.getElementById("chat-history");if(h)h.scrollTop=h.scrollHeight}
}
let tt;
function toast(message){const target=document.getElementById("toast");target.innerHTML='<div class="toast">'+escapeHTML(message)+'</div>';clearTimeout(tt);tt=setTimeout(()=>target.innerHTML="",3200)}
document.addEventListener("click",e=>{
 const btn=e.target.closest("[data-action]");if(!btn)return;
 const a=btn.dataset.action;
 if(a==="tab"){data.section=btn.dataset.key;data.page="";scrollTo(0,0)}
 else if(a==="back"){data.page=data.page==="checkout"?"calc":"";scrollTo(0,0)}
 else if(a==="calc"){data.section="orders";data.page="calc";scrollTo(0,0)}
 else if(a==="details"){data.selected=Number(btn.dataset.id);data.section="orders";data.page="detail";scrollTo(0,0)}
 else if(a==="checkout"){data.page="checkout";scrollTo(0,0)}
 else if(a==="about"){data.page="about";scrollTo(0,0)}
 else if(a==="orderFilter"){data.filter=btn.dataset.value.startsWith("Текущие")?"current":"delivered"}
 else if(a==="product"){data.product=btn.dataset.key;data.rush=false}
 else if(a==="pick"){const k=btn.dataset.key,v=btn.dataset.value;if(k==="quantity"||k==="leafletQty")data[k]=Number(v);else if(k==="duplexPrint")data.duplex=v.startsWith("Двусторонняя");else if(k==="leafletDuplexPrint")data.leafletDuplex=v.startsWith("Двусторонняя");else data[k]=v}
 else if(a==="toggle"){const k=btn.dataset.key;data[k]=!data[k]}
 else if(a==="faq")data.expanded=data.expanded===Number(btn.dataset.id)?-1:Number(btn.dataset.id);
 else if(a==="theme")data.theme=data.theme==="dark"?"light":"dark";
 else if(a==="mockUpload")toast("В демонстрации макеты не отправляются на сервер.");
 else if(a==="placeOrder"){let c=calculate();const order={id:Math.max(...data.orders.map(x=>x.id),9)+1,title:c.name,status:"Принят",due:"Уточняется",date:"Сегодня",delivery:"Самовывоз"};data.orders.unshift(order);data.filter="current";data.page="detail";data.selected=order.id;data.fileName="";toast("Демо-заявка добавлена в список заказов");scrollTo(0,0)}
 else return;
 render();
});
document.addEventListener("input",e=>{if(e.target.id==="comment")data.draftComment=e.target.value});
document.addEventListener("change",e=>{
 if(e.target.name==="width"||e.target.name==="height"){let k=e.target.name,n=Number(e.target.value);data[k]=Number.isFinite(n)?Math.max(.3,Math.min(k==="width"?5:20,n)):1;render()}
 if(e.target.id==="demo-file"){let f=e.target.files?.[0];if(f){if(f.size>50*1024*1024){toast("Размер файла превышает 50 МБ");return}data.fileName=f.name;render()}}
});
document.addEventListener("submit",e=>{
 if(e.target.id==="chat-form"){e.preventDefault();let input=e.target.elements.message;let t=input.value.trim();if(!t)return;data.messages.push({mine:true,text:t,time:"Сейчас"});render();toast("Сообщение добавлено только в демоверсии")}
 if(e.target.id==="profile-form"){e.preventDefault();data.name=e.target.elements.name.value.trim()||data.name;data.phone=e.target.elements.phone.value.trim();render();toast("Данные обновлены в демоверсии")}
});
render();