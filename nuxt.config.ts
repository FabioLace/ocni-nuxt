export default defineNuxtConfig({
    auth: {
        strategies: {
            local: {
                _scheme: 'local',
                // ...
            }
        }
    }
})
