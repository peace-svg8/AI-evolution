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

const COLORS = ["#06b6d4", "#8b5cf6", "#ec4899", "#3b82f6"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.15)]">
        <p className="text-xs font-bold tracking-wider text-cyan-400/80 uppercase mb-1">{label}</p>
        <p className="text-lg font-bold text-white">
          {payload[0].value}% <span className="text-sm font-normal text-white/50">Adoption</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function Stats() {
  return (
    <section className="relative py-24 px-6 md:px-[120px] bg-black overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-500/50">
            Adoption & Usage Statistics
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Visualizing the exponential growth and integration of AI across global markets and personal workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart: Growth over time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-white/[0.03] transition-all duration-500 backdrop-blur-sm min-h-[400px] group"
          >
            <h3 className="text-xl font-semibold mb-8 text-white/90 group-hover:text-cyan-100 transition-colors">Growth Rate (2015–2024)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#ffffff40" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#06b6d4', strokeWidth: 1, strokeDasharray: '4 4' }} />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#06b6d4" 
                    strokeWidth={3}
                    dot={{ fill: "#000", stroke: "#06b6d4", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8, fill: "#fff", stroke: "#06b6d4", strokeWidth: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-cyan-400/40 mt-6 uppercase tracking-[0.2em] font-medium">Source: Statista Global Estimates</p>
          </motion.div>

          {/* Bar Chart: Industry Adoption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.03] transition-all duration-500 backdrop-blur-sm min-h-[400px] group"
          >
            <h3 className="text-xl font-semibold mb-8 text-white/90 group-hover:text-purple-100 transition-colors">Industry-Specific Adoption</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData} layout="vertical" margin={{ left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#ffffff80" 
                    fontSize={12}
                    width={70}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip cursor={{ fill: '#ffffff05' }} content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.8} className="hover:fill-opacity-100 transition-all duration-300" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-purple-400/40 mt-6 uppercase tracking-[0.2em] font-medium">Source: McKinsey Global Survey</p>
          </motion.div>
        </div>

        {/* Pie Chart: Usage Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-pink-500/20 hover:bg-white/[0.03] transition-all duration-500 backdrop-blur-sm flex flex-col md:flex-row items-center gap-12 group"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-pink-100 transition-colors">Core Usage Distribution</h3>
            <p className="text-sm text-white/50 mb-8 font-light leading-relaxed">
              Companies are pivoting from pure automation towards creative assistance and sophisticated analytics, 
              marking a shift in how value is extracted from large models.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {usageData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: COLORS[index % COLORS.length], color: COLORS[index % COLORS.length] }} />
                  <span className="text-sm font-medium text-white/80">{item.name}</span>
                  <span className="text-sm font-bold text-white ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full md:w-[350px] relative">
             <div className="absolute inset-0 bg-pink-500/5 blur-[80px] rounded-full pointer-events-none" />
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={usageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {usageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity duration-300" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
             </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
