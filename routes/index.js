
/*
 * GET home page.
 */

exports.index = (req, res)=>{
  res.render('pages/auth/login', { title: 'Express' });
};