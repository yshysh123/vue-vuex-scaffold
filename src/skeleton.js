import Vue from 'vue'
import Skeleton from 'components/Skeleton/Skeleton.vue'
import SkeletonTwo from 'components/Skeleton/SkeletonTwo.vue'

export default new Vue({
  components: {
    Skeleton,
    SkeletonTwo,
  },
  template: `
    <div>
        <Skeleton id="skeleton1" style="display:none"/>
        <SkeletonTwo id="skeleton2" style="display:none"/>
    </div>
  `,
})
