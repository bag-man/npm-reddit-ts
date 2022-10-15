export interface Token {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}

export interface TokenForm {
  grant_type: string
  username: string
  password: string
}

export interface GenericResponse {
  success: boolean
}

export type JQueryResponse = {
  jquery: Array<any[]>
} & GenericResponse

export type SubmitArgs = {
  kind: 'link' | 'self' | 'image' | 'video' | 'videogif'
  sendreplies: boolean
  sr: string
  title: string
  text?: string
  url?: string
}
