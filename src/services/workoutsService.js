const workouts = [
    {
        id: 1,
        name: "Bench Press",
        description: "Bench Press",
        muscles: "Chest",
        equipment: "Barbell",
        image: "https://www.bodybuilding.com/exercises/exerciseImages/quadriceps-bench-press-1.jpg",
        video: "https://www.youtube.com/watch?v=_q-rZQ-_zDU",
    },
    {
        id: 2,
        name: "Incline Bench Press",
        description: "Incline Bench Press",
        muscles: "Chest",
        equipment: "Barbell",
        image: "https://www.bodybuilding.com/exercises/exerciseImages/quadriceps-bench-press-1.jpg",
        video: "https://www.youtube.com/watch?v=_q-rZQ-_zDU",
    },
    {
        id: 3,
        name: "Decline Bench Press",
        description: "Decline Bench Press",
        muscles: "Chest",
        equipment: "Barbell",
        image: "https://www.bodybuilding.com/exercises/exerciseImages/quadriceps-bench-press-1.jpg",
        video: "https://www.youtube.com/watch?v=_q-rZQ-_zDU",
    },
];
function getAllWorkouts() {
    return workouts;
}
function getWorkoutById(id) {
    return workouts.find((workout) => workout.id === id);
}
/**
 * Create a workout by adding it to the workouts array and returning the workout.
 * @param {import("./types").Workout} workout - This is the workout object that we're creating.
 * @returns The workout object is being returned.
 */
function createWorkout(workout) {
    workout.id = workouts.length + 1;
    workouts.push(workout);
    return workout;
}
function updateWorkout(id, workout) {
    const index = workouts.findIndex((w) => w.id === id);
    if (index !== -1) {
        workouts[index] = workout;
        return workout;
    }
    return null;
}
function deleteWorkout(id) {
    const index = workouts.findIndex((w) => w.id === id);
    if (index !== -1) {
        workouts.splice(index, 1);
        return true;
    }
    return false;
}
module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};
