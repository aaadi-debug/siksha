import dbConnect from '../../lib/dbConnect';
import Notification from '../../modal/notification';


export default async function handler(req, res) {
    const { method } = req;
  
    await dbConnect();
  
    switch (method) {
      case 'GET':
        if(req.query?.url){
          const Notifications = await Notification.findOne({url:req.query.url})
          res.status(200).json({ success: true, data: Notifications });
        }
        try {
          const Notifications = await Notification.find({});
          res.status(200).json({ success: true, data: Notifications });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
  }
  