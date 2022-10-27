export function readSession(SupabaseClient){
    return SupabaseClient.auth.user();
}
export function clearSession(SupabaseClient){
    SupabaseClient.auth.signOut();
}