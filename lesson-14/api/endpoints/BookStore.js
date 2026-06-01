import { RestClient } from "../restClient";

export class BookStore extends RestClient {
  getBooks() {
    return this.get({ url: "/BookStore/v1/Books" });
  }

  postBooks(userId, bookIsbns, token) {
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

  deleteBooks(userId, token) {
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
