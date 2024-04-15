const rules = {
  email: {
      required: { value: true, message: 'Nama lengkap harus diisi.'}, 
      maxLength: { value: 500, message: 'Panjang nama lengkap maksimal 500 karakter.'},
    },
  password: {
    required: {value: true, message: 'Password tidak boleh kosong.'},
    maxLength: {value: 255, message: 'Panjang password maksimal 255 karakter.'}
  }
}

export { rules }
