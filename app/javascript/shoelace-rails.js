// import { uuid, Snapshot, SnapshotRenderer, ErrorRenderer } from 'turbolinks';

(function(){
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ba(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ea=da(this),q;
if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else {var r;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;r=ia.a;break a}catch(a){}r=!1;}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var ja=q,ka=window.Document.prototype,la=ka.createElement,ma=ka.createEvent;var t=window.Event,u=t.prototype,na=u.initEvent,oa=null===u||void 0===u?void 0:u.stopImmediatePropagation,pa=null===u||void 0===u?void 0:u.stopPropagation,w=Object.getOwnPropertyDescriptor(u,"defaultPrevented"),x=Object.getOwnPropertyDescriptor(u,"target");var qa=window.document;var ra=null===x||void 0===x?void 0:x.get,y=void 0!==ra?function(a){return ra.call(a)}:function(a){return a.target},sa=null===w||void 0===w?void 0:w.get,ta=void 0!==sa?function(a){return sa.call(a)}:function(a){return a.defaultPrevented};function ua(a,b,c){Object.setPrototypeOf(a,Object.getPrototypeOf(b));for(var d=n(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,"prototype"!==e&&Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(b,e));a.prototype=c;Object.defineProperty(c,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:c.constructor});}var va=new WeakMap,wa=new WeakMap;function z(a,b){b=void 0===b?{}:b;try{var c=new t(a,b);}catch(e){c=ma.call(qa,"Event");var d=b.bubbles;b=b.cancelable;na.call(c,a,void 0===d?!1:d,void 0===b?!1:b);}Object.setPrototypeOf(c,Object.getPrototypeOf(this));return c}ua(z,t,u);
function xa(){z.prototype.constructor=z;Object.setPrototypeOf(z,Function.prototype);z.prototype.stopImmediatePropagation=function(){wa.set(this,!0);return oa.call(this)};z.prototype.stopPropagation=function(){va.set(this,!0);return pa.call(this)};window.Event=z;}var A=window.EventTarget,B=null===A||void 0===A?void 0:A.prototype,ya=null===B||void 0===B?void 0:B.addEventListener,za=null===B||void 0===B?void 0:B.removeEventListener,Aa=null===B||void 0===B?void 0:B.dispatchEvent;var C=window.Node.prototype,E=C.addEventListener,Ba=C.appendChild,Ca=C.dispatchEvent,Da=C.getRootNode,Ea=C.insertBefore,Fa=C.removeChild,Ga=C.removeEventListener,F=Object.getOwnPropertyDescriptor(C,"parentNode");var G=window.Window.prototype,H=G.addEventListener,Ha=G.removeEventListener,Ia=G.dispatchEvent;var Ja=A?ya:function(a,b,c){if(this instanceof Node)return E.call(this,a,b,c);if(this instanceof Window)return H.call(this,a,b,c);throw new TypeError("Unsupported.");},Ka=A?za:function(a,b,c){if(this instanceof Node)return Ga.call(this,a,b,c);if(this instanceof Window)return Ha.call(this,a,b,c);throw new TypeError("Unsupported.");},Ma=A?Aa:function(a){if(this instanceof Node)return Ca.call(this,a);if(this instanceof Window)return Ia.call(this,a);throw new TypeError("Unsupported.");};var Na=null===F||void 0===F?void 0:F.get,I=void 0!==Na?function(a){return Na.call(a)}:function(a){return a.parentNode};function Oa(a){if(void 0!==Da)return Da.call(a,void 0);for(var b=I(a);null!==b;)a=b,b=I(b);return a}var J=window.HTMLInputElement.prototype,K=Object.getOwnPropertyDescriptor(J,"name"),L=Object.getOwnPropertyDescriptor(J,"type"),M=Object.getOwnPropertyDescriptor(J,"value");var N,Pa,Qa,Ra=null!==(N=(null!==L&&void 0!==L?L:{}).set)&&void 0!==N?N:function(a){this.type=a;},Sa=null!==(Pa=(null!==K&&void 0!==K?K:{}).set)&&void 0!==Pa?Pa:function(a){this.name=a;},Ta=null!==(Qa=(null!==M&&void 0!==M?M:{}).set)&&void 0!==Qa?Qa:function(a){this.value=a;};var O=window.Element.prototype,P=O.getAttribute,Ua=O.hasAttribute,Va=O.removeAttribute,Wa=O.setAttribute;var Xa=Object.getOwnPropertyDescriptor(window.HTMLCollection.prototype,"length");var Ya,Za=null!==(Ya=(null!==Xa&&void 0!==Xa?Xa:{}).get)&&void 0!==Ya?Ya:function(){return this.length};var Q=window.HTMLFormElement.prototype,$a=Q.submit,ab=Object.getOwnPropertyDescriptor(Q,"elements");var bb=window.FormData,R=bb.prototype,cb=R.append,db=R.delete,eb=R.set;var fb=new WeakMap;function S(a,b){b=void 0===b?{}:b;a=z.call(this,a,b)||this;b=b.formData;if(!(b instanceof FormData))throw new TypeError("Failed to construct 'FormDataEvent': member formData is not of type FormData.");fb.set(a,b);return a}S.prototype=ca(z.prototype);S.prototype.constructor=S;if(ja)ja(S,z);else for(var T in z)if("prototype"!=T)if(Object.defineProperties){var gb=Object.getOwnPropertyDescriptor(z,T);gb&&Object.defineProperty(S,T,gb);}else S[T]=z[T];
ea.Object.defineProperties(S.prototype,{formData:{configurable:!0,enumerable:!0,get:function(){return fb.get(this)}}});var U=new WeakMap;function V(a){var b=new bb(a);Object.setPrototypeOf(b,Object.getPrototypeOf(this));U.set(b,[]);a instanceof HTMLFormElement&&Ma.call(a,new S("formdata",{bubbles:!0,formData:b}));return b}ua(V,bb,R);
function hb(){V.prototype.constructor=V;V.prototype.append=function(a,b){var c=U.get(this);if("string"!==typeof b)throw Error("Unsupported.");c.push({i:"append",name:a,value:b});return cb.call(this,a,b)};void 0!==db&&(V.prototype["delete"]=function(a){U.get(this).push({i:"delete",name:a});return db.call(this,a)});void 0!==eb&&(V.prototype.set=function(a,b){var c=U.get(this);if("string"!==typeof b)throw Error("Unsupported.");c.push({i:"set",name:a,value:b});return eb.call(this,a,b)});window.FormData=
V;}function ib(a){function b(p){for(var h=ab.get.call(a),k=Za.call(h),m=0;m<k;m++){var v=h[m],fa;if(fa=P.call(v,"name")===p)fa=!Ua.call(v,"disabled");if(fa)return v}}function c(p){for(var h=ab.get.call(a),k=Za.call(h),m=0;m<k;m++){var v=h[m];P.call(v,"name")===p&&(f.has(v)||f.set(v,P.call(v,"disabled")),Wa.call(v,"disabled",""));}}function d(p,h,k){var m=la.call(qa,"input",void 0);Ra.call(m,"hidden");Sa.call(m,p);Ta.call(m,h);void 0!==k?(p=I(k),Ea.call(p,m,k)):Ba.call(a,m);g.push(m);}var e=new V(a),g=
[],f=new Map;e=n(U.get(e));for(var l=e.next();!l.done;l=e.next())switch(l=l.value,l.i){case "append":d(l.name,l.value);break;case "delete":c(l.name);break;case "set":var D=l;l=D.name;D=D.value;var La=b(l);void 0===La?d(l,D):(c(l),d(l,D,La));break;default:throw Error("UNREACHABLE");}setTimeout(function(){for(var p=n(g),h=p.next();!h.done;h=p.next()){h=h.value;var k=I(h);k&&Fa.call(k,h);}p=n(f);for(h=p.next();!h.done;h=p.next())k=n(h.value),h=k.next().value,k=k.next().value,P.call(h,"disabled")!==k&&
(null===k?Va.call(h,"disabled"):Wa.call(h,"disabled",k));});}function W(){this.h=[];}W.prototype.push=function(a){for(var b=a.g,c=a.capture,d=n(this.h),e=d.next();!e.done;e=d.next())if(e=e.value,b===e.g&&c===e.capture)return;this.h.push(a);};W.prototype.delete=function(a){var b=a.g;a=a.capture;for(var c=0;c<this.h.length;c++){var d=this.h[c];if(b===d.g&&a===d.capture){this.h.splice(c,1);break}}};
ea.Object.defineProperties(W.prototype,{length:{configurable:!0,enumerable:!0,get:function(){return this.h.length}},l:{configurable:!0,enumerable:!0,get:function(){for(var a=this.h,b=a.length-1;0<=b;b--){var c=a[b];if(c.capture)return c.g}}},j:{configurable:!0,enumerable:!0,get:function(){for(var a=this.h,b=a.length-1;0<=b;b--){var c=a[b];if(!c.capture)return c.g}}}});var X=new WeakMap;function jb(a,b,c){var d;b&&(X.has(a)||X.set(a,new W),c="boolean"===typeof c?c:null!==(d=null===c||void 0===c?void 0:c.capture)&&void 0!==d?d:!1,X.get(a).push({g:b,capture:c}));}function kb(a,b,c){var d;b&&(a=X.get(a),void 0!==a&&(c="boolean"===typeof c?c:null!==(d=null===c||void 0===c?void 0:c.capture)&&void 0!==d?d:!1,a.delete({g:b,capture:c})));}var Y=new WeakMap,lb=new WeakMap,Z=new WeakMap;function mb(a){if(!lb.has(a)){lb.set(a,!0);var b=y(a);if(b instanceof HTMLFormElement){b=Oa(b);var c=nb(function(){});Z.set(a,{target:b,g:c});Ja.call(b,"submit",c);jb(b,c);}}}
function nb(a){return function e(c,d){for(var g=[],f=1;f<arguments.length;++f)g[f-1]=arguments[f];g="function"===typeof a?a.call.apply(a,[this,c].concat(g instanceof Array?g:ba(n(g)))):a.handleEvent.apply(a,[c].concat(g instanceof Array?g:ba(n(g))));f=y(c)instanceof HTMLFormElement;if(wa.has(c)&&f)ob(c);else if(va.has(c)&&f){f=X.get(this);var l=f.j;e!==f.l&&e!==l||ob(c);}else Z.has(c)&&(f=Z.get(c),void 0!==f&&this===f.target&&(f=X.get(this).j,e===f&&ob(c)));return g}}
function ob(a){var b=Z.get(a);if(b){var c=b.target;b=b.g;Ka.call(c,"submit",b);kb(c,b);Z.delete(a);}ta(a)||ib(y(a));}var pb=new WeakMap;function qb(a,b){a.addEventListener=function(c,d,e){if("submit"===c&&null!==d){var g=nb(d);pb.set(d,g);d=g;}g=b.call(this,c,d,e);if("formdata"===c){c=d;var f;c&&(e="boolean"===typeof e?e:null!==(f=null===e||void 0===e?void 0:e.capture)&&void 0!==f?f:!1,f=Y.get(this),void 0===f?(f=new W,f.push({g:c,capture:e}),Y.set(this,f),Ja.call(this,"submit",mb,!0)):f.push({g:c,capture:e}));}else "submit"===c&&null!==d&&jb(this,d,e);return g};}
function rb(a,b){a.removeEventListener=function(c,d,e){var g;"submit"===c&&null!==d&&(d=null!==(g=pb.get(d))&&void 0!==g?g:d);g=b.call(this,c,d,e);if("formdata"===c){c=d;var f;c&&(d=Y.get(this),void 0!==d&&(e="boolean"===typeof e?e:null!==(f=null===e||void 0===e?void 0:e.capture)&&void 0!==f?f:!1,d.delete({g:c,capture:e}),0===d.length&&(Y.delete(this),Ka.call(this,"submit",mb,!0))));}else "submit"===c&&null!==d&&kb(this,d,e);return g};}function sb(){Q.submit=function(){ib(this);return $a.call(this)};}void 0===window.FormDataEvent&&(xa(),B&&(qb(B,ya),rb(B,za)),E&&(qb(C,E),rb(C,Ga)),H&&(qb(G,H),rb(G,Ha)),hb(),Object.defineProperty(window,"FormDataEvent",{writable:!0,enumerable:!1,configurable:!0,value:S}),Q&&sb());
}).call(self);

