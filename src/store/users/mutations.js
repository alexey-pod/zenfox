import Vue from 'vue';
export default {
    setUserArray(state, { data, page }) {
        Vue.set(state.user_array, page, data);
    },

    setTodoArray(state, { data, id }) {
        Vue.set(state.todo_array, id, data);
    },

    setUserTotal(state, data) {
        state.user_total = data;
    },
};
