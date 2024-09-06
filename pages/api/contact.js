import dbConnect from '../../lib/dbConnect';
import Contacts from '@/modal/contact';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
        try {
            const blogs = await Contacts.create(req.body);
            res.status(201).json({ success: true, data: blogs });
          } catch (error) {
            console.log(error);
            res.status(400).json({ success: false });
          }
      break;
    
    // Handle other methods if necessary
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
