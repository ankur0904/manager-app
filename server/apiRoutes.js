import express from "express";
import {
  User,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Important,
} from "./models.js";

const router = express.Router();

router.post("/new/user", async function (req, res) {
  const id = req.headers.id;
  const name = req.body.name;
  const newUser = new User({
    name: name,
    id: id,
  });
  await newUser.save();
  res.status(200);
});

router.post("/new/task/sunday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newSundayTask = new Sunday({
    userId: userId,
    task: task,
  });
  await newSundayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"});
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/monday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newMondayTask = new Monday({
    userId: userId,
    task: task,
  });
  await newMondayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/tuesday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newTuesdayTask = new Tuesday({
    userId: userId,
    task: task,
  });
  await newTuesdayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/wednesday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newWednesdayTask = new Wednesday({
    userId: userId,
    task: task,
  });
  await newWednesdayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/thursday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newThursdayTask = new Thursday({
    userId: userId,
    task: task,
  });
  await newThursdayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/friday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newFridayTask = new Friday({
    userId: userId,
    task: task,
  });
  await newFridayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/saturday", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newSaturdayTask = new Saturday({
    userId: userId,
    task: task,
  });
  await newSaturdayTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/new/task/important", async function (req, res) {
  const userId = req.headers.id;
  const task = req.body.task;
  const newImportantTask = new Important({
    userId: userId,
    task: task,
  });
  await newImportantTask
    .save()
    .then(() => {
      res.status(200).json({message: "Added Successfully"})
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.get("/get/task/sunday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Sunday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Sunday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/monday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Monday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Monday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/tuesday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Tuesday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Tuesday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/wednesday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Wednesday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Wednesday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/thursday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Thursday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Thursday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/friday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Friday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Friday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/saturday", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Saturday.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No tasks found for Saturday" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/get/task/important", async function (req, res) {
  const userId = req.headers.id;
  try {
    const response = await Important.find({ userId: userId }).exec();
    if (response.length === 0) {
      res.status(404).json({ message: "No important tasks found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
