export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '625a589bd04b9a4818165795',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vqfqnfzo',
                  apiId: '54e086e0-8b64-49f1-9d5f-5424c1bce7fa'
                },
                {
                  buildHookId: '625a589b8c9f154a45c055cc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-o7jxds8z',
                  apiId: 'c3f02a42-1aaf-433e-93d3-80b481b67cb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ViableOutreach/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-o7jxds8z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
