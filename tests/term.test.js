const { test } = require('zora')
const Store = require('./store')
const TermEntity = require('../domain/term/TermEntity')
const TermRepository = require('../domain/term/TermRepository')
const TermService = require('../domain/term/TermService')

const TranslationEntity = require('../domain/translation/TranslationEntity')
const TranslationRepository = require('../domain/translation/TranslationRepository')
const TranslationService = require('../domain/translation/TranslationService')

const testTerms = [
  { id: 1, value: 'tag' },
  { id: 2, value: 'attribute' },
]

// Terms Service Tests
test('Terms Service tests', (t) => {
  const store = new Store({ terms: testTerms })
  const repository = new TermRepository(store)
  const termService = new TermService(repository)

  t.test('add term', (t) => {
    const term = new TermEntity({ id: 3, value: 'Bug' })
    termService.addTerm(term)
    t.equal(store.terms.length, 3, 'should increment terms number')
  })

  t.test('get term', (t) => {
    const term = termService.getTerm(1)
    t.equal(term.id, 1, 'should return the right term by ID')
  })

  t.test('update term', (t) => {
    const newTerm = new TermEntity({ id: 1, value: 'Bug updated' })
    termService.updateTerm(newTerm)
    const updated = termService.getTerm(1)
    t.equal(updated.value, 'Bug updated', 'should update the right term value')
  })

  t.test('delete term', (t) => {
    termService.deleteTerm(1)
    const deleted = termService.getTerm(1)
    t.notOk(deleted, 'should delete a term by ID')
  })

  t.test('list terms', (t) => {
    const terms = termService.listTerms()
    t.ok(terms.length > 0, 'should return an array of terms')
  })
})

const testTranslations = [
  { id: 1, termId: 1, value: 'وسم' },
  { id: 2, termId: 2, value: 'خاصية' },
  { id: 3, termId: 2, value: 'سمة' },
]

// Translation Service tests
test('Translation Service tests', (t) => {
  const store = new Store({ translations: testTranslations })
  const repository = new TranslationRepository(store)
  const translationService = new TranslationService(repository)

  t.test('add translation', (t) => {
    const oldCount = testTranslations.length
    const translation = new TranslationEntity({
      id: 4,
      termId: 2,
      value: 'ميزة',
    })
    translationService.addTranslation(translation)
    t.equal(
      store.translations.length,
      oldCount + 1,
      'should increment translations number'
    )
  })

  t.test('get translation', (t) => {
    const id = 3
    const translation = translationService.getTranslation(id)
    t.equal(translation.id, id, 'should return the right translation by ID')
  })

  t.test('update translation', (t) => {
    const newTranslation = new TranslationEntity({
      id: 1,
      termId: 1,
      value: 'Bug updated',
    })
    translationService.updateTranslation(newTranslation)
    const updated = translationService.getTranslation(1)
    t.equal(
      updated.value,
      'Bug updated',
      'should update the right translation value'
    )
  })

  t.test('delete translation', (t) => {
    translationService.deleteTranslation(1)
    const deleted = translationService.getTranslation(1)
    t.notOk(deleted, 'should delete a translation by ID')
  })

  t.test('list translations', (t) => {
    t.throws(() => {
      translationService.listTranslations()
    }, 'should throw an error if no termId is provided')
    const translations = translationService.listTranslations(1)
    t.ok(
      translations.length > 0,
      'should return a translations array of a given term'
    )
  })
})