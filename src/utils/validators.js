/**
 * Validates if the email you entered is in the correct format. Returns an error
 * message if the email is in an invalid or `null` format otherwise
 * @param {string} email
 * @returns {string}
 */
export function validateEmail(email) {
  if (email.length === 0) {
    return 'O e-mail é obrigatório';
  }

  if (email.includes(' ')) {
    return 'O e-mail não pode conter espaços';
  }

  if (email.split('@').length > 2) {
    return 'O e-mail possui mais de um "@"';
  }

  const [user, domain] = email.split('@');

  if (!new RegExp('^[a-zA-Z0-9_.+-]*$').test(user)) {
    return 'O e-mail não deve conter caracteres especiais';
  }

  if (!new RegExp('^[a-zA-Z0-9.]*$').test(domain)) {
    return 'O domínio deve conter somente letras e números';
  }

  if (user.length < 3) {
    return 'O e-mail precisa de 3 caracteres antes do "@"';
  }

  if (!email.includes('@')) {
    return 'O e-mail precisa de um "@"';
  }

  if (domain.length < 3) {
    return 'O e-mail precisa de 3 caracteres após o "@"';
  }

  if (!domain.includes('.')) {
    return 'O e-mail precisa de um "." após o domínio';
  }

  const [, ...topLevelDomains] = domain.split('.');

  if (topLevelDomains.filter(x => x.length < 2).length > 0) {
    return 'O e-mail precisa de dois caracteres após o "."';
  }

  return null;
}

/**
 * Validates if the name you entered is in the correct format. Returns an error
 * message if the email is in an invalid or `null` format otherwise
 * @param {string} name
 * @returns {string}
 */
export function validateName(name) {
  const regex = new RegExp(
    "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]*$"
  );

  if (name.length === 0) {
    return 'O nome é obrigatório';
  }

  if (!regex.test(name)) {
    return 'O nome não deve conter caracteres especiais';
  }

  if (name.trim().length < 6) {
    return 'O nome precisa ter pelo menos 6 caracteres';
  }

  return null;
}

/**
 * Validates if the nickname you entered is in the correct format. Returns an error
 * message if the email is in an invalid or `null` format otherwise
 * @param {string} name
 * @returns {string}
 */
export function validateNickname(nick) {
  if (nick.length === 0) {
    return 'O nickname é obrigatório';
  }

  if (!new RegExp('^[a-zA-Z0-9_]*$').test(nick)) {
    return 'Não são permitidos caracteres especiais';
  }

  if (nick.trim().length < 3) {
    return 'O nickname precisa ter pelo menos 3 caracteres';
  }

  return null;
}

/**
 * Validates if the password you entered is in the correct format. Returns an error
 * message if the email is in an invalid or `null` format otherwise
 * @param {string} name
 * @returns {string}
 */
export function validatePassword(pass, name = null) {
  const fieldName = name || 'senha';

  if (pass.length === 0) {
    return `A ${fieldName} é obrigatória`;
  }

  if (pass.includes(' ')) {
    return `A ${fieldName} não pode conter espaços`;
  }

  if (pass.trim().length < 6) {
    return `A ${fieldName} precisa ter pelo menos 6 caracteres`;
  }

  return null;
}

/**
 * Validates if the password confirmation you entered is in the correct format. Returns an error
 * message if the email is in an invalid or `null` format otherwise
 * @param {string} name
 * @returns {string}
 */
export function validatePasswordConfirmation(passConfirm, pass) {
  if (passConfirm.length === 0) {
    return 'A confirmação de senha é obrigatória';
  }

  if (passConfirm !== pass) {
    return 'As senhas não condizem';
  }

  return null;
}

export function returnFirstName(name) {
  const [firstName] = String(name).split(' ');
  return firstName;
}

export function validateWhatsAppNumber(whatsapp) {
  if (whatsapp.trim().length === 0) {
    return null;
  }

  if (!new RegExp('^[0-9]+$').test(whatsapp)) {
    return 'Somente números';
  }

  if (whatsapp.trim().length < 10) {
    return 'O número precisa conter pelo menos 10 caracteres';
  }

  return null;
}
