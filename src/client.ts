import axios from 'axios';
import { IPInfo } from './types';

const BASE_URL = 'https://api.ipquery.io/';

export async function queryIP(ip: string): Promise<IPInfo> {
  const response = await axios.get(`${BASE_URL}${ip}`);
  return response.data;
}

export async function queryOwnIP(): Promise<string> {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function queryBulk(ips: string[]): Promise<IPInfo[]> {
  const ipList = ips.join(',');
  const response = await axios.get(`${BASE_URL}${ipList}`);
  return response.data;
}
