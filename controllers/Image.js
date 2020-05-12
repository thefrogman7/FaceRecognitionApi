 const Clarifai =   require('clarifai');


 const app = new Clarifai.App({
 apiKey: '343e8fea2d10405e85c4bdee3ff1e7a8'
});

const handleApiCall = (req,res)=>{
	
 app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
 .then(data=>{
 	res.json(data);
 })
 .catch(err=>res.status(400).json('API Error'))
}
 const handleimage=(req, res,db) => {
  const { id } = req.body; 
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}
 module.exports={
 	handleimage,handleApiCall
 }