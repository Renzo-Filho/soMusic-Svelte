import { error } from '@sveltejs/kit';

let AllMusics = {
    rockInt: [
        {
            title: "Have You Ever Seen The Rain?",
            artist: "Creedence Clearwater Revival",
            src: "../Musics/RockInt/Creedence Clearwater Revival - Have You Ever Seen The Rain.mp3",
            img: "../MusicImages/RockInt/creedence.jpg",
            id: "0",
        },

        {
            title: "Back In Black",
            artist: "AC/DC",
            src: "../Musics/RockInt/AC_DC - Back In Black.mp3",
            img: "../MusicImages/RockInt/acdc.jpg",
            id: "1",
        },

        {
            title: "I Cant Get No (Satisfaction)",
            artist: "The Rolling Stones",
            src: "../Musics/RockInt/The Rolling Stones - (I Cant Get No) Satisfaction.mp3",
            img: "../MusicImages/RockInt/rollingStones.png",
            id: "2",
        },

        {
            title: "Sweet Child O Mine",
            artist: "Guns N Roses",
            src: "../Musics/RockInt/Guns N Roses - Sweet Child O Mine.mp3",
            img: "../MusicImages/RockInt/gunsNroses.png",
            id: "3",
        },

        {
            title: "Twist And Shout",
            artist: "The Beatles",
            src: "../Musics/RockInt/Twist And Shout (Remastered 2009).mp3",
            img: "../MusicImages/RockInt/beatles.jpg",
            id: "4",
        },

        {
            title: "Dont Stop Me Now",
            artist: "The Queen",
            src: "../Musics/RockInt/Queen - Dont Stop Me Now.mp3",
            img: "../MusicImages/RockInt/queen.jpg",
            id: "5",
        },

        {
            title: "Johnny B. Goode",
            artist: "Chuck Berry",
            src: "../Musics/RockInt/Chuck Berry - Johnny B. Goode.mp3",
            img: "../MusicImages/RockInt/chuckBerry.png",
            id: "6",
        },

        {
            title: "Smells Like Teen Spirit",
            artist: "Nirvana",
            src: "../Musics/RockInt/Nirvana - Smells Like Teen Spirit.mp3",
            img: "../MusicImages/RockInt/nirvana.png",
            id: "7",
        },
    ],

    rockNac: [
        {
            title: "Tempo Perdido",
            artist: "Legião Urbana",
            src: "../Musics/RockNac/Legião Urbana - Tempo perdido.mp3",
            img: "../MusicImages/RockNac/legiao.png",
            id: "0",
        },

        {
            title: "Back In Black",
            artist: "AC/DC",
            src: "../Musics/RockInt/AC_DC - Back In Black.mp3",
            img: "../MusicImages/RockInt/acdc.jpg",
            id: "1",
        },

        {
            title: "I Cant Get No (Satisfaction)",
            artist: "The Rolling Stones",
            src: "../Musics/RockInt/The Rolling Stones - (I Cant Get No) Satisfaction.mp3",
            img: "../MusicImages/RockInt/rollingStones.png",
            id: "2",
        },

        {
            title: "Sweet Child O Mine",
            artist: "Guns N Roses",
            src: "../Musics/RockInt/Guns N Roses - Sweet Child O Mine.mp3",
            img: "../MusicImages/RockInt/gunsNroses.png",
            id: "3",
        },

        {
            title: "Twist And Shout",
            artist: "The Beatles",
            src: "../Musics/RockInt/Twist And Shout (Remastered 2009).mp3",
            img: "../MusicImages/RockInt/beatles.jpg",
            id: "4",
        },

        {
            title: "Dont Stop Me Now",
            artist: "The Queen",
            src: "../Musics/RockInt/Queen - Dont Stop Me Now.mp3",
            img: "../MusicImages/RockInt/queen.jpg",
            id: "5",
        },

        {
            title: "Johnny B. Goode",
            artist: "Chuck Berry",
            src: "../Musics/RockInt/Chuck Berry - Johnny B. Goode.mp3",
            img: "../MusicImages/RockInt/chuckBerry.png",
            id: "6",
        },

        {
            title: "Smells Like Teen Spirit",
            artist: "Nirvana",
            src: "../Musics/RockInt/Nirvana - Smells Like Teen Spirit.mp3",
            img: "../MusicImages/RockInt/nirvana.png",
            id: "7",
        },
    ],
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (Object.keys(AllMusics).includes(params.genre)) {
        return AllMusics[params.genre];
    }

    throw error(404, 'Not found');
}