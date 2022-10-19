export function useAuthState () {
    const supabase = useSupabaseClient();

    supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
            case 'SIGNED_OUT':
                return navigateTo('/auth');
            case 'SIGNED_IN':
                return navigateTo('/');
        }
    });
}
