const TermRepository = require('./TermRepository')

class TermService {
  constructor(repository) {
    if (!(repository instanceof TermRepository)) {
      throw new Error('repository should be an instance of TermRepository')
    }
    this.repository = repository
  }

  addTerm(term) {
    this.repository.addTerm(term)
  }

  getTerm(termId) {
    return this.repository.getTerm(termId)
  }

  updateTerm(term) {
    this.repository.updateTerm(term)
  }

  deleteTerm(termId) {
    this.repository.deleteTerm(termId)
  }

  listTerms() {
    return this.repository.listTerms()
  }
}

module.exports = TermService
