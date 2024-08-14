import dbConnect from '../../lib/dbConnect';
import TabData from '../../modal/tabdata';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const query = req.query?.college ? { college: req.query.college } : {};
        const tabdatas = await TabData.find(query);
        res.status(200).json({ success: true, data: tabdatas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    
    // Handle other methods if necessary
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
