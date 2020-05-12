import { resolve } from 'path'
import { JSDOM } from 'jsdom'
import { Builder, Nuxt } from 'nuxt'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
describe('index page', () => {
  beforeEach(async () => {
    const config = {
      dev: false,
      rootDir: resolve(__dirname, '../../..')
    }

    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.server.listen(4000, 'localhost')
  }, 30000)

  test('Route / exits and render HTML with CSS applied', async () => {
    const context = {}
    const { html } = await nuxt.server.renderRoute('/dev', context)
    const { window } = new JSDOM(html).window
    const element = window.document.querySelector('.logo')

    expect(element).not.toBeNull()
    expect(element.textContent).toContain('Stephen Njau')
  })

  // Close server and ask nuxt to stop listening to file changes
  afterEach(() => {
    nuxt.close()
  })
})
