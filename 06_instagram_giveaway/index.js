import filterService from './filterService.js'

const getValues = async () => {
   const { uniqueValues, existInAllFiles, existInAtLeastTen } = filterService
   console.log('unique values: ', await uniqueValues());
   console.log('exist in all files: ', await existInAllFiles())
   console.log('exist in at least ten files: ', await existInAtLeastTen())
}

getValues()
