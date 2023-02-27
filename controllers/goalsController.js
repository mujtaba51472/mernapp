import goalsSchema from "../modals/goalsModal.js";

const getGoals = async (req, res) => {
  //   res.json({ msg: "get goals" });
  const goal = await goalsSchema.find({
    user : req.user.id
  });
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
      user: req.user.id
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
    // Check for user
    if (!req.user) {
      res.status(401).json({message: 'User not found'})
    }
  
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401).json({message: 'User not authorized'})
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
      // Check for user
      if (!req.user) {
        res.status(401).json({message: 'User not found'})
      }
    
      // Make sure the logged in user matches the goal user
      if (goal.user.toString() !== req.user.id) {
        res.status(401).json({message: 'User not authorized'})
      }
  const deletedGoal = await goalsSchema.findByIdAndDelete(id);
  res.json({ message: `goals delted` });
};
export { getGoals, createGoal, goalUpdated, goalDeleted };
