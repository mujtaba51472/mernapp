import goalsSchema from "../modals/goalsModal.js";

const getGoals = async (req, res) => {
  //   res.json({ msg: "get goals" });
  const goal = await goalsSchema.find();
  res.json(goal);
};

const createGoal = async (req, res) => {
  try {
    // const goal = req.body;
    // const newGoal = new goalsSchema(goal);
    // const resss = await newGoal.save();
    // console.log("res", resss);
    // res.status(200).json(resss);
    const goal = await goalsSchema.create({
      text: req.body.text,
    });
    res.status(200).json({ message: "goal created", goal });
  } catch (error) {
    console.log(error);
  }
};

const goalUpdated = async (req, res) => {
  const id = req.params.id;
  const goal = await goalsSchema.findById(id);
  if (!goal) {
    return res.status(400).json({ message: " goal not found" });
  }
  const updatedGoal = await goalsSchema.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({ message: `Goal updated with ID: ${id}`, updatedGoal });
};

const goalDeleted = async (req, res) => {
  const id = req.params.id;
  const goal = await goalsSchema.findById(id);
  if (!goal) {
    return res.status(400).json({ message: " goal not found" });
  }
  const deletedGoal = await goalsSchema.findByIdAndDelete(id);
  res.json({ message: `goals delted` });
};
export { getGoals, createGoal, goalUpdated, goalDeleted };
