export default {
    name: 'Pagination',

    props: ['pp', 'page', 'total'],

    methods: {
        select(page) {
            this.$emit('select', page);
        },

        prev() {
            if (this.page - 1) {
                this.$emit('select', this.page - 1);
            }
        },

        next() {
            if (this.page + 1 <= this.total_pages) {
                this.$emit('select', this.page + 1);
            }
        },
    },

    computed: {
        total_pages() {
            return Math.ceil(this.total / this.pp);
        },
    },
};
