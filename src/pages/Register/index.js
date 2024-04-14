import * as React from 'react';
import { Button, Card, FormControl, InputText, LayoutOne } from 'upkit';

export default function Register(){
  return (
    <LayoutOne size="small">
        <Card color="white">
          <form>
            <FormControl>
            <InputText 
            name='full_name'
            placeholder='Nama Lengkap'
            fitContainer
            />
            </FormControl>

            <FormControl>
            <InputText 
            name='email'
            placeholder='Email'
            fitContainer
            />
            </FormControl>

            <FormControl>
            <InputText 
            name='password'
            placeholder='Password'
            fitContainer
            />
            </FormControl>

            <FormControl>
            <InputText 
            name='password_confirmation'
            placeholder='Konfirmasi Password'
            fitContainer
            />
            </FormControl>

            <Button
            size='large'
            fitContainer
            color='blue'
            >
            Daftar
            </Button>
          </form>
        </Card>
    </LayoutOne>
  )
}
