// this file is created manually to override some stuff because I wanted this to work on GH-Pages.
// for more details: https://levelup.gitconnected.com/how-to-deploy-your-vue-app-to-github-pages-897136799e19
// and: https://github.com/tschaub/gh-pages
// also: https://github.com/vuejs/vue-cli/issues/1955
// this too: https://cli.vuejs.org/config/#filenamehashing

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fireVue/'
        : '/'
}