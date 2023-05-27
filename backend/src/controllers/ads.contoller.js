const Ads = require('../models/helpRequest.models');
class AdsController {
    
    async create(req, res){
        const {title, description, location, skillId} = req.body
        // const userId = req.user.id || 1
        const userId = 1
        const ads = await Ads.create({title, description, location, userId, skillId})
        return res.json(ads)
    }
    async getAll(req, res){
        let {limit, page } = req.query

        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit
        let adsNames = await Ads.findAndCountAll({ limit, offset });

        return res.json(adsNames)       

    }
    async delete(req, res){
        const ads = await Ads.findOne({
            where: {
                id: req.params.id
            }
        })
        
        if (!ads) {
            return res.status(400).json({
                message: 'Объявление не найдено'
            });
        }
    
        await Ads.destroy({where: {id: req.params.id}})
        res.status(200).json({message: 'Объявление удалено'});
    }

    async update(req, res){
        const ads = await Ads.findOne({where:{id: req.params.id}})
        if(!ads){
            res.status(400).json({ message: 'Объявление не найдено' });
        }
        Ads.update({
            name: req.body.name,
        },
            { where: { id: req.params.id } });

        res.status(200).json({ message: "Объявление обновлено" });
    }

}

module.exports = new AdsController();