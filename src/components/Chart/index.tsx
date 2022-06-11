import React, { useContext } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { GlobalStateContext } from '../../GlobalContext/GlobalStateContext'
import { Container } from './styled'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Charts: React.FC = () => {

  const { coinHistorical, loading } = useContext(GlobalStateContext)

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  const key = coinHistorical.map((res) => (Object.keys(res.bpi)))
  const value = coinHistorical.map((res) => (Object.values(res.bpi)))

  const options: ApexOptions = {
    xaxis: {
      categories: key[0]
    }
  }
  const series: any = [
    {
      name: "Dolar",
      data: value[0]
    },
  ];

  return (
    <Container>
      {
        loading ? (

          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={450}
            width={700}
          />
        ) : (
          <>
            <Spin tip="Loading..." indicator={antIcon} />
          </>
        )
      }

    </Container>

  );
}

export default Charts;