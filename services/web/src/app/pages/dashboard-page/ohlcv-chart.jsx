import * as React from 'react'

import { format } from 'd3-format'
import { timeFormat } from 'd3-time-format'
import { Chart, ChartCanvas } from 'react-stockcharts'
import { XAxis, YAxis } from 'react-stockcharts/lib/axes'
import {
  CrossHairCursor,
  CurrentCoordinate,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
} from 'react-stockcharts/lib/coordinates'
import { BarSeries, CandlestickSeries } from 'react-stockcharts/lib/series'

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale'
import { OHLCTooltip } from 'react-stockcharts/lib/tooltip'
import { last } from 'react-stockcharts/lib/utils'

function sortByTimestamp(array) {
  return array.slice().sort((a, b) => {
    if (a.timestamp === b.timestamp) {
      return 0
    }

    if (a.timestamp < b.timestamp) {
      return -1
    }

    return 1
  })
}

class OHLCVChartComponent extends React.Component {
  state = {
    sortedOHLCV: [],
  }

  constructor(options) {
    super(options)

    this.state.sortedOHLCV = sortByTimestamp(options.ohlcv)
  }

  handleDownloadMore = (start, end) => {
    console.log('handleDownloadMore', start, end)
    debugger
  }

  render() {
    const { sortedOHLCV } = this.state
    const { name, type, width, height, ratio } = this.props

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => new Date(d.timestamp))
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(sortedOHLCV)

    const start = xAccessor(last(data))
    const end = xAccessor(data[Math.max(0, data.length - 150)])
    const xExtents = [start, end]

    const chartMargin = {
      left: 50,
      right: 100,
      top: 10,
      bottom: 25,
    }

    const gridWidth = width - chartMargin.left - chartMargin.right
    const gridHeight = height - chartMargin.top - chartMargin.bottom

    const xGrid = {
      innerTickSize: -1 * gridHeight,
      tickStrokeDasharray: 'ShortDot',
      tickStrokeOpacity: 0.2,
      tickStrokeWidth: 1,
    }

    const yGrid = {
      innerTickSize: -1 * gridWidth,
      tickStrokeDasharray: 'ShortDot',
      tickStrokeOpacity: 0.2,
      tickStrokeWidth: 1,
    }

    return (
      <React.Fragment>
        <ChartCanvas
          height={height}
          ratio={ratio}
          width={width}
          margin={chartMargin}
          type={type}
          seriesName={name}
          data={data}
          xScale={xScale}
          xAccessor={xAccessor}
          displayXAccessor={displayXAccessor}
          xExtents={xExtents}
          onLoadMore={this.handleDownloadMore}
        >
          <Chart id={1} yExtents={[(d) => [d.high, d.low]]} padding={{ top: 40, bottom: 20 }}>
            <XAxis axisAt="bottom" orient="bottom" {...xGrid} />
            <YAxis axisAt="right" orient="right" ticks={5} {...yGrid} />

            <MouseCoordinateX rectWidth={60} at="bottom" orient="bottom" displayFormat={timeFormat('%H:%M:%S')} />
            <MouseCoordinateY at="right" orient="right" displayFormat={format('.8f')} />

            <CandlestickSeries />

            <EdgeIndicator
              itemType="last"
              orient="right"
              edgeAt="right"
              displayFormat={format('.8f')}
              yAccessor={(d) => d.close}
              fill={(d) => (d.close > d.open ? '#6BA583' : '#FF0000')}
            />

            <OHLCTooltip origin={[-40, 0]} xDisplayFormat={timeFormat('%Y-%m-%d %H:%M:%S')} />
          </Chart>

          <Chart id={2} yExtents={[(d) => d.volume]} height={150} origin={(w, h) => [0, h - 150]}>
            <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format('.2s')} />

            <MouseCoordinateY at="left" orient="left" displayFormat={format('.4s')} />

            <BarSeries yAccessor={(d) => d.volume} fill={(d) => (d.close > d.open ? '#6BA583' : '#FF0000')} />

            <CurrentCoordinate yAccessor={(d) => d.volume} fill="#9B0A47" />

            <EdgeIndicator
              itemType="last"
              orient="right"
              edgeAt="right"
              yAccessor={(d) => d.volume}
              displayFormat={format('.4s')}
              fill="#0F0F0F"
            />
          </Chart>

          <CrossHairCursor />
        </ChartCanvas>
      </React.Fragment>
    )
  }
}

export const OHLCVChart = OHLCVChartComponent
