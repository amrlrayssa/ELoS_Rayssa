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
})({"4qBz3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "d4cf07e4c786b455";
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

},{}],"1LUQY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _three = require("three");
var _editor = require("../editor");
var _util = require("../three/util");
var _gridMapHelper = require("../three/GridMapHelper");
var _gridMapHelperDefault = parcelHelpers.interopDefault(_gridMapHelper);
var _parser = require("./parser");
var _parserDefault = parcelHelpers.interopDefault(_parser);
var _laserFence = require("../three/LaserFence");
var _laserFenceDefault = parcelHelpers.interopDefault(_laserFence);
var _spikeTrap = require("../three/SpikeTrap");
const sceneProperties = {
    cancelExecution: false,
    phase: 0,
    executing: false
};
let laserState;
let setLaserStates;
let setLaserStatesInterval;
let spikeTrapState;
let setSpikeTrapState;
let setSpikeTrapStateInterval;
const editor = (0, _editor.generateDefaultEditor)(document.getElementById("editorArea"));
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
const desativarLaserAzulBtn = document.getElementById("desativarLaserAzul");
desativarLaserAzulBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "desativarLaserAzul()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "desativarLaserAzul()\n"
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
const desativarLaserVermelhoBtn = document.getElementById("desativarLaserVermelho");
desativarLaserVermelhoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "desativarLaserVermelho()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "desativarLaserVermelho()\n"
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
const laserAzulAtivoBtn = document.getElementById("laserAzulAtivo");
laserAzulAtivoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "laserAzulAtivo()"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "laserAzulAtivo()"
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
const laserVermelhoAtivoBtn = document.getElementById("laserVermelhoAtivo");
laserVermelhoAtivoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "laserVermelhoAtivo()"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "laserVermelhoAtivo()"
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
const condicaoFullBtn = document.getElementById("condicaoFull");
condicaoFullBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "se(?){\n\n}\nsen\xe3o{\n\n}\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "se(?){\n\n}\nsen\xe3o{\n\n}\n"
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
const actor = (0, _util.loadDefaultActor)();
let objectives;
let walls;
let traps;
let laserFences;
function changeLaserActiveStatus(index, status) {
    gridMapHelper.lasers[index].active = status;
    //lasers[index].visible = status;
    if (status == false) laserFences[index].setNotVisible();
    else if (gridMapHelper.lasers[index].state == "red") {
        laserFences[index].setVisible();
        laserFences[index].setRed();
    } else {
        laserFences[index].setVisible();
        laserFences[index].setBlue();
    }
}
function changeLaserStateStatus(index, status) {
    gridMapHelper.lasers.forEach((laser)=>{
        if (laser.type == "multiColor") laser.state = status;
    });
    if (status == "blue") laserFences.forEach((laser)=>{
        if (laser.type == "multiColor") laser.setBlue();
    });
    else if (status == "red") laserFences.forEach((laser)=>{
        if (laser.type == "multiColor") laser.setRed();
    });
}
function lasersVisualRestart() {
    for(let i = 0; i < laserFences.length; i++)laserFences[i].active = true;
}
scene.add(plane);
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
function laserAzulAtivo() {
    const vec = new _three.Vector3();
    actor.getObjectByName("interactionReference").getWorldPosition(vec);
    if (gridMapHelper.detectLaser(vec, "blue") != null) return true;
    else return false;
}
function laserVermelhoAtivo() {
    const vec = new _three.Vector3();
    actor.getObjectByName("interactionReference").getWorldPosition(vec);
    if (gridMapHelper.detectLaser(vec, "red") != null) return true;
    else return false;
}
function desativarLaserAzul() {
    const vec = new _three.Vector3();
    actor.getObjectByName("interactionReference").getWorldPosition(vec);
    let laserIndex = gridMapHelper.detectLaser(vec, "blue");
    if (laserIndex != null) changeLaserActiveStatus(laserIndex, false);
    else {
        consoleElement.innerText += "O rob\xf4 entrou em curto circuito por tentar desativar um laser azul que n\xe3o existe.\n";
        sceneProperties.cancelExecution = true;
    }
}
function desativarLaserVermelho() {
    const vec = new _three.Vector3();
    actor.getObjectByName("interactionReference").getWorldPosition(vec);
    let laserIndex = gridMapHelper.detectLaser(vec, "red");
    if (laserIndex != null) changeLaserActiveStatus(laserIndex, false);
    else {
        consoleElement.innerText += "O rob\xf4 entrou em curto circuito por tentar desativar um laser vermelho que n\xe3o existe.\n";
        sceneProperties.cancelExecution = true;
    }
}
function badLuck(position, state) {
    const vector = new _three.Vector3(gridMapHelper.getGlobalXPositionFromCoord(position[0]), 0, gridMapHelper.getGlobalZPositionFromCoord(position[1]));
    let newLaserState = state == "blue" ? "red" : "blue";
    let laserIndex = gridMapHelper.detectLaser(vector, state);
    if (laserIndex != null) {
        if (gridMapHelper.lasers[laserIndex].type == "multiColor") {
            gridMapHelper.lasers[laserIndex].state = newLaserState;
            if (newLaserState == "blue") laserFences[laserIndex].setBlue();
            else laserFences[laserIndex].setRed();
        } else if (gridMapHelper.lasers[laserIndex].active) {
            gridMapHelper.lasers[laserIndex].active = false;
            laserFences[laserIndex].setNotVisible();
        } else {
            gridMapHelper.lasers[laserIndex].active = true;
            laserFences[laserIndex].setVisible();
            if (gridMapHelper.lasers[laserIndex].state == "blue") laserFences[laserIndex].setBlue();
            else laserFences[laserIndex].setRed();
        }
    }
}
let coletarCristal;
let resetLevel;
let winCondition;
const phaseGeneration = [];
//Phase 1
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 1 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(9, 9, 5, 5);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new _three.BoxGeometry(18, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    scene.add(walls[0]);
    scene.add(walls[1]);
    gridMapHelper.addObstacle(1, 9, 4, 4);
    gridMapHelper.addObstacle(1, 9, 6, 6);
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addLaser(7, 5, laserFences[0]);
    scene.add(laserFences[0]);
    //laserFences[0].setBlue()
    // lasers = [];
    // const laserGeometry = new THREE.BoxGeometry(2,2,2);
    // const laserMaterial = new THREE.MeshLambertMaterial({color: 'rgb(0,0,255)'});
    // lasers.push(new THREE.Mesh(laserGeometry,laserMaterial));
    // lasers[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7),0.1,gridMapHelper.getGlobalZPositionFromCoord(5));
    // gridMapHelper.addLaser(7,5);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) changeLaserStateStatus(0, "blue");
        else changeLaserStateStatus(0, "red");
    };
    // scene.add(lasers[0]);
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
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
});
//Phase 2
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 2 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0.0, gridMapHelper.getGlobalZPositionFromCoord(7));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0.0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addObstacle(4, 4, 7, 7);
    gridMapHelper.addObstacle(4, 4, 3, 3);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addTrap(3, 5, traps[0]);
    scene.add(traps[0]);
    (0, _spikeTrap.trapsActivation)(traps);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(6, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].rotateY(Math.PI / 2);
    walls[3].rotateY(Math.PI / 2);
    walls[6].rotateY(Math.PI / 2);
    walls[7].rotateY(Math.PI / 2);
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
    gridMapHelper.addObstacle(1, 3, 4, 4);
    gridMapHelper.addObstacle(1, 3, 6, 6);
    gridMapHelper.addObstacle(3, 3, 6, 8);
    gridMapHelper.addObstacle(3, 3, 2, 4);
    gridMapHelper.addObstacle(4, 4, 8, 8);
    gridMapHelper.addObstacle(4, 4, 2, 2);
    gridMapHelper.addObstacle(5, 5, 2, 4);
    gridMapHelper.addObstacle(5, 5, 6, 8);
    gridMapHelper.addObstacle(6, 7, 6, 6);
    gridMapHelper.addObstacle(6, 7, 4, 4);
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    gridMapHelper.addLaser(4, 4, laserFences[0]);
    gridMapHelper.addLaser(4, 6, laserFences[1]);
    laserFences[0].rotateY(Math.PI / 2);
    laserFences[1].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserActiveStatus(0, true);
            changeLaserActiveStatus(1, false);
        } else {
            changeLaserActiveStatus(0, false);
            changeLaserActiveStatus(1, true);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 3
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 3 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(3));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(6));
    gridMapHelper.addObstacle(9, 9, 3, 3);
    gridMapHelper.addObstacle(9, 9, 6, 6);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    traps = [];
    const trapGeometry = new _three.BoxGeometry(2, 1, 2);
    const trapMaterial = new _three.MeshLambertMaterial({
        color: "rgb(255,0,0)"
    });
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0, gridMapHelper.getGlobalZPositionFromCoord(2));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(4));
    traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(2));
    traps[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    gridMapHelper.addTrap(4, 2, traps[0]);
    gridMapHelper.addTrap(4, 7, traps[1]);
    gridMapHelper.addTrap(6, 4, traps[2]);
    gridMapHelper.addTrap(6, 5, traps[3]);
    gridMapHelper.addTrap(9, 2, traps[4]);
    gridMapHelper.addTrap(9, 7, traps[5]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    scene.add(traps[3]);
    scene.add(traps[4]);
    scene.add(traps[5]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(10, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(12, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(4, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(2, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(4.5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4.5));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[2].rotateY(Math.PI / 2);
    walls[3].rotateY(Math.PI / 2);
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
    gridMapHelper.addObstacle(3, 7, 9, 9);
    gridMapHelper.addObstacle(3, 7, 0, 0);
    gridMapHelper.addObstacle(3, 3, 2, 7);
    gridMapHelper.addObstacle(5, 5, 4, 5);
    gridMapHelper.addObstacle(5, 5, 7, 7);
    gridMapHelper.addObstacle(5, 5, 2, 2);
    gridMapHelper.addObstacle(7, 8, 7, 7);
    gridMapHelper.addObstacle(7, 8, 2, 2);
    gridMapHelper.addObstacle(7, 9, 4, 4);
    gridMapHelper.addObstacle(7, 9, 5, 5);
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    laserFences[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    gridMapHelper.addLaser(3, 1, laserFences[0]);
    gridMapHelper.addLaser(3, 8, laserFences[1]);
    gridMapHelper.addLaser(7, 1, laserFences[2]);
    gridMapHelper.addLaser(7, 3, laserFences[3]);
    gridMapHelper.addLaser(7, 6, laserFences[4]);
    gridMapHelper.addLaser(7, 8, laserFences[5]);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    scene.add(laserFences[3]);
    scene.add(laserFences[4]);
    scene.add(laserFences[5]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(0, true);
            changeLaserActiveStatus(1, true);
            changeLaserActiveStatus(2, false);
            changeLaserActiveStatus(5, false);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(0, false);
            changeLaserActiveStatus(1, false);
            changeLaserActiveStatus(2, true);
            changeLaserActiveStatus(5, true);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 4
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 4 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.0, gridMapHelper.getGlobalZPositionFromCoord(9));
    gridMapHelper.addObstacle(8, 8, 9, 9);
    scene.add(objectives[0]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0, gridMapHelper.getGlobalZPositionFromCoord(4));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0, gridMapHelper.getGlobalZPositionFromCoord(1));
    traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addTrap(0, 4, traps[0]);
    gridMapHelper.addTrap(3, 5, traps[1]);
    gridMapHelper.addTrap(5, 1, traps[2]);
    gridMapHelper.addTrap(7, 5, traps[3]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    scene.add(traps[3]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(12, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(10, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(8, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(20, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2.5), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(7.5));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(2.5));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(7.5));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1, gridMapHelper.getGlobalZPositionFromCoord(4.5));
    gridMapHelper.addObstacle(0, 5, 0, 0);
    gridMapHelper.addObstacle(1, 1, 4, 8);
    gridMapHelper.addObstacle(1, 3, 2, 2);
    gridMapHelper.addObstacle(3, 3, 2, 4);
    gridMapHelper.addObstacle(3, 3, 6, 9);
    gridMapHelper.addObstacle(5, 5, 2, 4);
    gridMapHelper.addObstacle(5, 5, 6, 8);
    gridMapHelper.addObstacle(7, 7, 1, 4);
    gridMapHelper.addObstacle(7, 7, 6, 9);
    gridMapHelper.addObstacle(9, 9, 0, 9);
    walls[1].rotateY(Math.PI / 2);
    walls[3].rotateY(Math.PI / 2);
    walls[4].rotateY(Math.PI / 2);
    walls[5].rotateY(Math.PI / 2);
    walls[6].rotateY(Math.PI / 2);
    walls[7].rotateY(Math.PI / 2);
    walls[8].rotateY(Math.PI / 2);
    walls[9].rotateY(Math.PI / 2);
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
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    gridMapHelper.addLaser(5, 5, laserFences[0]);
    gridMapHelper.addLaser(8, 7, laserFences[1]);
    gridMapHelper.addLaser(5, 9, laserFences[2]);
    laserFences[1].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(1, true);
            changeLaserActiveStatus(2, false);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(1, false);
            changeLaserActiveStatus(2, true);
        }
    };
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
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 5
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 5 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(7));
    gridMapHelper.addObstacle(0, 0, 0, 0);
    gridMapHelper.addObstacle(9, 9, 7, 7);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0, gridMapHelper.getGlobalZPositionFromCoord(6));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0, gridMapHelper.getGlobalZPositionFromCoord(6));
    gridMapHelper.addTrap(0, 6, traps[0]);
    gridMapHelper.addTrap(3, 6, traps[1]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(14, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(2, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(10, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(4, 2, 2);
    const boxGeometry6 = new _three.BoxGeometry(12, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry6, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry6, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(4.5), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(5.5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(5.5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(8.5), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addObstacle(1, 1, 4, 6);
    gridMapHelper.addObstacle(0, 2, 9, 9);
    gridMapHelper.addObstacle(2, 4, 4, 4);
    gridMapHelper.addObstacle(2, 7, 1, 1);
    gridMapHelper.addObstacle(4, 6, 3, 3);
    gridMapHelper.addObstacle(6, 6, 2, 2);
    gridMapHelper.addObstacle(3, 8, 7, 7);
    gridMapHelper.addObstacle(5, 6, 8, 8);
    gridMapHelper.addObstacle(8, 9, 9, 9);
    gridMapHelper.addObstacle(9, 9, 0, 6);
    gridMapHelper.addObstacle(1, 1, 2, 2);
    walls[0].rotateY(Math.PI / 2);
    walls[9].rotateY(Math.PI / 2);
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
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    gridMapHelper.addLaser(0, 2, laserFences[0]);
    gridMapHelper.addLaser(2, 0, laserFences[1]);
    gridMapHelper.addLaser(5, 9, laserFences[2]);
    gridMapHelper.addLaser(8, 1, laserFences[3]);
    gridMapHelper.addLaser(8, 8, laserFences[4]);
    laserFences[0].rotateY(Math.PI / 2);
    laserFences[3].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    scene.add(laserFences[3]);
    scene.add(laserFences[4]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(2, true);
            changeLaserActiveStatus(4, false);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(2, false);
            changeLaserActiveStatus(4, true);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 6
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 6 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(9));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(9, 9, 9, 9);
    gridMapHelper.addObstacle(9, 9, 0, 0);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0, gridMapHelper.getGlobalZPositionFromCoord(4));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0, gridMapHelper.getGlobalZPositionFromCoord(3));
    traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0, gridMapHelper.getGlobalZPositionFromCoord(8));
    gridMapHelper.addTrap(3, 4, traps[0]);
    gridMapHelper.addTrap(7, 5, traps[1]);
    gridMapHelper.addTrap(8, 3, traps[2]);
    gridMapHelper.addTrap(1, 7, traps[3]);
    gridMapHelper.addTrap(3, 8, traps[4]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    scene.add(traps[3]);
    scene.add(traps[4]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(10, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(4, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(12, 2, 2);
    const boxGeometry6 = new _three.BoxGeometry(14, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry6, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1, gridMapHelper.getGlobalZPositionFromCoord(1.5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(2.5), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(1.5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(3.5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(3.5), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(8.5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(8.5), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[13].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[14].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[15].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addObstacle(0, 4, 9, 9);
    gridMapHelper.addObstacle(0, 0, 8, 8);
    gridMapHelper.addObstacle(0, 0, 1, 2);
    gridMapHelper.addObstacle(1, 1, 1, 3);
    gridMapHelper.addObstacle(0, 5, 0, 0);
    gridMapHelper.addObstacle(1, 2, 5, 5);
    gridMapHelper.addObstacle(3, 4, 6, 6);
    gridMapHelper.addObstacle(3, 4, 3, 3);
    gridMapHelper.addObstacle(5, 5, 2, 2);
    gridMapHelper.addObstacle(5, 5, 7, 7);
    gridMapHelper.addObstacle(6, 6, 2, 8);
    gridMapHelper.addObstacle(8, 9, 8, 8);
    gridMapHelper.addObstacle(8, 8, 7, 7);
    gridMapHelper.addObstacle(8, 9, 1, 1);
    gridMapHelper.addObstacle(8, 8, 2, 2);
    gridMapHelper.addObstacle(9, 9, 5, 5);
    walls[2].rotateY(Math.PI / 2);
    walls[3].rotateY(Math.PI / 2);
    walls[10].rotateY(Math.PI / 2);
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
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    laserFences[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addLaser(2, 3, laserFences[0]);
    gridMapHelper.addLaser(6, 9, laserFences[1]);
    gridMapHelper.addLaser(7, 7, laserFences[2]);
    gridMapHelper.addLaser(7, 2, laserFences[3]);
    gridMapHelper.addLaser(8, 9, laserFences[4]);
    gridMapHelper.addLaser(8, 0, laserFences[5]);
    laserFences[0].rotateY(Math.PI / 2);
    laserFences[2].rotateY(Math.PI / 2);
    laserFences[3].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    scene.add(laserFences[3]);
    scene.add(laserFences[4]);
    scene.add(laserFences[5]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(2, true);
            changeLaserActiveStatus(3, false);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(2, false);
            changeLaserActiveStatus(3, true);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 7
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 7 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0.0, gridMapHelper.getGlobalZPositionFromCoord(6));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(2, 2, 6, 6);
    gridMapHelper.addObstacle(4, 4, 5, 5);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 0, gridMapHelper.getGlobalZPositionFromCoord(6));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addTrap(1, 6, traps[0]);
    gridMapHelper.addTrap(7, 5, traps[1]);
    gridMapHelper.addTrap(9, 2, traps[2]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(12, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(4, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(2, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(8, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(5.5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(7.5));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4.5));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(8.5));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(7.5));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[11].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[12].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(2.5));
    gridMapHelper.addObstacle(1, 1, 1, 3);
    gridMapHelper.addObstacle(1, 1, 7, 9);
    gridMapHelper.addObstacle(1, 1, 7, 9);
    gridMapHelper.addObstacle(1, 1, 7, 9);
    gridMapHelper.addObstacle(1, 1, 7, 9);
    gridMapHelper.addObstacle(3, 8, 6, 6);
    gridMapHelper.addObstacle(4, 4, 7, 8);
    gridMapHelper.addObstacle(5, 5, 4, 5);
    gridMapHelper.addObstacle(6, 6, 8, 9);
    gridMapHelper.addObstacle(8, 8, 7, 8);
    gridMapHelper.addObstacle(3, 3, 8, 8);
    gridMapHelper.addObstacle(8, 8, 4, 4);
    gridMapHelper.addObstacle(7, 7, 1, 4);
    walls[0].rotateY(Math.PI / 2);
    walls[1].rotateY(Math.PI / 2);
    walls[3].rotateY(Math.PI / 2);
    walls[6].rotateY(Math.PI / 2);
    walls[7].rotateY(Math.PI / 2);
    walls[8].rotateY(Math.PI / 2);
    walls[9].rotateY(Math.PI / 2);
    walls[12].rotateY(Math.PI / 2);
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
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    gridMapHelper.addLaser(1, 4, laserFences[0]);
    gridMapHelper.addLaser(1, 0, laserFences[1]);
    gridMapHelper.addLaser(2, 8, laserFences[2]);
    gridMapHelper.addLaser(4, 4, laserFences[3]);
    gridMapHelper.addLaser(6, 7, laserFences[4]);
    laserFences[2].rotateY(Math.PI / 2);
    laserFences[3].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    scene.add(laserFences[3]);
    scene.add(laserFences[4]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(2, true);
            changeLaserActiveStatus(3, false);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(2, false);
            changeLaserActiveStatus(3, true);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 8
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 3 - Fase 8 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
    objectives = (0, _util.loadDefaultObjectives)(3);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(1));
    objectives[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addObstacle(0, 0, 0, 0);
    gridMapHelper.addObstacle(9, 9, 1, 1);
    gridMapHelper.addObstacle(9, 9, 3, 3);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    scene.add(objectives[2]);
    traps = [];
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps.push(new (0, _spikeTrap.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0, gridMapHelper.getGlobalZPositionFromCoord(1));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0, gridMapHelper.getGlobalZPositionFromCoord(3));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addTrap(0, 1, traps[0]);
    gridMapHelper.addTrap(8, 3, traps[1]);
    gridMapHelper.addTrap(9, 2, traps[2]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    walls = [];
    const boxGeometry1 = new _three.BoxGeometry(14, 2, 2);
    const boxGeometry2 = new _three.BoxGeometry(10, 2, 2);
    const boxGeometry3 = new _three.BoxGeometry(6, 2, 2);
    const boxGeometry4 = new _three.BoxGeometry(4, 2, 2);
    const boxGeometry5 = new _three.BoxGeometry(2, 2, 2);
    const boxMaterial = new _three.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry1, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry2, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry3, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry4, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls.push(new _three.Mesh(boxGeometry5, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(1), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(8.5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(1, 1, 2, 8);
    gridMapHelper.addObstacle(3, 3, 3, 9);
    gridMapHelper.addObstacle(5, 5, 2, 8);
    gridMapHelper.addObstacle(1, 5, 1, 1);
    gridMapHelper.addObstacle(6, 8, 8, 8);
    gridMapHelper.addObstacle(8, 9, 6, 6);
    gridMapHelper.addObstacle(7, 8, 4, 4);
    gridMapHelper.addObstacle(7, 8, 2, 2);
    gridMapHelper.addObstacle(6, 6, 6, 6);
    gridMapHelper.addObstacle(7, 7, 0, 0);
    walls[0].rotateY(Math.PI / 2);
    walls[1].rotateY(Math.PI / 2);
    walls[2].rotateY(Math.PI / 2);
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
    laserFences = [];
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("blue"));
    laserFences.push(new (0, _laserFenceDefault.default)("red"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences.push(new (0, _laserFenceDefault.default)("multiColor"));
    laserFences[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    laserFences[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    laserFences[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 1, gridMapHelper.getGlobalZPositionFromCoord(0));
    laserFences[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    laserFences[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(9));
    laserFences[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    laserFences[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    gridMapHelper.addLaser(0, 6, laserFences[0]);
    gridMapHelper.addLaser(2, 8, laserFences[1]);
    gridMapHelper.addLaser(3, 0, laserFences[2]);
    gridMapHelper.addLaser(4, 3, laserFences[3]);
    gridMapHelper.addLaser(6, 9, laserFences[4]);
    gridMapHelper.addLaser(7, 6, laserFences[5]);
    gridMapHelper.addLaser(7, 1, laserFences[6]);
    laserFences[0].rotateY(Math.PI / 2);
    laserFences[1].rotateY(Math.PI / 2);
    laserFences[3].rotateY(Math.PI / 2);
    laserFences[5].rotateY(Math.PI / 2);
    scene.add(laserFences[0]);
    scene.add(laserFences[1]);
    scene.add(laserFences[2]);
    scene.add(laserFences[3]);
    scene.add(laserFences[4]);
    scene.add(laserFences[5]);
    scene.add(laserFences[6]);
    laserState = 0;
    setLaserStates = ()=>{
        if (laserState == 0) {
            changeLaserStateStatus(0, "blue");
            changeLaserActiveStatus(2, true);
            changeLaserActiveStatus(3, false);
            changeLaserActiveStatus(4, true);
        } else {
            changeLaserStateStatus(0, "red");
            changeLaserActiveStatus(2, false);
            changeLaserActiveStatus(3, true);
            changeLaserActiveStatus(4, false);
        }
    };
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[0].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[1].active = false;
        } else if ((0, _util.checkCollision)(actor.getObjectByName("interactionReference"), objectives[2], gridMapHelper)) {
            objectives[2].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
            gridMapHelper.obstacles[2].active = false;
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible && !objectives[2].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, _util.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        objectives[2].visible = true;
        gridMapHelper.obstacles[0].active = true;
        gridMapHelper.obstacles[1].active = true;
        gridMapHelper.obstacles[2].active = true;
        gridMapHelper.restartLasers();
        lasersVisualRestart();
        setLaserStates();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible && !objectives[2].visible) return true;
        else return false;
    };
    setLaserStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        laserState = (laserState + 1) % 2;
        setLaserStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, _spikeTrap.trapsDeactivation)(traps);
        else (0, _spikeTrap.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
function removeObjects(crystals, walls, traps, lasers) {
    if (crystals != undefined) for(let i = 0; i < crystals.length; i++)scene.remove(crystals[i]);
    if (walls != undefined) {
        for(let i1 = 0; i1 < walls.length; i1++)scene.remove(walls[i1]);
        gridMapHelper.clearObstacles();
    }
    if (traps != undefined) {
        for(let i2 = 0; i2 < traps.length; i2++)scene.remove(traps[i2]);
        gridMapHelper.clearTraps();
    }
    if (lasers != undefined) {
        for(let i3 = 0; i3 < lasers.length; i3++)scene.remove(lasers[i3]);
        gridMapHelper.clearLasers();
    }
    crystals = undefined;
    walls = undefined;
    traps = undefined;
    lasers = undefined;
}
function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}
window.addEventListener("resize", ()=>{
    (0, _util.resizeCanvasToDisplaySize)(renderer, camera);
});
const execBtn = document.getElementById("execBtn");
execBtn.addEventListener("click", async function() {
    const codeParsed = (0, _parserDefault.default)(editor.state.doc.toString());
    console.log(codeParsed);
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
        if (setLaserStatesInterval) {
            clearInterval(setLaserStatesInterval);
            setLaserStatesInterval = undefined;
        }
        removeObjects(objectives, walls, traps, laserFences);
        phaseGeneration[sceneProperties.phase]();
        editor.setState((0, _editor.editState));
        consoleElement.innerText = null;
        document.getElementById("winMessage").classList.add("invisible");
        document.getElementById("advanceBtn").classList.add("invisible");
        execBtn.disabled = false;
        resetBtn.disabled = false;
    } else {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        window.location.href = "../";
    }
});
(0, _util.resizeCanvasToDisplaySize)(renderer, camera);
phaseGeneration[sceneProperties.phase]();
animate();

},{"three":"3XrwE","../editor":"l6wfL","../three/util":"fiv5b","../three/GridMapHelper":"1niVU","./parser":"6MMdt","../three/LaserFence":"jGUvy","../three/SpikeTrap":"eDrLo","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6MMdt":[function(require,module,exports) {
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
    },
    {
        filter: new RegExp("^desativarLaserAzul(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "mustCondition"
    },
    {
        filter: new RegExp("^desativarLaserVermelho(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "mustCondition"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$"),
        type: "conditional"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$"),
        type: "conditional&&blockValidation"
    },
    {
        filter: new RegExp("^sen\xe3o$"),
        type: "elseValidation"
    },
    {
        filter: new RegExp("^sen\xe3o(\\s+)?{$"),
        type: "elseValidation&&blockValidation"
    },
    {
        filter: new RegExp("^}$"),
        type: "closeBlockValidation"
    },
    {
        filter: new RegExp("^{$"),
        type: "blockValidation"
    }
];
const conditionalParameters = [
    new RegExp("true"),
    new RegExp("false"),
    new RegExp("^laserAzulAtivo(\\s+)?\\((\\s+)?\\)(\\s+)?$"),
    new RegExp("^laserVermelhoAtivo(\\s+)?\\((\\s+)?\\)(\\s+)?$")
];
function ifValidation(line) {
    let trimLine = line.trim();
    let condition = line.substring(trimLine.indexOf("(") + 1, trimLine.lastIndexOf(")"));
    for(let i = 0; i < conditionalParameters.length; i++){
        if (conditionalParameters[i].test(condition.trim())) return true;
        else continue;
    }
    return false;
}
function blockValidation(lines, index) {
    let valid = false;
    let ignoreClosure = 0;
    for(let i = index + 1; i < lines.length; i++){
        if (lines[i].includes("}")) {
            if (ignoreClosure == 0) {
                valid = true;
                break;
            } else ignoreClosure--;
        } else if (lines[i].includes("{")) ignoreClosure++;
        else continue;
    }
    return valid;
}
function closeBlockValidation(lines, index) {
    let valid = false;
    for(let i = index - 1; i >= 0; i--){
        if (lines[i].includes("{")) {
            valid = true;
            break;
        } else continue;
    }
    return valid;
}
function mustConditionValidation(lines, index) {
    let valid = false;
    let completeCommonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?(\\s+)?$");
    let commonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$");
    let completeblockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[^}]*?$");
    let blockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$");
    let commonElse = new RegExp("^sen\xe3o$");
    let blockElse = new RegExp("^sen\xe3o(\\s+)?{$");
    let completeCommonElse = new RegExp("^sen\xe3o(\\s+)?.+(\\s+)?$");
    let completeBlockElse = new RegExp("^sen\xe3o(\\s+)?{[^]*?$");
    let start = null;
    for(let i = index - 1; i >= 0; i--){
        if (commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim()) || commonElse.test(lines[i].trim()) || blockElse.test(lines[i].trim())) {
            start = i;
            break;
        } else continue;
    }
    if (start != null) {
        let codeTillFunction = "";
        for(let i1 = start; i1 < index; i1++)codeTillFunction += `${lines[i1].trim()}\n`;
        if (completeCommonIf.test(codeTillFunction.trim()) || completeblockIf.test(codeTillFunction.trim()) || completeCommonElse.test(codeTillFunction.trim()) || completeBlockElse.test(codeTillFunction.trim())) {
            valid = true;
            return valid;
        } else return valid;
    } else return valid;
}
function elseValidation(lines, index) {
    let valid = false;
    let completeCommonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?.+(\\s+)?$");
    let commonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$");
    let completeblockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[^]*?}$");
    let blockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$");
    let start = null;
    for(let i = index - 1; i >= 0; i--){
        if (commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim())) {
            start = i;
            break;
        } else continue;
    }
    if (start != null) {
        let codeTillElse = "";
        for(let i1 = start; i1 < index; i1++)codeTillElse += `${lines[i1].trim()}\n`;
        if (completeCommonIf.test(codeTillElse.trim()) || completeblockIf.test(codeTillElse.trim())) {
            valid = true;
            return valid;
        } else return valid;
    } else return valid;
}
function predictFunction(lines, index) {
    const directionFilter = [
        new RegExp("^andarFrente(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^andarTras(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$")
    ];
    let position = [
        0,
        5
    ];
    let axis = 0;
    let value = "+";
    let direction = 0;
    function calcDirection(direction) {
        const dirGuide = [
            {
                axis: 0,
                value: "+"
            },
            {
                axis: 1,
                value: "+"
            },
            {
                axis: 0,
                value: "-"
            },
            {
                axis: 1,
                value: "-"
            }
        ];
        return dirGuide[direction];
    }
    function correctRotation(index) {
        let i = index;
        if (i > 3) return 0;
        else if (i < 0) return 3;
        else return i;
    }
    for(let i = 0; i < index; i++){
        if (directionFilter[0].test(lines[i])) {
            let amount = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "+") position[axis] += amount;
            else position[axis] -= amount;
        } else if (directionFilter[1].test(lines[i])) {
            let amount1 = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "-") position[axis] += amount1;
            else position[axis] -= amount1;
        } else if (directionFilter[2].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            const obj = calcDirection(direction);
            axis = obj.axis;
            value = obj.value;
        } else if (directionFilter[3].test(lines[i])) {
            direction++;
            direction = correctRotation(direction);
            const obj1 = calcDirection(direction);
            axis = obj1.axis;
            value = obj1.value;
        } else if (directionFilter[4].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            direction--;
            direction = correctRotation(direction);
            const obj2 = calcDirection(direction);
            axis = obj2.axis;
            value = obj2.value;
        } else continue;
    }
    if (value == "+") position[axis]++;
    else position[axis]--;
    return position;
}
function printError(text, line) {
    const consoleElement = document.getElementById("consoleArea");
    consoleElement.innerText += `Código inválido: ${text} linha: ${line}\n`;
}
function parseCode(code, limit = 0) {
    let codeParsed = "async function runCode(){\n";
    let badLuckFunctions = "\n";
    let lines = code.split("\n");
    let valid = true;
    let totalCommands = 0;
    for(let i = 0; i < lines.length; i++){
        let validLine = false;
        let lineType;
        if (lines[i].trim() != "") {
            for(let j = 0; j < functionFilter.length; j++){
                validLine = functionFilter[j].filter.test(lines[i].trim());
                if (validLine) {
                    lineType = functionFilter[j].type;
                    break;
                } else continue;
            }
            if (validLine) {
                if (lineType === "sequential") {
                    let lineParsed = `await ${lines[i].trim()}\n`;
                    codeParsed += lineParsed;
                    totalCommands++;
                } else if (lineType === "conditional&&blockValidation") {
                    let validConditional = false;
                    if (blockValidation(lines, i)) {
                        if (ifValidation(lines[i])) validConditional = true;
                        else printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validConditional) {
                        let line = lines[i].trim();
                        let lineParsed1 = `if${line.substring(line.indexOf("("))}\n`;
                        codeParsed += lineParsed1;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else if (lineType === "conditional") {
                    if (ifValidation(lines[i])) {
                        let line1 = lines[i].trim();
                        let lineParsed2 = `if${line1.substring(line1.indexOf("("))}\n`;
                        codeParsed += lineParsed2;
                        totalCommands++;
                    } else {
                        printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "elseValidation") {
                    if (elseValidation(lines, i)) {
                        let lineParsed3 = "else\n";
                        codeParsed += lineParsed3;
                        totalCommands++;
                    } else {
                        printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "elseValidation&&blockValidation") {
                    let validElse = false;
                    if (blockValidation(lines, i)) {
                        if (elseValidation(lines, i)) validElse = true;
                        else printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validElse) {
                        let lineParsed4 = "else{\n";
                        codeParsed += lineParsed4;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else if (lineType === "blockValidation") {
                    if (blockValidation(lines, i)) {
                        let lineParsed5 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed5;
                        totalCommands++;
                    } else {
                        printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "closeBlockValidation") {
                    if (closeBlockValidation(lines, i)) {
                        let lineParsed6 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed6;
                        totalCommands++;
                    } else {
                        printError(`${lines[i]} (Bloco é fechado mas nunca é aberto)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "mustCondition") {
                    if (mustConditionValidation(lines, i)) {
                        let lineParsed7 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed7;
                        totalCommands++;
                    } else {
                        let state = functionFilter[6].filter.test(lines[i].trim()) ? "blue" : "red";
                        let pos = predictFunction(lines, i);
                        badLuckFunctions += `badLuck([${pos[0]},${pos[1]}],'${state}')\n`;
                        let lineParsed8 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed8;
                        totalCommands++;
                    }
                } else {
                    let lineParsed9 = `${lines[i].trim()}\n`;
                    codeParsed += lineParsed9;
                    totalCommands++;
                }
            } else {
                printError(lines[i], i + 1);
                valid = false;
                break;
            }
            if (limit > 0 && totalCommands > limit) {
                document.getElementById("consoleArea").innerText += `Aviso: O código tem mais linhas do que o robô pode processar. Tente rescrever seu código em ${limit} linhas ou menos.\n`;
                valid = false;
                break;
            }
        } else continue;
    }
    if (valid) {
        codeParsed += `}${badLuckFunctions}runCode()\n`;
        return codeParsed;
    } else return null;
}
exports.default = parseCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jGUvy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
var _csgmesh = require("../FireBase/CSGMesh");
class Fence extends _three.Mesh {
    constructor(){
        super(new _three.BoxGeometry(0.5, 2, 0.15), new _three.MeshPhongMaterial({
            color: "white"
        }));
    }
}
class FenceTorus extends _three.Mesh {
    constructor(){
        super(new _three.TorusGeometry(0.15, 0.05, 10, 20), new _three.MeshPhongMaterial({
            color: "black"
        }));
    }
}
class FenceBase extends _three.Mesh {
    constructor(){
        super(new _three.BoxGeometry(0.5, 2, 0.1), new _three.MeshPhongMaterial({
            color: "white"
        }));
    }
}
class Laser extends _three.Mesh {
    constructor(color){
        super(new _three.CylinderGeometry(0.1, 0.1, 2, 64, 64), new _three.MeshPhongMaterial({
            emissive: color,
            color: color,
            emissiveIntensity: 1,
            transparent: true,
            opacity: 0.7
        }));
    }
}
class LaserFence extends _three.Object3D {
    constructor(type){
        super();
        this.index = 0;
        this.x = 0;
        this.z = 0;
        this.state = type;
        this.active = true;
        this.type = type;
        // fence base
        let fenceBase = new FenceBase;
        fenceBase.rotateX(-Math.PI / 2);
        fenceBase.position.set(0, -0.95, 0);
        // fences
        let laserFence1 = new Fence;
        laserFence1.position.set(0, 0, -0.93);
        let laserFence2 = new Fence;
        laserFence2.position.set(0, 0, 0.93);
        // fence torus
        let fenceTorus1A = new FenceTorus;
        fenceTorus1A.position.set(0, 0.6, 0.85);
        let fenceTorus1B = new FenceTorus;
        fenceTorus1B.position.set(0, 0.6, -0.85);
        let fenceTorus2A = new FenceTorus;
        fenceTorus2A.position.set(0, 0, 0.85);
        let fenceTorus2B = new FenceTorus;
        fenceTorus2B.position.set(0, 0, -0.85);
        let fenceTorus3A = new FenceTorus;
        fenceTorus3A.position.set(0, -0.6, 0.85);
        let fenceTorus3B = new FenceTorus;
        fenceTorus3B.position.set(0, -0.6, -0.85);
        // blue lasers
        let laserBlue1 = new Laser("blue");
        laserBlue1.rotateX(-Math.PI / 2);
        laserBlue1.position.set(0, 0.6, 0);
        let laserBlue2 = new Laser("blue");
        laserBlue2.rotateX(-Math.PI / 2);
        laserBlue2.position.set(0, 0, 0);
        let laserBlue3 = new Laser("blue");
        laserBlue3.rotateX(-Math.PI / 2);
        laserBlue3.position.set(0, -0.6, 0);
        this.blueLasers = [
            laserBlue1,
            laserBlue2,
            laserBlue3
        ];
        // red lasers
        let laserRed1 = new Laser("red");
        laserRed1.rotateX(-Math.PI / 2);
        laserRed1.position.set(0, 0.6, 0);
        let laserRed2 = new Laser("red");
        laserRed2.rotateX(-Math.PI / 2);
        laserRed2.position.set(0, 0, 0);
        let laserRed3 = new Laser("red");
        laserRed3.rotateX(-Math.PI / 2);
        laserRed3.position.set(0, -0.6, 0);
        this.redLasers = [
            laserRed1,
            laserRed2,
            laserRed3
        ];
        if (type == "blue") {
            this.blueLasers.forEach((laser)=>laser.visible = true);
            this.redLasers.forEach((laser)=>laser.visible = false);
            this.state = "blue";
        } else if (type == "red" || type == "multiColor") {
            this.blueLasers.forEach((laser)=>laser.visible = false);
            this.state = "red";
        }
        this.add(fenceBase);
        this.add(laserFence1);
        this.add(laserFence2);
        this.add(fenceTorus1A);
        this.add(fenceTorus1B);
        this.add(fenceTorus2A);
        this.add(fenceTorus2B);
        this.add(fenceTorus3A);
        this.add(fenceTorus3B);
        this.add(laserBlue1);
        this.add(laserBlue2);
        this.add(laserBlue3);
        this.add(laserRed1);
        this.add(laserRed2);
        this.add(laserRed3);
        return this;
    }
    setVisible() {
        this.active = true;
    }
    setNotVisible() {
        this.blueLasers.forEach((laser)=>laser.visible = false);
        this.redLasers.forEach((laser)=>laser.visible = false);
        this.active = false;
    }
    setBlue() {
        if (this.active == true) {
            this.blueLasers.forEach((laser)=>laser.visible = true);
            this.redLasers.forEach((laser)=>laser.visible = false);
            this.state = "blue";
        }
    }
    setRed() {
        if (this.active == true) {
            this.blueLasers.forEach((laser)=>laser.visible = false);
            this.redLasers.forEach((laser)=>laser.visible = true);
            this.state = "red";
        }
    }
}
exports.default = LaserFence;

},{"three":"3XrwE","../FireBase/CSGMesh":"g1O9j","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["4qBz3","1LUQY"], "1LUQY", "parcelRequiredf3e")

