"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var taskController_1 = require("../Controller/taskController");
router.get('/:listid/tasks', taskController_1.getTasksByListId);
router.get('/task/:taskid', taskController_1.getTasksByTaskId);
router.get('/completed-tasks', taskController_1.getAllCompletedTasks);
router.get('/pending-tasks', taskController_1.getAllPendingTasks);
router.get('/toggle-task/:taskid', taskController_1.toggleTaskStatusById); //patch
router.post('/add-task', taskController_1.createNewTask);
router.put('/edit-task', taskController_1.editTask);
router["delete"]('/task/:taskid', taskController_1.deleteTaskById);
exports["default"] = router;
