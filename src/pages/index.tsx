import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Actuator } from '../components/Actuators';
import { Graphs } from '../components/Grahps';
import { Header } from '../components/Header/index.tsx';
import { Sensors } from '../components/Sensors';
import api from '../services/api';

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


export function Home(){
  const [data,setData] = useState({} as DataProps);
  const [datas,setDatas] = useState([] as any);

  useEffect(() =>{
    api.get('/data').then(response => setData(response.data[response.data.length - 1]));
    api.get('/data').then(response => setDatas(response.data));
  },[]);

  const sensors = {
    ldr1:       Math.trunc(Number(data.sensorsStatus)/100000),
    ldr2:       Math.trunc(Number(data.sensorsStatus)/10000),
    ldr3:       Math.trunc(Number(data.sensorsStatus)/1000),
    ldr4:       Math.trunc(Number(data.sensorsStatus)/100),
    humidity:   Math.trunc(Number(data.sensorsStatus)/10),
    temperature:Number(data.sensorsStatus)%10,
  }
   const seriesx  = datas.map((d:DataProps)    =>  d.created_at);


  var result = Object.keys(seriesx).map((key:any)=> {
    return new Date( seriesx[key]).getTime();
  });
  //console.log(result);

  const serieB = datas.map((item: DataProps)=>{
    return [new Date(item.created_at).getTime(), Number(item.brightness)]
  })

  const serieH = datas.map((item: DataProps)=>{
    return [new Date(item.created_at).getTime(), Number(item.humidity)]
  })

  const serieT = datas.map((item: DataProps)=>{
    return [new Date(item.created_at).getTime(), Number(item.temperature)]
  })

  return (  
    <Flex direction='column' h='100vh' >
      <Header />
      <Flex w='100%' my='6' justifyContent='flex-start' direction='column' align='start' px='6' >
      <Text mb='4' as='u' fontSize={25} >Gráficos</Text>
        <SimpleGrid flex={1} w='100%' columns={3}  justifyContent={'space-between'} alignItems={'flex-start'}   > 
               
            <Graphs title="Luminosidade" value={` ${data.brightness}%`} seriesX={result} seriesY={datas} type="brightness" series={serieB}/>
            <Graphs title="Umidade" value={` ${data.humidity}%`} seriesX={result} seriesY={datas}type="humidity"series={serieH}/>
            <Graphs title="Temperatura" value={` ${data.temperature}ºC`}seriesX={result} seriesY={datas}type="temperature"series={serieT}/>
          
        </SimpleGrid>
          
        <Text mb='4' mt='10' as='u'fontSize={25} >Atuadores</Text>
        <SimpleGrid  flex={1} w='100%' columns={3}  justifyContent={'space-around'} alignItems={'flex-start'} > 
          
            <Actuator title='Lâmpada' status={`${data.lamp}`}/>
            <Actuator title='Irrigação' status={`${data.valve}`}/>
            <Actuator title='Aquecedor' status={`${data.heater}`}/>
        
        
        </SimpleGrid>

        <Text mb='4' mt='10' as='u'fontSize={25} >Sensores</Text>
        <SimpleGrid  mb='6' flex={1} w='100%' columns={6}  justifyContent={'space-between'}  > 
          
            <Sensors title='LDR 1' status={sensors.ldr1}/>
            <Sensors title='LDR 2' status={sensors.ldr2}/>
            <Sensors title='LDR 3' status={sensors.ldr3}/>
            <Sensors title='LDR 4' status={sensors.ldr4}/>
            <Sensors title='Umid'  status={sensors.humidity}/>
            <Sensors title='Temp'  status={sensors.temperature}/>
        
        
        </SimpleGrid>
        
      </Flex>
    </Flex>
  );
}