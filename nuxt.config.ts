export default defineNuxtConfig({
    auth: {
        strategies: {
            local: {
                _scheme: 'local',
                
            }
        }
    },
    css: [
        'bootstrap/dist/css/bootstrap.css'
    ],
})
