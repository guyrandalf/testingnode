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
})({"f3BSW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
document.getElementById("root").appendChild((0, _appDefault.default)());

},{"./App":"2kQhy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _router = require("./router");
function Header(mainDiv) {
    const siteName = (0, _utils.createElement)("a", {
        href: "index.html"
    }, [
        (0, _utils.createElement)("h1", {
            textContent: "NETFLIX"
        })
    ]);
    const favLink = (0, _utils.createElement)("div", {
        className: "favorite-box"
    }, [
        (0, _utils.createElement)("span", {
            className: "material-symbols-outlined",
            id: "favorite",
            textContent: "favorite"
        })
    ]);
    const searchBox = (0, _utils.createElement)("div", {
        className: "box"
    });
    const searchForm = (0, _utils.createElement)("form", {
        id: "search-form"
    }, [
        (0, _utils.createElement)("input", {
            className: "search-input",
            type: "text",
            name: "search",
            onmouseout: `this.value = ''; this.blur();`,
            autocomplete: "off"
        })
    ]);
    const searchSpan = (0, _utils.createElement)("span", {
        className: "material-symbols-rounded",
        textContent: "search"
    });
    searchBox.appendChild(searchSpan);
    searchBox.appendChild(searchForm);
    const nav = (0, _utils.createElement)("navbar", {}, [
        siteName,
        favLink,
        searchBox
    ]);
    return (0, _utils.createElement)("header", {}, [
        nav
    ]);
}
// App.js file
// ... (previous code)
function Header(mainDiv) {
    const siteName = (0, _utils.createElement)("a", {
        href: "index.html"
    });
    const siteNameTitle = (0, _utils.createElement)("h1", {
        textContent: "NETFLIX"
    });
    siteName.appendChild(siteNameTitle);
    const favLink = (0, _utils.createElement)("div", {
        className: "favorite-box"
    });
    const favLinkText = (0, _utils.createElement)("span", {
        className: "material-symbols-outlined",
        id: "favorite",
        textContent: "favorite"
    });
    favLink.appendChild(favLinkText);
    const searchBox = (0, _utils.createElement)("div", {
        className: "box"
    });
    const searchForm = (0, _utils.createElement)("form", {
        id: "search-form"
    });
    const searchInput = (0, _utils.createElement)("input", {
        className: "search-input",
        type: "text",
        name: "search",
        onmouseout: `this.value = ''; this.blur();`,
        autocomplete: "off"
    });
    searchForm.appendChild(searchInput);
    const searchSpan = (0, _utils.createElement)("span", {
        className: "material-symbols-rounded",
        textContent: "search"
    });
    searchBox.appendChild(searchSpan);
    searchBox.appendChild(searchForm);
    const nav = (0, _utils.createElement)("navbar", {}, [
        siteName,
        favLink,
        searchBox
    ]);
    return (0, _utils.createElement)("header", {}, [
        nav
    ]);
}
// ... (rest of the code)
function Footer() {
    const copyright = (0, _utils.createElement)("span", {
        textContent: `Copyright © ${new Date().getFullYear()} Peter Osagie Ohenhen`
    });
    return (0, _utils.createElement)("footer", {}, [
        copyright
    ]);
}
function App() {
    const main = (0, _utils.createElement)("main", {}, [
        (0, _utils.createElement)("div", {
            className: "cards",
            id: "cards"
        })
    ]);
    // initRouter(main);
    return (0, _utils.createElement)("div", {}, [
        Header(main),
        main,
        Footer()
    ]);
}
exports.default = App;

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./router":"l7a58"}],"en4he":[function(require,module,exports) {
// In utils.js file (if that's where the createElement function is defined)
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function createElement(tag, attributes, children) {
    const element = document.createElement(tag);
    if (attributes) for(const key in attributes)element[key] = attributes[key];
    if (children && children.length > 0) {
        for (const child of children)if (typeof child === "string") element.appendChild(document.createTextNode(child));
        else element.appendChild(child);
    }
    return element;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l7a58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _utils = require("./utils");
var _allMovies = require("./AllMovies");
var _allMoviesDefault = parcelHelpers.interopDefault(_allMovies);
function initRouter(mainView) {
    function updateView(newView) {
        mainView.innerHTML = "";
        mainView.appendChild(newView);
    }
    function hashToRoute(hash) {
        switch(hash){
            case "#/all-movies":
                updateView((0, _allMoviesDefault.default)());
                break;
            default:
                updateView((0, _utils.createElement)("h3", {
                    textContent: "404 Page Not Found"
                }));
                break;
        }
    }
    const defaultHash = window.location.hash || "#/all-movies";
    hashToRoute(defaultHash);
    window.addEventListener("hashchange", (evt)=>{
        const newUrl = new URL(evt.newURL);
        const hash = newUrl.hash;
        hashToRoute(hash);
    });
}

},{"./utils":"en4he","./AllMovies":"8R7zL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8R7zL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
const API_KEY = "1bbd72f65a0b1467640f1ec5f35f67b9";
const BASE_URL = `https://api.themoviedb.org/3/`;
async function AllMovies() {
    try {
        const response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`);
        if (!response.ok) throw new Error("Error in response");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}
// App.js file
// ... (previous code)
function Header(mainDiv) {
    const siteName = (0, _utils.createElement)("a", {
        href: "index.html"
    }, [
        (0, _utils.createElement)("h1", {
            textContent: "NETFLIX"
        })
    ]);
    const favLink = (0, _utils.createElement)("div", {
        className: "favorite-box"
    }, [
        (0, _utils.createElement)("span", {
            className: "material-symbols-outlined",
            id: "favorite",
            textContent: "favorite"
        })
    ]);
    const searchBox = (0, _utils.createElement)("div", {
        className: "box"
    }, [
        (0, _utils.createElement)("form", {
            id: "search-form"
        }, [
            (0, _utils.createElement)("input", {
                className: "search-input",
                type: "text",
                name: "search",
                onmouseout: `this.value = ''; this.blur();`,
                autocomplete: "off"
            })
        ])
    ]);
    const searchSpan = (0, _utils.createElement)("span", {
        className: "material-symbols-rounded",
        textContent: "search"
    });
    searchBox.appendChild(searchSpan);
    const nav = (0, _utils.createElement)("navbar", {}, [
        siteName,
        favLink,
        searchBox
    ]);
    return (0, _utils.createElement)("header", {}, [
        nav
    ]);
}
// ... (rest of the code)
async function createMovieCard(movie, movieId) {
    const movieCard = (0, _utils.createElement)("div", {
        className: "movie-card"
    });
    const movieAnchor = (0, _utils.createElement)("a", {
        href: `/#/single-movie/${movie.id}`,
        onclick: handleMovieCardClick(movie.id)
    });
    const movieTitle = (0, _utils.createElement)("h2", {
        className: "movie-title",
        textContent: movie.title
    });
    const moviePoster = (0, _utils.createElement)("img", {
        className: "movie-img",
        src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        alt: movie.title
    });
    movieAnchor.appendChild(moviePoster);
    movieAnchor.appendChild(movieTitle);
    movieCard.appendChild(movieAnchor);
    return movieCard;
}
async function renderMovies() {
    try {
        const movies = await AllMovies();
        const cardsContainer = (0, _utils.createElement)("div", {
            className: "cards-container"
        });
        for (const movie of movies){
            const movieCard = await createMovieCard(movie);
            cardsContainer.appendChild(movieCard);
        }
        const root = document.getElementById("cards");
        if (!root) {
            console.error("Could not find 'root' element.");
            return;
        }
        root.innerHTML = "";
        root.appendChild(cardsContainer);
    } catch (error) {
        console.error("Error rendering movies:", error);
    }
}
function handleMovieCardClick(movieId) {
    return function(event) {
        event.preventDefault();
        showMovieDetails(movieId);
        const newUrl = `${window.location.origin}/#/single-movie/${movieId}`;
        history.pushState({}, "", newUrl);
    };
}
async function showMovieDetails(movieId) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        if (!response.ok) throw new Error("Network response was not ok");
        const movieDetails = await response.json();
        const detailsContainer = (0, _utils.createElement)("div", {
            className: "movie-detail"
        });
        const moviePoster = (0, _utils.createElement)("img", {
            className: "detail-img",
            src: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            alt: movieDetails.title
        });
        const movieDetailInfo = (0, _utils.createElement)("div", {
            className: "movie-detail-info"
        });
        const movieTitle = (0, _utils.createElement)("h1", {
            className: "title-heading",
            textContent: movieDetails.title
        });
        const movieDesc = (0, _utils.createElement)("p", {
            className: "description",
            textContent: movieDetails.overview
        });
        const movieReleaseDate = (0, _utils.createElement)("p", {
            className: "release-date",
            textContent: "Release Date: " + movieDetails.release_date
        });
        const movieGenre = (0, _utils.createElement)("div", {
            className: "genre",
            textContent: "Genre: " + movieDetails.genre
        });
        movieDetailInfo.appendChild(movieTitle);
        movieDetailInfo.appendChild(movieDesc);
        movieDetailInfo.appendChild(movieReleaseDate);
        movieDetailInfo.appendChild(movieGenre);
        const addToFavoriteBtn = (0, _utils.createElement)("button", {
            className: "add-to-favorite-button",
            textContent: "Add to Favorite",
            onclick: ()=>addToFavorite(movieDetails)
        });
        detailsContainer.appendChild(moviePoster);
        detailsContainer.appendChild(movieDetailInfo);
        movieDetailInfo.appendChild(addToFavoriteBtn);
        const similarMoviesContainer = (0, _utils.createElement)("div", {
            className: "similar-movies"
        });
        const similarMoviesTitle = (0, _utils.createElement)("h1", {
            textContent: "Similar Movies"
        });
        const similarMoviesDiv = (0, _utils.createElement)("div", {
            className: "similar-movies-container"
        });
        similarMoviesContainer.appendChild(similarMoviesTitle);
        similarMoviesContainer.appendChild(similarMoviesDiv);
        const similarMovies = await fetchSimilarMovies(movieId);
        similarMovies.forEach(async (movie)=>{
            const similarMovieCard = await createMovieCard(movie);
            similarMoviesDiv.appendChild(similarMovieCard);
        });
        const mainContainer = (0, _utils.createElement)("div", {
            className: "main-container"
        });
        mainContainer.appendChild(detailsContainer);
        mainContainer.appendChild(similarMoviesContainer);
        const root = document.getElementById("cards");
        if (!root) {
            console.error("Could not find 'root' element.");
            return;
        }
        root.innerHTML = "";
        root.appendChild(mainContainer);
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}
function addToFavorite(movie) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav)=>fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Movie added to favorites!");
    } else alert("Movie is already in favorites!");
}
async function fetchSimilarMovies(movieId) {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching similar movies:", error);
        return [];
    }
}
renderMovies();
exports.default = AllMovies;

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["f3BSW","gLLPy"], "gLLPy", "parcelRequire5a21")

//# sourceMappingURL=index.4d6bcbeb.js.map
