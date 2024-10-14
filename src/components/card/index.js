import { isMobile } from '../../unit'
export default {
  name: 'Card',
  data() {
    return {
      isMobile: isMobile()
    }
  },
  computed: {
    // computed
  },
  mounted() {
    window.addEventListener('resize', this.resize.bind(this), true)
  },
  methods: {
    resize() {
      this.isMobile = isMobile()
    }
  }
}