const submittersByForm = new WeakMap();
const cloneAttributes = (target, source) => [...source.attributes]
    .filter(({ nodeName }) => !["id", "class"].includes(nodeName))
    .forEach(({ nodeName, nodeValue }) => target.setAttribute(nodeName, nodeValue));
const findSubmitterFromClickTarget = (target) => {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    if ((element === null || element === void 0 ? void 0 : element.tagName) === "SL-BUTTON") {
        const slButton = element;
        return slButton.submit ? slButton : null;
    }
    else {
        const candidate = element === null || element === void 0 ? void 0 : element.closest("input, button");
        return (candidate === null || candidate === void 0 ? void 0 : candidate.type) === "submit" ? candidate : null;
    }
};
class SlTurboFormElement extends HTMLElement {
    constructor() {
        super();
        this.handleFormData = (event) => {
            const { formData, target } = event;
            if (this.form === target && !this.called) {
                this.called = true;
                const slForm = this.shadowRoot.querySelector("sl-form");
                for (const [key, value] of slForm.getFormData().entries()) {
                    formData.append(key, value);
                }
            }
        };
        this.handleSubmit = (event) => {
            event.stopImmediatePropagation();
            const submitter = submittersByForm.get(this.form);
            const submitEvent = new CustomEvent("submit", { bubbles: true, cancelable: true });
            Object.defineProperty(submitEvent, "submitter", { get: () => submitter });
            const cancelled = this.form.dispatchEvent(submitEvent);
            if (cancelled) {
                this.form.submit();
            }
        };
        this.clickCaptured = (event) => {
            const submitter = findSubmitterFromClickTarget(event.target);
            if (submitter) {
                submittersByForm.set(this.form, submitter);
            }
        };
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = SlTurboFormElement.template;
        this.form = document.createElement("form");
        this.form.style.display = "none";
        cloneAttributes(this.form, this);
        this.appendChild(this.form);
    }
    static get observedAttributes() {
        return ["action", "method", "enctype", "accept-charset", "data"];
    }
    connectedCallback() {
        this.addEventListener("click", this.clickCaptured, true);
        this.addEventListener("sl-submit", this.handleSubmit);
        this.addEventListener("formdata", this.handleFormData);
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.clickCaptured, true);
        this.removeEventListener("sl-submit", this.handleSubmit);
        this.removeEventListener("formdata", this.handleFormData);
    }
}
SlTurboFormElement.template = `
    <sl-form>
      <slot></slot>
    </sl-form>
  `;

