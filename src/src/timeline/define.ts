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
    [0, 5],
    [10, 8],
    [27.5, 17],
    [35, 17],
    [40, 8],
    [45, 2],
    [50, 5],
    [55, 8],
    [60, 8],
    [65, 8],
    [67.5, 17],
    [70, 2],
    [75, 8],
    [80, 5],
    [100, 5],
    [110, 22],
    [120, 8],
    [125, 8],
    [130, 8],
    [135, 17],
    [140, 8],
    [145, 8],
    [150, 17],
    [155, 8],
    [165, 10],
    [170, 17],
    [190, 17],
    [200, 17],
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

  const charge = db.find((x) => x[0] === load);
  if (charge) {
    return charge[1];
  }
  return 0;
}

const ttk_val = 125;

export default {
  getCharge,
  ttk_val
};
