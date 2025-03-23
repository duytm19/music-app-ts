import unicode from 'unidecode'
export const convert = (text:string):string =>{
    const unicodeText = unicode(text.trim())
    let newStr: string= ""

     newStr =unicodeText.replace(/\s+/g, "-");
    return newStr
}       