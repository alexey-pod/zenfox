import store from 'vuesrc/store/index.js';

export default {
    name: 'ToDo',
    store,

    data() {
        return {
            id: 0,
        };
    },

    components: {},

     created() {
        this.id = this.$route.params.id;
     },

    computed: {
        todo_array() {
             const todo_array = this.$store.getters['users/todo_array'](this.id);
            if (todo_array && Object.keys(todo_array).length) {
                return todo_array;
            } else {
                store.dispatch('users/getTodoArray', this.id);
            }
        },

        user_item() {
            return this.$store.getters['users/user_item'](this.id);
        },
    },
};
