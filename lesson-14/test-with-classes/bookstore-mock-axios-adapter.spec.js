import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BookStore } from "../api/index.js";

describe("Bookstore API - mocked tests", () => {
  let mock = new MockAdapter(axios);
  let bookStore = new BookStore();

  afterEach(() => {
    mock.restore();
  });

  test("Get all books - success basic scenario", async () => {
    const booksResp = {
      books: [
        { isbn: "9781449325862" },
        { isbn: "9781449331818" },
        { isbn: "9781449337711" },
        { isbn: "9781449365035" },
        { isbn: "9781491950296" },
      ],
    };

    mock.onGet("/BookStore/v1/Books").reply(200, booksResp);

    const resp = await bookStore.getBooks();

    expect(resp.status).toBe(200);
    expect(resp.data.books).toHaveLength(5);
    expect(resp.data).toMatchObject(booksResp);
  });
});
