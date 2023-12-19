import ServiceProduct from '../service/products.service'
const service = new ServiceProduct()

const postProducts = async (req, res) => {
    try {
        const body = req.body;
        const post = await service.post(body)
        res.json(post)
    } catch (error) {
        res.status(400).json('Error en la data');
    }
}

const getProducts = async (req, res) => {
    try {
        const page = req.query.page;
        const classifications = req.query.classifications?.split(',');
        const get = await service.getPagination(page, classifications);
        
        return res.json(get)
    } catch (error) {
        res.status(400).json('Error en la data');
    }
}

module.exports =  { postProducts, getProducts };
