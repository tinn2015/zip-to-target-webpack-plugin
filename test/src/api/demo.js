import Ax from './axios';
import config from '../const/config';

const API = config.BACE_API;

// 获取城市列表
export const getList = () => Ax.get(`${API}/cityList`);

// 获取运营数据
export const getData = () => Ax.get(`${API}/summary`);
