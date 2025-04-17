import axios from 'axios';
import { IPInfo, IPAddress } from './types';

const BASE_URL = 'https://api.ipquery.io/';

function isValidIP(ip: string): boolean {
  const ipv4 = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  const ipv6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4.test(ip) || ipv6.test(ip);
}

function asIPAddresses(ips: string[]): IPAddress[] {
  return ips.map(ip => {
    if (!isValidIP(ip)) {
      throw new Error(`Invalid IP address: ${ip}`);
    }
    return ip as IPAddress;
  });
}

export async function queryIP(ip: IPAddress): Promise<IPInfo> {
  if (!isValidIP(ip)) {
    throw new Error(`Invalid IP address: ${ip}`);
  }
  const response = await axios.get(`${BASE_URL}${ip}`);
  return response.data;
}

export async function queryOwnIP(): Promise<string> {
  const response = await axios.get(BASE_URL);
  return response.data;
}

export async function queryBulk(ips: string[]): Promise<IPInfo[]> {
  const validatedIps = asIPAddresses(ips);
  const ipList = validatedIps.join(',');
  const response = await axios.get(`${BASE_URL}${ipList}`);
  return response.data;
}
