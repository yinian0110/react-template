import { Effect } from 'umi';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    logout: Effect;
  };
  reducers: {};
}

const Model: LoginModelType = {
  namespace: 'login',
  state: {
    status: undefined,
  },

  effects: {
    logout() {},
  },

  reducers: {},
};

export default Model;
