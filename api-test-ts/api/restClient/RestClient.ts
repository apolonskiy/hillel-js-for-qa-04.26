import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import { type AxiosResponse } from "axios";

const configPath = path.resolve(
  process.cwd(),
  `api/config/config-${process.env.TEST_ENV}.json`,
);
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));

export class RestClient {
  #axiosInstance;
  baseURL: string;
  constructor() {
    this.baseURL = config.baseURL;
    this.#axiosInstance = axios.create({
      baseURL: this.baseURL,
      validateStatus: () => true,
    });
  }

  #callEndpoint(
    method: string,
    url: string,
    data: any = {},
    params: any = {},
    headers: any = {},
  ): Promise<AxiosResponse> {
    return this.#axiosInstance.request({
      method,
      url,
      data,
      params,
      headers,
    });
  }

  get({
    url,
    params,
    headers,
  }: {
    url: string;
    params?: any;
    headers?: any;
  }): Promise<AxiosResponse> {
    return this.#callEndpoint("GET", url, {}, params, headers);
  }

  post({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
  }): Promise<AxiosResponse> {
    return this.#callEndpoint("POST", url, data, params, headers);
  }

  delete({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
  }): Promise<AxiosResponse> {
    return this.#callEndpoint("DELETE", url, data, params, headers);
  }

  put({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
  }): Promise<AxiosResponse> {
    return this.#callEndpoint("PUT", url, data, params, headers);
  }

  patch({
    url,
    data,
    params,
    headers,
  }: {
    url: string;
    data?: any;
    params?: any;
    headers?: any;
  }): Promise<AxiosResponse> {
    return this.#callEndpoint("PATCH", url, data, params, headers);
  }
}
