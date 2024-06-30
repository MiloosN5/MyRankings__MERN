import { Player_man, Player_woman } from '../models/playerModel.js';
import { PlayerDetails_man, PlayerDetails_woman } from '../models/playerDetailsModel.js';

export const getUser = async (req, res) => {
    const { id, slug } = req.params;

    let player = null;

    if(req.path === `/men/${id}/${slug}`) {
        player = await Player_man.findById(id);
    } else if (req.path === `/women/${id}/${slug}`) {
        player = await Player_woman.findById(id);
    } else {
        player = null;
    }

    let foundPlayer = null;

    if(req.path === `/men/${id}/${slug}`) {
        foundPlayer = await PlayerDetails_man.findOne({ "myid": player.myid });
    } else if (req.path === `/women/${id}/${slug}`) {
        foundPlayer = await PlayerDetails_woman.findOne({ "myid": player.myid });
    } else {
        foundPlayer = null;
    }

    res.status(200).json(foundPlayer);
}


