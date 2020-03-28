const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization','colocar ong_id valido')
            .send({
                name: "APAC9",
                email: "contato9@contato.com.br",
                whatsapp: "11976839327",
                city: "Santo Andre",
                uf: "PE"
            });
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});