/**
 * Returns a task completion message based on the completion percentage.
 * @param {number} completionPercentage - The completion percentage of tasks.
 * @returns {string} A task completion message.
 */
export const getTaskCompletionText = (completionPercentage: number): string => {
  switch (true) {
    case completionPercentage === 0:
      return "No tasks completed yet. Keep going!";
    case completionPercentage === 100:
      return "Congratulations! All tasks completed!";
    case completionPercentage > 0 && completionPercentage <100:
      return "Almost there!";
  }
};
