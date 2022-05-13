import lib from "../../lib";
import {
  card_event,
  TL_chara,
  TL_obj,
  TL_type,
  buff,
  type_tl_comment,
} from "../../types";

export class timeline {
  current: TL_obj[];

  color: string | undefined;
  place_of_currentTimeline: number;
  cardData: [number, string][];
  comment: type_tl_comment;
  switchData: [number, string, string][];

  constructor() {
    this.current = [];
    this.switchData = [];
    this.cardData = [];
    this.comment = [];
    this.color = undefined;

    this.place_of_currentTimeline = 0;
  }

  move(
    OrderValue: number,
    id = this.ID_of_firstChara(),
    canMoveWithout1stChara = false
  ): void {
    this.setColor(id, this.place_of_currentTimeline);

    if (id !== this.ID_of_firstChara() && canMoveWithout1stChara === false) {
      throw new Error("最初のキャラ以外は操作できません");
    }
    const moveChara_nowOrderValue =
      this.get_chara_by_ID(id).timeline_OrderValue;

    const OrderValue_diff_between_1stchara_and_movechara =
      moveChara_nowOrderValue - this.OrderValue_of_firstChara();
    const calculated_moved_OrderValue =
      moveChara_nowOrderValue +
      OrderValue -
      OrderValue_diff_between_1stchara_and_movechara;

    this.pushChara(id, calculated_moved_OrderValue);
    this.nextturn();
  }

  moveTTK(charas: string[], OrderValues: number[]): void {
    if (charas.length > 3 || charas.length <= 0) {
      throw new Error("移動するキャラが4人以上あるか、1人もありません");
    }
    if (charas.length !== OrderValues.length) {
      throw new Error("charasとOrderValuesの長さが一致しません");
    }

    let nextturn = false;

    for (let i = 0; i < charas.length; i++) {
      if (this.get_chara_by_ID(charas[i]).type !== TL_type.chara) {
        throw new Error("とっておきの対象にスキルカードは指定できません");
      }
      for (let j = i + 1; j < charas.length; j++) {
        if (charas[i] === charas[j]) {
          throw new Error("同じキャラが指定されています");
        }
      }
      if (this.firstChara.id === charas[i]) {
        nextturn = true;
      }
    }

    const first_chara_ov = this.OrderValue_of_firstChara();


    charas.forEach((id, i) => {
      this.get_chara_by_ID(id).nomove = true;
      this.pushChara(id, first_chara_ov + OrderValues[i]);
    });
    if(nextturn) {
      this.nextturn();
    }
  }

  setColor(chara: string, place: number): void {
    if (this.color) {
      this.comment.push(["color", chara, place, this.color]);
      this.color = undefined;
    }
  }

  setChara(id: string, initOrderValue: number): void {
    this.pushChara(id, initOrderValue);
  }

  place_to_moved(calculated_moved_OrderValue: number): number {
    let place_to_moved = -1;
    for (
      let i = this.current.length - 1;
      i > this.place_of_currentTimeline;
      i--
    ) {
      if (calculated_moved_OrderValue >= this.current[i].timeline_OrderValue) {
        place_to_moved = i;
        break;
      }
    }

    let output;
    // splice 0 elm 1 elm 2
    // iter      0     1
    if (place_to_moved === -1) {
      output = this.place_of_currentTimeline + 1;
    } else {
      output = place_to_moved + 1;
    }
    return output;
  }

  pushChara(id: string, calculated_moved_OrderValue: number): void {
    let tmp_movechara;
    try {
      tmp_movechara = lib.objectCopy(this.get_chara_by_ID(id));
    } catch {
      tmp_movechara = {
        id,
        nomove: false,
        timeline_OrderValue: calculated_moved_OrderValue,
        type: TL_type.chara,
      } as TL_chara;
    }
    this._pushChara(calculated_moved_OrderValue, tmp_movechara);
  }

  _pushChara(
    calculated_moved_OrderValue: number,
    tmp_movechara: TL_obj
  ): void {
    tmp_movechara.timeline_OrderValue = calculated_moved_OrderValue;

    const place_to_moved = this.place_to_moved(calculated_moved_OrderValue);
    this.current.splice(place_to_moved, 0, tmp_movechara);
  }

  addChara(id: string, initOrderValue: number): void {
    const chara: TL_chara = {
      id: id,
      timeline_OrderValue: initOrderValue,
      type: TL_type.chara,
      nomove: false,
    };
    this.current.splice(this.place_of_currentTimeline, 0, chara);
  }

  addSkillCard(
    id: string,
    OrderValue: number,
    time: number,
    event?: card_event
  ): void {
    let current_card;
    let isFoundCard = true;
    try {
      current_card = this.get_chara_by_ID(id);
    } catch {
      isFoundCard = false;
    }

    if (isFoundCard) {
      if (!current_card) {
        throw Error("unreachable");
      }
      if (current_card.type !== TL_type.skillcard)
        throw Error("指定された名前はスキルカードではありません");
      current_card.time = time;
      this.current[this.placeToChara(id)] = current_card;
    } else {
      const target_ov = this.OrderValue_of_firstChara() + OrderValue;
      const target_place = this.place_to_moved(target_ov);

      event = event || ((..._) => undefined);
      this.current.splice(target_place, 0, {
        type: TL_type.skillcard,
        time,
        id,
        timeline_OrderValue: target_ov,
        OrderValue,
        event,
        nomove: false,
      });

      this.cardData.push([this.place_of_currentTimeline, id]);
    }
  }

