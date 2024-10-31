import home from './home'
import about from './about'
import service from './service'
import work from './work'
import gear from './gear'
import contact from './contact'
import login from './login'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import navigation from './navigation'
import whyChooseUs from './whyChooseUs'

// Then we give our schema to the builder and provide the result to Sanity
export default [
    home,
    about,
    whyChooseUs,
    service,
    work,
    gear,
    contact,
    login,
    post,
    navigation,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
]
