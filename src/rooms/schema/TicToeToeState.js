import * as schema from "@colyseus/schema";

const ArraySchema = schema.ArraySchema;

export class TicTacToeState extends schema.Schema {
  constructor() {
    super();
    this.grid = new ArraySchema(0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}

schema.defineTypes(TicTacToeState, {
  grid: ["int8"],
});
