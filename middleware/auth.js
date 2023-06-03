export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == undefined) {
      return navigateTo("/login");
    } 
  }
});
