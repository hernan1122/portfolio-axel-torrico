import React from 'react';
import jobs from '../json/jobs'
import { JobCard } from './JobCard';
import '../styles/MyJobs.css'

export function MyJobs() {
  return (
    <div>
      <div className='MyJobs'>
        <div className='MyJobs-cards'>
          {
            jobs.map((job) => {
              return (
                <JobCard
                  key={job.title}
                  image={job.image}
                  title={job.title}
                  info={job.info}
                  description={job.description}
                  urlGit={job.urlGit}
                  urlApp={job.urlApp}
                >
                </JobCard>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
