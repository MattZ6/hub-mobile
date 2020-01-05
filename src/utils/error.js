import { showToast } from '~/services/toast';

export function throwRequestErrorMessage(err) {
  if (!err || !err.response || !err.response.data) {
    showToast('Não foi possível executar esta ação');
    return;
  }

  const { error } = err.response.data;

  if (err.response.status === 401) {
    showToast('Sua sessão expirou');

    // TODO: Remover usuário

    return;
  }

  if (error) {
    showToast(error);
    return;
  }

  showToast('Erro inesperado');
}
