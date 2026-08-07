"use client";
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer } from "recharts";

export default function LanguageChart({ data }: { data: { name: string; percent: number }[] }) {
  return (
    <div className="mt-7 h-[160px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 24 }}>
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={110} tick={{ fill: "#8B96A3", fontSize: 12.5 }} axisLine={false} tickLine={false} />
          <Bar dataKey="percent" radius={[3, 3, 3, 3]} barSize={6}>
            {data.map((_, i) => <Cell key={i} fill="#7C5CFF" fillOpacity={1 - i * 0.22} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}