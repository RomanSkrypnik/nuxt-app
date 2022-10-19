export default defineNuxtRouteMiddleware(async (to, _from) => {
    const supabase = useSupabaseClient();
    const session = supabase.auth.session();
    if (!session?.user) {
        return navigateTo('/auth');
    }
});
