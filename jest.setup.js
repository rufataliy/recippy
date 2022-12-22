const { API_CATEGORY_LIST } = require("./src/common/api-endpoints");
const { server } = require("./src/common/mockApi");

beforeEach(() => server.listen());
afterEach(() => server.close());
