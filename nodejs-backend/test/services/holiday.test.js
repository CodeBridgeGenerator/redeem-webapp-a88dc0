const assert = require('assert');
const app = require('../../src/app');

describe('\'holiday\' service', () => {
  it('registered the service', () => {
    const service = app.service('holiday');

    assert.ok(service, 'Registered the service (holiday)');
  });
});
