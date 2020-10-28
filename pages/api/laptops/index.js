import dbconnect from '../../../middleware/dbMiddleware';
import Labtop from '../../../Model/Labtop';

const handler = async (req, res) => {
  const { method } = req;
 
  switch (method) {
    case 'GET':
      try {
        const labtop = await Labtop.find({});
        res.status(200).json({ success: true, data: labtop });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {  
        const laptop = await Labtop.create(req.body);
        console.log(laptop);
       
        res.status(201).json({ success: true, data: laptop });
      } catch (err) {
        res.status(400).json({ success: false , error: err.message});
      }
      
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default dbconnect(handler);
