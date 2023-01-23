import { AreaChart } from "../../components/Charts/AreaChart"
import { MultitypeChartApp } from "../../components/Charts/MultitypeChart"
import { VerticalBarChart } from "../../components/Charts/VerticalBarChart"
import { CardChartContainer } from "../style"


const BudgestII = () => {



    return (
        <main>

            <CardChartContainer>
                <VerticalBarChart />
            </CardChartContainer>


            <CardChartContainer>
                <VerticalBarChart />
            </CardChartContainer>
        </main>
    )
}

export default BudgestII