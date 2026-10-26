import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PaperPic } from '../src'

describe('paperPic', () => {
  it('renders the image with the normalized rotation', () => {
    const wrapper = mount(PaperPic, {
      props: { src: '/doc.png', rotation: -90 },
    })
    const img = wrapper.get('img')

    expect(img.attributes('src')).toBe('/doc.png')
    expect(img.attributes('style')).toContain('rotate(270deg)')
  })
})
