export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6303e25cfad0d5228ef39f59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4yokqt9w',
                  apiId: 'a84198c1-b80b-4a78-9fd3-f09e177ccaff'
                },
                {
                  buildHookId: '6303e25cd5b47b23eee1b758',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ot9q1t8d',
                  apiId: '76591134-f6d3-4b1a-b3d5-31655c180816'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackalope-code/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ot9q1t8d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
