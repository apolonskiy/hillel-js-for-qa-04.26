import { Account, BookStore } from "../api";
import { faker } from "@faker-js/faker";
import { jest } from "@jest/globals";

let userToken;
let bookIsbn;

let userCreds;
let createdUserId;

describe("First api tests for Bookstore - Classes based", () => {
  const account = new Account();
  const bookStore = new BookStore();

  beforeEach(async () => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password({
      length: 12,
      prefix: "TestPass1!",
    });
    userCreds = {
      userName: randomUsername,
      password: randomPassword,
    };

    const resp = await account.postUser(userCreds);

    createdUserId = resp.data.userID;

    const userLoginResp = await account.generateToken(userCreds);
    userToken = userLoginResp.data.token;
  });

  afterAll(async () => {
    await account.deleteUserById(createdUserId, userToken);
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
    jest.spyOn(bookStore, "getBooks").mockResolvedValue({
      status: 200,
      data: booksResp,
    });
    const resp = await bookStore.getBooks();
    expect(resp.status).toBe(200);

    expect(resp.data.books).toHaveLength(5);
  });
});
