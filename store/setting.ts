import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import type { RootState } from './index'

export const namespace = 'setting'

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

export const actionType = {
  TOGGLE_DARK_MODE: 'toggleDarkMode'
}

export const actions: ActionTree<SettingState, RootState> = {
  nuxtServerInit ({ commit }, _context: Context) {
    commit(MutationType.CHANGE_DARK_MODE, true)
  },

  [actionType.TOGGLE_DARK_MODE] ({ commit, state }) {
    commit(MutationType.CHANGE_DARK_MODE, !state.darkMode)
  }
}
