type UserData = { email: string; password: string; id: number }

type LoginFields = {
  name: 'email' | 'password'
  label: 'email' | 'password'
  type: 'text' | 'password'
}

type FormDataObject = { title: string; description: string; id: number; created: string; updated?: string }
