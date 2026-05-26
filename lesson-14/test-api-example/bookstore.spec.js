import { getBooks, loginUser, postBooks, getUserById, deleteBooks } from '../axios-example.js';

let userToken;
let userId;
let bookIsbn;

describe('First api tests for Bookstore', () => {
    beforeAll(async () => {
        const userLoginResp = await loginUser({
            userName: 'andrii_1',
            password: 'TestPass1!'
        });
        userToken = userLoginResp.data.token;
        userId = userLoginResp.data.userId;
    })

    afterAll(async () => {
        console.log(await deleteBooks(userId, userToken, bookIsbn));
    })

    test('Get all books - success basic scenario', async () => {
        const resp = await getBooks();
        expect(resp.status).toBe(200);
        expect(resp.data.books).toHaveLength(8);
    })

    test('Get user by ID - success basic scenario', async () => {
        const resp = await getUserById(userId, userToken);
        expect(resp.status).toBe(200);
        expect(resp.data.userId).toBe(userId);
        expect(resp.data.username).toBe('andrii_1');
        expect(Array.isArray(resp.data.books)).toBe(true);
    })

     test('Get user by ID - failure wrong user id', async () => {
        const resp = await getUserById('sdgdfgdgdgdeg7657', userToken);
        console.log(resp);
        expect(resp.status).toBe(401);
        expect(resp.data.message).toBe('User not found!');
    })

    test('Get user by ID - failure invalid token', async () => {
        const resp = await getUserById(userId, 'invalidToken');
        console.log(resp);
        expect(resp.status).toBe(401);
        expect(resp.data.message).toBe('User not authorized!');
    })

    test('Post user book - success scenario', async () => {
        const getBooksResp = await getBooks();
        bookIsbn = getBooksResp.data.books[5].isbn;

        const resp = await postBooks(userId, userToken, bookIsbn);
        expect(resp.status).toBe(201);
        expect(resp.data.books).toEqual([{"isbn": bookIsbn}]);
    })

})