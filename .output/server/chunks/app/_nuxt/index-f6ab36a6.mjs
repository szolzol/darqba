import { _ as _export_sfc, a as __nuxt_component_0$2 } from '../server.mjs';
import __nuxt_component_1$1 from './Icon-81e38008.mjs';
import { useSSRContext, mergeProps, computed, ref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1, d as db } from './firebase-e5d2d14d.mjs';
import { collection, query, orderBy, getDocs, getCountFromServer } from 'firebase/firestore';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'firebase/app';

const _sfc_main$2 = {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 200) + "...";
    });
    return { snippet };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Icon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-8 max-w-sm p-6 h-96 sm:w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-900" }, _attrs))}><h5 class="whitespace-normal font-primary font-black mb-2 text-2xl tracking-tight text-red-800 dark:text-red-500">${ssrInterpolate($props.post.title)}</h5><p class="mb-3">${ssrInterpolate($setup.snippet)}</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/posts/${$props.post.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute bottom-3 w-10/12 ml-1 rounded-lg text-red-800 dark:text-red-500 hover:text-red-600 dark:hover:bg-red-300 hover:bg-red-200 border-4 border-red-800 dark:border-red-500"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa6-solid:skull",
          class: "font-primary font-black mb-2 text-4xl tracking-tight mx-4 mt-2"
        }, null, _parent2, _scopeId));
        _push2(` Megold\xE1s </div>`);
      } else {
        return [
          createVNode("div", { class: "absolute bottom-3 w-10/12 ml-1 rounded-lg text-red-800 dark:text-red-500 hover:text-red-600 dark:hover:bg-red-300 hover:bg-red-200 border-4 border-red-800 dark:border-red-500" }, [
            createVNode(_component_Icon, {
              name: "fa6-solid:skull",
              class: "font-primary font-black mb-2 text-4xl tracking-tight mx-4 mt-2"
            }),
            createTextVNode(" Megold\xE1s ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SinglePost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["posts"]
  // components: { SinglePost },
  // setup() {},
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SinglePost = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.posts.length) {
    _push(`<div class="mx-auto md:max-w-3xl lg:max-w-3xl xl:max-w-6xl grid grow-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center"><!--[-->`);
    ssrRenderList($props.posts, (post) => {
      _push(`<div class="">`);
      _push(ssrRenderComponent(_component_SinglePost, { post }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div class="errortext">Nincsenek feladv\xE1nyok ilyen taggel...</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const count = ref(null);
  const load = async () => {
    try {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("postDate", "desc"));
      const querySnapshot = await getDocs(q);
      posts.value = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      const coll = collection(db, "posts");
      const snapshot = await getCountFromServer(coll);
      count.value = snapshot.data().count;
      console.log("count: ", count.value);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, count, load };
};
const _sfc_main = {
  name: "Home",
  components: { PostList: __nuxt_component_0, Spinner: __nuxt_component_1 },
  setup() {
    const { posts, error, count, load } = getPosts();
    load();
    return { posts, error, count };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PostList = __nuxt_component_0;
  const _component_Spinner = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mx-auto text-center pb-10 pt-5 sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-6xl"><h2 class="p-2 text-justify"> Minden feladv\xE1nyn\xE1l sz\xFCks\xE9getek lesz egy j\xE1t\xE9kmesterre, a megold\xE1st csak \u0151 olvashatja el. A t\xF6bbiek ezut\xE1n olyan k\xE9rd\xE9seket tesznek fel neki, amelyekre IGEN-nel vagy NEM-mel tud a j\xE1t\xE9kmester v\xE1laszolni. Ha eleinte a s\xF6t\xE9tben is tapogat\xF3ztok, j\xF3 logik\xE1val l\xE9p\xE9sr\u0151l-l\xE9p\xE9sre eljuthattok a megold\xE1sig. <br><br> Amikor a j\xE1t\xE9kmester \xFAgy d\xF6nt, hogy valaki r\xE1j\xF6tt a t\xF6rt\xE9net nyitj\xE1ra, felolvassa a t\xF6bbieknek a megfejt\xE9st, felfedve a rejt\xE9ly teljes megold\xE1s\xE1t. </h2></div><div>`);
  if ($setup.error) {
    _push(`<div class="errortext">${ssrInterpolate($setup.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.posts.length) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_PostList, { posts: $setup.posts }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_Spinner, null, null, _parent));
    _push(`</div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f6ab36a6.mjs.map
