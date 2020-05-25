<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'RadarChart',
  props: { data: Object, options: Object },
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.renderChart(this.data, this.options);
  },
  beforeUpdate() {},
  updated() {},
  methods: {},
  computed: {},
};
</script>
