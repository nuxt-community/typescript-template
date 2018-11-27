import { RootState } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
  people: []
})

export const mutations: MutationTree<RootState> = {
  setPeople(state, people) {
    state.people = people
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get(
      "./random-data.json"
    )
    commit("setPeople", people.slice(0, 10))
  }
}
