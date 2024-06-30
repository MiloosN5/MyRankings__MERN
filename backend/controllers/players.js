import { Player_man, Player_woman } from '../models/playerModel.js';
import { PlayerDetails_man, PlayerDetails_woman } from '../models/playerDetailsModel.js';

export const createUser = async (req, res) => {
    try {
        const currentUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            ranking: req.body.ranking,
            country: [req.body.country, 'all'],
            birthyear: req.body.birthyear,
            flag: req.body.flag,
            slug: `${req.body.firstName}-${req.body.lastName}`,
            myid: `${req.body.birthyear}-${req.body.firstName}-${req.body.lastName}`
        }

        let player;
        let playerDetail

        if (req.path === '/men') {
            player = await Player_man.create(currentUser)
            playerDetail = await PlayerDetails_man.findOneAndUpdate({ "myid": currentUser.myid }, { "myRanking": currentUser.ranking }, { new: true });
        } else if (req.path === '/women') {
            player = await Player_woman.create(currentUser)
            playerDetail = await PlayerDetails_woman.findOneAndUpdate({ "myid": currentUser.myid }, { "myRanking": currentUser.ranking }, { new: true });
        } else {
            console.log('Path is incorrect')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        console.error('Error creating player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

let filteredUsers = []

export const getUsers = async (req, res) => {
    try {
        let players = [];

        if (req.path === '/men') {
            players = await Player_man.find({});
        } else if (req.path === '/women') {
            players = await Player_woman.find({});
        } else {
            console.log('Path is incorrect')
        }

        // Query params
        const filters = req.query;
        console.log('filters', filters)
        filteredUsers = players.filter(user => {
            let isValid = true;
            for (let key in filters) {
                switch (key) {
                    case 'sort':
                    case 'page':
                        break;
                    case 'search':
                        isValid = isValid && (user.lastName.toLowerCase().includes(filters[key].toLowerCase()) || user.firstName.toLowerCase().includes(filters[key].toLowerCase()))
                        break
                    default:
                        const otherQueryParam = filters[key].split(',');
                        isValid = isValid && (user[key].includes(otherQueryParam))
                }

            }
            return isValid;
        })

        // sort
        if (req.query.sort) {
            if (req.query.sort === 'by firstName (ascending)') {
                filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName))
            }
            else if (req.query.sort === 'by firstName (descending)') {
                filteredUsers.sort((a, b) => b.firstName.localeCompare(a.firstName))
            } else if (req.query.sort === 'by lastName (ascending)') {
                filteredUsers.sort((a, b) => a.lastName.localeCompare(b.lastName))
            } else if (req.query.sort === 'by lastName (descending)') {
                filteredUsers.sort((a, b) => b.lastName.localeCompare(a.lastName))
            } else if (req.query.sort === 'by ranking (ascending)') {
                filteredUsers.sort((a, b) => a.ranking > b.ranking ? 1 : -1)
            }
            else if (req.query.sort === 'by ranking (descending)') {
                filteredUsers.sort((a, b) => a.ranking < b.ranking ? 1 : -1)
            }
        }

        // page
        let returnPlayers = filteredUsers
        let numPages = Math.ceil(filteredUsers.length / 5)
        let currentPage = req.query.page;
        let startIndex = 0
        let countries = ['all']
        let uniqueCountries;

        if (currentPage === 'all') {
            returnPlayers = filteredUsers
        } else {
            returnPlayers.forEach((player) => {
                countries.push(player.country[0])
            })
            uniqueCountries = new Set(countries)
            countries = [...uniqueCountries]

            startIndex = (currentPage - 1) * 5
            returnPlayers = filteredUsers.slice(startIndex, startIndex + 5)
        }

        // if (returnPlayers.length === 0) {
        //     return res.status(404).json({ error: 'Players not found' });
        // }

        res.status(201).send({ returnPlayers, numPages, countries })
    } catch (error) {
        console.error('Error retrieving players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getUser = async (req, res) => {
    try {
        const { id, slug } = req.params;
        let foundPlayer;

        if (req.path === `/men/${id}/${slug}`) {
            foundPlayer = await Player_man.findById(id);
        } else if (req.path === `/women/${id}/${slug}`) {
            foundPlayer = await Player_woman.findById(id);
        } else {
            console.log('Path is incorrect')
        }

        if (!foundPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }

        res.status(200).json(foundPlayer);
    } catch (error) {
        console.error('Error retrieving player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        let player;

        if (req.path === `/men/${id}`) {
            player = await Player_man.findByIdAndDelete(id)
        } else if (req.path === `/women/${id}`) {
            player = await Player_woman.findByIdAndDelete(id)
        } else {
            console.log('Path is incorrect')
        }

        res.status(204).json()
    } catch (error) {
        console.error('Error deleting player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let player;
        let playerDetail;

        const updateUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            ranking: req.body.ranking,
            country: req.body.country,
            birthyear: req.body.birthyear,
            flag: req.body.flag,
            slug: `${req.body.firstName}-${req.body.lastName}`,
            myid: `${req.body.birthyear}-${req.body.firstName}-${req.body.lastName}`
        }

        if (req.path === `/men/${id}`) {
            player = await Player_man.findByIdAndUpdate(id, updateUser, { new: true });
            playerDetail = await PlayerDetails_man.findOneAndUpdate({ "myid": player.myid }, { "myRanking": req.body.ranking }, { new: true });
        } else if (req.path === `/women/${id}`) {
            player = await Player_woman.findByIdAndUpdate(id, updateUser, { new: true });
            playerDetail = await PlayerDetails_woman.findOneAndUpdate({ "myid": player.myid }, { "myRanking": req.body.ranking }, { new: true });
        } else {
            console.log('Path is incorrect')
        }
        res.status(200).json({ message: `Player ${player.firstName} ${player.lastName} updated successfully` });
    } catch (error) {
        console.error('Error updating player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
