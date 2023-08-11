import { _ as _export_sfc, a as __nuxt_component_0$2, b as __nuxt_component_1$1 } from '../server.mjs';
import { _ as __nuxt_component_1, d as db } from './firebase-e5d2d14d.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import 'firebase/app';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        post.value = { ...docSnap.data(), id: docSnap.id };
      } else {
        throw Error("Nincs ilyen feladv\xE1nyunk...");
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
const _sfc_main = {
  props: ["id"],
  components: { Spinner: __nuxt_component_1 },
  setup(props) {
    const route = useRoute();
    const { error, post, load } = getPost(route.params.id);
    load();
    return {
      error,
      post
      //   , handleClick
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_UButton = __nuxt_component_1$1;
  const _component_Spinner = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  if ($setup.error) {
    _push(`<div class="errortext">${ssrInterpolate($setup.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.post) {
    _push(`<div class="mx-auto md:max-w-3xl lg:max-w-3xl grid grow-0 grid-cols-1 justify-items-left p-4"><h1 class="my-4 whitespace-normal font-primary font-black text-2xl tracking-tight text-red-800 dark:text-red-500">${ssrInterpolate($setup.post.title)}</h1><p class="my-4">${ssrInterpolate($setup.post.body)}</p><p class="my-4 text-justify font-semibold">${ssrInterpolate($setup.post.answer)}</p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "my-4",
      to: "/posts"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_UButton, {
            class: "font-extrabold",
            color: "red",
            variant: "solid",
            size: "xl"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Megfejtett\xFCk!!`);
              } else {
                return [
                  createTextVNode("Megfejtett\xFCk!!")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_UButton, {
              class: "font-extrabold",
              color: "red",
              variant: "solid",
              size: "xl"
            }, {
              default: withCtx(() => [
                createTextVNode("Megfejtett\xFCk!!")
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_Spinner, null, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c17e3777.mjs.map
