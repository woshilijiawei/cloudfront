<template>
  <div id="app">
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
    <div style="text-align:left"><h4>Dashboard</h4></div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card light class="primary">
          <v-card-text class="px-0" style="text-align:left; margin-left:10px">
            Deployment
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light>
          <v-card-text class="px-0">
            <div class="echarts-line">
              <IEcharts :option="line" :id="line"></IEcharts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light class="primary">
          <v-card-text class="px-0" style="text-align:left; margin-left:10px">
            Work Load
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="i">
        <v-card light>
          <v-card-text class="px-0">
            <div class="echarts-pie">
              <IEcharts :option="pie" :id="pie"></IEcharts>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card light class="primary">
          <v-card-text class="px-0" style="text-align:left; margin-left:10px">
            Use Rate
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="i">
        <v-card light>
          <v-card-text class="px-0">
            <v-card-text class="px-0">
            <div class="echarts-pie">
              <IEcharts :option="bar" :id="bar"></IEcharts>
            </div>
          </v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</div>
</template>
<script>
import IEcharts from 'vue-echarts-v3'
import 'echarts/lib/chart/bar'

export default {
  data () {
    return {
      line: {
        title: {
          text: ' Deployment Count'
        },
        tooltip: {},
        xAxis: {
          data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        },
        yAxis: {},
        series: [{
          name: 'Clouds',
          type: 'line',
          data: [5, 20, 36, 10, 15, 20, 16, 18, 20, 17, 11, 24]
        }]
      },
      pie: {
        title: {
          text: ' CPU'
        },
        tooltip: {},
        xAxis: {
          data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
        },
        yAxis: {},
        series: [{
          name: 'Clouds',
          type: 'pie',
          data: [5, 20, 36, 10, 15, 20]
        }]
      },
      bar: {
        title: {
          text: 'Rate'
        },
        tooltip: {},
        xAxis: {
          data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
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
  .echarts-line {
    width: 1200px;
    height: 400px;
  }
  .echarts-pie {
    width: 400px;
    height: 400px;
  }
</style>