import { createPost } from '../../../lib/posts'
import { format } from 'date-fns'
export default async function handler(req, res) {
  const { id, title, content } = req.body

  try {
    await createPost({
      id,
      title,
      content,
      date: format(new Date(), 'yyyy-MM-dd'),
    })
    res.status(200).json({ msg: 'success' })
  } catch (error) {
    res.status(500).json({ msg: 'failed ' + error })
  }
}
