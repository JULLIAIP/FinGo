import { AreaChart } from "../../components/Charts/AreaChart"
import { MultitypeChartApp } from "../../components/Charts/MultitypeChart"
import { VerticalBarChart } from "../../components/Charts/VerticalBarChart"
import { CardChartContainer } from "../style"


const BudgestI = () => {

    return (
        <main colunm = '1fr'>
            <CardChartContainer>
                <MultitypeChartApp />
            </CardChartContainer>
        </main>
    )
}

export default BudgestI