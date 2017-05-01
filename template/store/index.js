export const state = {
  selected: 1
}

export const mutations = {
  select(state, id) {
    state.selected = id
  }
}
