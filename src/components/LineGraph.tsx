import { Line } from "react-chartjs-2";
import { Chart, LineElement, LinearScale, CategoryScale, PointElement, Title, Legend, ChartOptions } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(LineElement, LinearScale, CategoryScale, PointElement, Title, Legend, ChartDataLabels);

interface Application {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string[];
}
interface AppProps {
  applicationData: Application[];
}

const LineGraph: React.FC<AppProps> = ({ applicationData }) => {

  const getWeekStartDate = (date:Date) => {
    //day of week. 0 = sun
    const day = date.getDay(); 
    // diff curr date to last sun
    const diff = date.getDate() - day; 
    return new Date(date.setDate(diff));
  };

  const applicationsPerWeek = applicationData.reduce<Record<string, number>>((acc, application) => {
    const date = new Date(application.Date);
    const weekStart = getWeekStartDate(date);
    const weekStartKey = weekStart.toISOString().split('T')[0];

    acc[weekStartKey] = (acc[weekStartKey] || 0) + 1;
    return acc;
  }, {});

  const sortedWeeks = Object.keys(applicationsPerWeek).sort();
  const labels = sortedWeeks.map(week => {
    const date = new Date(week);
    const formattedDate = { month: 'short' as const, day: 'numeric' as const };
    return date.toLocaleDateString('en-US', formattedDate);
  });
  const count = sortedWeeks.map(week => applicationsPerWeek[week]);

  const data = { 
    labels: labels,
    datasets: [{
      labels: 'Applications per Week',
      data: count,
      backgroundColor: '#7c00ff',
      borderColor: '#a24aff',
      pointBorderColor: '#e6c200',
      fill: false,
      tension: 0.4
    }],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "# Applications Per Week",
      },
      datalabels: {
        display: false,
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        }
      }
    }
  }
  return <Line data={data} options={options} />;
}
export default LineGraph;