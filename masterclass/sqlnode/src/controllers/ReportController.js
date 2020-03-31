const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        /**
         * Encontrar todos os usuários que tem email que termina com @rocketseat.com.br
         * Desses usuários quero todos que moram na rua "Rua Guilherme Gemballa"
         * Desses usuários quero buscar as tecnologias que começam com React
         */
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@yahoo.com.br',
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Avenida Nove de Julho' } }, // endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }, // tecnologias
            ]
        })
        return res.json(users);
    }
};