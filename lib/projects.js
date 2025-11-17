import projectsData from "@/data/projects.json";

/**
 * Load all projects from the JSON file
 * @returns {Array} Array of all projects
 */
export function getAllProjects() {
  return projectsData;
}

/**
 * Filter projects by category
 * @param {string|string[]} category - Category or array of categories to filter by
 * @returns {Array} Filtered array of projects
 */
export function getProjectsByCategory(category) {
  if (!category) return getAllProjects();
  
  const categories = Array.isArray(category) ? category : [category];
  return projectsData.filter((project) =>
    project.category.some((cat) => categories.includes(cat))
  );
}

/**
 * Get a single project by slug
 * @param {string} slug - Project slug
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectBySlug(slug) {
  return projectsData.find((project) => project.slug === slug) || null;
}

/**
 * Get a single project by ID
 * @param {number} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectById(id) {
  return projectsData.find((project) => project.id === id) || null;
}

/**
 * Generate a slug from a title
 * @param {string} title - Title to convert to slug
 * @returns {string} URL-friendly slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Get featured projects
 * @returns {Array} Array of featured projects
 */
export function getFeaturedProjects() {
  return projectsData.filter((project) => project.featured);
}

