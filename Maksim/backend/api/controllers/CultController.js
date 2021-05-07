const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Cult = require('../models/Cult');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const CultController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Cult,
        values: {
          id: entry.global_id,
          year: entry.Year,
          admArea: entry.AdmArea,
          district: entry.District,
          address: entry.Address,
          securityStatus: entry.SecurityStatus,
          
         
          
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let cults;

      if (req.query.name) {
        cults = await Cult.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        cults = await Cult.findAll();
      }

      return res.status(200).json({ cults });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = CultController;
