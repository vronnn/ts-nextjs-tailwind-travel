import { greeter } from "@/../testExample/greeter";

test("greets the user", () => {
  const name = "vron";

  const mockGreeter = jest.fn(greeter);
  const result = mockGreeter(name);

  expect(result).toBe("hello vron");
  expect(mockGreeter).toHaveBeenCalledWith(name);
});
