import { mount } from '@vue/test-utils'
import noop from 'lodash/noop'
import SoundEffect, { emitter } from 'components/SoundEffect.vue'

describe('SoundEffect.vue', () => {
  it('测试error prop', () => {
    const wrapper = mount(SoundEffect, {})
    const instance = wrapper.vm.$refs
    const { successAudio, failureAudio } = instance

    const successPlaySpy = jest
      .spyOn(successAudio, 'play')
      .mockImplementation(noop)
    const successPauseSpy = jest
      .spyOn(successAudio, 'pause')
      .mockImplementation(noop)
    const failurePlaySpy = jest
      .spyOn(failureAudio, 'play')
      .mockImplementation(noop)
    const failurePauseSpy = jest
      .spyOn(failureAudio, 'pause')
      .mockImplementation(noop)

    wrapper.vm.playSuccess()
    expect(successPlaySpy).toHaveBeenCalledTimes(1)
    expect(successPauseSpy).toHaveBeenCalledTimes(1)

    wrapper.vm.playFailure()
    expect(failurePlaySpy).toHaveBeenCalledTimes(1)
    expect(failurePauseSpy).toHaveBeenCalledTimes(1)
    wrapper.destroy()
  })

  it('test unmount unlisten events', () => {
    expect(emitter.listeners('success')).toHaveLength(0)
    expect(emitter.listeners('failure')).toHaveLength(0)
    const wrapper = mount(SoundEffect, {})
    expect(emitter.listeners('success')).toHaveLength(1)
    expect(emitter.listeners('failure')).toHaveLength(1)
    wrapper.destroy()
  })
})
