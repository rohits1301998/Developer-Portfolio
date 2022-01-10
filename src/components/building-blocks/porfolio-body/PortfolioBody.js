import './PortfolioBody.scss';
import React from 'react';
import { Card, Section } from '@components/core';
import { ProjectsBlock } from '../projects-block/projectsBlock';

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
        <Section key="priorities" heading="Priorities" id="priorities">
          <div className="row justify-content-evenly">
            {
              this.priorities.map(p =>
                <div key={p.title} className="col-lg-3 col-md-3 col-sm-6 col-6 my-2">
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

        <Section key="projects" heading="Projects" id="projects">
          <ProjectsBlock></ProjectsBlock>
        </Section>

        {
          this.props.sections
          .filter((s) => s.id !== 'me'  && s.id !== 'projects' && s.id !== 'priorities')
          .map((s) => (
            <Section key={s.id} heading={s.label} id={s.id}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
              more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
              in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
              This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
              on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
              dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
              years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
              word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
              and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
              on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
              dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
              years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
              word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
              and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
              on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
              dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
              years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
              word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
              and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
              45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </Section>
          ))}
      </>
    );
  }
}

export default PortfolioBody;
