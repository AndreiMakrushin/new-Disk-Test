export interface IAuthForm {
  email: string
  password: string
}

export interface IRegisterForm {
  email: string
  password: string
  confirm_password: string
}

export type TAuthMode = IRegisterForm | IAuthForm

export interface INoteList {
  id: number
  title: string
  content: string
}