const startTurbo = () => {
    customElements.define("sl-turbo-form", SlTurboFormElement);
};

const elementPrototype = Element.prototype;
const m = elementPrototype.matches ||
    elementPrototype.matchesSelector ||
    elementPrototype.mozMatchesSelector ||
    elementPrototype.msMatchesSelector ||
    elementPrototype.oMatchesSelector ||
    elementPrototype.webkitMatchesSelector;
const matches = (element, selector) => {
    if (selector.exclude != null) {
        return m.call(element, selector.selector) && !m.call(element, selector.exclude);
    }
    else {
        return m.call(element, selector);
    }
};
const expando = "_ujsData";
const getData = (element, key) => (element[expando] != null ? element[expando][key] : undefined);
const setData = (element, key, value) => {
    if (element[expando] == null) {
        element[expando] = {};
    }
    return (element[expando][key] = value);
};

const fire = (obj, name, data = {}) => {
    const event = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail: data,
    });
    obj.dispatchEvent(event);
    return !event.defaultPrevented;
};
const stopEverything = (event) => {
    fire(event.target, "ujs:everythingStopped");
    event.preventDefault();
    event.stopPropagation();
    return event.stopImmediatePropagation();
};
const delegate = (element, selector, eventType, handler) => element.addEventListener(eventType, function (event) {
    let { target } = event;
    while (!!(target instanceof Element) && !matches(target, selector)) {
        target = target.parentNode;
    }
    if (target instanceof Element && handler.call(target, event) === false) {
        event.preventDefault();
        return event.stopPropagation();
    }
});

