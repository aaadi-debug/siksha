import dbConnect from '../../lib/dbConnect';
import InnerAdmissionData from '../../modal/admission';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      if(req.query?.name){

        console.log(req.query?.name)
        const query = { college: req.query.name }
        console.log(query)
        const InnerAdmissionDatas = await InnerAdmissionData.find(query)
        res.status(200).json({ success: true, data: InnerAdmissionDatas });
      }
      try {
        const InnerAdmissionDatas = await InnerAdmissionData.find({});
        res.status(200).json({ success: true, data: InnerAdmissionDatas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    
      if (req.query?.id) {
        await InnerAdmissionData.deleteOne({_id:req.query?.id});
        res.json(true);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
