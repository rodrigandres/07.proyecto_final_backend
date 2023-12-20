import { saveQuotation, getQuotationsByUserId, getQuotationsByUserEmail } from '../models/quotation.dao.js'

export const saveQuotationController = async (req, res) => {
  try {
    const {
      distanceText,
      distanceValue,
      label,
      name,
      toLabel,
      toName,
      userId,
      userEmail
    } = req.body.quotationData

    const savedQuotation = await saveQuotation(
      distanceText,
      distanceValue,
      label,
      name,
      toLabel,
      toName,
      userId,
      userEmail
    )

    console.log('Valor de savedQuotation:', savedQuotation)

    return res.status(201).json(savedQuotation)
  } catch (error) {
    console.error('Error al guardar la cotización:', error)
    return res.status(500).json({ message: 'Error al guardar la cotización' })
  }
}

export const getQuotationsByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params
    const quotations = await getQuotationsByUserId(userId)
    console.log('Valor de userId:', quotations)

    if (quotations.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cotizaciones para este usuario.' })
    }

    return res.status(200).json(quotations)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las cotizaciones.' })
  }
}

export const getQuotationsByUserEmailController = async (req, res) => {
  try {
    const { email } = req.params
    const quotations = await getQuotationsByUserEmail(email)
    console.log('Valor email', email)
    if (quotations.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cotizaciones para este correo electrónico.' })
    }
    return res.status(200).json(quotations)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las cotizaciones por correo electrónico.' })
  }
}
