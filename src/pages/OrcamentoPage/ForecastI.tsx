import { AreaChart } from "../../components/Charts/AreaChart"
import { MultitypeChartApp } from "../../components/Charts/MultitypeChart"
import { VerticalBarChart } from "../../components/Charts/VerticalBarChart"
import { CardChartContainer } from "../style"


const ForecastI = () => {



    return (
        <main>
            <CardChartContainer>
                <AreaChart />
            </CardChartContainer>
        </main>
    )
}

export default ForecastI