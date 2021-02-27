import actions from './actions.js';
import mutations from './mutations.js';

export default {
    namespaced: true,
    state: {
        user_array: {},
        todo_array: {},
        user_total: 0,
    },

    getters: {
        user_array: state => page => {
            return state.user_array[page] || [];
        },

        todo_array: state => id => {
            if (state.todo_array[id]) {
                return state.todo_array[id];
            } else {
                return {};
            }
        },

        user_item: state => id => {
            let user_array = [];
            for (let key in state.user_array) {
                user_array.push(...state.user_array[key]);
            }

            if (!user_array.length) {
                return {};
            }

            const user_array_filtered = user_array.filter(item => {
                if (item.id == id) {
                    return true;
                } else {
                    return false;
                }
            });
            return user_array_filtered[0] || {};
        },

        user_total: state => {
            return state.user_total;
        },
    },

    actions,
    mutations,
};
