import {AuthResponse, HttpResponse, LoginInformation} from '@/types';

import axiosClient, {handleRequest} from './axiosClient';

const userApi = {
  getDetail: (): Promise<HttpResponse<AuthResponse>> => {
    const url = `/api/public/auth`;
    return handleRequest(axiosClient.post(url, body));
  },
};

export default userApi;
