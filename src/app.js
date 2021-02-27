import router from 'vuesrc/plugin/router/index.js';

export default app => {
    return {
        router,
        template: `
        <div id="app">
            <div class="wrapper">
                <div class="wrapper-content">
					<keep-alive include="Users">
                    <router-view></router-view>
					</keep-alive>
                </div>
            </div>
        </div>
        `,
    };
};
