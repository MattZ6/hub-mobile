import { showToast } from '~/services/toast';

export function throwRequestErrorMessage(err) {
  const NETWORK_ERROR = 'Error: Network Error';

  if (`${err}`.toLowerCase() === NETWORK_ERROR.toLowerCase()) {
    showToast('Verifique sua conexão com a internet');
    return;
  }

  if (!err || !err.response) {
    showToast('Erro inesperado');
    return;
  }

  if (err.response.status <= 1) {
    showToast('Verifique sua conexão com a internet');
    return;
  }

  if (err.response.status === 429) {
    showToast(
      'Você efetuou muitas tentativas. Tente novamente em alguns minutos'
    );

    return;
  }

  if (err.response.status === 401) {
    showToast('Sua sessão expirou');

    // TODO: Remover usuário

    return;
  }

  if (!err.response.data) {
    showToast('Não foi possível executar esta ação');
    return;
  }

  const { error } = err.response.data;

  if (error) {
    showToast(error);
    return;
  }

  showToast('Erro inesperado');
}
