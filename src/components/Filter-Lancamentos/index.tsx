import { FilterContain } from "./style";

export function FilterLancamento() {
    return (
        <FilterContain>
            <select>
                <option>Entradas</option>
                <option>Saídas</option>
                <option>Transferências</option>
            </select>
            <select>
                <option>Cartão Corporativo</option>
                <option>Poupança</option>
                <option>Caixa</option>
            </select>
            <select>
                <option>Todas as categorias</option>
                <option>Custos fixos</option>
                <option>Venda de Produtos</option>
            </select>
            <select>
                <option>Sem Tags</option>
            </select>


        </FilterContain>
    )
}