import { getUserProfileById } from '../models/users.dao.js'

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id

    const userProfile = await getUserProfileById(userId)

    if (!userProfile) {
      return res.status(404).json({ message: 'Perfil de usuario no encontrado' })
    }

    return res.status(200).json(userProfile)
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error)
    return res.status(500).json({ message: 'Error al obtener el perfil del usuario' })
  }
}
