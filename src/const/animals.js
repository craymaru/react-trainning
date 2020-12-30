export const ANIMALS = [
  'cat',
  'ferret',
  'parrot',
  'fox',
  'tiger'  
]

export const getAnimals = () => {
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve(ANIMALS)
    }, 1000)
  })
}