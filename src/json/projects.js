//images and video
import canteraHome from '../images/cantera-music-home.jpg'
import canteraSearch from '../images/cantera-music-search.png'
import canteraVideoPoster from '../images/cantera-music-initial.png'
import canteraVideo from '../video/video-cantera-music.mp4'
import mochHome from '../images/moch-home.jfif'
import mochSearch from '../images/moch-search.jfif'
import mochVideoPoster from '../images/moch-initial.png'

const projects = [
  {
    title: 'Cantera Music',
    skills: 'React - js - css - Node - aws',
    description_one: 'A music application that offers users a comprehensive and personalized audio experience. With its ability to play music, podcasts, and audiobooks, as well as add custom audio files, the app becomes a versatile platform to meet users listening needs.',
    description_two: 'As a member of the frontend team, I was responsible for UI implementation using React, API integration, component styling, and interaction logic implementation.',
    imageOne: `${canteraHome}`,
    imageTwo: `${canteraSearch}`,
    video: `${canteraVideo}`,
    videoPoster: `${canteraVideoPoster}`,
    urlApp: 'https://cantera-music.vercel.app/'
  },
  {
    title: 'Moch',
    skills: 'React - js - css',
    description_one: 'A music application that offers users a comprehensive and personalized audio experience. With its ability to play music, podcasts, and audiobooks, as well as add custom audio files, the app becomes a versatile platform to meet users listening needs.',
    description_two: 'As a member of the frontend team, I was responsible for UI implementation using React, API integration, component styling, and interaction logic implementation.',
    imageOne: `${mochHome}`,
    imageTwo: `${mochSearch}`,
    video: `${canteraVideo}`,
    videoPoster: `${mochVideoPoster}`,
    urlGit: 'https://github.com/hernan1122/moch',
    urlApp: 'https://moch.vercel.app/'
  }
]

export default projects
