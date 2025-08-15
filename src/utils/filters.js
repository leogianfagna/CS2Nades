import data from "/public/data/nades.json";
const nades = data["nades"];

/**
 * Retorna as nades filtradas baseado nos filtros escolhidos.
 *
 * @param {Object} filters Objeto com campos e cada campo representa um tipo de filtro (team, type e map).
 * @returns {Object[]} Array de objetos sendo cada objeto uma nade registrada.
 */
export function getFilteredNades(filters) {
  if (!filters.map) return null;

  const sanitizedFilters = getSanitizedFilters(filters);
  return nades.filter((nade) => {
    if ("type" in sanitizedFilters && nade.type !== sanitizedFilters.type) {
      return false;
    }

    if ("team" in sanitizedFilters && nade.team !== sanitizedFilters.team) {
      return false;
    }

    return nade.map === filters.map;
  });
}

function getSanitizedFilters(filters) {
  const values = structuredClone(filters);
  for (const key in values) {
    if (!values[key]) {
      delete values[key];
    }
  }

  return values;
}
