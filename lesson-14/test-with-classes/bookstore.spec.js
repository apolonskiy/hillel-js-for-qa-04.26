import { Account, BookStore } from "../api";
import { faker } from "@faker-js/faker";

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
    const resp = await bookStore.getBooks();
    expect(resp.status).toBe(200);

    expect(resp.data.books).toHaveLength(8);
  });

  test("Post user - success scenario with random data", async () => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password({
      length: 12,
      prefix: "TestPass1!",
    });

    const resp = await account.postUser({
      userName: randomUsername,
      password: randomPassword,
    });

    expect(resp.status).toBe(201);
    expect(resp.data.userID).toBeDefined();
    expect(resp.data.username).toBe(randomUsername);
    expect(Array.isArray(resp.data.books)).toBe(true);
    expect(resp.data.books).toHaveLength(0);
  });

  test("Delete user - success scenario with random data", async () => {
    const resp = await account.deleteUserById(createdUserId, userToken);

    expect(resp.status).toBe(204);
  });

  test("Get user by ID - success basic scenario", async () => {
    const resp = await account.getUserById(createdUserId, userToken);
    expect(resp.status).toBe(200);
    expect(resp.data.userId).toBe(createdUserId);
    expect(resp.data.username).toBe(userCreds.userName);
    expect(Array.isArray(resp.data.books)).toBe(true);
  });

  test("Get user by ID - failure wrong user id", async () => {
    const resp = await account.getUserById("sdgdfgdgdgdeg7657", userToken);
    expect(resp.status).toBe(401);
    expect(resp.data.message).toBe("User not found!");
  });

  test("Get user by ID - failure invalid token", async () => {
    const resp = await account.getUserById(createdUserId, "invalidToken");
    expect(resp.status).toBe(401);
    expect(resp.data.message).toBe("User not authorized!");
  });

  test("Post user book - success scenario", async () => {
    const getBooksResp = await bookStore.getBooks();
    bookIsbn = getBooksResp.data.books[5].isbn;

    const resp = await bookStore.postBooks(
      createdUserId,
      getBooksResp.data.books.map((b) => b.isbn),
      userToken,
    );
    expect(resp.status).toBe(201);
    expect(resp.data.books).toEqual(
      getBooksResp.data.books.map((b) => ({ isbn: b.isbn })),
    );
  });
});
