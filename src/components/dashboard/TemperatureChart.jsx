
import { useSelector } from 'react-redux'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';//importa datos falsos para el gráfico
const TemperatureChart = () => {

  const maximas = useSelector(state => state.forecast.maximas)
  const minimas = useSelector(state => state.forecast.minimas)
  const time = useSelector(state => state.forecast.time)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = time;

 const data = {
  labels,
  datasets: [
    {
      label: 'Maximas',
      data: maximas,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Minimas',
      data: minimas,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }
  ],
};


  return (
    <div>
      <Bar options={options} data={data} />
    </div>);
}



  




export default TemperatureChart
