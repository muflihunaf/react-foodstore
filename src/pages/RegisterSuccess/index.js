import * as React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Card, LayoutOne, Text } from 'upkit';

export default function RegisterSuccess(){
  return (
    <LayoutOne  size="small">
      <Card color="white">
        <div className='text-center'>
          <Text as="h3">
            Pendaftaran berhasil
          </Text>

          <Text>
            Silahkan Masuk Ke aplikasi
          </Text>

          <br/>

          <Link to="/login">
          <Button fitContainer>
            Masuk
          </Button>
          </Link>
        </div>
      </Card>
    
    </LayoutOne>
  )
}
