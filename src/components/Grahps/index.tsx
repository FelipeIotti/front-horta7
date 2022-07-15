import { Box, Text,theme } from "@chakra-ui/react";
import Chart from "react-apexcharts";


interface GraphsProps {
  title: string;
  value: string;
  seriesX: number[];
  seriesY: DataProps[];
  type: string;
  series: []
}



interface DataProps {
  id:string,
  brightness: string,
  humidity:string,
  temperature:string,
  valve:string,
  heater:string,
  lamp:string,
  sensorsStatus:string,
  created_at:string,
  
}

export function Graphs({title,value,seriesX, seriesY, type, series}:GraphsProps){
  
  const barState:any = {
    series: [{
      name: type,
      data: series
    }],
    options : {
      chart: {
        toolbar: {
          show: true,
        },
        
        zoom: {
          autoScaleYaxis: true,
          autoScaleXaxis: true,
        }
      },
      grid: {
        show: false,
        
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        
      },
  
  
      
      xaxis: {
        
        type: 'datetime',
        tickAmount: 6,
        axisBorder: {
          color: theme.colors.gray[50],
        },
        axisTicks: {
          color: theme.colors.gray[50],
        },
        labels:{
          style: {
            colors:'#FFFFFF',
          },
        },
        tooltip: {
          enabled: false,
        }
      },
      yaxis:{
        axisBorder: {
          show: true,
          color: theme.colors.gray[50],
        },
        axisTicks: {
          show: true,
          color: theme.colors.gray[50],
        },
        labels:{
          style: {
            colors:'#FFFFFF',
          },
          formatter: (value:number)=>{
            if(type!=='temperature'){
            return value+'%' }
            else{ return value + 'ºC'}
          },
        },
      },
      fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient:{
          shade: 'dark',
          opacityFrom: 0.7,
          opacityTo: 0.3,
        }
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: false,
        },
        y: {
            formatter: (value:number)=>{
              if(type!=='temperature'){
              return value+'%' }
              else{ return value + 'ºC'}
            },
            title: {
            }
          }
    }
      
    },
    
  };

  
  return(
    <Box textAlign='center'  >
      <Text fontSize={20}>{title}: {value}</Text>
      <Chart options={barState.options} series={barState.series} type="area" height='240' width="450" />
    </Box>
  );
}