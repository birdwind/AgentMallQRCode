import echarts from 'echarts'
import resize from '@/components/Charts/mixins/resize'

export default {
  mixins: [resize],
  name: 'survey-chart',
  components: {},
  props: [],
  data() {
    return {
      query: {
        PID: this.$route.query.id,
        SurveyID: this.$route.query.surveyId
      },
      chart: null,
      width: '100%',
      height: '100%',
      className: 'chart',
      weightChart: {
        backgroundColor: '#394056',
        // 標題列
        title: {
          text: 'How bad is the migraine?',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        // 提視窗
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        // 圖表外框
        grid: {
          top: 150,
          left: '5%',
          right: '5%',
          bottom: 95,
          containLabel: true
        },
        // 圖例
        legend: {
          x: '5%',
          top: '10%',
          // top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['Front', 'Side', 'Back'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['20230201', '20230202', '20230203', '20230204', '20230205', '20230206', '20230207', '20230208', '20230209', '20230210']
        }],
        yAxis: [{
          type: 'value',
          name: '分',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 100,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        // 放大縮小
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [
              0
            ],
            bottom: 30,
            start: 0,
            end: 100,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '80%',
            handleStyle: {
              color: '#d3dee5'
            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#90979c'

          }, {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
        series: [
          {
            name: 'Front',
            type: 'bar',
            stack: 'x',
            barMaxWidth: 35,
            barGap: '10%',
            // smooth: true,
            // symbol: 'circle',
            // symbolSize: 5,
            // showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(137, 189, 27, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(137,189,27)',
                borderWidth: 5
              }
            },
            data: [18, 13, 15, 12, 11, 12, 45, 12, 65, 12]
          },
          {
            name: 'Side',
            type: 'bar',
            stack: 'x',
            barMaxWidth: 35,
            barGap: '10%',
            // smooth: true,
            // symbol: 'circle',
            // symbolSize: 5,
            // showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 136, 212, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)',
                borderWidth: 5

              }
            },
            data: [82, 87, 85, 88, 89, 88, 55, 88, 35, 78]
          },
          {
            name: 'Back',
            type: 'bar',
            stack: 'x',
            barMaxWidth: 35,
            barGap: '10%',
            // smooth: true,
            // symbol: 'circle',
            // symbolSize: 5,
            // showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(219, 50, 51, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderWidth: 5
              }
            },
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
          }]
      },
      yesNoChart: {
        backgroundColor: '#394056',
        // 標題列
        title: {
          text: 'Correct Rate',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        // 提視窗
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        // 圖表外框
        grid: {
          top: 150,
          left: '5%',
          right: '5%',
          bottom: 95,
          containLabel: true
        },
        // 圖例
        legend: {
          x: '5%',
          top: '10%',
          // top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['Front', 'Side', 'Back'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['20230201', '20230202', '20230203', '20230204', '20230205', '20230206', '20230207', '20230208', '20230209', '20230210']
        }],
        yAxis: [{
          type: 'value',
          name: '%',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 100,
            textStyle: {
              fontSize: 30
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        // 放大縮小
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [
              0
            ],
            bottom: 30,
            start: 0,
            end: 100,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '80%',
            handleStyle: {
              color: '#d3dee5'
            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#90979c'

          }, {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
        series: [
          {
            name: 'Correct',
            type: 'line',
            stack: 'x',
            barMaxWidth: 35,
            barGap: '10%',
            // smooth: true,
            // symbol: 'circle',
            // symbolSize: 5,
            // showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(137, 189, 27, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(137,189,27)',
                borderWidth: 5
              }
            },
            data: [18, 13, 15, 12, 11, 12, 45, 12, 65, 12]
          }
          // {
          //   name: 'Side',
          //   type: 'line',
          //   stack: 'x',
          //   barMaxWidth: 35,
          //   barGap: '10%',
          //   // smooth: true,
          //   // symbol: 'circle',
          //   // symbolSize: 5,
          //   // showSymbol: false,
          //   lineStyle: {
          //     normal: {
          //       width: 1
          //     }
          //   },
          //   areaStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //         offset: 0,
          //         color: 'rgba(0, 136, 212, 0.3)'
          //       }, {
          //         offset: 0.8,
          //         color: 'rgba(0, 136, 212, 0)'
          //       }], false),
          //       shadowColor: 'rgba(0, 0, 0, 0.1)',
          //       shadowBlur: 10
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       color: 'rgb(0,136,212)',
          //       borderWidth: 5
          //
          //     }
          //   },
          //   data: [82, 87, 85, 88, 89, 88, 55, 88, 35, 78]
          // },
          // {
          //   name: 'Back',
          //   type: 'line',
          //   stack: 'x',
          //   barMaxWidth: 35,
          //   barGap: '10%',
          //   // smooth: true,
          //   // symbol: 'circle',
          //   // symbolSize: 5,
          //   // showSymbol: false,
          //   lineStyle: {
          //     normal: {
          //       width: 1
          //     }
          //   },
          //   areaStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //         offset: 0,
          //         color: 'rgba(219, 50, 51, 0.3)'
          //       }, {
          //         offset: 0.8,
          //         color: 'rgba(219, 50, 51, 0)'
          //       }], false),
          //       shadowColor: 'rgba(0, 0, 0, 0.1)',
          //       shadowBlur: 10
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       color: 'rgb(219,50,51)',
          //       borderWidth: 5
          //     }
          //   },
          //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
          // }
        ]
      }
    }
  },
  created() {
    console.log(this.id)
    this.getChart()
  },
  computed: {

  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('chart'))

      this.chart.setOption(this.yesNoChart)
    },
    getChart() {
      this.getPatientChart(this.query)
    }
  }
}

