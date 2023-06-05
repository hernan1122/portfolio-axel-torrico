import React from 'react';
import { JobCard } from './JobCard';
import { Projects } from './Projects';
import '../styles/MyJobs.css'

//images
import todoList from '../images/todo-list.png'
import moch from '../images/moch-movies.png'
import criptar from '../images/criptar.png'
import batatabit from '../images/Batatabit.png'
import chronometer from '../images/my-chronometer.png'
import picturesDogs from '../images/fotos de perros.png'
import gameZombi from '../images/game-zombi.png'
import gameTateti from '../images/ta-te-ti.png'
import interactiveGiveaway from '../images/sorteo-interactivo.png'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { GoTools } from 'react-icons/go'

const jobs = [
  {
    image: `${todoList}`,
    title: 'ToDo List',
    info: 'HTML-CSS-JS-REACT',
    description: 'With ToDo List you can organize your day without any problem, start using it!!',
    urlGit: 'https://github.com/hernan1122/react-proyecto-todo',
    urlApp: 'https://react-proyecto-todo-6q38rx77q-hernan1122.vercel.app/'
  },
  {
    image: `${moch}`,
    title: 'Moch',
    info: 'HTML-CSS-JS',
    description: 'Moch shows you the trending movies of the moment! Browse through it in different categories and create your list of favorite movies.',
    urlGit: 'https://github.com/hernan1122/moch-movie',
    urlApp: 'https://moch-movie.vercel.app/'
  },
  {
    image: `${criptar}`,
    title: 'CriptAR',
    info: 'HTML-CSS-JS',
    description: 'In this app you can see the price of the dollar and different cryptocurrencies in national banks and exchanges.',
    urlGit: 'https://github.com/hernan1122/utilizando-api-criptoya',
    urlApp: 'https://utilizando-api-criptoya.vercel.app/'
  },
  {
    image: `${picturesDogs}`,
    title: 'Pictures of Dogs',
    info: 'HTML-CSS-JS',
    description: 'In this application you will see photos of dogs randomly, and if you like one you can add it to your list to see it whenever you want. You can also upload the photo of your puppy.',
    urlGit: 'https://github.com/hernan1122/fotos-de-perros',
    urlApp: 'https://fotos-de-perros.vercel.app/'
  },
  {
    image: `${chronometer}`,
    title: 'Chronometer',
    info: 'HTML-CSS-JS',
    description: 'Use this digital stopwatch to take your time when you go for a run or in competitions with your friends.',
    urlGit: 'https://github.com/hernan1122/cronometro-con-javascript',
    urlApp: 'https://cronometro-con-javascript.vercel.app/'
  },
  {
    image: `${gameZombi}`,
    title: 'Game "Zombi"',
    info: 'HTML-CSS-JS',
    description: 'Can you complete all the levels of this game in record time? find it out!!',
    urlGit: 'https://github.com/hernan1122/practico-javascript-videogames',
    urlApp: 'https://practico-javascript-videogames-3fyn.vercel.app/'
  },
  {
    image: `${gameTateti}`,
    title: 'Game "TA TE TI"',
    info: 'HTML-CSS-JS-REACT',
    description: 'The traditional game of "ta te ti" now available on your cell phone.',
    urlGit: 'https://github.com/hernan1122/tic-tac-toe',
    urlApp: 'https://tic-tac-toe-pearl-theta.vercel.app/'
  },
  {
    image: `${batatabit}`,
    title: 'Batatabit',
    info: 'HTML-CSS',
    description: 'Batatabit is the next revolution in cryptocurrency exchange!! In it you will have information in real time about the rates of change that determine the behavior.',
    urlGit: 'https://github.com/hernan1122/Batatabit',
    urlApp: 'https://batatabit-ecru.vercel.app/'
  },
  {
    image: `${interactiveGiveaway}`,
    title: 'Interactive Giveaway',
    info: 'HTML-CSS-JS',
    description: 'If you want to run a draw quickly and make it reliable, use this app, which is perfect for that.',
    urlGit: 'https://github.com/hernan1122/sorteo-interactivo',
    urlApp: 'https://sorteo-interactivo.vercel.app/'
  },
]

export function MyJobs() {
  return (
    <div className='MyJobs'>
      <h2 className="MyJobs-title">
        <GoTools className='MyJobs-icon'/> My Jobs
      </h2>
      <div className='MyJobs-container-btn'>
        <a
          className='MyJobs-portfolio-repository'
          href='https://github.com/hernan1122/portfolio-axel-torrico'
          target="_blank"
          data-aos="zoom-in"
        >
          <i><AiOutlineGithub /></i> Portfolio repository
        </a>
      </div>
      <div className="MyJobs-projects">
        <Projects />
      </div>
      <div className='MyJobs-cards'>
        {
          jobs.map(({ image, title, info, description, urlGit, urlApp }) => {
            return (
              <JobCard
                key={title}
                image={image}
                title={title}
                info={info}
                description={description}
                urlGit={urlGit}
                urlApp={urlApp}
              >
              </JobCard>
            )
          })
        }
      </div>
    </div>
  );
}
