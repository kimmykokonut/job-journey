import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

interface Application {
  Date: string;
  Company: string;
  Position: string;
  Source: string;
  Status: string;
}
interface StatusPieProps {
  applicationData: Application[];
}

const StatusPie: React.FC<StatusPieProps> = ({ applicationData }) => {
  const statusCounts: { [key: string]: number } = applicationData.reduce((acc: { [key: string]: number }, curr: Application) => {
    acc[curr.Status] = (acc[curr.Status] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [{
      data: Object.values(statusCounts),
      backgroundColor: ['#7c00ff', '#06b000', '#e6c200', '#0df0df', '#a24aff'], // 5 status: nope, ghost, interview, takehome, pending
    }],
  };
  
  return <Pie data={data} />;
}
export default StatusPie;