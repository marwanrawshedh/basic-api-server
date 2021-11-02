"use strict";

const { server } = require("../src/server"); // destructing assignment
const supertest = require("supertest");
const mockRequest = supertest(server);
const { db } = require("../src/models/index");

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});

describe("Web server", () => {
  // Check if 404 is handled

  test("Should respond with 404 status on an invalid method", async () => {
    const response = await mockRequest.get("/foo");
    expect(response.status).toBe(404);
  });

  // test if can create a food

  it("can add a food", async () => {
    const response = await mockRequest.post("/food").send({
      bestFood: "mansaf",
      bestJuse: "shanina",
    });

    expect(response.status).toBe(201);
  });

  // test if can read

  it("can get all food", async () => {
    const response = await mockRequest.get("/food");

    expect(response.status).toBe(200);
  });

  // test if can read one of food
    it("can get one record", async () => {

      const response = await mockRequest.get("/food/1");

      expect(response.status).toBe(200);
    });

    

    // test if can update food
    it("can update a record", async () => {
      const response = await mockRequest.put("/food/1").send({
        bestFood: "mansaf1",
        bestJuse: "shanina1",
      });
  
      expect(response.status).toBe(201);
    });
    // test if can delete food
    it("can delete a record", async () => {
      const response = await mockRequest.delete("/food/1");

      expect(response.status).toBe(204);
    });

    it("can add a sport", async () => {
      const response = await mockRequest.post("/sport").send({
          bestTeamSport: "football",
          bestIndividualSport: "running",
      });

      expect(response.status).toBe(201);
    });

    // test if can read

    it("can get all sport", async () => {
      const response = await mockRequest.get("/sport");

      expect(response.status).toBe(200);
    });

    // test if can read one of food
    it("can get one record", async () => {
      const response = await mockRequest.get("/sport/1");

      expect(response.status).toBe(200);
    });

    // test if can update food
    it("can update a record", async () => {
      const response = await mockRequest.put("/sport/1").send({
        bestTeamSport: "football1",
        bestIndividualSport: "running1",
    });

    expect(response.status).toBe(201)
    });
    // test if can delete food
    it("can delete a record", async () => {
      const response = await mockRequest.delete("/sport/1");

      expect(response.status).toBe(204);
      
    });
});
