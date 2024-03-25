/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/collections/': RouteRecordInfo<'/collections/', '/collections', Record<never, never>, Record<never, never>>,
    '/collections/edit/[nom]': RouteRecordInfo<'/collections/edit/[nom]', '/collections/edit/:nom', { nom: ParamValue<true> }, { nom: ParamValue<false> }>,
    '/films/': RouteRecordInfo<'/films/', '/films', Record<never, never>, Record<never, never>>,
    '/films/edit/[titre]': RouteRecordInfo<'/films/edit/[titre]', '/films/edit/:titre', { titre: ParamValue<true> }, { titre: ParamValue<false> }>,
  }
}
