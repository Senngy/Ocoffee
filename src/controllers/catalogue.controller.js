export const catalogueController = {
    catalogue: (_, res) => {
        res.render('catalog', { title: 'Catalogue' });
    },  
};