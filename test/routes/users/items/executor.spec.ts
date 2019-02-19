import express from "express";
import { get } from "../../../../src/routes/users/items/executor";

describe("routes/users/items/executor", () => {
  it("get", () => {
    const userId = 123;
    const itemId = 321;
    const request = {
      params:{
        userId,
        itemId,
      },
    };
    const response: any = {
      status: jest.fn().mockImplementation(() => response),
      json: jest.fn().mockImplementation(() => response),
    };

    get(<express.Request>request, <express.Response>response);

    expect(response.status).toBeCalledTimes(1);
    expect(response.status).toBeCalledWith(200);

    expect(response.json).toBeCalledTimes(1);
    expect(response.json).toBeCalledWith({ userId, itemId });
  });
});
