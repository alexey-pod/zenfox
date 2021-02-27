import store from 'vuesrc/store/index.js';
import Pagination from './components/pagination/index.vue';

export default {
    name: 'Users',
    store,

    data() {
        return {
            id: 0,
            page: 1,
            pp: 5,
        };
    },

    components: {
        Pagination,
    },

    computed: {
        user_array() {
            const user_array = this.$store.getters['users/user_array'](this.page);
            if (!user_array.length) {
                store.dispatch('users/getUserArray', { page: this.page, pp: this.pp });
                return [];
            } else {
                return user_array;
            }
        },
        user_total() {
            return this.$store.getters['users/user_total'];
        },
    },

    methods: {
        setPage(page) {
            this.page = page;
        },
    },
};
