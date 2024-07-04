function compareText(firstText, secondText, compareOption){
    switch ((compareOption)){
        case "contain":
            return expect(firstText).toContain(secondText);
            
        case "not contain":
            return expect(firstText).not.toContain(secondText);

            case "be equal to":
            return expect(firstText).toEqual(secondText);

            default:
                throw Error(`'${compareOption}' is not a valid comparison option!`)
            
    }

}

export default compareText;