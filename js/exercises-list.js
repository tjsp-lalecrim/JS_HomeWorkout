const exercises = [
  // Stretching
  {
    workoutId: 1,
    name: "Get Ready!",
    duration: 15,
    img: "images/get_ready.png",
  },
  {
    workoutId: 1,
    name: "Shoulder stretch Left",
    duration: 20,
    img: "images/shoulder_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Shoulder stretch Right",
    duration: 20,
    img: "images/shoulder_stretch_right.png",
  },
  {
    workoutId: 1,
    name: "Standing Side Bend Left",
    duration: 20,
    img: "images/standing_side_bend_left.png",
  },
  {
    workoutId: 1,
    name: "Standing Side Bend Right",
    duration: 20,
    img: "images/standing_side_bend_right.png",
  },
  {
    workoutId: 1,
    name: "Triceps Stretch Left",
    duration: 20,
    img: "images/triceps_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Triceps Stretch Right",
    duration: 20,
    img: "images/triceps_stretch_right.png",
  },
  {
    workoutId: 1,
    name: "Chest Stretch",
    duration: 20,
    img: "images/chest_stretch.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Calf Stretch Left",
    duration: 20,
    img: "images/calf_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Calf Stretch Right",
    duration: 20,
    img: "images/calf_stretch_right.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Kneeling Lunge Stretch Left",
    duration: 20,
    img: "images/kneeling_lunge_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Kneeling Lunge Stretch Right",
    duration: 20,
    img: "images/kneeling_lunge_stretch_right.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Seated Butterfly Stretch",
    duration: 20,
    img: "images/seated_butterfly_stretch.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Spine Lumbar Twist Stretch Left",
    duration: 20,
    img: "images/spine_lumbar_twist_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Spine Lumbar Twist Stretch Right",
    duration: 20,
    img: "images/spine_lumbar_twist_stretch_left.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Cobra Stretch",
    duration: 20,
    img: "images/cobra_stretch.png",
  },
  {
    workoutId: 1,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 1,
    name: "Child Pose",
    duration: 20,
    img: "images/child_pose.png",
  },
  // Morning Warm Up
  {
    workoutId: 2,
    name: "Get Ready!",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Shoulder Stretch Left",
    duration: 15,
    img: "images/shoulder_stretch_left.png",
  },
  {
    workoutId: 2,
    name: "Shoulder Stretch Right",
    duration: 15,
    img: "images/shoulder_stretch_left.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Jumping Jacks",
    duration: 30,
    img: "images/jumping_jacks.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Butt Kicks",
    duration: 30,
    img: "images/butt_kicks.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png"
  },
  {
    workoutId: 2,
    name: "Bridge",
    duration: 30,
    img: "images/bridge.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Butt Bridge",
    duration: 30,
    img: "images/butt_bridge.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Bycicle Crunches",
    duration: 30,
    img: "images/bycicle_crunches.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Heel Touches",
    duration: 30,
    img: "images/heel_touches.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Bird Dog",
    duration: 30,
    img: "images/bird_dog.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Plank",
    duration: 30,
    img: "images/plank.png",
  },
  {
    workoutId: 2,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 2,
    name: "Cobra Stretch",
    duration: 30,
    img: "images/cobra_stretch.png",
  },
  // ABS
  {
    workoutId: 3,
    name: "Get Ready!",
    duration: 15,
    img: "images/get_ready.png",
  },
  {
    workoutId: 3,
    name: "Bycicle Crunches",
    duration: 30,
    img: "images/bycicle_crunches.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 20,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Heel Touches",
    duration: 30,
    img: "images/heel_touches.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Leg Raises",
    duration: 30,
    img: "images/leg_raises.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Plank",
    duration: 30,
    img: "images/plank.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Bycicle Crunches",
    duration: 30,
    img: "images/bycicle_crunches.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 20,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Heel Touches",
    duration: 30,
    img: "images/heel_touches.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Leg Raises",
    duration: 30,
    img: "images/leg_raises.png",
  },
  {
    workoutId: 3,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 3,
    name: "Plank",
    duration: 30,
    img: "images/plank.png",
  },
  // Chest
  {
    workoutId: 4,
    name: "Get Ready!",
    duration: 10,
    img: "images/get_ready.png",
  },
  {
    workoutId: 4,
    name: "Knee push-ups",
    duration: 30,
    img: "images/knee_push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Push-ups",
    duration: 30,
    img: "images/push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Wide Arm Push-ups",
    duration: 15,
    img: "images/wide_arm_push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Triceps Dips",
    duration: 30,
    img: "images/triceps_dips.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Knee push-ups",
    duration: 30,
    img: "images/knee_push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Push-ups",
    duration: 30,
    img: "images/push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Wide Arm Push-ups",
    duration: 30,
    img: "images/wide_arm_push_ups.png",
  },
  {
    workoutId: 4,
    name: "Rest",
    duration: 30,
    img: "images/rest.png",
  },
  {
    workoutId: 4,
    name: "Triceps Dips",
    duration: 30,
    img: "images/triceps_dips.png",
  },
  // HIIT
  {
    workoutId: 5,
    name: "Get Ready!",
    duration: 15,
    img: "images/get_ready.png",
  },
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 30,
    img: "images/jumping_jacks.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 30,
    img: "images/squat_reach_ups.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 30,
    img: "images/skater_jump.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 30,
    img: "images/side_hop.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 20,
    img: "images/jumping_jacks.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 20,
    img: "images/squat_reach_ups.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 20,
    img: "images/skater_jump.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 20,
    img: "images/side_hop.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 10,
    img: "images/rest.png",
  },
  {
    workoutId: 5,
    name: "Jumping Jacks",
    duration: 10,
    img: "images/jumping_jacks.png",
  },
  {
    workoutId: 5,
    name: "Squat Reach Ups",
    duration: 10,
    img: "images/squat_reach_ups.png",
  },
  {
    workoutId: 5,
    name: "Skater Jump",
    duration: 10,
    img: "images/skater_jump.png",
  },
  {
    workoutId: 5,
    name: "Side Hop",
    duration: 10,
    img: "images/side_hop.png",
  },
  {
    workoutId: 5,
    name: "Rest",
    duration: 15,
    img: "images/rest.png",
  },

  {
    workoutId: 5,
    name: "Right Quad Stretch with wall",
    duration: 15,
    img: "images/right_quad_stretch_with_wall.png",
  },
  {
    workoutId: 5,
    name: "Left Quad Stretch with wall",
    duration: 15,
    img: "images/left_quad_stretch_with_wall.png",
  },
];
