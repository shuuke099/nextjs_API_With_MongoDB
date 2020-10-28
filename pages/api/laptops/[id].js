import dbconnect from '../../../middleware/dbMiddleware';
import Labtop from '../../../Model/Labtop';

const handleId = async (req, res) => {
    const {
        query: { id },
        method
    } = req;
 
  switch (method) {
    case 'GET':
      try {
        const labtop = await Labtop.findById(id);
        res.status(200).json({ success: true, data: labtop });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PATCH':
      try {  
        const laptop = await Labtop.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        console.log(laptop);
       
        if (!laptop) {
            return res.status(400).json({ success: false });
        }
        res.status(201).json({ success: true, data: laptop });
      } catch (err) {
        res.status(400).json({ success: false , error: err.message});
      }
      
      break;
    case 'DELETE':
        try {  
          const laptop = await Labtop.findByIdAndDelete(id);
          console.log(laptop);
         
          if (!laptop) {
              return res.status(400).json({ success: false });
          }
          res.status(200).json({data:"successfully deleted"});
        } catch (err) {
          res.status(400).json({ success: false , error: err.message});
        }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
export default dbconnect(handleId);
