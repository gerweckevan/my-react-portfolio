import React from 'react'
import { SiJavascript, SiPhp, SiSpring, SiPython, SiGitbook, SiReact, SiPycharm, SiAdobeaftereffects, SiBlender } from 'react-icons/si'
import {
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
} from 'react-icons/fi'

import { KnowledgeLevel } from 'src/Components'

import useFetchGithubUser from './useFetchGithubUser'

const App: React.FC = () => {
  const { userData, isLoading } = useFetchGithubUser('gerweckevan')

  return (
    <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
      {!isLoading && (
        <main
          className="flex flex-col lg:flex-row bg-black bg-opacity-10 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="py-8 px-8 lg:px-4 bg-black bg-opacity-10 flex flex-col w-full lg:w-auto lg:max-w-xs"
            style={{
              backdropFilter: 'blur(10px)',
            }}
          >
            <img
              className="rounded-full shadow-sm w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
              src={userData.avatar_url}
              alt={userData?.name}
              draggable={false}
            />

            <div className="text-white text-lg font-black flex items-center mb-2">
              <FiUser />
              <span className="ml-4">{userData?.name}</span>
            </div>

            {!!userData?.bio && (
              <div className="text-white flex items-center">
                <FiMessageSquare />
                <span className="ml-4">{userData?.bio}</span>
              </div>
            )}

            <div className="flex flex-row flex-wrap justify-center mt-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gerweckevan"
                className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-black bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2"
              >
                <FiGithub />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/evan-gerweck-8b95b9199/"
                className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-black bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-6">
            <div className="text-lg text-white font-black mb-8 flex items-center">
              <FiCode />
              <div className="ml-4">Programming Languages</div>
            </div>

            <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
              <KnowledgeLevel
                iconComponent={<SiReact />}
                languageName="Basics"
                experience="The Basics of programming language JavaScript, CSS HTML. I already created many websites using React, Vue Angular bootstrap as well as mobile apps with React Native."
              />

              <KnowledgeLevel
                iconComponent={<SiGitbook />}
                languageName="Deployment"
                experience="Github, Vercel, Heroku and majority of my Full Stack coding skills were acquired at Denver University. Now Experimenting with supabase and Firebase. Ive created many full stack applications using the MERN stack and LAMP stack. Now I am learning more about DevOps and Cloud Computing."
              />

              <KnowledgeLevel
                iconComponent={<SiPython />}
                languageName="Backend"
                experience="Java is an awesome language. I used Java to create native Android/OS apps, Desktop apps. Python is fast and works well with machine learning, big data and automations. I have also worked with databases, mongodb, sql and no sql and more."
              />

              <KnowledgeLevel
                iconComponent={<SiBlender />}
                languageName="Design"
                experience="Photoshop, Figma, Adobe XD, Adobe Premier Pro, Adobe After Effects, Blender and more. I love to design and create awesome user experiences."
              />
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
