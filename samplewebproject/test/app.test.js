const assert = require('assert')
it('has a text input', async () => {
  const dom = await render('index.html')

  const input = dom.window.document.querySelector('input')

  assert(input)
})

it('shows success msg', async () => {
  const dom = await render('index.html')
  const input = dom.window.document.querySelector('input')
  input.value = 'asfgh@fdxgchgv.com'
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'))

  const h1 = dom.window.document.querySelector('h1')

  assert.strictEqual(h1.innerHTML, 'Good')
})

it('shows fail msg', async () => {
  const dom = await render('index.html')
  const input = dom.window.document.querySelector('input')
  input.value = 'kjb'
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'))

  const h1 = dom.window.document.querySelector('h1')

  assert.strictEqual(h1.innerHTML, 'Invalid Email')
})
