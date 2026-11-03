import ForecastForm from '../../components/dashboard/ForecastForm'
import TemperatureChart from '../../components/dashboard/TemperatureChart'

const DashboardPage = () => {

  
  return (
    <div className="container">
        <ForecastForm />
        <TemperatureChart />
    </div>
  )
}

export default DashboardPage
