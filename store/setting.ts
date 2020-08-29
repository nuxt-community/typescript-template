import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import type { RootState } from './index'

const namespace = 'setting'

export interface SettingState {
  darkMode: boolean
}

export const state = (): SettingState => ({
  darkMode: false
})

export const getters: GetterTree<SettingState, RootState> = {
}

export const MutationType = {
  CHANGE_DARK_MODE: 'changeDarkMode'
}

export const mutations: MutationTree<SettingState> = {
  [MutationType.CHANGE_DARK_MODE]: (state, newMode: boolean) => { state.darkMode = newMode }
}

const actionType = {
  TOGGLE_DARK_MODE: 'toggleDarkMode'
}

type ActionTypeKey = (keyof typeof actionType)
type NameSapcedAction = Record<ActionTypeKey, string>

export const NamespacedActionType = (Object.keys(actionType) as ActionTypeKey[])
  .reduce<Partial<NameSapcedAction>>((namespaced, key) => ({ ...namespaced, [key]: `${namespace}/${actionType[key]}` }), {}) as NameSapcedAction

export const actions: ActionTree<SettingState, RootState> = {
  nuxtServerInit ({ commit }, _context: Context) {
    commit(MutationType.CHANGE_DARK_MODE, true)
  },

  [actionType.TOGGLE_DARK_MODE] ({ commit, state }) {
    commit(MutationType.CHANGE_DARK_MODE, !state.darkMode)
  }
}
