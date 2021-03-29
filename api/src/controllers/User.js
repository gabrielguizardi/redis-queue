const redisClient = require('../database')

module.exports = {
  async create(req, res, next) {
    try {
      const {
        name,
        email,
        phone
      } = req.body

      redisClient.lrange('usersQueue', 0, -1, function(error, reply){
        // let index = 
        
        // // pegar a key 

        // if (keys.length > 0) {
        //   const lastKey = keys[keys.length - 1]
        //   index = Number(lastKey.split(':')[1]) + 1
        // }

        // redisClient.hmset(`user:${index}`, [
        //   'name', name,
        //   'email', email,
        //   'phone', phone,
        // ], (err, reply) => {
        //   if (err) {
        //     throw new Error(err)
        //   }

          res.status(201).json({
            reply
          })
        // })

      })
    } catch (err) {
      next(err)
    }
  },

  async list(req, res, next) {
    try {
      let users = []
      let index = 0

      redisClient.keys('user:*', (err, keys) => {
        keys.map((key) => {
          redisClient.hgetall(key, (err, user) => {
            index++
            if (err) {
              throw new Error(err)
            } else {
              temp_data = {
                'id': key,
                'data': user
              }
              users.push(temp_data)
            }
            if (index === keys.length) {
              res.json({ users })
            }
          })
        })
      })
    } catch (err) {
      next(err)
    }
  }
}
