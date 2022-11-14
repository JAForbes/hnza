import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/y/hnza_stuff/hnza/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}