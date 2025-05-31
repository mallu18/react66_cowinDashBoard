import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const COLORS = ['#f54394', '#5a8dee', '#2cc6c6']

const VaccinationByAge = props => {
  const {data} = props
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          dataKey="count"
          nameKey="age"
          outerRadius="60%"
        >
          {data.map((entry, index) => (
            <Cell key={entry.age} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
