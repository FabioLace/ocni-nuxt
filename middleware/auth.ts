export default defineNuxtMiddleware(({ }) => {
    return {
        beforeRouteUpdate(to, from) {
            const token = localStorage.getItem('token')

            if (to.meta.requiresAuth && !token) {
                return '/'
            }
        }
    }
})