const exercises = [
  // Stretching
  {
    workoutId: 1,
    name: "Shoulder stretch Left",
    duration: 30,
    img: "images/shoulder_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Shoulder Stretch Right",
    duration: 30,
    img: "images/shoulder_stretch_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Standing Side Bend Left",
    duration: 30,
    img: "images/standing_side_bend_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Standing Side Bend Right",
    duration: 30,
    img: "images/standing_side_bend_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Triceps Stretch Left",
    duration: 30,
    img: "images/triceps_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Triceps Stretch Right",
    duration: 30,
    img: "images/triceps_stretch_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Chest Stretch",
    duration: 30,
    img: "images/chest_stretch.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Calf Stretch Left",
    duration: 30,
    img: "images/calf_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Calf Stretch Right",
    duration: 30,
    img: "images/calf_stretch_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Kneeling Lunge Stretch Left",
    duration: 30,
    img: "images/kneeling_lunge_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Kneeling Lunge Stretch Right",
    duration: 30,
    img: "images/kneeling_lunge_stretch_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Seated Butterfly Stretch",
    duration: 30,
    img: "images/seated_butterfly_stretch.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Spine Lumbar Twist Stretch Left",
    duration: 30,
    img: "images/spine_lumbar_twist_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Spine Lumbar Twist Stretch Right",
    duration: 30,
    img: "images/spine_lumbar_twist_stretch_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Bridge",
    duration: 30,
    img: "images/bridge.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Plank",
    duration: 30,
    img: "images/plank.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Donkey Kicks - Left",
    reps: 30,
    img: "images/donkey_kicks_left.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Donkey Kicks - Right",
    reps: 30,
    img: "images/donkey_kicks_right.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Cobra Stretch",
    duration: 30,
    img: "images/cobra_stretch.png",
    interval: 10,
  },
  {
    workoutId: 1,
    name: "Child Pose",
    duration: 30,
    img: "images/child_pose.png",
    interval: 10,
  },

  // Morning Warm Up
  // {
  //   workoutId: 2,
  //   name: "Jumping Jacks",
  //   duration: 60,
  //   img: "images/jumping_jacks.png",
  //   interval: 10,
  // },
  // {
  //   workoutId: 2,
  //   name: "Butt Kicks",
  //   duration: 60,
  //   img: "images/butt_kicks.png",
  //   interval: 10,
  // },
  // {
  //   workoutId: 2,
  //   name: "Jumping Jacks",
  //   duration: 60,
  //   img: "images/jumping_jacks.png",
  //   interval: 10,
  // },
  // {
  //   workoutId: 2,
  //   name: "Butt Kicks",
  //   duration: 60,
  //   img: "images/butt_kicks.png",
  //   interval: 10,
  // },
  // ABS
  {
    workoutId: 3,
    name: "Bycicle Crunches",
    reps: 30,
    img: "images/bycicle_crunches.png",
    interval: 10,
  },
  {
    workoutId: 3,
    name: "Heel Touches",
    reps: 30,
    img: "images/heel_touches.png",
    interval: 10,
  },
  {
    workoutId: 3,
    name: "Leg Raises",
    reps: 20,
    img: "images/leg_raises.png",
    interval: 10,
  },
  {
    workoutId: 3,
    name: "Plank",
    duration: 60,
    img: "images/plank.png",
    interval: 10,
  },
  // Chest
  {
    workoutId: 4,
    name: "Knee push-ups",
    reps: 25,
    img: "images/knee_push_ups.png",
    interval: 10,
  },
  {
    workoutId: 4,
    name: "Push-ups",
    reps: 25,
    img: "images/push_ups.png",
    interval: 10,
  },
  {
    workoutId: 4,
    name: "Wide Arm Push-ups",
    reps: 25,
    img: "images/wide_arm_push_ups.png",
    interval: 10,
  },
  {
    workoutId: 4,
    name: "Triceps Dips",
    reps: 25,
    img: "images/triceps_dips.png",
    interval: 0,
  },
  // HIIT
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 30,
    img: "images/jumping_jacks.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 30,
    img: "images/squat_reach_ups.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 30,
    img: "images/skater_jump.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 30,
    img: "images/side_hop.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 20,
    img: "images/jumping_jacks.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 20,
    img: "images/squat_reach_ups.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 20,
    img: "images/skater_jump.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 20,
    img: "images/side_hop.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 10,
    img: "images/jumping_jacks.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 10,
    img: "images/squat_reach_ups.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 10,
    img: "images/skater_jump.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 10,
    img: "images/side_hop.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Right Quad Stretch with wall",
    duration: 15,
    img: "images/right_quad_stretch_with_wall.png",
    interval: 10,
  },
  {
    workoutId: 5,
    name: "Left Quad Stretch with wall",
    duration: 15,
    img: "images/left_quad_stretch_with_wall.png",
    interval: 10,
  },
  // Arms
  {
    workoutId: 6,
    name: "Kettlebell Lift - Left Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Right Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Left Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Right Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Left Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Right Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Left Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
  {
    workoutId: 6,
    name: "Kettlebell Lift - Right Arm",
    duration: 60,
    img: "images/get_ready.png",
    interval: 20,
  },
];
