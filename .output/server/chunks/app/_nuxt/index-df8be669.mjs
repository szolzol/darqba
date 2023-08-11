import { _ as _export_sfc, a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'klona';
import 'lodash-es';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/posts",
    type: "NuxtLink",
    class: "w-10/12 mx-auto px-5 py-2 flex justify-center items-center bg-neutral-800 hover:bg-red-900 focus:ring-red-800 focus:ring-offset-red-200 text-neutral-200 transition ease-in duration-200 text-center text-base font-black shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Bel\xE9p\xE9s... `);
      } else {
        return [
          createTextVNode(" Bel\xE9p\xE9s... ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LoginButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url(&#39;https://images.unsplash.com/photo-1534577403868-27b805ca4b9c?fit=fillmax&amp;fm=jpg&amp;ixid=MnwzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTY4Mjg3OTQzOA&amp;ixlib=rb-4.0.3&amp;q=75&#39;)]"><div class="z-10 absolute w-full h-screen flex justify-center items-center"><div class="text-center mx-auto"><h1 class="z-40 text-4xl sm:text-6xl font-primary font-medium text-white mb-10"> Rejt\xE9lyes t\xF6rt\xE9netek </h1>`);
  _push(ssrRenderComponent(_component_LoginButton, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-df8be669.mjs.map
