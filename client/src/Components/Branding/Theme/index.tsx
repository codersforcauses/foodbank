import React from 'Components/FloatingButton/node_modules/react'

const theme = [{
  name: 'Primary',
  colours: [{
    name: 'Primary',
    hex: '#671e75',
    className: 'bg-primary'
  }],
}, {
  name: 'Secondary',
  colours: [{
    name: 'Orange',
    hex: '#df7400',
    className: 'bg-orange'
  }, {
    name: 'Teal',
    hex: '#47d5cd',
    className: 'bg-teal'
  }, {
    name: 'Blue',
    hex: '#00acd0',
    className: 'bg-blue'
  }],
}, {
  name: 'Neutral',
  colours: [{
    name: 'Black',
    hex: '#000000',
    className: 'bg-black'
  }, {
    name: 'Dark Grey',
    hex: '#2c2e35',
    className: 'bg-dark-grey'
  }, {
    name: 'Grey',
    hex: '#83847a',
    className: 'bg-grey'
  }, {
    name: 'Light Grey',
    hex: '#cecfcb',
    className: 'bg-light-grey'
  }, {
    name: 'White',
    hex: '#ffffff',
    className: 'bg-white'
  }],
}]

const Theme: React.FC = () => (
  <>
    <h1 className='mx-0 mb-8 text-5xl'>Foodbank Theme</h1>
    {theme.map(element =>
      <div key={element.name}>
        <h2 className='mb-4 text-2xl'>{element.name}</h2>
        {element.colours.map(colour =>
          <div key={colour.hex} className="flex items-center mb-4">
            <div className="flex flex-col w-12">
              <big className='m-0'>{colour.name}</big>
              <small className='opacity-80'>{colour.hex}</small>
            </div>
            <div className={`ml-8 h-14 w-full rounded-md border border-black border-opacity-50 ${colour.className}`} />
          </div>
        )}
      </div>
    )}
  </>
)

export default Theme
