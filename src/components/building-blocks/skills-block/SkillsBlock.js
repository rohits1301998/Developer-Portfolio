import './SkillsBlock.scss';
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export class SkillsBlock extends React.Component {
  techStack = [
    {
      id: 'frontend',
      tags: ['html', 'css', 'js', 'typescript', 'angular', 'react'],
    },
    {
      id: 'backend',
      align: 'center',
      tags: ['nodejs', 'java'],
    },
    {
      id: 'databases',
      align: 'center',
      tags: ['mysql', 'mongodb'],
    },
    {
      id: 'tools',
      tags: ['git', 'vscode', 'npm', 'jenkins', 'jira'],
    },
  ];

  render() {
    return (
      <div className="py-5 skills-container">
        <Tabs>
          <TabList>
            {this.techStack.map((t) => (
              <Tab key={t.id}>
                <span className="text-uppercase fw-bold text-secondary">{t.id}</span>
              </Tab>
            ))}
          </TabList>

          {this.techStack.map((t) => (
            <TabPanel key={t.id + '-skills'}>
              <div className={`row ${t.align ? 'justify-content-center' : ''}`}>
                {t.tags.map((tag) => (
                  <div key={tag} className="col-3 my-4 text-center">
                    <img
                      lazy="true"
                      title={tag}
                      width={80}
                      height={80}
                      src={`/assets/images/skills/${t.id}/${tag}.png`}
                      alt={tag}
                    ></img>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}
