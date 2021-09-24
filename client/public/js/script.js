var client = new Colyseus.Client('ws://localhost:2567');

join = async () => {
    try {
        let room = await client.joinOrCreate("tic-tac-toe")
        console.log(room.state)
        let rooms =  await client.getAvailableRooms("tic-tac-toe")
        console.log(rooms)
    } catch (error) {
        console.error("Joining Error", error)
    }
}

join();

