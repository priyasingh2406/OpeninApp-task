import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'line-chart'
    },
    xaxis: {
      categories: ['Week1','Week2','Week3','Week4']
    }
  });

  const [series, setSeries] = useState([
    {
      name: 'User',
      data: [100, 400, 122, 450]
    },
    {
      name: 'Guest',
      data: [200, 398, 200, 300]
    }
  ]);

  const colors = ['#73C774', '#FFC0CB'];

  return (
    <Chart options={options} series={series.map((s, i) => ({...s, color: colors[i]}))} type="area" height={209} />
  );
}

export default LineChart;