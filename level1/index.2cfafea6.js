// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aAmVL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "f8a696462cfafea6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ewxrA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _three = require("three");
var _editor = require("../editor");
var _util = require("../three/util");
var _gridMapHelper = require("../three/GridMapHelper");
var _gridMapHelperDefault = parcelHelpers.interopDefault(_gridMapHelper);
var _parser = require("./parser");
var _parserDefault = parcelHelpers.interopDefault(_parser);
var _timer = require("../timer");
var _bootstrap = require("bootstrap");
var _spikeTrap = require("../three/SpikeTrap");
//Defining Level 1 Scene's Properties
const sceneProperties = {
    cancelExecution: false,
    timer: 0,
    phase: 0
};
//Generating default Level 1 Objects
const logModal = new (0, _bootstrap.Modal)(document.getElementById("logModal"));
let timerUpadate;
function updateTime() {
    sceneProperties.timer++;
}
const editor = (0, _editor.generateDefaultEditor)(document.getElementById("editorArea"), {
    lineNumbers: true
});
const andarFrenteBtn = document.getElementById("andarFrente");
andarFrenteBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "andarFrente(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "andarFrente(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const andarTrasBtn = document.getElementById("andarTras");
andarTrasBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "andarTras(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "andarTras(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const girarEsquerdaBtn = document.getElementById("girarEsquerda");
girarEsquerdaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "girarEsquerda()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "girarEsquerda()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const girarDireitaBtn = document.getElementById("girarDireita");
girarDireitaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "girarDireita()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "girarDireita()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const darMeiaVoltaBtn = document.getElementById("darMeiaVolta");
darMeiaVoltaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "darMeiaVolta()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "darMeiaVolta()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const coletarCristalBtn = document.getElementById("coletarCristal");
coletarCristalBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "coletarCristal()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "coletarCristal()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const consoleElement = document.getElementById("consoleArea");
const { renderer , scene , camera , controls  } = (0, _util.generateDefaultSceneObjects)(document.getElementById("phaseView"));
const gridMapHelper = new (0, _gridMapHelperDefault.default)();
const plane = gridMapHelper.createGridPlane();
const plane2 = gridMapHelper.createGridPlane2();
const plane3 = gridMapHelper.createGridPlane3();
const plane4 = gridMapHelper.createGridPlane4();
const plane5 = gridMapHelper.createGridPlane5();
const plane6 = gridMapHelper.createGridPlane6();
const plane7 = gridMapHelper.createGridPlane7();
const actor = (0, _util.loadDefaultActor)();
let objectives;
let walls;
let traps;
let spikeTrapState;
let setSpikeTrapState;
let setSpikeTrapStateInterval;
scene.add(actor);
async function andarFrente(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, _util.translateActor)(actor, correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function andarTras(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, _util.translateActor)(actor, -correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function girarEsquerda() {
    await (0, _util.rotateActor)(actor, 90, sceneProperties, 1);
}
async function girarDireita() {
    await (0, _util.rotateActor)(actor, 90, sceneProperties, -1);
}
async function darMeiaVolta() {
    await (0, _util.rotateActor)(actor, 180, sceneProperties, 1);
}
let coletarCristal;
let resetLevel;
let winCondition;
const phaseGeneration = [];
//Functions to create the phases
//Phase 1
phaseGeneration.push(()=>{
    scene.add(plane7);
    document.getElementById("phaseTitle").innerText = "Teste 1";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("9f409a7f7850a2b4")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 2
phaseGeneration.push(()=>{
    scene.remove(plane7);
    scene.add(plane6);
    document.getElementById("phaseTitle").innerText = "Teste 2";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("f08e1f7d29f93267")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 3
phaseGeneration.push(()=>{
    scene.remove(plane6);
    scene.add(plane5);
    document.getElementById("phaseTitle").innerText = "Teste 3";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("ca3ad13619a81d99")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 4
phaseGeneration.push(()=>{
    scene.remove(plane5);
    scene.add(plane4);
    document.getElementById("phaseTitle").innerText = "Teste 4";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("856cce9fca43a89b")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 5
phaseGeneration.push(()=>{
    scene.remove(plane4);
    scene.add(plane3);
    document.getElementById("phaseTitle").innerText = "Teste 5";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("31bc1d0852222456")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 6
phaseGeneration.push(()=>{
    scene.remove(plane3);
    scene.add(plane2);
    document.getElementById("phaseTitle").innerText = "Teste 6";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("723cf9a66c572de")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 7
phaseGeneration.push(()=>{
    scene.remove(plane2);
    scene.add(plane);
    document.getElementById("phaseTitle").innerText = "Teste 7";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("de77da69524847f")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Phase 8
phaseGeneration.push(()=>{
    scene.remove(plane2);
    scene.add(plane);
    document.getElementById("phaseTitle").innerText = "Teste 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(8, 8, 0, 0);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(2, 2, 2);
    var aux = new URL(require("b2124a695570c204")).toString();
    var textureParede = new _three.TextureLoader().load(aux);
    const boxMaterial = new _three.MeshBasicMaterial({
        map: textureParede
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1.0, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[16].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[17].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 9, 4, 4);
    gridMapHelper.addObstacle(7, 7, 0, 1);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    scene.add(walls[11]);
    scene.add(walls[12]);
    scene.add(walls[13]);
    scene.add(walls[14]);
    scene.add(walls[15]);
    scene.add(walls[16]);
    scene.add(walls[17]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
            gridMapHelper.obstacles[0].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.obstacles[0].active = true;
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    timerUpadate = setInterval(updateTime, 1000);
});
//Defining function that remove objects, scene render and button's functions
function removeObjects(crystals, walls, traps) {
    if (crystals != undefined) for(let i = 0; i < crystals.length; i++)scene.remove(crystals[i]);
    if (walls != undefined) {
        for(let i1 = 0; i1 < walls.length; i1++)scene.remove(walls[i1]);
        gridMapHelper.clearObstacles();
    }
    if (traps != undefined) {
        for(let i2 = 0; i2 < traps.length; i2++)scene.remove(traps[i2]);
        gridMapHelper.clearTraps();
    }
    crystals = undefined;
    walls = undefined;
    traps = undefined;
}
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    (0, _timer.displayTime)(sceneProperties.timer, document.getElementById("timer"));
}
window.addEventListener("resize", ()=>{
    (0, _util.resizeCanvasToDisplaySize)(renderer, camera);
});
const finishEarlierButton = document.getElementById("finishEarlier");
const execBtn = document.getElementById("execBtn");
execBtn.addEventListener("click", async function() {
    const codeParsed = (0, _parserDefault.default)(editor.state.doc.toString());
    sceneProperties.cancelExecution = false;
    if (traps != null) (0, _spikeTrap.trapsDeactivation)(traps);
    if (codeParsed != null) {
        resetLevel();
        sceneProperties.executing = true;
        this.disabled = true;
        await eval(codeParsed);
        if (winCondition()) {
            (0, _editor.readOnlyState).doc = editor.state.doc;
            editor.setState((0, _editor.readOnlyState));
            document.getElementById("winMessage").classList.remove("invisible");
            document.getElementById("advanceBtn").classList.remove("invisible");
            document.getElementById("resetBtn").disabled = true;
            finishEarlierButton.disabled = true;
            clearInterval(timerUpadate);
            if (sceneProperties.phase == phaseGeneration.length - 1) (0, _timer.configureDataAndUpload)(document.getElementById("name"), document.getElementById("age"), "gender", "prog-exp", document.getElementById("subBtn"), sceneProperties.timer, "../", "N\xedvel 1/Completo");
        } else {
            sceneProperties.executing = false;
            this.disabled = false;
        }
    }
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", ()=>{
    sceneProperties.cancelExecution = true;
    resetLevel();
});
const advanceBtn = document.getElementById("advanceBtn");
advanceBtn.addEventListener("click", (e)=>{
    sceneProperties.phase++;
    if (sceneProperties.phase < phaseGeneration.length) {
        removeObjects(objectives, walls, traps);
        phaseGeneration[sceneProperties.phase]();
        editor.setState((0, _editor.editState));
        consoleElement.innerText = null;
        document.getElementById("winMessage").classList.add("invisible");
        document.getElementById("advanceBtn").classList.add("invisible");
        execBtn.disabled = false;
        resetBtn.disabled = false;
        finishEarlierButton.disabled = false;
    } else {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        logModal.show();
    }
});
finishEarlierButton.addEventListener("click", (e)=>{
    if (confirm("Deseja realmente finalizar a pr\xe1tica?")) {
        clearInterval(timerUpadate);
        (0, _timer.configureDataAndUpload)(document.getElementById("name"), document.getElementById("age"), "gender", "prog-exp", document.getElementById("subBtn"), sceneProperties.timer, "../", `Nível 1/Fase ${sceneProperties.phase + 1}`);
        logModal.show();
    }
});
//Running level 1
(0, _util.resizeCanvasToDisplaySize)(renderer, camera);
phaseGeneration[sceneProperties.phase]();
animate();

},{"three":"3XrwE","../editor":"l6wfL","../three/util":"fiv5b","../three/GridMapHelper":"1niVU","./parser":"9icGm","../timer":"iJc7h","bootstrap":"10mMR","../three/SpikeTrap":"eDrLo","9f409a7f7850a2b4":"5n2cg","f08e1f7d29f93267":"d7Z1X","ca3ad13619a81d99":"966Q9","856cce9fca43a89b":"fDhAS","31bc1d0852222456":"4wk8R","723cf9a66c572de":"hTMLe","de77da69524847f":"exel3","b2124a695570c204":"4IshX","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9icGm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const functionFilter = [
    {
        filter: new RegExp("^andarFrente(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^andarTras(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^coletarCristal(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "normal"
    }
];
function printError(text, line) {
    const consoleElement = document.getElementById("consoleArea");
    consoleElement.innerText += `Código inválido: ${text} linha: ${line}\n`;
}
function parseCode(code) {
    let codeParsed = "async function runCode(){\n";
    const lines = code.split("\n");
    let valid = true;
    for(let i = 0; i < lines.length; i++){
        let validLine = false;
        let lineType;
        if (lines[i].trim() != "") {
            for(let j = 0; j < functionFilter.length; j++){
                validLine = functionFilter[j].filter.test(lines[i].trim());
                if (validLine) {
                    lineType = functionFilter[j].type;
                    break;
                }
            }
            if (validLine) {
                if (lineType === "sequential") {
                    let lineParsed = "await " + lines[i].trim() + "\n";
                    codeParsed += lineParsed;
                } else {
                    let lineParsed1 = lines[i].trim() + "\n";
                    codeParsed += lineParsed1;
                }
            } else {
                printError(lines[i], i + 1);
                valid = false;
                break;
            }
        } else continue;
    }
    if (valid) {
        codeParsed += "}\nrunCode()";
        return codeParsed;
    } else return null;
}
exports.default = parseCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iJc7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayTime", ()=>displayTime);
parcelHelpers.export(exports, "configureDataAndUpload", ()=>configureDataAndUpload);
const FORM_ACCESS = "https://docs.google.com/forms/d/e/1FAIpQLSeTbA3iFSmgcNeCaFKuXEKQ0mOBg74mow2ISXzESXOI4afhOQ/formResponse";
function displayTime(time, timerElement) {
    let hour = Math.floor(time / 3600);
    let min = Math.floor(time / 60) % 60;
    let seg = Math.floor(time % 60);
    timerElement.innerText = `Tempo: ${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`;
}
async function uploadLog(data) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("POST", FORM_ACCESS, true);
        let formData = new FormData();
        for(let i = 0; i < data.length; i++)formData.append(data[i][0], data[i][1]);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === XMLHttpRequest.DONE) resolve(true);
        };
        xhr.send(formData);
    });
}
async function configureDataAndUpload(nameInput, ageInput, genderRadioName, progExpRadioName, subBtn, time, redirectPath, level) {
    subBtn.addEventListener("click", async ()=>{
        let genderInput = document.querySelector(`input[name="${genderRadioName}"]:checked`);
        let progExpInput = document.querySelector(`input[name="${progExpRadioName}"]:checked`);
        let hour = Math.floor(time / 3600);
        let min = Math.floor(time / 60) % 60;
        let seg = Math.floor(time % 60);
        let name = nameInput.value;
        let age = ageInput.value;
        let gender = genderInput != null ? genderInput.value : null;
        let progExp = progExpInput != null ? progExpInput.value : null;
        if (name != null && name != "" && age != null && age != "" && gender != null && gender != "" && progExp != null && progExp != "") {
            if (parseFloat(age) >= 1) {
                subBtn.disabled = true;
                let data = [
                    [
                        "entry.1867777838",
                        level
                    ],
                    [
                        "entry.746491928",
                        name
                    ],
                    [
                        "entry.1029337756",
                        age
                    ],
                    [
                        "entry.1806882852",
                        gender
                    ],
                    [
                        "entry.1585862028",
                        progExp
                    ],
                    [
                        "entry.2140863999",
                        `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`
                    ]
                ];
                let success = await uploadLog(data);
                if (success) {
                    console.log(data);
                    window.location.href = redirectPath;
                } else {
                    alert("Ops! Algo deu errado!");
                    subBtn.disabled = false;
                }
            } else alert("Valor da idade incorreto.");
        } else alert("\xc9 necess\xe1rio preencher o formul\xe1rio para avan\xe7ar.");
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5n2cg":[function(require,module,exports) {
module.exports = require("c357be2a92ba96cb").getBundleURL("llyQl") + "../stone_wall7.5bda6025.jpg" + "?" + Date.now();

},{"c357be2a92ba96cb":"hPpBg"}],"hPpBg":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"d7Z1X":[function(require,module,exports) {
module.exports = require("e3a59dc80e1662e3").getBundleURL("llyQl") + "../stone_wall6.7b8b1917.jpg" + "?" + Date.now();

},{"e3a59dc80e1662e3":"hPpBg"}],"966Q9":[function(require,module,exports) {
module.exports = require("9b83dd4a009b9ca5").getBundleURL("llyQl") + "../stone_wall5.b3a1c7ab.jpg" + "?" + Date.now();

},{"9b83dd4a009b9ca5":"hPpBg"}],"fDhAS":[function(require,module,exports) {
module.exports = require("49c9ba66def6e304").getBundleURL("llyQl") + "../stone_wall4.6d886bd7.jpg" + "?" + Date.now();

},{"49c9ba66def6e304":"hPpBg"}],"4wk8R":[function(require,module,exports) {
module.exports = require("bf981ded6b40bfd5").getBundleURL("llyQl") + "../stone_wall3.b9d947e0.jpg" + "?" + Date.now();

},{"bf981ded6b40bfd5":"hPpBg"}],"hTMLe":[function(require,module,exports) {
module.exports = require("c2ec17eef16b5d6e").getBundleURL("llyQl") + "../wall.0a346a6b.jpg" + "?" + Date.now();

},{"c2ec17eef16b5d6e":"hPpBg"}],"exel3":[function(require,module,exports) {
module.exports = require("dbb8b7453e4b98a9").getBundleURL("llyQl") + "../stone_wall2.fbb56e1b.jpg" + "?" + Date.now();

},{"dbb8b7453e4b98a9":"hPpBg"}],"4IshX":[function(require,module,exports) {
module.exports = require("d691a00325645011").getBundleURL("llyQl") + "../stone_wall.44f0970f.jpg" + "?" + Date.now();

},{"d691a00325645011":"hPpBg"}]},["aAmVL","ewxrA"], "ewxrA", "parcelRequiredf3e")

