import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";

import { TicTacToeRoom } from "./rooms/TicTacToeRoom.js";

export default Arena.default({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        gameServer.define('tic-tac-toe', TicTacToeRoom);
    },

    initializeExpress: (app) => {
        app.get("/", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        app.use("/colyseus", monitor());
    },

    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }

});
