import './PortfolioBody.scss';
import React from 'react';
import { Card, Section } from '@components/core';
import { ProjectsBlock } from '../projects-block/projectsBlock';
import { SkillsBlock } from '../skills-block/SkillsBlock';

export class PortfolioBody extends React.Component {

  priorities = [
    {
      icon: 'accessibility',
      title: 'Accessible',
      description: 'I make websites with a broader scope of users'
    },
    {
      icon: 'speed',
      title: 'Fast',
      description: 'Fast load times and lag free interaction, my highest priority'
    },
    {
      icon: 'devices',
      title: 'Responsive',
      description: 'My layouts will work on any device, big or small'
    },
    {
      icon: 'travel_explore',
      title: 'SEO',
      description: 'My websites are easily understood by search engines'
    }
  ];

  render() {
    return (
      <>
        <Section key="priorities" heading="Priorities" id="priorities" hasBg={true}>
          <div className="row justify-content-evenly">
            {
              this.priorities.map(p =>
                <div key={p.title} className="col-lg-3 col-md-3 col-sm-6 col-6 my-4">
                  <Card
                    hasShadow={false}
                    body={ 
                      <>
                        <div className="rounded-circle priority d-flex justify-content-center align-items-center">
                            <span className="priority__icon material-icons-outlined">{p.icon}</span>
                        </div>
                      </>
                      }
                    footer={ 
                      <>
                        <div className="fw-bold text-center fs-5">{p.title}</div>
                        <div className="text-center text-wrap text-break w-75 mt-1">{p.description}</div>
                      </>
                      }
                  >
                  
                  </Card>
                </div>
              )
            }
          </div>
        </Section>

        <Section key="projects" heading="Projects" id="projects" >
          <ProjectsBlock></ProjectsBlock>
        </Section>

       <Section key='skills' heading='skills' id='skills'>
            <SkillsBlock></SkillsBlock>
       </Section>
      </>
    );
  }
}

export default PortfolioBody;
