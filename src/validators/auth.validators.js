import Joi from 'joi'

export const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.empty': 'El usuario es obligatorio',
    'string.min': 'El usuario debe tener al menos {#limit} caracteres',
    'string.max': 'El usuario no puede tener más de {#limit} caracteres'
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'La contraseña es obligatoria',
    'string.min': 'La contraseña debe tener al menos {#limit} caracteres'
  })
})