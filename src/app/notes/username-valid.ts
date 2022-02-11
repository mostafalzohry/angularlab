import { AbstractControl } from "@angular/forms";

export function notallowedName(control: AbstractControl){
    const notallowedName1 = /admin/.test(control.value)
    const notallowedName2 = /administrator/.test(control.value)
    return notallowedName1 || notallowedName2? {"notallowedName":{value: control.value}}:null;
}
