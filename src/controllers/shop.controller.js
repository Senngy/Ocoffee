

export const shopController = {
    async shopPage(_, res) {
        res.render('shop', { title: 'Boutique' });
    },
} 