import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{top: 5}}>
        <XAxis dataKey="vaccine_date" />
        <YAxis />
        <Legend />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
