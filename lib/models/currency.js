const rethinkdb = require('rethinkdb')

const {
  getDatabase,
  query,
  createGetByIdMethod,
  createUpsertMethod,
} = require('../database')

const filterRecords = cursor => {
  return cursor.filter({
    disabled: 0,
    frozen: 0,
    delisted: 0,
  })
}

const sanitizeRecord = (record) => {
  delete record.disabled
  delete record.frozen
  delete record.delisted

  return record
}

const sanitizeRecords = records => {
  return records.map(sanitizeRecord)
}

const getCurrencies = () => {
  return query('currencies', filterRecords)
    .then(x => x.toArray())
    .then(sanitizeRecords)
}

const getById = createGetByIdMethod('currencies')

const getCurrencyById = id => {
  return getById(id)
    .then(sanitizeRecord)
}

const update = createUpsertMethod('currencies')

const updateCurrencies = currencies => {
  return update(currencies)
    .then(sanitizeRecords)
}

module.exports = {
  getCurrencies,
  getCurrencyById,
  updateCurrencies,
}