// Task 3: Mocking Axios in Jest

import axios from "axios";
import { jest } from "@jest/globals";

// Mock the entire axios module — all its methods become jest.fn()
jest.mock("axios");

// Function to be tested with mocks
export async function getUserData(userId) {
  try {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

// === Tests ===

describe("Task 3: Mocking Axios", () => {
  // Clear mocks after each test so tests do not affect each other
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return user data on a successful request", async () => {
    // Prepare fake response data
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };

    // Configure the mock: when axios.get is called, return mockUser
    axios.get.mockResolvedValue({
      status: 200,
      data: mockUser,
    });

    const result = await getUserData(1);

    // Verify the result
    expect(result.success).toBe(true);
    expect(result.data).toEqual(mockUser);

    // Verify that axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/users/1");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
