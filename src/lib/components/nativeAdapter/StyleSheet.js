/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

export default class StyleSheet  {
    static create(stylesArray){
        let resultResult="";
        if(stylesArray!=null){
            console.log(stylesArray);
            for(let style in stylesArray)
                resultResult+="";
        }

        return resultResult;
    }
    static getStyleString(styleObject){
        let resultResult="";
        styleObject.forEach(style=>{resultResult+=this.getStyleItemString(style.name,style.value)});
        return resultResult;
    }
    static getStyleItemString(styleName,styleValue){
        let name=(styleName+"".trim()).toLowerCase();
        if(name==="backgroundColor"){
            return "background-color:"+styleValue+";";
        }
        return "";
    }
}

