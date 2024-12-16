import CryptoJS from 'crypto-js'; 
import dbConnect from "../../lib/dbConnect";
import department from "../../modal/department";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();
  const SECRET_KEY = process.env.SECRET_KEY ;
  switch (method) {
    //   case 'GET':
    //     if(req.query?.name){
    //       const departments = await department.find({college:req.query.name})
    //       res.status(200).json({ success: true, data: departments });
    //     }
    //     try {
    //       const departments = await department.find({});
    //       res.status(200).json({ success: true, data: departments });
    //     } catch (error) {
    //       res.status(400).json({ success: false });
    //     }
    //     break;
    //   default:
    //     res.status(400).json({ success: false });
    //     break;

    case "GET":
      try {
        let departments;

        // If a query parameter with 'name' exists, filter departments based on 'name'
        if (req.query?.name) {
          departments = await department.find({ college: req.query.name });
        } else {
          // Fetch all departments if no 'name' query is provided
          departments = await department.find({});
        }

        // Encrypt the data before sending the response
        const encryptedDepartments = CryptoJS.AES.encrypt(
          JSON.stringify(departments),
          SECRET_KEY
        ).toString();

        // Send the encrypted response
        res.status(200).json({ success: true, data: encryptedDepartments });
      } catch (error) {
        // Handle errors and send a failure response
        res
          .status(400)
          .json({ success: false, message: "Error fetching departments" });
      }
      break;

    default:
      // Handle unsupported request methods
      res
        .status(400)
        .json({ success: false, message: "Invalid request method" });
      break;
  }
}