const buttonClickSelector = {
    selector: "sl-button[data-remote]:not([form]), sl-button[data-confirm]:not([form])",
    exclude: "sl-form sl-button",
};
const formSubmitSelector = "sl-form[data-remote]";
const formInputClickSelector = [
    "sl-form sl-button[submit]",
    "sl-form sl-button:not([type])",
    "sl-button[submit][sl-form]",
    "sl-button[sl-form]:not([type])",
].join(", ");
const formDisableSelector = [
    "sl-input[data-disable-with]:not([disabled])",
    "sl-button[data-disable-with]:not([disabled])",
    "sl-textarea[data-disable-with]:not([disabled])",
    "sl-input[data-disable]:not([disabled])",
    "sl-button[data-disable]:not([disabled])",
    "sl-textarea[data-disable]:not([disabled])",
].join(", ");
const formEnableSelector = [
    "sl-input[data-disable-with][disabled]",
    "sl-button[data-disable-with][disabled]",
    "sl-textarea[data-disable-with][disabled]",
    "sl-input[data-disable][disabled]",
    "sl-button[data-disable][disabled]",
    "sl-textarea[data-disable][disabled]",
].join(", ");
const buttonDisableSelector = [
    "sl-button[data-remote][data-disable-with]",
    "sl-button[data-remote][data-disable]",
].join(", ");

