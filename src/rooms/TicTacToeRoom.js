import { Room } from "@colyseus/core";
import { TicTacToeState } from "./schema/TicToeToeState.js";

export class TicTacToeRoom extends Room {

  onCreate (options) {
    this.setState(new TicTacToeState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message.
      //
    });
    this.maxClients = 2

  }

  onJoin (client, options) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
