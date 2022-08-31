import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value === name ? { forbiddenName: control.value } : null;
    }
}

export const bobValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'Bob' ? { forbiddenName: control.value } : null;
}

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl)
: ValidationErrors | null => {
    const fName = control.get('firstName');
    const lName = control.get('lastName');
    return fName?.value === lName?.value ? { identityRevealed: true } : null;
}
