import { Encounter } from "../Encounter/Encounter";
import { DefaultRules } from "../Rules/Rules";

export function buildEncounter() {
  const rules = new DefaultRules();
  const encounter = new Encounter(null, jest.fn(), rules);
  return encounter;
}
