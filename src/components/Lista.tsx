import { peopleList } from "../data/peopleList"


const Lista = () => {
  const chemists = peopleList.filter(person => person.profession === 'chemist')

  return (
    <div>
        {peopleList.length > 0 &&
          <ul>
            {peopleList.map(person => 
              <li key={ person.id } >{ person.name } - { person.profession }</li>
            )}
          </ul>
        }

        {'------------------------------------------------------------------------'}

        {chemists.length > 0 &&
          <>
            <h3>Lista de químicos</h3>
            <ul>
              {chemists.map(person => 
                <li>{ person.name }</li> 
              )}
            </ul>
          </>
        }

    </div>
  )
}

export default Lista
