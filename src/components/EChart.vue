<template>
  <div class="echarts">
    <div><h4>DevOps Dashboard</h4></div>
    <IEcharts :option="bar1" :id="bar1"></IEcharts>
    <IEcharts :option="bar2" :id="bar2"></IEcharts>
  </div>
</template>
<script>
import IEcharts from 'vue-echarts-v3'
import 'echarts/lib/chart/bar'

export default {
  data () {
    return {
      bar1: {
        title: {
          text: 'Bug'
        },
        tooltip: {},
        xAxis: {
          data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
        },
        yAxis: {},
        series: [{
          name: 'Clouds',
          type: 'bar',
          data: [5, 20, 36, 10, 15, 20]
        }]
      },
      bar2: {
        title: {
          text: 'Bug'
        },
        tooltip: {},
        xAxis: {
          data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
        },
        yAxis: {},
        series: [{
          name: 'Clouds',
          type: 'bar',
          data: [5, 20, 36, 10, 15, 20]
        }]
      }
    }
  },
  components: { IEcharts }
}
</script>
<style scoped>
  .echarts {
    width: 400px;
    height: 400px;
  }
</style>