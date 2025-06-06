export function isLogged(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // l'utilisateur est connecté
  } else {
    return res.redirect('/admin/login'); // sinon on le renvoie au login
  }
}