import * as React from 'react';
import { Button, Card, FormControl, InputText, LayoutOne, InputPassword } from 'upkit';
import { useForm } from 'react-hook-form';
import { rules } from './validation';
import { registerUser } from '../../api/auth';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

export default function Register(){

  let { register, handleSubmit, errors, setError } = useForm();

  const onSubmit = async formData => {
    let { password, password_confirmation } = formData;
   // (2) cek password vs password_confirmation
   if(password !== password_confirmation) {
      return setError('password_confirmation', {type: 'equality', message: 'Konfirmasi password harus dama dengan password'});
   }
    let { data } = await registerUser(formData);
    let fields = Object.keys(data.fields);
     // (3) untuk masing-masing field kita terapkan error dan tangkap
     fields.forEach(field => {
       setError(field, {type: 'server', message: data.fields[field]?.properties?.message})
     });

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
             color="blue"
					 > Daftar</Button>


         </form>


       </Card>

    </LayoutOne>
  )
}
