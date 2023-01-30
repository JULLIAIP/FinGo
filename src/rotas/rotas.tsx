
import { Route, Routes } from "react-router-dom";
import Entradas from "../pages/CadastroPage/entradas";
import Saidas from "../pages/CadastroPage/saidas";
import { HomePage } from "../pages/HomePage";
import { LancamentosPage } from "../pages/LancamentoPage";
import BudgestI from "../pages/OrcamentoPage/BudgestI";
import BudgestII from "../pages/OrcamentoPage/BudgetII";
import ForecastI from "../pages/OrcamentoPage/ForecastI";
import ForecastII from "../pages/OrcamentoPage/ForecastII";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lancamentos" element={<LancamentosPage />} />
            <Route path="/financeiro/entradas" element={<Entradas />} />
            <Route path="/financeiro/saidas" element={<Saidas />} />
            <Route path="/relatorios/budget-I" element={<BudgestI />} />
            <Route path="/relatorios/budget-II" element={<BudgestII />} />
            <Route path="/relatorios/forecast-I" element={<ForecastI />} />
            <Route path="/relatorios/forecast-II" element={<ForecastII />} />
            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>

    )
}