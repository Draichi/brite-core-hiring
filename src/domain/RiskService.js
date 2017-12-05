export default class RiskService {
  constructor (resource) {
    this._resource = resource('risks{/id}')
  }
  list () {
    return this._resource
      .query()
      .then(res => res.json(), err => {
        console.log(err)
        throw new Error('Cannot get jobs')
      })
  }
  addNew (job) {
    return this._resource
      .save(job)
  }
  del (id) {
    return this._resource
      .delete({id})
      .then(null, err => {
        console.log(err)
        throw new Error('Cannot remove :/')
      })
  }
  find (id) {
    return this._resource
      .get({id})
      .then(res => res.json())
  }
}
