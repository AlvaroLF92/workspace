import { useState } from 'react'
import { Formik, Form, Field, } from 'formik'
import './header.css'
import './content.css'
import './article.css'


const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({ photos });
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID Pu9oykGqWy2NFxxoFkS3HYWDJKvkqWUesa4AoNHXZ3s'
              }
            })
            const data = await response.json()
              // llamar a api de unsplash
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo => 
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img alt='No hay imagen' src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_descriprion].join(' - ')}</p>
          </article>)}
        </div>
      </div>
    </div>
  )
}






export default App;