let nonce = null;
const loadCSPNonce = () => {
    if (nonce) {
        return nonce;
    }
    const cspMetaTag = document.querySelector("meta[name=csp-nonce]");
    if (cspMetaTag) {
        nonce = cspMetaTag.content;
    }
    return nonce;
};
const cspNonce = () => (nonce != null ? nonce : loadCSPNonce());

const csrfToken = () => {
    const meta = document.querySelector("meta[name=csrf-token]");
    return meta && meta.content;
};
const CSRFProtection = (xhr) => {
    const token = csrfToken();
    if (token != null) {
        return xhr.setRequestHeader("X-CSRF-Token", token);
    }
};

const AcceptHeaders = {
    "*": "*/*",
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript",
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
};
const ajax = (options) => {
    options = prepareOptions(options);
    var xhr = createXHR(options, function () {
        const response = processResponse(xhr.response != null ? xhr.response : xhr.responseText, xhr.getResponseHeader("Content-Type"));
        if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
                options.success(response, xhr.statusText, xhr);
            }
        }
        else {
            if (typeof options.error === "function") {
                options.error(response, xhr.statusText, xhr);
            }
        }
        return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : undefined;
    });
    if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
        return false;
    }
    if (xhr.readyState === XMLHttpRequest.OPENED) {
        return xhr.send(options.data);
    }
};
const prepareOptions = (options) => {
    options.url = options.url || location.href;
    options.type = options.type.toUpperCase();
    if (options.type === "GET" && options.data) {
        if (options.url.indexOf("?") < 0) {
            options.url += "?" + options.data;
        }
        else {
            options.url += "&" + options.data;
        }
    }
    if (AcceptHeaders[options.dataType] == null) {
        options.dataType = "*";
    }
    options.accept = AcceptHeaders[options.dataType];
    if (options.dataType !== "*") {
        options.accept += ", */*; q=0.01";
    }
    return options;
};
const createXHR = (options, done) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url, true);
    xhr.setRequestHeader("Accept", options.accept);
    if (typeof options.data === "string") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    }
    if (!options.crossDomain) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        CSRFProtection(xhr);
    }
    xhr.withCredentials = !!options.withCredentials;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
        }
    };
    return xhr;
};
const processResponse = (response, type) => {
    if (typeof response === "string" && typeof type === "string") {
        if (type.match(/\bjson\b/)) {
            try {
                response = JSON.parse(response);
            }
            catch (error) {
            }
        }
        else if (type.match(/\b(?:java|ecma)script\b/)) {
            const script = document.createElement("script");
            script.setAttribute("nonce", cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
        }
        else if (type.match(/\b(xml|html|svg)\b/)) {
            const parser = new DOMParser();
            type = type.replace(/;.+/, "");
            try {
                response = parser.parseFromString(response, type);
            }
            catch (error1) { }
        }
    }
    return response;
};
const href = (element) => element.href;
const isCrossDomain = (url) => {
    const originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    const urlAnchor = document.createElement("a");
    try {
        urlAnchor.href = url;
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ":") && !urlAnchor.host) ||
            originAnchor.protocol + "//" + originAnchor.host === urlAnchor.protocol + "//" + urlAnchor.host);
    }
    catch (e) {
        return true;
    }
};

