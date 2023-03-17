export default {
  get: jest.fn((api, header) => Promise.resolve({ data: {} })),
};
