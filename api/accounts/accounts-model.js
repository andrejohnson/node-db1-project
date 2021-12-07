const database = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
return database('accounts')

}

const getById = id => {
  // DO YOUR MAGIC
  return database('accounts').where('id', id).first()
}


const create = async account => {
 const [id] = await database('accounts').insert(account)
 return getById(id)
}


const updateById = async (id, account) => {
  await database('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return database('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
