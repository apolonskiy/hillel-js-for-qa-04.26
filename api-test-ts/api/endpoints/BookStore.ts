import { RestClient } from "../restClient";
import { type AxiosResponse } from "axios";

export class BookStore extends RestClient {
  getBooks(): Promise<AxiosResponse> {
    return this.get({ url: "/BookStore/v1/Books" });
  }

  postBooks(
    userId: string,
    bookIsbns: string[],
    token: string,
  ): Promise<AxiosResponse> {
    return this.post({
      url: "/BookStore/v1/Books",
      data: {
        userId,
        collectionOfIsbns: bookIsbns.map((isbn) => ({ isbn })),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteBooks(userId: string, token: string): Promise<AxiosResponse> {
    return this.delete({
      url: "/BookStore/v1/Books",
      params: {
        UserId: userId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
