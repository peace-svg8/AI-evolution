import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "motion/react";

const adoptionData = [
  { year: "2015", rate: 10 },
  { year: "2018", rate: 22 },
  { year: "2020", rate: 35 },
  { year: "2021", rate: 41 },
  { year: "2022", rate: 48 },
  { year: "2023", rate: 55 },
  { year: "2024", rate: 68 },
];

const industryData = [
  { name: "Tech", value: 78 },
  { name: "Finance", value: 65 },
  { name: "Health", value: 54 },
  { name: "Edu", value: 42 },
  { name: "Manuf", value: 38 },
];

const usageData = [
  { name: "Automation", value: 40 },
  { name: "Analytics", value: 30 },
  { name: "Creative", value: 20 },
  { name: "Customer Service", value: 10 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#f97316", "#14b8a6"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-md border border-white/20 p-3 rounded-lg">
        <p className="text-xs font-semibold text-white/40 mb-1">{label}</p>
        <p className="text-sm font-medium text-white">
          {payload[0].value}% <span className="text-white/40">Adoption</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-[120px] bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-medium tracking-tight mb-4">Adoption & Usage Statistics</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Visualizing the exponential growth and integration of AI across global markets and personal workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart: Growth over time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass min-h-[400px]"
          >
            <h3 className="text-lg font-medium mb-8">Growth Rate (2015–2024)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#ffffff40" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#ffffff" 
                    strokeWidth={2}
                    dot={{ fill: "#ffffff", r: 4 }}
                    activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest">Source: Statista Global Estimates</p>
          </motion.div>

          {/* Bar Chart: Industry Adoption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl glass min-h-[400px]"
          >
            <h3 className="text-lg font-medium mb-8">Industry-Specific Adoption</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#ffffff80" 
                    fontSize={12}
                    width={80}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip cursor={{ fill: '#ffffff05' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest">Source: McKinsey Global Survey</p>
          </motion.div>
        </div>

        {/* Pie Chart: Usage Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl glass flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-4">Core Usage Distribution</h3>
            <p className="text-sm text-white/50 mb-6 font-normal leading-relaxed">
              Companies are pivoting from pure automation towards creative assistance and sophisticated analytics, 
              marking a shift in how value is extracted from large models.
            </p>
            <div className="space-y-3">
              {usageData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span className="text-xs text-white/80">{item.name}</span>
                  <span className="text-xs text-white/40 ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full md:w-[400px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={usageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {usageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
