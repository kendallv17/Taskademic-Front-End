export default function GetWindowSize(){
    const { innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}