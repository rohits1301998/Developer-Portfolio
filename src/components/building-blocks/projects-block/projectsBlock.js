import React from 'react';
import './projectsBlock.scss';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class ProjectsBlock extends React.Component {
  projects = [
    {
      projectType: 'personal',
      projects: [
        {
          name: 'inactivity detector',
          icon: 'radar',
          description:
            'An angular library which can be used to detect whether a user is active after a specified time interval',
          url: 'https://www.npmjs.com/package/ngx-inactivity-detector',
        },
        {
          name: 'malicious url detector',
          icon: 'bug_report',
          description:
            'SVM based url classifier for detecting whether the url is malicious or not without reading the content of the webpage',
          url: 'https://github.com/rohits1301998/url_classifier',
        },
        {
          name: 'online test portal',
          icon: 'quiz',
          description: 'Portal which can be used to organize any kind of online mcq tests',
          url: 'https://github.com/rohits1301998/online_test',
        },
      ],
    },
    {
      projectType: 'internship',
      projects: [
        {
          name: 'nextqart',
          icon: 'shopping_bag',
          description: 'One stop solution to complete your grocery needs spread across your favorite stores',
          url: 'https://www.nextqart.com/',
        },
        {
          name: 'juztevent',
          icon: 'event',
          description: 'Organizers paradise for promoting their event by creating groups and tickets',
          url: 'https://www.juztevent.com/',
        },
      ],
    },
    {
      projectType: 'professional',
      projects: [
        {
          name: 'dewdrops',
          icon: 'water_drop',
          description: 'A suit of 12+ zycus products designed to help in procuring goods and services',
        },
        {
          name: 'lmt',
          icon: 'translate',
          description: 'Product designed to handle internationalization of zycus products',
        },
      ],
    },
    
  ];

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            {this.projects.map((p) => (
              <Tab key={p.projectType}>
                <span className="project-tab text-uppercase fw-bold text-secondary">{p.projectType}</span>
              </Tab>
            ))}
          </TabList>

          {this.projects.map((p) => (
            <TabPanel key={p.projectType + '-subcontainer'}>
              {
                <div className="d-flex justify-content-center my-5">
                  {
                    <div className='row projects-wrapper w-75'>
                      {p.projects.map((project) => (
                        <div key={project.name} className="col-6 my-4">
                          <div className="row">
                            <div className="col-2">
                              <span className="text-primary material-icons-outlined fs-1">{project.icon}</span>
                            </div>
                            <div className="col-10">
                              <a href={project.url ? project.url : '#'} rel="noreferrer" target="_blank" className={`text-capitalize text-decoration-none fs-5 fw-bolder text-primary ${ !project.url ? 'disabled-project-link' : ''}`}>
                                {project.name}
                              </a>
                              <p className="text-muted">{project.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}
