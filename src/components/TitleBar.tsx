import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, ArcElement, CategoryScale, BarElement, Title, ChartOptions, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

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

const TitleBar: React.FC<AppProps> = ({ applicationData }) => {
  interface PositionCount {
    [key: string]: number;
  }

  const positionCount = applicationData.reduce<PositionCount>((acc, { Position }) => {
    acc[Position] = (acc[Position] || 0) + 1;
    return acc;
  }, {});

  const sortedPositions = Object.keys(positionCount).sort((a, b) => {
    if (a === 'Other') return 1;
    if (b === 'Other') return -1;
    return a.localeCompare(b);
  });

  const sortedData = sortedPositions.map(position => positionCount[position]);

  const data = {
    labels: sortedPositions,
    datasets: [{
      data: sortedData,
      backgroundColor: ['#7c00ff', '#06b000', '#e6c200', '#0df0df', '#a24aff', '#1166a3'], 
    }],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Number of Applications by Position Title",
      },
      datalabels: {
        display: false,
        color: '#fff',
      }
    }
  }
  return <Bar data={data} options={options} />;
}
export default TitleBar;