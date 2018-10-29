<template>
  <div>
    <audio ref="successAudio"
      preload="auto"
      src="/asset/media/success.m4a">
      <track kind="captions"
        label="success" />
    </audio>
    <audio ref="failureAudio"
      preload="auto"
      src="/asset/media/failure.m4a">
      <track kind="captions"
        label="failure" />
    </audio>
  </div>
</template>

<script>
import Events from 'events'
export const emitter = new Events()
export default {
  name: 'HelloWorld',
  data() {
    return {
      successAudio: {},
      failureAudio: {},
    }
  },
  mounted() {
    this.successAudio = this.$refs.successAudio
    this.failureAudio = this.$refs.failureAudio
    emitter.on('success', this.playSuccess)
    emitter.on('failure', this.playFailure)
  },
  destroyed() {
    emitter.removeListener('success', this.playSuccess)
    emitter.removeListener('failure', this.playFailure)
  },
  methods: {
    playSuccess() {
      const audio = this.successAudio
      audio.pause()
      audio.currentTime = 0
      let playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {})
      }
    },
    playFailure() {
      const audio = this.failureAudio
      audio.pause()
      audio.currentTime = 0
      let playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {})
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
