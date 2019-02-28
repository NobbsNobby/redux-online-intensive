//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../REST';
import { uiActions } from '../../ui/actions';
import { usersActions } from '../actions';
import { authActions } from '../../auth/actions';

const usersAction = usersActions.fetchUsersAsync(__.usersData);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;
