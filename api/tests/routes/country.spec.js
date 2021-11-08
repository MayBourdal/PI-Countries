/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(country)));
  describe('trae todos los countries de mi base de datos cuando ejecuto ruta /country', () => {
    it('should get 200', () =>
      agent.get('/api/country').expect(200)
    );
  });
});

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(country)));
  describe('trae todos las actividades de mi base de datos cuando ejecuto ruta /activity', () => {
    it('should get 200', () =>
      agent.get('/api/activity').expect(200)
    );
  });
});

