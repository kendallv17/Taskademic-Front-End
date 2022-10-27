const USERKEY= "taskademicUser";
export function writeSession(taskademicUser){
    localStorage.setItem(USERKEY, JSON.stringify(taskademicUser));
}
export function readSession(){
    return JSON.parse(localStorage.getItem(USERKEY));
}
export function clearSession(){
    localStorage.removeItem(USERKEY);
}