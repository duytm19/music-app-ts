export const convert = (text:string):string =>{
    let newStr: string= ""
     newStr =text.trim().replace(/\s+/g, "-");
    return newStr
}