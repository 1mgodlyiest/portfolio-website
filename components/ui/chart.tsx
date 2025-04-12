"use client"

// Simple Bar Chart Component
export const BarChart = ({ data, index, categories, colors, valueFormatter = (value) => `${value}` }) => {
  const maxValue = Math.max(...data.map((item) => Math.max(...categories.map((cat) => Number(item[cat])))))

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-end space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col space-y-1">
            <div className="text-sm text-muted-foreground">{item[index]}</div>
            {categories.map((category, j) => (
              <div key={j} className="flex items-center space-x-2">
                <div className="w-full bg-secondary/30 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(item[category] / maxValue) * 100}%`,
                      backgroundColor: colors[j % colors.length],
                    }}
                  ></div>
                </div>
                <div className="text-sm whitespace-nowrap">{valueFormatter(item[category])}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {categories.map((category, i) => (
          <div key={i} className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i % colors.length] }}></div>
            <span className="text-xs">{category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simple Line Chart Component
export const LineChart = ({ data, index, categories, colors, valueFormatter = (value) => `${value}` }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 grid grid-cols-1 gap-4">
        {categories.map((category, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i % colors.length] }}></div>
              <span className="text-sm">{category}</span>
            </div>
            <div className="bg-secondary/30 rounded-lg p-3">
              <div className="flex justify-between">
                {data.map((item, j) => (
                  <div key={j} className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full mb-1"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    ></div>
                    <div className="text-xs">{valueFormatter(item[category])}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simple Pie Chart Component
export const PieChart = ({ data, index, category, colors, valueFormatter = (value) => `${value}` }) => {
  const total = data.reduce((sum, item) => sum + item[category], 0)

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            {data.map((item, i) => {
              const percentage = (item[category] / total) * 100
              return (
                <div key={i} className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute inset-0 border-4"
                    style={{
                      borderColor: colors[i % colors.length],
                      opacity: 0.8,
                      clipPath: `polygon(50% 50%, 100% 50%, 100% ${50 - percentage}%, 50% 50%)`,
                      transform: `rotate(${i * 36}deg)`,
                    }}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-2">
          {data.slice(0, 5).map((item, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i % colors.length] }}></div>
              <span className="text-sm">{item[index]}</span>
              <span className="text-xs text-muted-foreground">
                {valueFormatter(item[category])} ({((item[category] / total) * 100).toFixed(1)}%)
              </span>
            </div>
          ))}
          {data.length > 5 && <div className="text-xs text-muted-foreground">+{data.length - 5} more countries</div>}
        </div>
      </div>
    </div>
  )
}
