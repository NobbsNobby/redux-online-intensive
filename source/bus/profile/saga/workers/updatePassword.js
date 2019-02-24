//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { authActions } from '../../../auth/actions';

export function* updatePassword ({ payload: {
    oldPassword, newPassword,
}}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.profile.updateProfile, [{
            oldPassword,
            newPassword,
        }]);
        const { data: updatePasswordInfo, message } = yield apply(response, response.json);

        console.log('-> updatePasswordInfo', updatePasswordInfo);

        if (response.status !== 200) {
            throw new Error(message);
        }
        // Выкидываем из аккаунта при успешном изменении пароля . Это логичнее вроде
        yield put(authActions.logoutAsync());
    } catch (error) {
        yield put(profileActions.emitError(error, 'updateAvatar worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
