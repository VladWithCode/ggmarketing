const Plan = require("../models/Plan");

const ctrl = {};

ctrl.createNewPlan = async (req, res, next) => {
  const {
    name,
    stripe_id,
    price,
    description
  } = req.body;

  try {
    const newPlan = new Plan({
      name,
      stripe_id,
      price: +price,
      description
    });

    await newPlan.save();

    return res.json({
      status: 201,
      statusTxt: 'CREATED',
      planId: newPlan.id,
      msg: `El plan "${name}" fue creado exitosamente.`
    })
  } catch (err) {
    if (err.name && err.name === 'MongoError') {
      console.log(err);
      return res.json({
        status: 500,
        statusTxt: 'DB_ERROR',
        msg: 'Ha ocurrido un error con la base de datos.',
        err
      });
    }

    return next(err);
  }
};

ctrl.updatePlan = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    stripe_id,
    price,
    description
  } = req.body;

  try {
    const foundPlan = await Plan.findById(id);

    foundPlan.set({
      name: name,
      stripe_id: stripe_id,
      price: price,
      description: description
    });

    await foundPlan.save();

    return res.json({
      status: 201,
      statusTxt: 'UPDATED',
      msg: `El plan "${foundPlan.name}" fue actualizado exitosamente.`,
      planId: foundPlan.id
    });
  } catch (err) {
    if (err.name && err.name === 'MongoError') {
      console.log(err);
      return res.json({
        status: 500,
        statusTxt: 'DB_ERROR',
        msg: 'Ha ocurrido un error con la base de datos.',
        err
      });
    }

    return next(err);
  }
}

module.exports = ctrl;
