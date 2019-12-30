/**
 * Validates if the email you entered is in the correct format. Returns an error
 * message if the email is in an invalid or null format otherwise
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
