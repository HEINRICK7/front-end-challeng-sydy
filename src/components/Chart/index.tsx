import React, { useContext } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { GlobalStateContext } from '../../GlobalContext/GlobalStateContext'
import { Container } from './styled'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Charts: React.FC = () => {

  const { coinKey, coinValue, loading } = useContext(GlobalStateContext)

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />


  const date = coinKey.slice([-1][0]-6)
  const value = coinValue.slice([-1][0]-6)
    
  const options: ApexOptions = {
    xaxis: {
      categories: date
    },
  }
  
  const series: any = [
    {
      name: "Dolar",
      data: value
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
            height={400}
            style={{width: '100%'}}
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