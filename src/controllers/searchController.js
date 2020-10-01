const R = require('ramda')
const { shuffle } = require('../lib/helpers')
const util = require('util')

const makeOperation = operator => ([ key, val ]) => [ key, { [operator]: val } ]

const formatListField = R.cond([
  [ ([ key ]) => R.equals('age', key), makeOperation('$gte') ],
  [ ([ _key, val ]) => Array.isArray(val), makeOperation('$all') ],
  [ R.T, R.identity ]
])

const parseLists = R.pipe(
  Object.entries,
  R.map(formatListField),
  Object.fromEntries
)

const parseCredit = R.pipe(
  R.map(x => [ `${x}`, { $exists: true, $ne: [] } ]),
  Object.fromEntries
)

const parseRanges = fields => ({
  $and: Object.entries(fields)
    .flatMap(([ key, [ min, max ] ]) => [
      { [key]: { $gte: min } },
      { [key]: { $lte: max } }
    ])
})

const makeQuery = ({ credit = [], options, ranges }) => ({
  ...parseCredit(credit),
  ...parseLists(options),
  ...parseRanges(ranges),
  finishedProfile: true,
  type: 'dog',
})

const sortData = R.pipe(
  R.partition(R.propEq('premium', true)),
  R.map(shuffle),
  R.flatten
)

const searchController = db => (req, res, next) => {
  console.log(util.inspect(makeQuery(req.body), { showHidden: false, depth: null }))
  db.search(makeQuery(req.body))
    .then(sortData)
    .then(data => res.json(data))
    .catch(next)
}

module.exports = searchController
