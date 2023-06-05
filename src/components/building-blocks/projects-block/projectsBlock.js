import React from 'react';
import './projectsBlock.scss';
import 'react-tabs/style/react-tabs.css';
import { CacheableImage, InteractiveCards } from '@components/core';
import { InteractiveCard } from 'components/core/interactive-swiper/InteractiveCard/InteractiveCard';
import { Modal } from 'components/core/modal/Modal';

export class ProjectsBlock extends React.Component {
  projects = [
    {
      projectCategory: 'personal',
      categoryProjects: [
        {
          name: 'inactivity detector',
          icon: 'radar',
          description:
            'An angular library which can be used to detect whether a user is active after a specified time interval',
          url: 'https://www.npmjs.com/package/ngx-inactivity-detector',
          codeLink: 'https://github.com/rohits1301998/NgxInactivityDetector',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['angular'],
            },
            {
              stackType: 'tools',
              techs: ['npm'],
            },
          ],
        },
        {
          name: 'malicious url detector',
          icon: 'bug-outline',
          description:
            'SVM based url classifier for detecting whether the url is malicious or not without reading the content of the webpage',
          codeLink: 'https://github.com/rohits1301998/url_classifier',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['html', 'css', 'js'],
            },
            {
              stackType: 'backend',
              techs: ['python'],
            },
          ],
        },
        {
          name: 'online test portal',
          icon: 'account-question-outline',
          description: 'Portal which can be used to organize any kind of online mcq tests',
          url: 'https://online-test-portal12.herokuapp.com/index.php',
          codeLink: 'https://github.com/rohits1301998/online_test',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['html', 'css', 'js'],
            },
            {
              stackType: 'backend',
              techs: ['php'],
            },
            {
              stackType: 'databases',
              techs: ['mysql'],
            },
          ],
        },
      ],
    },
    {
      projectCategory: 'internship',
      categoryProjects: [
        {
          name: 'nextqart',
          icon: 'shopping-outline',
          description: 'One stop solution to complete your grocery needs spread across your favorite stores',
          url: 'https://www.nextqart.com/',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['angular'],
            },
            {
              stackType: 'backend',
              techs: ['nodejs'],
            },
            {
              stackType: 'databases',
              techs: ['mongodb'],
            },
          ],
        },
        {
          name: 'juztevent',
          icon: 'calendar-blank-outline',
          description: 'Organizers paradise for promoting their event by creating groups and tickets',
          url: 'https://www.juztevent.com/',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['angular'],
            },
            {
              stackType: 'backend',
              techs: ['nodejs'],
            },
            {
              stackType: 'tools',
              techs: ['firebase'],
            },
          ],
        },
      ],
    },
    {
      projectCategory: 'professional',
      categoryProjects: [
        {
          name: 'dewdrops',
          icon: 'water',
          description: 'A suit of 12+ zycus products designed to help in procuring goods and services',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['angular'],
            },
            {
              stackType: 'backend',
              techs: ['nodejs', 'java'],
            },
            {
              stackType: 'tools',
              techs: ['jenkins'],
            },
          ],
        },
        {
          name: 'lmt',
          icon: 'translate',
          description: 'Product designed to handle internationalization of zycus products',
          techStack: [
            {
              stackType: 'frontend',
              techs: ['angular'],
            },
            {
              stackType: 'backend',
              techs: ['nodejs', 'java'],
            },
            {
              stackType: 'databases',
              techs: ['mongodb'],
            },
            {
              stackType: 'tools',
              techs: ['jenkins'],
            },
          ],
        },
      ],
    },
  ];

  currentProjectCategory;

  constructor() {
    super();
    this.state = { showModal: false };
  }

  render() {
    return (
      <div className="my-5">
        <InteractiveCards>
          {this.projects
            .map((projectCategory) => (
              <InteractiveCard key={projectCategory.projectCategory} isMobileCard={true}>
                <div className="project-type-wrapper">
                  <div className="project-type-title text-center text-uppercase w-100">
                    {projectCategory.projectCategory}
                  </div>
                  <CacheableImage
                    className="project-type-image"
                    src={`/images/project-types/${projectCategory.projectCategory}.jpg`}
                    alt={projectCategory.projectCategory}
                  />
                  <div className="project-type-action py-3 d-flex justify-content-end align-items-center w-100">
                    <button
                      onClick={this.initProjectsModal.bind(this, projectCategory)}
                      className="mx-3 projects-btn text-uppercase fw-bold"
                    >
                      <span>Projects </span>
                      <i className="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </InteractiveCard>
            ))
            .concat(
              this.projects.map((projectCategory) => (
                <InteractiveCard key={projectCategory.projectCategory + '-mobile'} isMobileCard={false}>
                  {this.getProjectCategoryView(projectCategory)}
                </InteractiveCard>
              ))
            )}
        </InteractiveCards>
        {this.state.showModal && (
          <Modal
            title={this.currentProjectCategory.projectCategory + ' projects'}
            body={this.getProjectCategoryView(this.currentProjectCategory)}
            closeFn={() => this.toggleProjectsModal()}
          ></Modal>
        )}
      </div>
    );
  }

  getProjectCategoryView(projectCategory) {
    return (
      <div className="d-flex justify-content-center pb-5">
        {
          <div className="row projects-wrapper w-100">
            {projectCategory.categoryProjects.map((project) => (
              <div key={project.name} className="col-12 col-md-6 my-4">
                <div className="row h-100">
                  <div className="col-2">
                    <i className={`text-primary mdi fs-1 mdi-${project.icon}`}></i>
                  </div>
                  <div className="col-10 h-100">
                    <div className="d-flex flex-column justify-content-between project-container h-100">
                      <div>
                        <div className={`text-capitalize text-decoration-none fs-3 fw-bolder text-dark`}>
                          {project.name}
                        </div>
                        <p className="project-description text-lighter">{project.description}</p>
                      </div>
                      <div className='my-3'>
                        {project.url && (
                          <a
                            className="project-link btn btn-primary text-capitalize"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            See Live
                          </a>
                        )}
                        {project.codeLink && (
                          <a
                            className="project-code text-primary text-capitalize"
                            href={project.codeLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Source code
                          </a>
                        )}

                        <div className="my-3 d-flex">
                          {project.techStack.map((s) =>
                            s.techs.map((tech) => (
                              <span className="mx-1" key={tech}>
                                <CacheableImage
                                  lazy="true"
                                  width={30}
                                  height={30}
                                  src={`/images/skills/${s.stackType}/${tech}.png`}
                                  alt={tech}
                                  title={tech}
                                />
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }

  initProjectsModal(projectCategory) {
    this.currentProjectCategory = projectCategory;
    this.toggleProjectsModal();
  }

  toggleProjectsModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
}
