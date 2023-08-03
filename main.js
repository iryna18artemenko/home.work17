function simpleNumber (numberPhone) {

    const regexp = /\+?(\d{3})?[- ]*(\d{2})?[- ]*(\d{3})?[- ]*(\d{2})?[- ]*(\d{2})/s;
    let resultReg = numberPhone.replace(regexp, '0$2$3$4$5');
    return  resultReg 
    
}



console.log (simpleNumber("380 44 364 83 65"));
console.log (simpleNumber("+380 44 364 83 65"));
console.log (simpleNumber("380-44-364-83-65"));
console.log (simpleNumber("+38 044-364-83-65"));


