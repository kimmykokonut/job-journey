import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, LayoutPosition, Title, ChartOptions } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, ChartDataLabels, Title);

interface Application {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string[];
}
interface StatusPieProps {
  applicationData: Application[];
}

const StatusPie: React.FC<StatusPieProps> = ({ applicationData }) => {
  const statusCounts: { [key: string]: number } = applicationData.reduce((acc: { [key: string]: number }, curr: Application) => {
    const statuses = Array.isArray(curr.Status) ? curr.Status : [curr.Status];
    statuses.forEach(status => {
      acc[status] = (acc[status] || 0) + 1;
    });
    return acc;
  }, {});

  const totalCount = Object.values(statusCounts).reduce((a, b) => a + b, 0);

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [{
      data: Object.values(statusCounts),
      backgroundColor: ['#7c00ff', '#06b000', '#e6c200', '#0df0df', '#a24aff', '#1166a3'], 
    }],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: "Employer Response",
        align: 'center',
        color: '#fff',
        padding: {
          top: 5,
          bottom: 10,
        },
      },
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: 0,
        font: { size: 15 },
        clamp: true,
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          const percent = +(value / totalCount * 100).toFixed(0);
          if (percent < 3) return null; 
          return `${label}: ${percent}%`; 
        },
        textStrokeColor: '#000',
        textStrokeWidth: 1,
      }
    }
  }
return <Pie data={data} options={options} />;
}
export default StatusPie;