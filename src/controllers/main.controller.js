export const mainController = {

    error404: (_, res) => {
      res.status(404).render('error', {statusCode: 404, message: 'Page not found'});
    },
  
    homePage(_, res) {
      res.render('home');
    },
  
  }