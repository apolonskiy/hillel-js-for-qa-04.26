// generate token
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is a valid JSON object", function () {
    const json = pm.response.json();
    pm.expect(json).to.be.an("object");
});

pm.test("Response contains a token", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("token");
    pm.expect(json.token).to.be.a("string").and.not.empty;
});

pm.test("Response contains an expiry date", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("expires");
    pm.expect(json.expires).to.be.a("string").and.not.empty;
});

pm.test("Response status is 'Success'", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("status");
    pm.expect(json.status).to.eql("Success");
});

pm.test("Response result indicates user authorized successfully", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("result");
    pm.expect(json.result).to.eql("User authorized successfully.");
});

pm.test("Response time is under 5000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});


// ------- login
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is a JSON object", function () {
    const json = pm.response.json();
    pm.expect(json).to.be.an("object");
    pm.expect(Array.isArray(json)).to.be.false;
});

pm.test("Response contains userId", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("userId");
    pm.expect(json.userId).to.be.a("string").and.not.empty;
});

pm.test("Response contains username", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("username");
    pm.expect(json.username).to.be.a("string").and.not.empty;
});

pm.test("Response contains a token", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("token");
    pm.expect(json.token).to.be.a("string").and.not.empty;
});

pm.test("Response contains an expiry date", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("expires");
    pm.expect(json.expires).to.be.a("string").and.not.empty;
    pm.expect(new Date(json.expires).toString()).to.not.equal("Invalid Date");
});

pm.test("Response contains created_date", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("created_date");
    pm.expect(json.created_date).to.be.a("string").and.not.empty;
    pm.expect(new Date(json.created_date).toString()).to.not.equal("Invalid Date");
});

pm.test("Response contains isActive field", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("isActive");
    pm.expect(json.isActive).to.be.a("boolean");
});

pm.test("Response time is under 5000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});

const json = pm.response.json();
pm.collectionVariables.set("token", json.token);
pm.collectionVariables.set("userId", json.userId);

// get user
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is a valid JSON object", function () {
    const json = pm.response.json();
    pm.expect(json).to.be.an("object");
});

pm.test("Response contains userId", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("userId");
    pm.expect(json.userId).to.be.a("string").and.not.empty;
});

pm.test("Response contains username", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("username");
    pm.expect(json.username).to.be.a("string").and.not.empty;
});

pm.test("Response contains books array", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("books");
    pm.expect(json.books).to.be.an("array");
});

pm.test("Each book has required fields", function () {
    const json = pm.response.json();
    if (json.books.length > 0) {
        json.books.forEach(function (book) {
            pm.expect(book).to.have.property("isbn").that.is.a("string");
            pm.expect(book).to.have.property("title").that.is.a("string");
            pm.expect(book).to.have.property("author").that.is.a("string");
            pm.expect(book).to.have.property("pages").that.is.a("number");
        });
    }
});

pm.test("Response time is under 5000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});