const isRemote = function (element) {
    const value = element.getAttribute("data-remote");
    return value != null && value !== "false";
};
const handleRemote = function (event) {
    const element = this;
    if (!isRemote(element)) {
        return true;
    }
    if (!fire(element, "ajax:before")) {
        fire(element, "ajax:stopped");
        return false;
    }
    let method, url, data;
    const withCredentials = element.getAttribute("data-with-credentials");
    const dataType = element.getAttribute("data-type") || "script";
    if (matches(element, formSubmitSelector)) {
        method = getData(element, "ujs:submit-button-formmethod") || element.getAttribute("method") || "GET";
        url = getData(element, "ujs:submit-button-formaction") || element.getAttribute("action") || location.href;
        if (method.toUpperCase() === "GET") {
            url = url.replace(/\?.*$/, "");
            data = Array.from(event.detail.formData, (e) => e.map(encodeURIComponent).join("=")).join("&");
        }
        else {
            data = event.detail.formData;
        }
        setData(element, "ujs:submit-button", null);
        setData(element, "ujs:submit-button-formmethod", null);
        setData(element, "ujs:submit-button-formaction", null);
    }
    else {
        method = element.getAttribute("data-method");
        url = href(element);
        data = element.getAttribute("data-params");
    }
    ajax({
        type: method,
        url,
        data,
        dataType,
        beforeSend: (xhr, options) => {
            if (fire(element, "ajax:beforeSend", [xhr, options])) {
                return fire(element, "ajax:send", [xhr]);
            }
            else {
                fire(element, "ajax:stopped");
                return false;
            }
        },
        success: (...args) => fire(element, "ajax:success", args),
        error: (...args) => fire(element, "ajax:error", args),
        complete: (...args) => fire(element, "ajax:complete", args),
        crossDomain: isCrossDomain(url),
        withCredentials: withCredentials != null && withCredentials !== "false",
    });
    return stopEverything(event);
};
const formSubmitButtonClick = (event) => {
    const button = event.target;
    const { form } = button;
    if (!form) {
        return;
    }
    if (button.name) {
        setData(form, "ujs:submit-button", { name: button.name, value: button.value });
    }
    setData(form, "ujs:formnovalidate-button", button.formNoValidate);
    setData(form, "ujs:submit-button-formaction", button.getAttribute("formaction"));
    return setData(form, "ujs:submit-button-formmethod", button.getAttribute("formmethod"));
};
const preventInsignificantClick = (event) => {
    const link = event.target;
    const method = (link.getAttribute("data-method") || "GET").toUpperCase();
    const data = link.getAttribute("data-params");
    const metaClick = event.metaKey || event.ctrlKey;
    const insignificantMetaClick = metaClick && method === "GET" && !data;
    const nonPrimaryMouseClick = event.button != null && event.button !== 0;
    if (nonPrimaryMouseClick || insignificantMetaClick) {
        return event.stopImmediatePropagation();
    }
};

