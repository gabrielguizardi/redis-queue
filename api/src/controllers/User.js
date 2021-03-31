const redisClient = require('../database')

module.exports = {
  async create(req, res, next) {
    try {
      const { name, email, phone } = req.body

      redisClient.lrange('usersQueue', 0, -1, (err, ids) => {
        if (err) {
          next(err)
        }

        let index = 1

        if (ids.length > 0) {
          const lastKey = ids[ids.length - 1]
          index = Number(lastKey.split(':')[1]) + 1
        }

        redisClient.rpush('usersQueue', `user:${index}`, (err) => {
          if (err) {
            next(err)
          }

          redisClient.hmset(`user:${index}`, [
            'name', name,
            'email', email,
            'phone', phone,
          ], (err) => {
            if (err) {
              next(err)
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

      redisClient.lrange('usersQueue', 0, -1, (err, ids) => {
        if (err) {
          next(err)
        }

        if (ids.length === 0) {
          return res.json({ users })
        }

        ids.map((id) => {
          redisClient.hgetall(id, (err, user) => {
            index++

            if (err) {
              next(err)
            }

            users.push({
              id,
              user
            })

            if (index === ids.length) {
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
          next(err)
        }

        redisClient.hdel(id, ['name', 'email', 'phone'], (err) => {
          if (err) {
            next(err)
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
