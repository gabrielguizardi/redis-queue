const redisClient = require('../database')

module.exports = {
  async create(req, res, next) {
    try {
      const {
        name,
        email,
        phone
      } = req.body

      redisClient.lrange('usersQueue', 0, -1, (err, reply) => {
        if (err) {
          throw new Error(err)
        }

        let index = 1

        if (reply.length > 0) {
          const lastKey = reply[reply.length - 1]
          index = Number(lastKey.split(':')[1]) + 1
        }

        redisClient.rpush('usersQueue', `user:${index}`, (err, reply) => {
          if (err) {
            throw new Error(err)
          }

          redisClient.hmset(`user:${index}`, [
            'name', name,
            'email', email,
            'phone', phone,
          ], (err) => {
            if (err) {
              throw new Error(err)
            }

            res.status(201).json({
              message: 'Sucesso! Usuário adicionado na fila!'
            })
          })
        })
      })
    } catch (err) {
      next(err)
    }
  },

  async list(req, res, next) {
    try {
      let users = []
      let index = 0

      redisClient.lrange('usersQueue', 0, -1, (err, keys) => {
        if (err) {
          throw new Error(err)
        }

        if (keys.length === 0) {
          return res.json({ users: [] })
        }

        keys.map((key) => {
          redisClient.hgetall(key, (err, user) => {
            index++

            if (err) {
              throw new Error(err)
            }

            temp_data = {
              id: key,
              data: user
            }
            users.push(temp_data)

            if (index === keys.length) {
              res.json({ users })
            }
          })
        })
      })
    } catch (err) {
      next(err)
    }
  },

  async delete(req, res, next) {
    try {
      redisClient.lpop('usersQueue', (err, id) => {
        if (err) {
          throw new Error(err)
        }

        redisClient.hdel(id, ['name', 'email', 'phone'], (err, reply) => {
          if (err) {
            throw new Error(err)
          }

          res.json({
            message: 'Removido da fila com sucesso!'
          })
        })
      })
    } catch (err) {
      next(err)
    }
  }
}
