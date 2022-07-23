const workoutsService = require("../services/workoutsService");


/**
 * It returns the workouts array
 * @param {import("express").Request} _req - The request object. This is an object that represents the HTTP request and has
 * properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param {import("express").Response} res - The response object.
 * @returns The workouts array is being returned.
 */
function getAllWorkouts(_req, res) {
    const workouts = workoutsService.getAllWorkouts();
    res.json(workouts);
}
/**
 * It returns a workout object
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function getWorkoutById(req, res) {
    const workout = workoutsService.getWorkoutById(parseInt(req.params.id));
    if (workout) {
        res.json(workout);
    }
    else {
        res.status(404).send("Workout not found");
    }
}
/**
 * It creates a new workout object and adds it to the workouts array
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function createWorkout(req, res) {
    const workout = workoutsService.createWorkout(req.body);
    res.json(workout);
}
/**
 * It updates a workout object
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function updateWorkout(req, res) {
    const workout = workoutsService.updateWorkout(parseInt(req.params.id), req.body);
    if (workout) {
        res.json(workout);
    }
    else {
        res.status(404).send("Workout not found");
    }
}
/**
 * It deletes a workout object
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function deleteWorkout(req, res) {
    const workout = workoutsService.deleteWorkout(parseInt(req.params.id));
    if (workout) {
        res.json(workout);
    }
    else {
        res.status(404).send("Workout not found");
    }
}
module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};
