import Axios, { AxiosResponse } from 'axios';
import { GET_COMMENTS } from '/data/rootActionTypes';

//post

export const POST_CREATE_POST = 'api/post'; //request body {contents:string}
export const POST_CREATE_COMMENT = (userId: number, postId: number) => `api/user/${userId}/post/${postId}/comment`; //request body {contents:string}
export const GET_POST_LIST = (userId?: number) => `api/user/${userId}/post/list`;
export const GET_COMMENT_LIST = (userId: number, postId: number) => `api/user/${userId}/post/${postId}/comment/list`;
export const PATCH_LIKE_POST = (userId: number, postId: number) => `api/user/${userId}/post/${postId}/like`;
//push
export const POST_SUBSCRIBE = 'api/subscribe'; //subscription body {"auth": "string","notificationEndPoint": "string","publicKey": "string"}
//user
export const GET_USER_CONNECTION = 'api/user/connections';
export const POST_EMAIL_EXIST = 'api/user/exists'; // request body {"address": "test00@gmail.com"};
export const POST_JOIN = 'api/user/join'; // credentials이메일,file,name이름,principal비번;
export const GET_USER_ME_AXIOS = 'api/user/me';

const apiUrl = 'http://15.164.170.211:8080/';

//유형별 api 정리
export const getApi = async (url: string): Promise<AxiosResponse<any>> => {
  try {
    const data = await Axios.get(`${apiUrl}${url}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchApi = async (url: string): Promise<AxiosResponse<any>> => {
  try {
    const data = await Axios.patch(`${apiUrl}${url}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const postApi = async (url: string, body: object): Promise<AxiosResponse<any>> => {
  try {
    const data = await Axios.post(`${apiUrl}${url}`, body);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//최종 api
export const getPostsApi = (userId: number) => getApi(GET_POST_LIST(userId));
export const likePostApi = (userId: number, postId: number) => patchApi(PATCH_LIKE_POST(userId, postId));
export const writePostApi = (contents: string) => postApi(POST_CREATE_POST, { contents });
export const getMeApi = () => getApi(GET_USER_ME_AXIOS);
export const emailExist = (address: string) => postApi(POST_EMAIL_EXIST, { address });
export const writeCommentApi = (postId: number, contents: string, userId: number) =>
  postApi(POST_CREATE_COMMENT(userId, postId), { contents });
export const getCommentApi = (userId: number, postId: number) => getApi(GET_COMMENT_LIST(userId, postId));