  switchChara(id_currentChara: string, id_switchToChara: string): void {
    this.switchData.push([
      this.place_of_currentTimeline,
      id_currentChara,
      id_switchToChara,
    ]);

    this.setColor(id_currentChara, this.place_of_currentTimeline);

    if (id_currentChara === this.ID_of_firstChara()) {
      this.current[this.placeToChara(id_currentChara)].id = id_switchToChara;
      this.current[this.placeToChara(id_switchToChara)].timeline_OrderValue =
        this.OrderValue_of_firstChara();
    } else {
      this.switchSupportChara(id_currentChara, id_switchToChara);
    }
  }

  switchSupportChara(id_currentChara: string, id_switchToChara: string): void {
    this.current.splice(this.placeToChara(id_currentChara), 1);
    this.addChara(id_switchToChara, this.OrderValue_of_firstChara());
  }

  inited(): void {
    this.current.sort(function (a, b) {
      const a_OrderValue = a.timeline_OrderValue;
      const b_OrderValue = b.timeline_OrderValue;
      if (a_OrderValue < b_OrderValue) return -1;
      if (a_OrderValue > b_OrderValue) return 1;
      return 0;
    });
    this.place_of_currentTimeline = 0;
  }

  get firstChara(): TL_obj {
    return this.current[this.place_of_currentTimeline];
  }

  set firstChara(_: TL_obj) {
    throw Error("firstCharaにはセットできません");
  }

  OrderValue_of_firstChara(): number {
    return this.firstChara.timeline_OrderValue;
  }

  ID_of_firstChara(): string {
    return this.firstChara.id;
  }

  nextturn(): void {
    this.place_of_currentTimeline++;
    if (this.firstChara.type === TL_type.skillcard) {
      this.firstChara.event(
        this.firstChara.id,
        this.firstChara.OrderValue,
        this.firstChara.time
      );
      this.firstChara.time--;
      this.firstChara;
      if (this.firstChara.time === 0) {
        this.nextturn();
      } else if (this.firstChara.time < 0) {
        throw Error("skillcardのtimeに0未満の数値");
      } else {
        this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), false);
      }
    }else if(this.firstChara.nomove){
      this.nextturn();
    }
  }

  skip(): void {
    this.nextturn();
  }

  get_chara_by_ID(id: string): TL_obj {
    return this.current[this.placeToChara(id)];
  }

  placeToChara(id: string): number {
    for (let i = this.place_of_currentTimeline; i < this.current.length; i++) {
      if (this.current[i].id === id && !this.current[i].nomove ) {
        return i;
      }
    }
    throw Error("Not Found!IDに誤りがあります");
  }
}

export class chara {
  id: string;
  SPD: number;
  _SPD_buff: buff[];
  LoadFactorReduce: number;
  ttk_val: number;

  constructor(
    id: string,
    SPD: number,
    SPD_buff: number,
    LoadFactorReduce = 0,
    ttk_val: number
  ) {
    this.id = id;
    this.SPD = SPD;
    this._SPD_buff = [];
    this.SPD_buff = SPD_buff;
    this.LoadFactorReduce = LoadFactorReduce;
    this.ttk_val = ttk_val;
  }

  calculateOrderValue(LoadFactor: number, LoadFactorReduce = 0): number {
    const SPD = this.SPD;
    const SPD_buff = this.SPD_buff / 100;
    const OrderValueRadix = Math.min(
      Math.max(124 - Math.floor(SPD / 2), 0),
      100
    );
    const OrderValue = Math.floor(
      OrderValueRadix *
        (LoadFactor / 100) *
        (1 - LoadFactorReduce) *
        (1 - SPD_buff)
    );

    return Math.max(Math.min(OrderValue, 500), 15);
  }

  initOrderValue(): number {
    return this.calculateOrderValue(100, 0);
  }

  get SPD_buff(): number {
    return this._SPD_buff.reduce((a, b) => a + b.val, 0);
  }

  set SPD_buff(val: number) {
    this._SPD_buff = [{ val, turn: Infinity }];
  }

  setSPDbuff(val: number, turn = Infinity): void {
    if (turn === 0) return;
    if (turn < 0) throw Error("turnは0以上の整数でなければなりません");
    this._SPD_buff.push({ val, turn });
  }

  nextTurn(): void {
    this._SPD_buff = this._SPD_buff
      .map((buff) => {
        buff.turn--;
        return buff;
      })
      .filter((buff) => buff.turn > 0);
  }

  getTTK(consumeBuffTurn: boolean): number {
    const output = this.calculateOrderValue(this.ttk_val);
    if (consumeBuffTurn) {
      this.nextTurn();
    }
    return output;
  }
}
