(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",l="week",o="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,o),r=n-i<0,a=t.clone().add(s+(r?-1:1),o);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:c,w:l,d:a,D:d,h:r,m:i,s,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",$={};$[y]=p;var g=function(e){return e instanceof w},b=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;$[l]=t,i=l}return!s&&i&&(y=i),i||!s&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},S=_;S.l=b,S.i=g,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function p(e){this.$L=b(e.locale,null,!0),this.parse(e)}var m=p.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,u=!!S.u(t)||t,h=S.p(e),f=function(e,t){var s=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?s:s.endOf(a)},v=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case o:return u?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,g=(p<$?p+7:p)-$;return f(u?_-g:_+(6-g),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case i:return v(y+"Seconds",2);case s:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var l,u=S.p(e),h="set"+(this.$u?"UTC":""),f=(l={},l[a]=h+"Date",l[d]=h+"Date",l[o]=h+"Month",l[c]=h+"FullYear",l[r]=h+"Hours",l[i]=h+"Minutes",l[s]=h+"Seconds",l[n]=h+"Milliseconds",l)[u],v=u===a?this.$D+(t-this.$W):t;if(u===o||u===c){var p=this.clone().set(d,1);p.$d[f](v),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(n,u){var d,h=this;n=Number(n);var f=S.p(u),v=function(e){var t=M(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(f===o)return this.set(o,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return v(1);if(f===l)return v(7);var p=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*p;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,u=n.months,c=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},d=function(e){return S.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:S.s(l+1,2,"0"),MMM:c(n.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:S.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return s.replace(v,(function(e,t){return t||p[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,h){var f,v=S.p(d),p=M(n),m=(p.utcOffset()-this.utcOffset())*e,_=this-p,y=S.m(this,p);return y=(f={},f[c]=y/12,f[o]=y,f[u]=y/3,f[l]=(_-m)/6048e5,f[a]=(_-m)/864e5,f[r]=_/t,f[i]=_/e,f[s]=_/1e3,f)[v]||_,h?y:S.a(y)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return $[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=b(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},p}(),D=w.prototype;return M.prototype=D,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",o],["$y",c],["$D",d]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,o=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:l,months:o,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},v=function(e){return e<0},p=function(e){return v(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?v(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function v(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*c[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(u);if(i){var r=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=v.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=p(e/l),e%=l,this.$d.months=p(e/o),e%=o,this.$d.days=p(e/r),e%=r,this.$d.hours=p(e/i),e%=i,this.$d.minutes=p(e/s),e%=s,this.$d.seconds=p(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var l=_(a,"S"),o=e.negative||t.negative||s.negative||i.negative||r.negative||l.negative,u=i.format||r.format||l.format?"T":"",c=(o?"-":"")+"P"+e.format+t.format+s.format+u+i.format+r.format+l.format;return"P"===c||"-P"===c?"P0D":c},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/c[f(e)]},m.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?p(t/c[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var s;return s=t?e*c[f(t)]:d(e)?e.$ms:h(e,this).$ms,h(this.$ms+s*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return h(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},v}();return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return h(e,{$l:n},t)},i.isDuration=d;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),a.bind(this)(e,t)}}}()}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class s{getTemplate(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const i=["day","event","time","price","offers"],r=["everything","future","present","past"],a=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class l{getTemplate(){return`\n<form class="trip-filters" action="#" method="get">\n  ${r.map((e=>{return`\n  <div class="trip-filters__filter">\n    <input id="filter-${t=e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" checked>\n    <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n  </div>\n`;var t})).join("")}\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return`\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${i.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" checked>\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("")}\n  </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var u=n(484),c=n.n(u),d=n(646),h=n.n(d);c().extend(h());const f=e=>e[Math.floor(Math.random()*e.length)],v=(e,t)=>(e=Math.ceil(Math.min(e,t)),t=Math.floor(Math.max(e,t)),Math.floor(Math.random()*(t-e+1))+e),p=e=>e?c()(e).format("HH:mm"):"";class m{constructor(e,t,n){this.index=e,this.point=t,this.offers=n}getTemplate(){return((e,t,n)=>{const{type:s,isFavorite:i,basePrice:r,dateFrom:a,dateTo:l}=e,{name:o}=t,{offers:u}=n;return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">${d=a,d?c()(d).format("MMM D"):""}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${s} ${o}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="2019-03-18T10:30">${p(a)}</time>\n          &mdash;\n          <time class="event__end-time" datetime="2019-03-18T11:00">${p(l)}</time>\n        </p>\n        <p class="event__duration">${((e,t)=>{const n=c()(e).startOf("minute"),s=c()(t).startOf("minute").diff(n),i=c().duration(s),r=Math.floor(i.asDays()),a=i.hours(),l=i.minutes();return r>0?`${r.toString().padStart(2,"0")}D ${a.toString().padStart(2,"0")}H ${l.toString().padStart(2,"0")}M`:a>0?`${a.toString().padStart(2,"0")}H ${l.toString().padStart(2,"0")}M`:`${l}M`})(a,l)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${r}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      ${u&&0!==u.length?`<ul class="event__selected-offers">${[...u].map((e=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </li>`)).join("")}</ul>`:""}\n      <button class="event__favorite-btn${i?" event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`;var d})(this.index,this.point,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{getTemplate(){return'\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n              <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">Add luggage</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">50</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n              <label class="event__offer-label" for="event-offer-comfort-1">\n                <span class="event__offer-title">Switch to comfort</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">80</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n              <label class="event__offer-label" for="event-offer-meal-1">\n                <span class="event__offer-title">Add meal</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">15</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n              <label class="event__offer-label" for="event-offer-seats-1">\n                <span class="event__offer-title">Choose seats</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">5</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n              <label class="event__offer-label" for="event-offer-train-1">\n                <span class="event__offer-title">Travel by train</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">40</span>\n              </label>\n            </div>\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.</p>\n        </section>\n      </section>\n    </form>\n  </li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}let $=0;const g=["Amsterdam","Geneva","Chamonix","Belgrad","Moscow"].map((e=>(e=>({id:"destination-id-"+$++,description:`${e}, is a beautiful city, a true europe pearl, with crowded streets.`,name:`${e}`,pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:`${e} parliament building`}]}))(e)));let b=0;const M=a.map((e=>{return b=0,{type:t=e,offers:Array.from({length:v(0,6)},(()=>(e=>({id:`${e}-offer-id-${b++}`,title:`${e}-offer#${b}`,price:v(5,75)}))(t)))};var t}));let S=0,w=4,D=5;const x=()=>{const e=f(a),t=M.find((t=>t.type===e)).offers;return{id:"point-id-"+S++,basePrice:v(20,200),dateFrom:`2019-0${w}-0${D}T12:50:56.845Z`,dateTo:`2019-0${w++}-0${D--}T13:20:13.375Z`,destination:f(g).id,isFavorite:f([!0,!1]),offers:t.map((e=>e.id)),type:e}},T=document.querySelector(".trip-main"),k=document.querySelector(".trip-controls__filters"),O=document.querySelector(".trip-events"),E=new class{events=Array.from({length:3},x);getEvents(){return this.events}},Y=new class{constructor(){this.destinations=g}getDestinations(){return this.destinations}getDestinationById(e){return this.destinations.find((t=>t.id===e))}},H=new class{constructor(){this.offers=M}getOffers(){return this.offers}getOffersByType(e){return this.offers.find((t=>t.type===e))}}("drive"),C=new class{constructor({infoContainer:e,filterContainer:t}){this.tripInfoElement=e,this.filtersElement=t}init(){t(new s,this.tripInfoElement,"afterbegin"),t(new l,this.filtersElement)}}({infoContainer:T,filterContainer:k}),A=new class{eventList=new y;constructor({container:e,eventModel:t,destinationModel:n,offersModel:s}){this.container=e,this.eventModel=t,this.destinationModel=n,this.offersModel=s}init(){this.eventsList=[...this.eventModel.getEvents()],t(new o,this.container),t(this.eventList,this.container),t(new _,this.eventList.getElement());for(const e of this.eventsList){const n=this.destinationModel.getDestinationById(e.destination),s=this.offersModel.getOffersByType(e.type);t(new m(e,n,s),this.eventList.getElement())}}}({container:O,eventModel:E,destinationModel:Y,offersModel:H});C.init(),A.init()})()})();
//# sourceMappingURL=bundle.2301d56bf87abc3de978.js.map