import axios from 'axios';

export default {
    getUserArray({ commit }, { page, pp }) {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${pp}`,
        })
            .then(result => {
                commit('setUserTotal', result.headers['x-total-count']);
                commit('setUserArray', { data: result.data, page });
            })
            .catch(() => {})
            .finally(() => {});
    },

    getTodoArray({ commit }, id) {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
        })
            .then(result => {
                commit('setTodoArray', { data: result.data, id });
            })
            .catch(() => {})
            .finally(() => {});
    },
};