const nullCallback = function () { };
const nullDelegate = {
    viewInvalidated: nullCallback,
    viewWillRender: nullCallback,
    viewRendered: nullCallback,
};
const renderWithTurbolinks = (htmlContent) => {
    const currentSnapshot = Snapshot.fromHTMLElement(document.documentElement);
    const newSnapshot = Snapshot.fromHTMLString(htmlContent);
    let renderer = new SnapshotRenderer(currentSnapshot, newSnapshot, false);
    if (!renderer.shouldRender()) {
        renderer = new ErrorRenderer(htmlContent);
    }
    renderer.delegate = nullDelegate;
    renderer.render(nullCallback);
};
const findActiveElement = (shadowRoot) => {
    let el = shadowRoot.activeElement;
    while (el && el.shadowRoot && el.shadowRoot.activeElement) {
        el = el.shadowRoot.activeElement;
    }
    return el;
};
const addShadowDomSupportToTurbolinks = (turbolinksController) => {
    const originalClosest = turbolinksController.closest;
    turbolinksController.closest = (node, selector) => {
        if (!!node.shadowRoot) {
            const rootActiveElement = findActiveElement(node.shadowRoot) || node;
            if (matches(rootActiveElement, selector)) {
                return rootActiveElement;
            }
        }
        else {
            return originalClosest(node, selector);
        }
    };
};
const handleResponse = (turbolinksInstance) => {
    return (event) => {
        const [xhr, _status] = event.detail;
        if (xhr.getResponseHeader("Content-Type").startsWith("text/html")) {
            turbolinksInstance.restorationIdentifier = uuid();
            turbolinksInstance.clearCache();
            turbolinksInstance.dispatch("turbolinks:before-cache");
            turbolinksInstance.controller.pushHistoryWithLocationAndRestorationIdentifier(xhr.responseURL, turbolinksInstance.restorationIdentifier);
            renderWithTurbolinks(xhr.responseText);
            window.scroll(0, 0);
            turbolinksInstance.dispatch("turbolinks:load");
        }
    };
};
const startTurbolinks = (turbolinksInstance) => {
    delegate(document, formSubmitSelector, "ajax:complete", handleResponse(turbolinksInstance));
    addShadowDomSupportToTurbolinks(turbolinksInstance);
};

const handleConfirm = (event) => {
    const { target } = event;
    if (!allowAction(target)) {
        return stopEverything(event);
    }
};
const allowAction = (element) => {
    const message = element.getAttribute("data-confirm");
    if (!message) {
        return true;
    }
    let callback = null, answer = false;
    if (fire(element, "confirm")) {
        try {
            answer = confirm(message);
        }
        catch (error) {
        }
        callback = fire(element, "confirm:complete", [answer]);
    }
    return answer && callback;
};

const toArray = (e) => Array.prototype.slice.call(e);
const formElements = (form, selector) => {
    if (matches(form, "form")) {
        return toArray(form.elements).filter((el) => matches(el, selector));
    }
    else {
        return toArray(form.querySelectorAll(selector));
    }
};

