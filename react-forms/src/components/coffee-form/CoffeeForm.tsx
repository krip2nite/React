import React from 'react'
import Coffee from '../../model/Coffee'
import './CoffeeForm.css'
import { useForm } from 'react-hook-form';


interface Props{
    submitter: (order: Coffee) => void;
}

const CoffeeForm: React.FC<Props> = ({submitter}) => {
    const {register, formState, handleSubmit} =  useForm<Coffee>();
    
        return( 
        <form title='Coffee Order' onSubmit={handleSubmit(data => submitter(data))}>
        
        <input {...register("email",{required: true})} type='email' placeholder='Enter email'/>
        {formState.errors?.email?.type === 'required' && <p className="error">Field email must be filled</p>}

        <select {...register("type", {required:true})}>
            <option value="">--Select Coffee</option>
            <option value ="cappuccino">cappuccino</option>
            <option value="espresso">espresso</option>
            <option value="late">late</option>
            <option value="black">black</option>
            <option value="Americano">Americano</option>
            <option value="Cortado">Cortado</option>
        </select>

        {formState.errors?.type?.type === "required" && (
        <p className="error">Type of Coffe should be selected</p>
        )}

        <select {...register("flavor", {required:true})}>
            <option value="">--Select Flavor</option>
            <option value ="none">none</option>
            <option value="vanila">vanila</option>
            <option value="caramel">caramel</option>
            <option value="Sweet">Sweet</option>
            <option value="Bitter">Bitter</option>
            <option value="Roasted">Roasted</option>
        </select>

        {formState.errors?.flavor?.type === "required" && (
        <p className="error">Flavor of Coffe should be selected</p>
        )}

        <select {...register("size", {required:true})}>
            <option value="">--Select Size</option>
            <option value ="short">short</option>
            <option value="tall">tall</option>
            <option value="grand">grand</option>
        </select>
        
        {formState.errors?.size?.type === "required" && (
        <p className="error">Size should be selected</p>
        )}
        
        <div>
            <label htmlFor='strength'>Strength(%):</label>
            <input type="range" id="strength" min={1} max ={100} step={1} defaultValue={50}
            {...register("strength")}/>

        </div>
        <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
        </form>
)}

export default CoffeeForm;