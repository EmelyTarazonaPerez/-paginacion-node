import ServiceClassifications from '../service/classifications.service'
const service = new ServiceClassifications()


const getClassifications = async (req, res) => {
    try {
        const page = req.query.page;
        const classifications = req.query.classifications?.split(',');
        const get = await service.get();
        
        return res.json(get)
    } catch (error) {
        res.status(400).json('Error en la data');
    }
}

module.exports = { getClassifications };
