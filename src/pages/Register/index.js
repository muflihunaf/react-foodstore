import * as React from 'react';
import { Button, Card, FormControl, InputText, LayoutOne, InputPassword } from 'upkit';
import { useForm } from 'react-hook-form';
import { rules } from './validation';
export default function Register(){

  let { register, handleSubmit, errors, setError } = useForm();

  const onSubmit = async formData => {
    console.log(errors);

  }

  return (
    <LayoutOne size="small">

       <Card color="white">
         <form onSubmit={handleSubmit(onSubmit)}>

           <FormControl errorMessage={errors.full_name?.message}>
             <InputText
               name="full_name"
               placeholder="Nama Lengkap"
               fitContainer 
               ref={register(rules.full_name)}
             />
           </FormControl>

           <FormControl errorMessage={errors.email?.message}>
             <InputText 
               name="email"
               placeholder="Email"
               fitContainer
               ref={register(rules.email)}
             />
           </FormControl>

           <FormControl errorMessage={errors.password?.message}>
             <InputPassword
               name="password"
               placeholder="Password"
               fitContainer
               ref={register(rules.password)}
             />
           </FormControl>

           <FormControl errorMessage={errors.password_confirmation?.message}>
             <InputPassword 
               name="password_confirmation"
               placeholder="Konfirmasi Password"
               fitContainer
               ref={register(rules.password_confirmation)}
             />
           </FormControl>

					 <Button
					   size="large" 
					   fitContainer
					 > Daftar</Button>


         </form>


       </Card>

    </LayoutOne>
  )
}