const handleDisabledElement = (event) => {
    const element = event.target;
    if (element.disabled) {
        return stopEverything(event);
    }
};
const enableElement = function (e) {
    let element;
    if (e instanceof Event) {
        if (isXhrRedirect(e)) {
            return;
        }
        element = e.target;
    }
    else {
        element = e;
    }
    if (matches(element, buttonDisableSelector) || matches(element, formEnableSelector)) {
        return enableFormElement(element);
    }
    else if (matches(element, formSubmitSelector)) {
        return enableFormElements(element);
    }
};
const disableElement = function (e) {
    const element = e instanceof Event ? e.target : e;
    if (matches(element, buttonDisableSelector) || matches(element, formDisableSelector)) {
        return disableFormElement(element);
    }
    else if (matches(element, formSubmitSelector)) {
        return disableFormElements(element);
    }
};
const disableFormElements = (form) => formElements(form, formDisableSelector).forEach(disableFormElement);
const disableFormElement = function (element) {
    if (getData(element, "ujs:disabled")) {
        return;
    }
    const replacement = element.getAttribute("data-disable-with");
    if (replacement != null) {
        if (matches(element, "button")) {
            setData(element, "ujs:enable-with", element.innerHTML);
            element.innerHTML = replacement;
        }
        else {
            setData(element, "ujs:enable-with", element.value);
            element.value = replacement;
        }
    }
    element.disabled = true;
    return setData(element, "ujs:disabled", true);
};
const enableFormElements = (form) => formElements(form, formEnableSelector).forEach(enableFormElement);
const enableFormElement = function (element) {
    const originalText = getData(element, "ujs:enable-with");
    if (originalText != null) {
        if (matches(element, "button")) {
            element.innerHTML = originalText;
        }
        else {
            element.value = originalText;
        }
        setData(element, "ujs:enable-with", null);
    }
    element.disabled = false;
    return setData(element, "ujs:disabled", null);
};
const isXhrRedirect = function (event) {
    const xhr = event.detail != null ? event.detail[0] : undefined;
    return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : undefined) != null;
};

const getDefaultAssetPath = () => {
    const rootUrl = document.currentScript.src.replace(/\/packs.*$/, "");
    return `${rootUrl}/packs/js/`;
};
const startUjs = () => {
    delegate(document, buttonDisableSelector, "ajax:complete", enableElement);
    delegate(document, buttonDisableSelector, "ajax:stopped", enableElement);
    delegate(document, buttonClickSelector, "click", preventInsignificantClick);
    delegate(document, buttonClickSelector, "click", handleDisabledElement);
    delegate(document, buttonClickSelector, "click", handleConfirm);
    delegate(document, buttonClickSelector, "click", disableElement);
    delegate(document, buttonClickSelector, "click", handleRemote);
    delegate(document, formSubmitSelector, "sl-submit", handleDisabledElement);
    delegate(document, formSubmitSelector, "sl-submit", handleConfirm);
    delegate(document, formSubmitSelector, "sl-submit", handleRemote);
    delegate(document, formSubmitSelector, "ajax:send", disableElement);
    delegate(document, formSubmitSelector, "ajax:complete", enableElement);
    delegate(document, formInputClickSelector, "click", preventInsignificantClick);
    delegate(document, formInputClickSelector, "click", handleDisabledElement);
    delegate(document, formInputClickSelector, "click", formSubmitButtonClick);
};

export { addShadowDomSupportToTurbolinks, buttonClickSelector, buttonDisableSelector, delegate, fire, formDisableSelector, formEnableSelector, formInputClickSelector, formSubmitButtonClick, formSubmitSelector, getData, getDefaultAssetPath, handleRemote, handleResponse, matches, preventInsignificantClick, setData, startTurbo, startTurbolinks, startUjs, stopEverything };
