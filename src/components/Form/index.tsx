import { FormData, InputData } from "./style"


const Form = () => {

    return (
        <FormData>
            
            <select>
                <option>Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
                <option>Abril</option>
                <option>Maio</option>
                <option>Junho</option>
            </select>
        
                <InputData />
                <InputData />
                <InputData />
                <InputData />
                <button type="submit">Atualizar</button>
     
        </FormData >
    )
}

export default Form