
import Navigation from '@/components/Navigation.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(Navigation)

describe('Navigation', () => {
  it('sets the correct default data', () => {
    expect(typeof Navigation.data).toBe('function')
    const defaultData = Navigation.data()
    expect(defaultData.isOpen).toBe(false)
  })

  it('renders the correct message', () => {
    expect(wrapper.find('.logo').text()).toEqual('Stephen Njau')
  })
})
