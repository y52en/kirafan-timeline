// import lib from "./lib";

function getCharge(load: number, isCard: boolean): number {
  const switch_db = (
    db: [number, number][],
    change: [number, number]
  ): void => {
    const i = db.findIndex((e) => e[0] === change[0]);
    if (i !== -1) {
      db[i] = change;
    } else {
      throw Error("not found");
    }
  };
  // [load,charge]
  const db_skill: [number, number][] = [
      [0, 0.05],
      [0.1, 0.08],
      [0.275, 0.17],
      [0.35, 0.17],
      [0.4, 0.08],
      [0.45, 0.02],
      [0.5, 0.05],
      [0.55, 0.08],
      [0.6, 0.08],
      [0.65, 0.08],
      [0.675, 0.17],
      [0.7, 0.02],
      [0.75, 0.08],
      [0.8, 0.05],
      [1, 0.05],
      [1.1, 0.22],
      [1.2, 0.08],
      [1.25, 0.08],
      [1.3, 0.08],
      [1.35, 0.17],
      [1.4, 0.08],
      [1.45, 0.08],
      [1.5, 0.17],
      [1.55, 0.08],
      [1.65, 0.1],
      [1.7, 0.17],
      [1.9, 0.17],
      [2, 0.17],
  ] as [number, number][];

  switch_db(db_skill, [125, 0]);
  switch_db(db_skill, [10, 0]);

  switch_db(db_skill, [100, 17]);
  switch_db(db_skill, [70, 17]);
  switch_db(db_skill, [75, 17]);

  switch_db(db_skill, [130, 10]);

  const db_skill_card: [number, number][] = [
    [75, 5],
    [80, 22],
    [100, 17],
  ] as [number, number][];
  switch_db(db_skill_card, [100, 22]);

  const db = isCard ? db_skill_card : db_skill;

//   console.log(lib.makeTable([], db_skill).outerHTML);
//   console.log(lib.makeTable([], db_skill_card).outerHTML);

  const charge = db.find((x) => x[0] === load);
  if (charge) {
    return charge[1];
  }
  return 0;
}
// getCharge(100, true);
export default {
  getCharge,
};
