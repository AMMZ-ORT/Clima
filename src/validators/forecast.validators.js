import Joi from 'joi'

export const forecastSchema = Joi.object({
  latitude: Joi.number().min(-90).max(90).required().messages({
    'number.base': 'La latitud debe ser un número',
    'number.min': 'La latitud no puede ser menor a -90',
    'number.max': 'La latitud no puede ser mayor a 90',
    'any.required': 'La latitud es obligatoria'
  }),
  longitude: Joi.number().min(-180).max(180).required().messages({
    'number.base': 'La longitud debe ser un número',
    'number.min': 'La longitud no puede ser menor a -180',
    'number.max': 'La longitud no puede ser mayor a 180',
    'any.required': 'La longitud es obligatoria'
  })
})