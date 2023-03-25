const btnLogin = document.getElementById('btn-login')! as HTMLButtonElement;
const inputs : NodeListOf<HTMLInputElement> = document.querySelectorAll('input')!;
let emailErrorMessage : string = 'El correo electrónico debe contener un formato válido correo@mail.sv';
let passwordErrorMessage : string = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial.';

inputs.forEach( e => e.addEventListener('keyup', e => validarTipo(e.target as HTMLInputElement)));

btnLogin.addEventListener('click', () => console.log('nadaxd'));

const validarTipo : Function = (input : HTMLElement) => {
    const tipoInput : string = input.dataset.tipo!;
    if (tiposInput[tipoInput]) tiposInput[tipoInput](input) as Function;
};

const tiposInput : {
    [index : string]: Function
} = {
    email: (input : HTMLInputElement) => validarEmail(input) as Function,
    password: (input : HTMLInputElement) => validarPassword(input) as Function,
};

const validarEmail : Function = (input : HTMLInputElement) => input.validity.valid ? (input.classList.add('input-valid'), input.classList.remove('input-error')) : (input.classList.add('input-error'), input.classList.remove('input-valid'));
const validarPassword : Function = (input : HTMLInputElement) => input.validity.valid ? (input.classList.add('input-valid'), input.classList.remove('input-error')) : (input.classList.add('input-error'), input.classList.remove('input-valid'));
