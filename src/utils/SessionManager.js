const USERKEY= "taskademicUser";
export function writeSession(taskademicUser){
    sessionStorage.setItem(USERKEY, JSON.stringify(taskademicUser));
}
export function readSession(){
    return JSON.parse(sessionStorage.getItem(USERKEY));
}
export function clearSession(){
    sessionStorage.removeItem(USERKEY);
}