import { jest } from "@jest/globals";

const mockRequest = jest.fn();
const mockAxiosCreate = jest.fn(() => ({
  request: mockRequest,
}));

jest.unstable_mockModule("axios", () => ({
  default: {
    create: mockAxiosCreate,
  },
}));

const { BookStore } = await import("../api/index.js");

describe("Bookstore API - mocked tests", () => {
  beforeEach(() => {
    mockRequest.mockReset();
    mockAxiosCreate.mockClear();
  });

  test("Get all books - success basic scenario", async () => {
    const bookStore = new BookStore();
    const booksResp = {
      books: [
        { isbn: "9781449325862" },
        { isbn: "9781449331818" },
        { isbn: "9781449337711" },
        { isbn: "9781449365035" },
        { isbn: "9781491950296" },
      ],
    };

    mockRequest.mockResolvedValueOnce({
      status: 200,
      data: booksResp,
    });

    const resp = await bookStore.getBooks();

    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: expect.any(String),
      validateStatus: expect.any(Function),
    });
    expect(mockRequest).toHaveBeenCalledWith({
      method: "GET",
      url: "/BookStore/v1/Books",
      data: {},
      params: {},
      headers: {},
    });
    expect(resp.status).toBe(200);
    expect(resp.data.books).toHaveLength(5);
    expect(resp.data).toMatchObject(booksResp);
  });
});
