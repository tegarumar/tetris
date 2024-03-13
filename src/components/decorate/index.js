import { i18n, lan } from '../../unit/const'
export default {
  name: 'Decorate',
  computed: {
    title: () => i18n.title[lan],
  }
}
