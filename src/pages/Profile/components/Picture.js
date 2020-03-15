import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/services/api';
import { getPictureFromGallery } from '~/services/gallery';

import { updateProfileSuccess } from '~/store/modules/user/actions';

import { throwRequestErrorMessage } from '~/utils/error';

import Avatar from '~/components/Avatar';

import { AvatarButton, IconContainer, ChangePictureIcon } from '../styles';

export default function Picture() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [submiting, setSubmiting] = React.useState(false);

  async function changePicture(proxy) {
    setSubmiting(true);

    try {
      const { data } = await api.post('/v1/avatar', proxy);

      dispatch(updateProfileSuccess(data));
    } catch (error) {
      throwRequestErrorMessage(error);
    } finally {
      setSubmiting(false);
    }
  }

  async function handleChangePicture() {
    const picData = await getPictureFromGallery();

    if (!picData) {
      return;
    }

    changePicture(picData);
  }

  function getUrl() {
    return profile.avatar ? profile.avatar.url : null;
  }

  return (
    <AvatarButton
      disabled={submiting}
      onPress={handleChangePicture}
      havePicture={!!getUrl()}>
      <Avatar
        name={profile.name}
        url={getUrl()}
        loading={submiting}
        size={120}
      />

      {!submiting && (
        <IconContainer>
          <ChangePictureIcon />
        </IconContainer>
      )}
    </AvatarButton>
  );
}
