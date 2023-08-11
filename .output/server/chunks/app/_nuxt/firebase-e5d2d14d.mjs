import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { getApps, initializeApp, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spin" }, _attrs))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const firebaseConfig = {
  apiKey: "AIzaSyAuBLiMU_gBTIReCTFnYkpOyA0EfjOqOgI",
  authDomain: "darqba-b5273.firebaseapp.com",
  projectId: "darqba-b5273",
  storageBucket: "darqba-b5273.appspot.com",
  messagingSenderId: "170640110079",
  appId: "1:170640110079:web:0d72b4e2cf04e2d69bb7ca",
  measurementId: "G-9RYV7H2JPG"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { __nuxt_component_1 as _, db as d };
//# sourceMappingURL=firebase-e5d2d14d.mjs.map
