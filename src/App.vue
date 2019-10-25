<template>
  <div id="app" class="lk-screen">
    <component :is="layout"></component>
  </div>
</template>

<script>
import view from './views/desktop/view.vue'
import staff from './views/console/staff.vue'

const defaults = 'desktop'
const backend = 'console'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaults || backend) + '-layout'
    }
  },
  components: {
    'desktop-layout': view,
    'console-layout': staff
  }
}
</script>
